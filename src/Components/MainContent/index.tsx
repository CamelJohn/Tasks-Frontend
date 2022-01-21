import css from './styles.module.scss';

const MainContent: React.FC<{}> = ({ children }) => {
  return <section className={css.container}>{children}</section>;
};

export default MainContent;
