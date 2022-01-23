import React from 'react';
import css from './styles.module.scss';
import { Link } from 'react-router-dom';
import SidenavService from '../../services/sideanv.service';
import Styles from '../../services/style.service';

function shouldOpenSidenav(state: boolean) {
    return state ? 'open' : 'closed';
}

const Sidenav: React.FC<{}> = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const containerClasses = Styles.concatenatedStyles([css.container, css[shouldOpenSidenav(isOpen)]]);

    React.useEffect(() => {
        const sidenavStateSubscription = SidenavService.state.subscribe(state => setIsOpen(state));

        return () => sidenavStateSubscription.unsubscribe();
    }, []);
    
    return <nav className={containerClasses}>
        <ul className={css.links}>
            <Link to="/tasks" className={css.navlink}>Tasks</Link>
            <Link to="/categories" className={css.navlink}>Categories</Link>
            <Link to="/dashboard" className={css.navlink}>Dashboard</Link>
        </ul>
    </nav>
}

export default Sidenav;