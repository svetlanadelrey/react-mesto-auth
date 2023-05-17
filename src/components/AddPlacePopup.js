import React from 'react';
import { PopupWithForm } from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
    const [cardName, setCardName] = React.useState('');
    const [cardLink, setCardLink] = React.useState('');

    React.useEffect(() => {
      setCardName('');
      setCardLink('');
    }, [isOpen])

    const handleCardName = (e) => {
        setCardName(e.target.value);
    }

    const handleCardLink = (e) => {
        setCardLink(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddPlace({place: cardName, link: cardLink});
    }

    return (
        <PopupWithForm
          name={'popup_type_add-card'}
          title={'Новое место'}
          buttonText={'Создать'}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <input
            className="popup__input popup__input_type_place"
            type="text"
            name="place"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            required
            value={cardName || ""}
            onChange={handleCardName}
          />
          <span className="input-error-place error" />
          <input
            className="popup__input popup__input_type_link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
            value={cardLink || ""}
            onChange={handleCardLink}
          />
          <span className="input-error-link error" />
        </PopupWithForm>
    )
}

export {AddPlacePopup};