import React from 'react';
import { PopupWithForm } from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const editAvatarRef = React.useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: editAvatarRef.current.value,
        });
        editAvatarRef.current.value = null;
      }

    return (
        <PopupWithForm
          name={'popup_type_update-avatar'}
          title={'Обновить аватар'}
          buttonText={'Сохранить'}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <input
            className="popup__input popup__input_type_link"
            type="url"
            name="avatar"
            placeholder="Ссылка на картинку"
            required=""
            ref={editAvatarRef}
          />
          <span className="input-error-avatar error" />
        </PopupWithForm>
    )
}

export {EditAvatarPopup};