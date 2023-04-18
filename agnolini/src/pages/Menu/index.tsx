import { useState } from 'react';
import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Search from './Search';
import Filters from './Filters';
import Sort from './Sort';
import Items from './Items';

export default function Menu() {

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [sort, setSort] = useState('');

    return (
        <main>
            <nav className={styles.menu}>{ }
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    agnolini is the same as capeletti
                </div>
            </header>
            <section className={styles.search}>
                <h3 className={styles.search__title}>Menu</h3>
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
        </main>
    )
}