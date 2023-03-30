interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, secondary, fullWidth, large, onClick, disabled, outline }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-full border-2 font-semibold transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-20 ${
        fullWidth ? 'w-full' : 'w-fit'
      } ${secondary ? 'border-black bg-white text-black' : 'border-sky-500 bg-sky-500 text-white'} ${
        large ? 'px-5 py-3' : 'px-4 py-2'
      } ${outline && 'border-white bg-transparent text-white'}`}
    >
      {label}
    </button>
  );
};

export default Button;
