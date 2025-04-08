type ButtonProps = {
    text: string;
    css?: string;
    btnType?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, css, btnType, onClick }) => {
    return (
        <button
            type={btnType}
            onClick={onClick}
            className={`${css} cursor-pointer py-2 px-4 text-mainwhite bg-orange hover:bg-oreangeHover duration-300 rounded-sm`}
        >
            {text}
        </button>
    );
};

export default Button;
