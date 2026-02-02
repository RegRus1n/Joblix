import React, { useEffect } from 'react'
import './SupportConteiner.css'
import phoneIcon from '../../assets/icons/Phone.svg'

export default function SupportContainer() {
    useEffect(() => {
        // Блокируем скролл при открытии
        document.body.style.overflow = 'hidden';

        // Возвращаем скролл при закрытии
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className='support-container'>
            <h3 className="support-title">Нужна помощь?</h3>
            <p className="support-subtitle">Служба поддержки на связи</p>

            <div className="support-phones">
                <div className="phone-item">
                    <img className='phone-icon' src={phoneIcon} alt="phone icon"/>
                    <span>+996 509 888 377</span>
                </div>
                <div className="phone-item">
                    <img className='phone-icon' src={phoneIcon} alt="phone icon" />
                    <span>+996 555 239 000</span>
                </div>
            </div>

            <div className="support-actions">
                <a href="" className="support-btn" target="_blank" rel="noreferrer noopener">Написать в Telegram</a>
                <a href="" className="support-btn" target="_blank" rel="noreferrer noopener">Написать в Whatsapp</a>
            </div>
        </div>
    )
}