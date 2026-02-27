import React from 'react';
import './MultiChoice_Choice.css'

export default function MultiChoice_Choice({
    question = 'question...',
    answer_options = [],
    onAnswer,
    selectedAnswer = null
}) {
    const handleSelect = (option) => {
        onAnswer(option.id)
    }

    return (
        <div className="MultiChoice_Choice">
            <div className="MultiChoice_Choice__conteiner">
                <div className="MultiChoice_Choice__question">
                    <h3>{question}</h3>
                </div>
                <div className="MultiChoice_Choice__MultiChoice">
                    {answer_options?.map((option) => (
                        <div
                            className={`option ${selectedAnswer === option.id ? 'option--selected' : ''}`}
                            key={option.id}
                            onClick={() => handleSelect(option)}
                        >
                            {option.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
