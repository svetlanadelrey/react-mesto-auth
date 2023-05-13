import React from "react";

function InfoToolTip({name, title, isOpen, onClose}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <button className="popup__button-close" onClick={onClose} type="button" aria-label="Закрыть"/>
            </div>
        </div>
    )
}

export { InfoToolTip };