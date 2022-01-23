import React from 'react';
import useClickedOutside from '../../hooks/useClickedOutside';
import css from './styles.module.scss';
import { SidenavToggleProps } from '../sidenav-toggle';
import { Link } from 'react-router-dom';

function shouldOpenSidenav(state: boolean) {
    return state ? 'open' : 'closed';
}

function concatenatedStyles(styles: string[]) {
    return [...styles].join(' ');
}

const Sidenav: React.FC<SidenavToggleProps> = ({ isSidenavOpen, setIsSidenavOpen }) => {
    const sidenavRef = React.useRef(null);
    const containerClasses = concatenatedStyles([css.container, css[shouldOpenSidenav(isSidenavOpen)]]);
    const clickedOutside = useClickedOutside(sidenavRef);

    React.useEffect(() => {
        setIsSidenavOpen(prev => !clickedOutside && prev);
    }, [clickedOutside]);
    
    return <nav className={containerClasses} ref={sidenavRef}>
        <ul className={css.links}>
            <Link to="/tasks" className={css.navlink}>Tasks</Link>
            <Link to="/categories" className={css.navlink}>Categories</Link>
            <Link to="/dashboard" className={css.navlink}>Dashboard</Link>
        </ul>
    </nav>
}

export default Sidenav;