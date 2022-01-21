import React from 'react';
import css from './styles.module.scss';

const Header: React.FC<{}> = () => {
    return <header className={css.header}>
        <div className={css.navigation}>
            <div>Burger Button</div>
            <div>Logo</div>
        </div>
        <div className={css.actions}>
            <div>Profile</div>
            <div>Login/Signup</div>
            <div>Logout</div>
        </div>
    </header>
}

export default Header;