import Navigation from './Navigation';
import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <div>
            <Navigation />
            <main className={classes.main}>{props.children}</main>
            <footer className={classes.footer}>adrianosastre 2022</footer>
        </div>
    );
};

export default Layout;
