import React, { useState, useEffect } from 'react'
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
import HintsPanel from './components/HintsPanel/HintsPanel'

import smmLevel1 from '@/data/simulations/smm/level1.json'
import smmLevel2 from '@/data/simulations/smm/level2.json'
import frontendLevel1 from '@/data/simulations/frontend/level1.json'
import { saveTaskResult } from '../../utils/progress'

const allData = {
    smm: { level1: smmLevel1, level2: smmLevel2 },
    frontend: { level1: frontendLevel1 }
}

export default function SimulationLab() {
    const { professionId, levelId, taskId } = useParams()
    const [currentSceneIndex, setCurrentSceneIndex] = useState(0)
    const [stars, setStars] = useState(0)
    const [wrongAttempts, setWrongAttempts] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [selectedOrder, setSelectedOrder] = useState([])
    const [showWrongMessage, setShowWrongMessage] = useState(false)
    const [starLost, setStarLost] = useState(false)
    const [showHints, setShowHints] = useState(false)
    const [savedProgress, setSavedProgress] = useState(false)

    const levelData = allData[professionId]?.[levelId]
    const task = levelData?.tasks?.find(t => t.taskId === taskId) || levelData?.tasks?.[0]
    const scenes = task?.scenes || []
    const currentScene = scenes[currentSceneIndex]
    const isMultiChoice = currentScene?.forma === 'multiChoice'
    const isCorrectOrder = currentScene?.forma === 'correctOrder'
    const isQuestion = isMultiChoice || isCorrectOrder
    const isEnding = currentSceneIndex >= scenes.length

    const hintsAvailable = isQuestion && wrongAttempts >= 1 && (currentScene?.hints?.length > 0)

    // Save to localStorage when task ends
    useEffect(() => {
        if (isEnding && !savedProgress && task) {
            saveTaskResult(professionId, levelId, task.taskId, stars)
            setSavedProgress(true)
        }
    }, [isEnding])

    // Reset state when navigating to a different task
    useEffect(() => {
        setSavedProgress(false)
        setStars(0)
        setCurrentSceneIndex(0)
        setWrongAttempts(0)
        setSelectedAnswer(null)
        setSelectedOrder([])
        setShowWrongMessage(false)
        setStarLost(false)
        setShowHints(false)
    }, [taskId, levelId, professionId])

    const goToNext = () => {
        if (isMultiChoice) {
            if (!selectedAnswer) return
            if (selectedAnswer === currentScene.correctAnswer) {
                if (wrongAttempts < 2) setStars(prev => prev + 1)
                setCurrentSceneIndex(prev => prev + 1)
                setSelectedAnswer(null)
                setWrongAttempts(0)
                setStarLost(false)
                setShowHints(false)
            } else {
                const newAttempts = wrongAttempts + 1
                setWrongAttempts(newAttempts)
                setStarLost(newAttempts >= 2)
                setShowWrongMessage(true)
                setSelectedAnswer(null)
                setShowHints(false)
            }
        } else if (isCorrectOrder) {
            if (selectedOrder.length === 0) return
            const isCorrect = JSON.stringify(selectedOrder) === JSON.stringify(currentScene.correctOrder)
            if (isCorrect) {
                if (wrongAttempts < 2) setStars(prev => prev + 1)
                setCurrentSceneIndex(prev => prev + 1)
                setSelectedOrder([])
                setWrongAttempts(0)
                setStarLost(false)
                setShowHints(false)
            } else {
                const newAttempts = wrongAttempts + 1
                setWrongAttempts(newAttempts)
                setStarLost(newAttempts >= 2)
                setShowWrongMessage(true)
                setSelectedOrder([])
                setShowHints(false)
            }
        } else {
            setCurrentSceneIndex(prev => prev + 1)
            setWrongAttempts(0)
            setSelectedAnswer(null)
            setSelectedOrder([])
            setStarLost(false)
            setShowHints(false)
        }
    }

    const handlePrev = () => {
        if (currentSceneIndex > 0) {
            setCurrentSceneIndex(prev => prev - 1)
            setWrongAttempts(0)
            setSelectedAnswer(null)
            setSelectedOrder([])
            setStarLost(false)
            setShowHints(false)
        }
    }

    const renderScene = () => {
        if (isEnding) {
            return (
                <Ending_template
                    message="Поздравляем!"
                    description={`Ты успешно прошёл "${task?.taskName}". Так держать!`}
                    stars={stars}
                    professionId={professionId}
                />
            )
        }

        if (!currentScene) return null

        if (currentScene.forma === 'theory') {
            if (currentScene.template === 'template2') {
                return <TheoryTemplate2 title={currentScene.title} content={currentScene.content} onNext={goToNext} />
            }
            if (currentScene.template === 'template3') {
                return <TheoryTemplate3 title={currentScene.title} content={currentScene.content} />
            }
            if (currentScene.template === 'template4') {
                return <TheoryTemplate4 title={currentScene.title} content={currentScene.content} image={currentScene.image} />
            }
            if (currentScene.template === 'template5') {
                return <TheoryTemplate5 title={currentScene.title} content={currentScene.content} image={currentScene.image} />
            }
            return <TheoryTemplate1 title={currentScene.title} content={currentScene.content} />
        }

        if (currentScene.forma === 'multiChoice') {
            return (
                <MultiChoice_Choice
                    question={currentScene.question}
                    answer_options={currentScene.options}
                    onAnswer={setSelectedAnswer}
                    selectedAnswer={selectedAnswer}
                />
            )
        }

        if (currentScene.forma === 'correctOrder') {
            return (
                <CorrectOrder
                    question={currentScene.question}
                    answer_options={currentScene.options}
                    onAnswer={setSelectedOrder}
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
                        disabled={isRightDisabled || isEnding}
                        onClick={goToNext}
                    />
                </div>

                {hintsAvailable && !isEnding && (
                    <button
                        className="SimulationLab__hints-btn"
                        onClick={() => setShowHints(prev => !prev)}
                        title="Подсказки"
                    >
                        !
                    </button>
                )}
            </div>

            {showHints && (
                <HintsPanel
                    hints={currentScene?.hints || []}
                    onClose={() => setShowHints(false)}
                />
            )}

            {showWrongMessage && (
                <WrongAnswerMessage
                    starLost={starLost}
                    exploration={starLost ? currentScene?.explanation : null}
                    onClose={() => setShowWrongMessage(false)}
                />
            )}
        </div>
    )
}
