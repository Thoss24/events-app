import classes from './ErrorContent.module.css'

const ErrorContent = (props) => {
    return (
        <div className={classes['error-content']}>
            <h1>Error {props.status}</h1>
            <h2>{props.message}</h2>
        </div>
    )
};

export default ErrorContent