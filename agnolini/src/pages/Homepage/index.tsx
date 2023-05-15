import menu from 'data/menu.json';
import styles from './Homepage.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHouse from 'assets/our_house.png';
import { useNavigate } from 'react-router-dom';
import { Dish } from 'types/Dish';

export default function Homepage(){

    let recommendations = [...menu];
    recommendations = recommendations.sort(() => 0.5 - Math.random()).splice(0,3);
    const navigate = useNavigate();

    function redirectToDetails(dish: Dish){
        navigate(`/dish/${dish.id}`, {state: { dish }, replace: true});
    }

    return(
        <section>
            <h3 className={stylesTheme.title}>
                Kitchen recommendations
            </h3>
            <div className={styles.recommended}>
                {recommendations.map(item => (
                    <div key={item.id} className={styles.recommend}>
                        <div className={styles.recommend__image}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button 
                            className={styles.recommend__button}
                            onClick={() => redirectToDetails(item)}
                        >
                            See more
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={stylesTheme.title}> Our house</h3>
            <div className={styles.ourHouse}>
                <img src={ourHouse} alt="House of Agnolini" />
                <div className={styles.ourHouse__address}>
                    R. Saldanha Marinho, 1558 <br /> <br /> Guarapuava - PR
                </div>
            </div>
        </section>
    );
}