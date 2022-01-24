import React from 'react';
import SidenavService from '../services/sideanv.service';

const useSidenav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const sidenavStateSubscription = SidenavService.state.subscribe((state) =>
      setIsOpen(state)
    );

    return () => sidenavStateSubscription.unsubscribe();
  }, []);

  return isOpen;
};

export default useSidenav;
