import React, { useState } from 'react'
import "./SimulationLab.css"

import HeaderSimulation from "./components/HeaderSimulation/HeaderSimulation"
import { useParams } from 'react-router-dom'
import TheoryTemplate1 from './components/SimulationScenes/theory_templates/theory_template1'
import MultiChoice_Choice from './components/SimulationTemplates/MultiChoice_Choice'
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
    const [answered, setAnswered] = useState(false)
    const [showWrongMessage, setShowWrongMessage] = useState(false)
    const [starLost, setStarLost] = useState(false)

    const levelData = levelsData[professionId]
    const task = levelData?.tasks[0]
    const scenes = task?.scenes || []
    const currentScene = scenes[currentSceneIndex]
    const isMultiChoice = currentScene?.forma === 'multiChoice'
    const isEnding = currentSceneIndex >= scenes.length

    const goToNext = () => {
        if (currentSceneIndex < scenes.length) {
            setCurrentSceneIndex(prev => prev + 1)
            setWrongAttempts(0)
            setAnswered(false)
            setStarLost(false)
        }
    }

    const handlePrev = () => {
        if (currentSceneIndex > 0) {
            setCurrentSceneIndex(prev => prev - 1)
            setWrongAttempts(0)
            setAnswered(false)
            setStarLost(false)
        }
    }

    const handleAnswer = (selectedId) => {
        if (answered) return
        const correct = currentScene.correctAnswer
        if (selectedId === correct) {
            if (wrongAttempts < 2) {
                setStars(prev => prev + 1)
            }
            setAnswered(true)
            setTimeout(() => goToNext(), 800)
        } else {
            const newAttempts = wrongAttempts + 1
            setWrongAttempts(newAttempts)
            setStarLost(newAttempts >= 2)
            setShowWrongMessage(true)
        }
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
            return <TheoryTemplate1 title={currentScene.title} description={currentScene.content} />
        }

        if (currentScene.forma === 'multiChoice') {
            return (
                <MultiChoice_Choice
                    question={currentScene.question}
                    answer_options={currentScene.options}
                    onAnswer={handleAnswer}
                    answered={answered}
                />
            )
        }
    }

    const isRightDisabled = isMultiChoice && !answered

    return (
        <div className='SimulationLab'>
            <HeaderSimulation professionId={professionId} stars={stars} />

            <div className='SimulationLab__actions'>
                <div className="SimulationLab__actions__arrow_conteiner">
                    <ArrowButton
                        side='left'
                        disabled={currentSceneIndex === 0}
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
