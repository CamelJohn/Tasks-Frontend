import { Link } from 'react-router-dom';
import Logo from '../Logo';
import css from './styles.module.scss';
import SidenavService from '../../services/sideanv.service';

const Header: React.FC<{}> = () => {
    
    return <header className={css.header}>
        <img src="/src/assets/burger.svg" alt='burger menu icon' onClick={() => SidenavService.toggle()} />
        <nav className={css.navigation} onClick={() => SidenavService.close()}>
            <Logo logo='Discombobulator'/>
        <div className={css.actions}> 
            <Link to="/profile" className={css.link}>Profile</Link>
            <Link to="/" className={css.link}>User Management</Link>
            <Link to="/" className={css.link}>Login/Signup</Link>
            <Link to="/" className={css.link}>Logout</Link>
        </div>
        </nav>
    </header>
}

export default Header;