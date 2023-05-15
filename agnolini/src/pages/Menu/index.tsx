import { useState } from 'react';
import styles from './Menu.module.scss';
import Search from './Search';
import Filters from './Filters';
import Sort from './Sort';
import Items from './Items';
import stylesTheme from 'styles/Theme.module.scss';

export default function Menu() {

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [sort, setSort] = useState('');

    return ( 
        <section className={styles.search}>
            <h3 className={stylesTheme.title}>Menu</h3>
            <Search
                search={search}
                setSearch={setSearch}
            />
            <div className={styles.search__filters}>
                <Filters 
                    filter={filter}
                    setFilter={setFilter}
                />
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <Items search={search} filter={filter} sort={sort}/>
        </section>
    );
}