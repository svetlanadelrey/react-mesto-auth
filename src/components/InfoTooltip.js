import React from "react";
import successIcon from '../images/success.svg';
import failIcon from '../images/fail.svg';

function InfoToolTip({isOpen, onClose, isRegisterSuccess}) {
    return (
        <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <img className="popup__tooltip-icon" src={isRegisterSuccess ? successIcon : failIcon} alt=""/>
                <h2 className="popup__title popup__title_type_tooltip">{isRegisterSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
                <button className="popup__button-close" onClick={onClose} type="button" aria-label="Закрыть"/>
            </div>
        </div>
    )
}

export { InfoToolTip };