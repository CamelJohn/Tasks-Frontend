import css from './styles.module.scss';
import useSidenav from '../../hooks/useSidenav';
import Styles from '../../services/style.service';

const NotFound = () => {
    const isOpen = useSidenav();

    const containerClasses = Styles.concatenatedStyles([css.container, css[isOpen ? 'open' : 'closed']]);
    
    return <div className={containerClasses}>
        <div className={css.wrapper}>
            <div className={css.errorCode}>404</div>
            <div className={css.verticalSeperator} />
            <div className={css.title}>Page not Found.</div>
        </div>
        {/* <div className={css.seperator} /> */}
        {/* <div className={css.content}>Something went wrong.</div> */}
    </div>
}

export default NotFound;