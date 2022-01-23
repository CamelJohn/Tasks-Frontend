import css from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

const Logo: React.FC<{ logo: string }> = ({ logo }) => {
    const navigate = useNavigate();
    const clickHandler = () => navigate('/');

    return <div onClick={clickHandler} className={css.logo}>{logo}</div>
}

export default Logo;