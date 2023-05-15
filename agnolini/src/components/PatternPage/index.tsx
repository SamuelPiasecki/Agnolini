import styles from './PatternPage.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';

export default function PattternPage({children}: {children?: React.ReactNode}){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    Angolini is the same as Capeletti
                </div>
            </header>
            <div className={stylesTheme.container}>
                <Outlet />
                {children}
            </div>
        </>
    );
}