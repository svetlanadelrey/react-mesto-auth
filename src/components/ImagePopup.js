function ImagePopup({card, onClose}) {
    return (
        <div className={`popup view-image-popup popup_background-color_dark ${card.link ? 'popup_opened' : ''}`}>
            <div className="view-image-popup__container">
                <img className="view-image-popup__image" src={card.link} alt={card.name} />
                <h2 className="view-image-popup__title">{card.name}</h2>
                <button className="popup__button-close popup__button-close_view-image" onClick={onClose} type="button" aria-label="Закрыть"/>
            </div>
      </div>
    )
}

export { ImagePopup };