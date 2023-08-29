import classes from './Button.module.css';
import { Link } from "react-router-dom";

const Button = (props) => {
    return (
        <button onClick={props.clicked} type={props.btnType} className={classes.button}><Link to={props.link}>{props.text}</Link></button>
    )
};

export default Button