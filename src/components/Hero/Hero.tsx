import { Container } from '@mui/material';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface HeroProps {
  children: JSX.Element;
}

const Hero = ({ children }: HeroProps) => (
  <Container className="container">
    <Header />
    <div className="hero">
      <div className="hero__yellow-wrapper">
        <div className="hero__white-wrapper">
          <h1>Are you ready for this?</h1>
          <p className="hero__text">
            We are very happy to invite you to the most amazing game for all
            Acroyogis. You can use it as a cool way to warmup, challenge
            yourself or just have fun with friends. Don&apos;t know Acro yoga
            yet? Check our Poses List!
          </p>
        </div>
        <div className="hero__button-wrapper">
          <Button text="How to Play?" />
          <Button text="List of poses" />
          {/* <Button text="About Acro yoga" /> */}
        </div>
      </div>
    </div>
    {children}
    <Footer />
  </Container>
);
export default Hero;
