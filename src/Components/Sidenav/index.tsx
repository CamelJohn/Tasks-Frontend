import css from './styles.module.scss';

const Sidenav: React.FC<{}> = () => {
    return <nav className={css.container}>
        <ul className={css.links}>
            <li className={css.navlink}>Tasks</li>
            <li className={css.navlink}>Categories</li>
            <li className={css.navlink}>Dashboard</li>
        </ul>
    </nav>
}

export default Sidenav;