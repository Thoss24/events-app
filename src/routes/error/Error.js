import { useRouteError } from "react-router-dom";
import ErrorContent from "../../components/elements/ErrorContent";
import MainNavigation from "../../components/navigation/MainNavigation";
import { Fragment } from "react";

const Error = () => {

    const error = useRouteError();

    let message;
    let status;

    if (error.status === 500) {
        message = error.message
    }

    if (error.status === 404) {
        message = 'Page could not be found!'
    }

    return (
        <Fragment>
            <MainNavigation />
            <ErrorContent status={status} message={message}/>
        </Fragment>
    )
};

export default Error