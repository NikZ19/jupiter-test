import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className='header'>
      <div className='header__container root__container'>
        <div className='logo'>
          <img className='logo__image' src={logo} alt='Логотип компании' />
          <span className='logo__name'>Agency</span>
        </div>
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li className='header__nav-item'>
              About
            </li>
            <li className='header__nav-item'>
              Services
            </li>
            <li className='header__nav-item'>
              Pricing
            </li>
            <li className='header__nav-item'>
              Blog
            </li>
          </ul>
        </nav>
        <button className='header__button' type='button'>contact</button>
      </div>
    </header>
  );
}

export { Header };