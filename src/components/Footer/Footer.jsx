import { IconButton } from '@mui/material';
import { ReactComponent as Instagram } from '../../assets/icons/Instagram.svg';
import { ReactComponent as Facebook } from '../../assets/icons/Facebook.svg';
import LogoSquare from '../../assets/icons/LogoSquare.png';

const Footer = () => (
  <div className="footer">
    <div className="footer__black-wrapper">
      <img className="footer__logo" src={LogoSquare} alt="logo" />
      <span className="footer__version">Acro Game v.2.0</span>
    </div>
    <div className="footer__yellow-wrapper">
      <div className="footer__white-wrapper">
        <div className="footer__white-wrapper-left">
          <p>We hope that you had fun with our game! Acro Game Team</p>
          <span className="footer__email">info@acrogame.net</span>
        </div>
        <div className="footer__icons">
          <IconButton
            className="footer__icon"
            size="small"
            href="https://www.facebook.com/AcroGameApp"
          >
            <Facebook />
          </IconButton>
          <IconButton
            className="footer__icon"
            size="small"
            href="https://www.instagram.com/acrogame_net/"
          >
            <Instagram />
          </IconButton>
        </div>
      </div>
    </div>
  </div>
);
export default Footer;
