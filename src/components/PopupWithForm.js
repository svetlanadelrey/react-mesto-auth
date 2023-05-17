function PopupWithForm({name, isOpen, title, children, buttonText, onClose, onSubmit}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form" method="get" name={name} id="edit-form" onSubmit={onSubmit}>
                    {children}
                    <button className="popup__button-save" type="submit">{buttonText}</button>
                </form>
                <button className="popup__button-close" onClick={onClose} type="button" aria-label="Закрыть"/>
            </div>
        </div>
    );
}
 export { PopupWithForm };