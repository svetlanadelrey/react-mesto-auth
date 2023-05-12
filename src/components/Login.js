import React from "react";

const Login = ({onLogin}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({email, password});
    }

    return (
        <div className="login">
            <form 
                className="login__form"
                action="#"
                noValidate
                onSubmit={handleSubmit}
            >
                <h2 className="login__title">Вход</h2>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    onChange={handleChangeEmail}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Пароль"
                    onChange={handleChangePassword}
                />
                <button className="login__button" type="submit">Войти</button>
            </form>
        </div>
    )
}

export { Login };