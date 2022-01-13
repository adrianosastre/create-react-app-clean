import { Link } from 'react-router-dom';
import logo from './logo.svg';
import classes from './Navigation.module.css';

function Navigation() {
    return (
        <header className={classes.header}>
            <div>
                <Link to={'/'}>
                    <img className={classes.logo} src={logo} alt='Welcome' />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/list'}> List</Link>
                    </li>
                    <li>
                        <Link to={'/add'}>Add</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
