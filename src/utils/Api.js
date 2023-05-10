class Api {
    constructor(url, token) {
        this._url = url;
        this._token = token;
    }

    _getHeaders() {
        return {
            authorization: this._token,
            'Content-Type': 'application/json'
          }
    }

    _getJson(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._getHeaders(),
          })
            .then(this._getJson);
    }

    editUserInfo(user) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify({
                name: user.name,
                about: user.about
            })
        })
        .then(this._getJson);
    }

    addCard(item) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._getHeaders(),
            body: JSON.stringify({
                name: item.place, 
                link: item.link
            })            
        }).then(this._getJson);
    }
    
    getCurrentUser() {
        return fetch(`${this._url}/users/me`, {
            headers: this._getHeaders(),       
        }).then(this._getJson);
    }

    setLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._getHeaders(),           
        }).then(this._getJson);
    }

    deleteLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._getHeaders(),           
        }).then(this._getJson);
    }

    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
          method: 'DELETE',
          headers: this._getHeaders(),
        }).then(this._getJson);
      }

    updateAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._getHeaders(),
          body: JSON.stringify({
            avatar: data.avatar
          })  
        }).then(this._getJson);
    }

    changeLikeCardStatus(id, isLiked) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: `${isLiked ? 'PUT' : 'DELETE'}`,
            headers: this._getHeaders(),           
        }).then(this._getJson);
    }
}

const api = new Api(
    'https://mesto.nomoreparties.co/v1/cohort-61',
    '6cb1c4c3-65bd-4e4c-b78a-a5117aee9407'
);

export default api;