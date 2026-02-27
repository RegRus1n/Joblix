import React, { useState } from 'react'
import "./SimulationLab.css"

import HeaderSimulation from "./components/HeaderSimulation/HeaderSimulation"
import { useParams } from 'react-router-dom'
import TheoryTemplate1 from './components/SimulationScenes/theory_templates/theory_template1'
import TheoryTemplate2 from './components/SimulationScenes/theory_templates/theory_template2'
import TheoryTemplate3 from './components/SimulationScenes/theory_templates/theory_template3'
import TheoryTemplate4 from './components/SimulationScenes/theory_templates/theory_template4'
import TheoryTemplate5 from './components/SimulationScenes/theory_templates/theory_template5'
import MultiChoice_Choice from './components/SimulationTemplates/MultiChoice_Choice'
import CorrectOrder from './components/SimulationTemplates/CorrectOrder'
import Ending_template from './components/SimulationScenes/Ending_template/Ending_template'
import ArrowButton from './components/ArrowButton/ArrowButton'
import WrongAnswerMessage from './components/SimulationShared/WrongAnswerMessage'

import smmLevel1 from '@/data/simulations/smm/level1.json'
import frontendLevel1 from '@/data/simulations/frontend/level1.json'

const levelsData = {
    smm: smmLevel1,
    frontend: frontendLevel1,
}

export default function SimulationLab() {
    const { professionId } = useParams()
    const [currentSceneIndex, setCurrentSceneIndex] = useState(0)
    const [stars, setStars] = useState(0)
    const [wrongAttempts, setWrongAttempts] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [selectedOrder, setSelectedOrder] = useState([])
    const [showWrongMessage, setShowWrongMessage] = useState(false)
    const [starLost, setStarLost] = useState(false)

    const levelData = levelsData[professionId]
    const task = levelData?.tasks[0]
    const scenes = task?.scenes || []
    const currentScene = scenes[currentSceneIndex]
    const isMultiChoice = currentScene?.forma === 'multiChoice'
    const isCorrectOrder = currentScene?.forma === 'correctOrder'
    const isEnding = currentSceneIndex >= scenes.length

    const goToNext = () => {
        if (isMultiChoice) {
            if (!selectedAnswer) return
            const correct = currentScene.correctAnswer
            if (selectedAnswer === correct) {
                if (wrongAttempts < 2) {
                    setStars(prev => prev + 1)
                }
                setCurrentSceneIndex(prev => prev + 1)
                setSelectedAnswer(null)
                setWrongAttempts(0)
                setStarLost(false)
            } else {
                const newAttempts = wrongAttempts + 1
                setWrongAttempts(newAttempts)
                setStarLost(newAttempts >= 2)
                setShowWrongMessage(true)
                setSelectedAnswer(null)
            }
        } else if (isCorrectOrder) {
            if (selectedOrder.length === 0) return
            const correct = currentScene.correctOrder
            const isCorrect = JSON.stringify(selectedOrder) === JSON.stringify(correct)
            if (isCorrect) {
                if (wrongAttempts < 2) {
                    setStars(prev => prev + 1)
                }
                setCurrentSceneIndex(prev => prev + 1)
                setSelectedOrder([])
                setWrongAttempts(0)
                setStarLost(false)
            } else {
                const newAttempts = wrongAttempts + 1
                setWrongAttempts(newAttempts)
                setStarLost(newAttempts >= 2)
                setShowWrongMessage(true)
                setSelectedOrder([])
            }
        } else {
            if (currentSceneIndex < scenes.length) {
                setCurrentSceneIndex(prev => prev + 1)
                setWrongAttempts(0)
                setSelectedAnswer(null)
                setSelectedOrder([])
                setStarLost(false)
            }
        }
    }

    const handlePrev = () => {
        if (currentSceneIndex > 0) {
            setCurrentSceneIndex(prev => prev - 1)
            setWrongAttempts(0)
            setSelectedAnswer(null)
            setSelectedOrder([])
            setStarLost(false)
        }
    }

    const handleSelect = (selectedId) => {
        setSelectedAnswer(selectedId)
    }

    const handleOrderChange = (newOrder) => {
        setSelectedOrder(newOrder)
    }

    const renderScene = () => {
        if (isEnding) {
            return (
                <Ending_template
                    message="Поздравляем!"
                    description={`Ты успешно прошёл "${task.taskName}". Ты узнал много нового и проверил свои знания на практике!`}
                    stars={stars}
                />
            )
        }

        if (!currentScene) return null

        if (currentScene.forma === 'theory') {
            if (currentScene.template === 'template2') {
                return (
                    <TheoryTemplate2
                        title={currentScene.title}
                        content={currentScene.content}
                        onNext={goToNext}
                    />
                )
            }
            if (currentScene.template === 'template3') {
                return (
                    <TheoryTemplate3
                        title={currentScene.title}
                        content={currentScene.content}
                    />
                )
            }
            if (currentScene.template === 'template4') {
                return (
                    <TheoryTemplate4
                        title={currentScene.title}
                        content={currentScene.content}
                        image={currentScene.image}
                    />
                )
            }
            if (currentScene.template === 'template5') {
                return (
                    <TheoryTemplate5
                        title={currentScene.title}
                        content={currentScene.content}
                        image={currentScene.image}
                    />
                )
            }
            return <TheoryTemplate1 title={currentScene.title} content={currentScene.content} />
        }

        if (currentScene.forma === 'multiChoice') {
            return (
                <MultiChoice_Choice
                    question={currentScene.question}
                    answer_options={currentScene.options}
                    onAnswer={handleSelect}
                    selectedAnswer={selectedAnswer}
                />
            )
        }

        if (currentScene.forma === 'correctOrder') {
            return (
                <CorrectOrder
                    question={currentScene.question}
                    answer_options={currentScene.options}
                    onAnswer={handleOrderChange}
                    selectedOrder={selectedOrder}
                />
            )
        }
    }

    const isRightDisabled = (isMultiChoice && !selectedAnswer) || (isCorrectOrder && selectedOrder.length === 0)

    return (
        <div className='SimulationLab'>
            <HeaderSimulation professionId={professionId} stars={stars} />

            <div className='SimulationLab__actions'>
                <div className="SimulationLab__actions__arrow_conteiner">
                    <ArrowButton
                        side='left'
                        disabled={currentSceneIndex === 0 || isEnding}
                        onClick={handlePrev}
                    />
                </div>

                {renderScene()}

                <div className="SimulationLab__actions__arrow_conteiner">
                    <ArrowButton
                        disabled={isRightDisabled}
                        onClick={goToNext}
                    />
                </div>
            </div>

            {showWrongMessage && (
                <WrongAnswerMessage
                    starLost={starLost}
                    onClose={() => setShowWrongMessage(false)}
                />
            )}
        </div>
    )
}
