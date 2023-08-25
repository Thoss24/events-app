import MainNavigation from "../../components/navigation/MainNavigation";
import classes from './AppRoot.module.css';
import { Outlet } from "react-router-dom";

const AppRoot = () => {
    return (
        <div className={classes['nav-container']}>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </div>
    )
};

export default AppRoot