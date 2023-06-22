import "./Button.css";


const Button = ({ className, value, onClickBtn }) => {
    return (
        <button className={className} onClick={onClickBtn}>{value}</button>
    );
};

export default Button;