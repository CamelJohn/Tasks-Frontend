import React from 'react';
import css from './styles.module.scss';
import SidenavService from '../../services/sideanv.service';
import Styles from '../../services/style.service';
import useSidenav from '../../hooks/useSidenav';

const MainContent: React.FC<{}> = ({ children }) => {
  const isOpen = useSidenav();

  const mainContentStyles = Styles.concatenatedStyles([css.container, css[isOpen ? 'open' : 'closed']]);

  return <section onClick={() => SidenavService.close()} className={mainContentStyles}>{children}</section>;
};

export default MainContent;
