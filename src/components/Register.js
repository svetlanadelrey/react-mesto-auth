import React from 'react';
import { Link } from 'react-router-dom';

function Register ({onRegister}) {
    const [userData, setUserData] = React.useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
    
        setUserData({
          ...userData,
          [name]: value
        });
      }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        
        onRegister(userData);
    }

    return (
        <div className="auth">
            <form 
                className="auth__form"
                action="#"
                onSubmit={handleSubmit}
            >
                <h2 className="auth__title">Регистрация</h2>
                <input
                    className="auth__input" 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    required
                    value={userData.email}
                    onChange={handleChange}
                />
                <input 
                    className="auth__input"
                    type="password" 
                    name="password" 
                    placeholder="Пароль"
                    required
                    value={userData.password}
                    onChange={handleChange}
                />
                <button className="auth__button" type="submit">Зарегистрироваться</button>
            </form>
            <div className="auth__login">
                <p className="auth__login-title">Уже зарегистрированы?</p>
                <Link to="/sign-in" className="auth__login-link">
                    Войти
                </Link>
            </div>
        </div>
    )
}

export { Register };