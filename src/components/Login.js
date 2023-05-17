import React from "react";

function Login({onLogin}) {
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
        const {email, password} = userData;
        onLogin({email, password});
    }

    return (
        <div className="auth">
            <form 
                className="auth__form"
                action="#"
                onSubmit={handleSubmit}
            >
                <h2 className="auth__title">Вход</h2>
                <input 
                    className="auth__input"
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    onChange={handleChange}
                    value={userData.email}
                    required
                />
                <input 
                    className="auth__input"
                    type="password" 
                    name="password" 
                    placeholder="Пароль"
                    onChange={handleChange}
                    value={userData.password}
                    required
                />
                <button className="auth__button" type="submit">Войти</button>
            </form>
        </div>
    )
}

export { Login };