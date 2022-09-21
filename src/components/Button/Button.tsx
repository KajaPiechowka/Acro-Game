interface ButtonProps {
  text: String;
}

const Button = ({ text }: ButtonProps) => (
  <button type="button" className="main-button">
    {text}
  </button>
);

export default Button;
