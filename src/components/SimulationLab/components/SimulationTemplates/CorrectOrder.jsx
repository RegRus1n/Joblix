import React, { useState } from 'react';
import './CorrectOrder.css'

export default function CorrectOrder({
    question = 'question...',
    answer_options = [],
    onAnswer,
    selectedOrder = []
}) {
    // Если selectedOrder пустой, инициализируем как исходный порядок
    const currentOrder = selectedOrder.length > 0 ? selectedOrder : answer_options.map(opt => opt.id);
    const [lastMovedId, setLastMovedId] = useState(null);

    const handleMoveUp = (index, optionId) => {
        if (index === 0) return; // Первый элемент не может двигаться вверх
        const newOrder = [...currentOrder];
        [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
        onAnswer(newOrder);
        setLastMovedId(optionId);
    }

    const handleMoveDown = (index, optionId) => {
        if (index === currentOrder.length - 1) return; // Последний элемент не может двигаться вниз
        const newOrder = [...currentOrder];
        [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
        onAnswer(newOrder);
        setLastMovedId(optionId);
    }

    return (
        <div className="CorrectOrder">
            <div className="CorrectOrder__container">
                <div className="CorrectOrder__question">
                    <h3>{question}</h3>
                </div>
                <div className="CorrectOrder__options">
                    {currentOrder.map((optionId, index) => {
                        const option = answer_options.find(opt => opt.id === optionId);
                        if (!option) return null;

                        const isFirst = index === 0;
                        const isLast = index === currentOrder.length - 1;
                        const isLastMoved = lastMovedId === optionId;

                        return (
                            <div
                                key={optionId}
                                className={`CorrectOrder__option ${isLastMoved ? 'CorrectOrder__option--moved' : ''}`}
                            >
                                <span className="CorrectOrder__number">{index + 1}</span>
                                <span className="CorrectOrder__text">{option.text}</span>

                                <div className="CorrectOrder__arrows">
                                    {!isFirst && (
                                        <button
                                            className="CorrectOrder__arrow CorrectOrder__arrow--up"
                                            onClick={() => handleMoveUp(index, optionId)}
                                            title="Переместить выше"
                                        >
                                            ▲
                                        </button>
                                    )}
                                    {!isLast && (
                                        <button
                                            className="CorrectOrder__arrow CorrectOrder__arrow--down"
                                            onClick={() => handleMoveDown(index, optionId)}
                                            title="Переместить ниже"
                                        >
                                            ▼
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
