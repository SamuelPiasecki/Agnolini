import styles from './NotFound.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import skull from 'assets/skull.png';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function NotFound(){
    const navigate = useNavigate();
    return(
        <div className={classNames({
            [styles.container]: true,
            [stylesTheme.container]:true 
        })}>
            <div className={styles.goBack}>
                <button onClick={() => navigate(-1)}>
                    {'< Go back'}
                </button>
            </div>
            <img src={skull} alt="" />
            <h1 className={styles.title}>
                404 <br />
                <small>Page not found</small>
            </h1>
        </div>
    );
}