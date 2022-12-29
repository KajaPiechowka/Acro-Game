import { Button, IconButton } from '@mui/material';
import { useRef, useEffect } from 'react';
import { ReactComponent as Instagram } from '../../assets/icons/Instagram.svg';
import { ReactComponent as Facebook } from '../../assets/icons/Facebook.svg';
import LogoSquare from '../../assets/icons/LogoSquare.png';

const Footer = () => {
  const email = 'info@acrogame.net';
  const textRef = useRef(null);

  return (
    <div className="footer">
      <div className="footer__black-wrapper">
        <img className="footer__logo" src={LogoSquare} alt="logo" />
        <span className="footer__version">Acro Game v.2.0</span>
      </div>
      <div className="footer__yellow-wrapper">
        <div className="footer__white-wrapper">
          <div className="footer__white-wrapper-left">
            <p>
              We hope that you had fun with our game!
              <br /> Acro Game Team
            </p>
            <Button
              size="small"
              sx={{
                color: 'black',
                textTransform: 'lowercase',
                marginTop: '10px',
              }}
              onClick={() => {
                navigator.clipboard.writeText(email);
              }}
            >
              {email}
            </Button>
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
};
export default Footer;
