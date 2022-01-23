import css from './styles.module.scss';

type SidenavProps = {
    isSidenavOpen: boolean;
}

function shouldOpenSidenav(state: boolean) {
    return state ? 'open' : 'closed';
}

function concatenatedStyles(styles: string[]) {
    return [...styles].join(' ');
}

const Sidenav: React.FC<SidenavProps> = ({ isSidenavOpen }) => {

    const containerClasses = concatenatedStyles([css.container, css[shouldOpenSidenav(isSidenavOpen)]]);
    
    return <nav className={containerClasses}>
        <ul className={css.links}>
            <li className={css.navlink}>Tasks</li>
            <li className={css.navlink}>Categories</li>
            <li className={css.navlink}>Dashboard</li>
        </ul>
    </nav>
}

export default Sidenav;