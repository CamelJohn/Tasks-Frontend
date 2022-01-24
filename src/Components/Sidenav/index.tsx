import React from 'react';
import css from './styles.module.scss';
import { Link } from 'react-router-dom';
import Styles from '../../services/style.service';
import useSidenav from '../../hooks/useSidenav';

function shouldOpenSidenav(state: boolean) {
    return state ? 'open' : 'closed';
}

const Sidenav: React.FC<{}> = () => {
    const isOpen = useSidenav();
    const containerClasses = Styles.concatenatedStyles([css.container, css[shouldOpenSidenav(isOpen)]]);
    
    return <nav className={containerClasses}>
        <ul className={css.links}>
            <Link to="/tasks" className={css.navlink}>Tasks</Link>
            <Link to="/categories" className={css.navlink}>Categories</Link>
            <Link to="/dashboard" className={css.navlink}>Dashboard</Link>
        </ul>
    </nav>
}

export default Sidenav;