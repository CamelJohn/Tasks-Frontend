import React from 'react';
import css from './styles.module.scss';
import SidenavService from '../../services/sideanv.service';
import Styles from '../../services/style.service';

const MainContent: React.FC<{}> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const sidenavStateSubscription = SidenavService.state.subscribe(state => setIsOpen(state));
    
    return sidenavStateSubscription.unsubscribe();
  }, []);

  const mainContentStyles = Styles.concatenatedStyles([css.container, isOpen ? 'open' : 'closed']);

  return <section onClick={() => SidenavService.close()} className={mainContentStyles}>{children}</section>;
};

export default MainContent;
