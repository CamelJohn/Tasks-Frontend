import css from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

const Logo: React.FC<{ logo: string }> = ({ logo }) => {
    const navigate = useNavigate();
    return <div onClick={() => navigate('/')} className={css.logo}>{logo}</div>
}

export default Logo;