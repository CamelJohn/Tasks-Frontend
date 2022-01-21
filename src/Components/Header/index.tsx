import { Link } from 'react-router-dom';
import Logo from '../Logo';
import css from './styles.module.scss';

const Header: React.FC<{}> = () => {
    return <header className={css.header}>
        <nav className={css.navigation}>
            <div>Burger Button</div>
            <Logo logo='Discomcobulaotr' />
        </nav>
        <nav className={css.actions}>
            <Link to="/" className={css.link}>Profile</Link>
            <Link to="/" className={css.link}>User Management</Link>
            <Link to="/" className={css.link}>Login/Signup</Link>
            <Link to="/" className={css.link}>Logout</Link>
        </nav>
    </header>
}

export default Header;