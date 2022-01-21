import { BrowserRouter } from 'react-router-dom';
import css from './styles.module.scss';

const MainContent: React.FC<{}> = ({ children }) => {
  return (
    <BrowserRouter>
      <section className={css.container}>{children}</section>
    </BrowserRouter>
  );
};

export default MainContent;
