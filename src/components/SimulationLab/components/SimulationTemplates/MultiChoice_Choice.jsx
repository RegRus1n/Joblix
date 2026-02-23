import React, { useState } from 'react';
import './MultiChoice_Choice.css'

export default function MultiChoice_Choice({
    question = 'question...',
    answer_options = [],
    onAnswer,
    answered = false
}) {
    const [selected, setSelected] = useState(null)

    const handleSelect = (option) => {
        if (answered) return
        setSelected(option.id)
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
                            className={`option ${selected === option.id ? 'option--selected' : ''}`}
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
