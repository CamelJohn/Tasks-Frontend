import React from 'react';
import useClickedOutside from '../../hooks/useClickedOutside';
import css from './styles.module.scss';
import { SidenavToggleProps } from '../sidenav-toggle';

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
            <li className={css.navlink}>Tasks</li>
            <li className={css.navlink}>Categories</li>
            <li className={css.navlink}>Dashboard</li>
        </ul>
    </nav>
}

export default Sidenav;