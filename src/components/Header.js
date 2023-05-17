import headerLogo from '../images/logo.svg';
import { Link, Route, Routes } from "react-router-dom";

function Header({handleSignOut, email}) {
    return (
        <header className="header">
        <img
          className="header__logo"
          src={headerLogo}
          alt="Россия"
        />
        <Routes>
          <Route path="sign-up" element={<Link className="header__link" to="/sign-in">Войти</Link>} />
          <Route path="sign-in" element={<Link className="header__link" to="/sign-up">Регистрация</Link>}/>
          <Route path="/" element={
            <div className="header__container">
              <p className="header__email">{email}</p>
              <Link to="" className="header__link header__link_signout" onClick={handleSignOut}>Выйти</Link>
            </div>    
            } />
        </Routes>
      </header>
    );
}

export { Header };