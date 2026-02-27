import React, { useState } from 'react'
import './HintsPanel.css'

export default function HintsPanel({ hints = [], onClose }) {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

    return (
        <div className="HintsPanel">
            <div className="HintsPanel__header">
                <span className="HintsPanel__title">Подсказки</span>
                <button className="HintsPanel__close" onClick={onClose}>✕</button>
            </div>
            <div className="HintsPanel__list">
                {hints.map((hint, i) => (
                    <div key={i} className="HintsPanel__item">
                        <button
                            className={`HintsPanel__trigger ${openIndex === i ? 'HintsPanel__trigger--open' : ''}`}
                            onClick={() => toggle(i)}
                        >
                            <span>Подсказка {i + 1}</span>
                            <span className="HintsPanel__arrow">{openIndex === i ? '▲' : '▼'}</span>
                        </button>
                        <div className={`HintsPanel__content ${openIndex === i ? 'HintsPanel__content--open' : ''}`}>
                            <p>{hint}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
