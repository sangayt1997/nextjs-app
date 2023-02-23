import MainNavigation from '../main-navigation/main-navigation';
import classes from './layout.module.css';

function Layout(props) {
    return (
        <div>
            <MainNavigation/>
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}

export default Layout;
