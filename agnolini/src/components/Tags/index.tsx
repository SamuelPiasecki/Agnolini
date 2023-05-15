import { Dish } from 'types/Dish';
import styles from './Tags.module.scss';
import classNames from 'classnames';

export default function Tags({
    category,
    size,
    serving,
    price
}: Dish){
    return(
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags__type]:true,
                [styles[`tags__type__${category.label.toLowerCase()}`]]: true
            })}>
                {category.label}
            </div>
            <div className={styles.tags__portion}>
                {size}g
            </div>
            <div className={styles.tags__qtPeople}>
                Serves {serving} {serving === 1 ? 'person' : 'people'}
            </div>
            <div className={styles.tags__value}>
                R$ {price.toFixed(2)}
            </div>
        </div>
    );
}