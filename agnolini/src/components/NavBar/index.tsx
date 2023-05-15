import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

export default function NavBar(){

    const routes = [{
        label: 'Homepage',
        to: '/'
    }, {
        label: 'Menu',
        to: '/menu'
    }, {
        label: 'About us',
        to: '/about'
    }];

    return(
        <nav className={styles.navbar}>
            <Logo />
            <h1>Agnolini</h1>
            <ul className={styles.navbar__list}>
                {routes.map((route, index) =>(
                    <li key={index} className={styles.navbar__link}>
                        <Link to={route.to}>
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}