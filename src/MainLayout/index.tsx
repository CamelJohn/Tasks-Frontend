import React from 'react';
import css from './styles.module.scss';

const MainLayout: React.FC<{}> = ({ children }) => {
  return <div className={css.main}>{children}</div>;
};

export default MainLayout;
