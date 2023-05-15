import styles from './Item.module.scss';
import Tags from 'components/Tags';
import { useNavigate } from 'react-router-dom';
import { Dish } from 'types/Dish';

type Props = Dish;

export default function Item(props: Props) {

    const { id, title, description, photo } = props;
    const navigate = useNavigate();

    return (
        <div className={styles.item} onClick={() => navigate(`/dish/${id}`)}>
            <div className={styles.item__image}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <Tags {...props}/>
            </div>
        </div>
    );
}