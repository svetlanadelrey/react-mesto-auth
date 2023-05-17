import React from 'react';
import { PopupWithForm } from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen])

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

    return (
        <PopupWithForm
          name={"popup_type_edit-profile"}
          title={"Редактировать профиль"}
          buttonText={"Сохранить"}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <input 
            className="popup__input popup__input_type_name" 
            type="text" 
            name="name" 
            placeholder="Имя" 
            minLength={2} 
            maxLength={40} 
            required
            value={name || ""}
            onChange={handleChangeName}
          />
          <span className="input-error-name error"></span>
          <input 
            className="popup__input popup__input_type_job" 
            type="text" 
            name="job"
            placeholder="О себе"
            minLength={2}
            maxLength={200}
            required
            value={description || ""}
            onChange={handleChangeDescription}
          />
          <span className="input-error-job error"></span>
        </PopupWithForm>
    )
}

export { EditProfilePopup};