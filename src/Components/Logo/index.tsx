import css from './styles.module.scss';

const Logo: React.FC<{ logo: string }> = ({ logo }) => {
    return <div className={css.logo}>{logo}</div>
}

export default Logo;