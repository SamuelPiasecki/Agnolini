import styles from './Dish.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import menu from 'data/menu.json';
import Tags from 'components/Tags';
import NotFound from 'pages/NotFound';
import PattternPage from 'components/PatternPage';

export default function Dish(){

    const { id } = useParams();
    const navigate = useNavigate();
    const dish = menu.find(item => item.id === Number(id));
    if(!dish){
        return <NotFound />;
    }

    return(
        <PattternPage>
            <button className={styles.goBack} onClick={() => navigate(-1) }>
                {'< Go back'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.title}>
                    {dish.title}
                </h1>
                <div>
                    <img src={dish.photo} alt={dish.title} />
                </div>
                <div className={styles.content}>
                    <p className={styles.content__description}>
                        {dish.description}
                    </p>
                    <Tags {...dish}/>
                </div>
            </section>
        </PattternPage>
    );
}