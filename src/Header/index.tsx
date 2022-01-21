import React from 'react';
import css from './styles.module.scss';

const Header: React.FC<{}> = () => {
    return <header className={css.header}>
        <div className={css.navigation}>
            <div>Burger Button</div>
            <div>Logo</div>
        </div>
        <div className={css.actions}>
            <div className={css.link}>Profile</div>
            <div className={css.link}>Login/Signup</div>
            <div className={css.link}>Logout</div>
        </div>
    </header>
}

export default Header;