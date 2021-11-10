import Logo from '../../assets/icons/Logo.png';

const Header = (): JSX.Element => (
  <header className="header">
    <img className="header__logo" src={Logo} alt="logo" />
  </header>
);
export default Header;
