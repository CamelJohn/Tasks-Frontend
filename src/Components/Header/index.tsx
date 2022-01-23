import { Link } from 'react-router-dom';
import Logo from '../Logo';
import css from './styles.module.scss';
import { SidenavToggleProps } from '../sidenav-toggle';

const Header: React.FC<SidenavToggleProps> = ({ setIsSidenavOpen, isSidenavOpen }) => {

    return <header className={css.header}>
        <nav className={css.navigation}>
            <img src="/src/assets/burger-svgrepo-com.svg" alt='burger menu icon' onClick={() => setIsSidenavOpen(!isSidenavOpen)} />
            <Logo logo='Discombobulator' />
        </nav>
        <nav className={css.actions}>
            <Link to="/profile" className={css.link}>Profile</Link>
            <Link to="/" className={css.link}>User Management</Link>
            <Link to="/" className={css.link}>Login/Signup</Link>
            <Link to="/" className={css.link}>Logout</Link>
        </nav>
    </header>
}

export default Header;