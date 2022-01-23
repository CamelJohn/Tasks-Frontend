import './App.scss';
import React from 'react';

import Header from './Components/Header';
import MainContent from './Components/MainContent';
import MainLayout from './Components/MainLayout';
import Sidenav from './Components/Sidenav';
import MainRouter from './Components/Router/router';

export default function App() {
  const [isSidenavOpen, setIsSidenavOpen] = React.useState(false);

  return (
    <div className="App">
      <Header isSidenavOpen={isSidenavOpen} setIsSidenavOpen={setIsSidenavOpen}/>
      <MainLayout>
        <Sidenav isSidenavOpen={isSidenavOpen} />
        <MainContent>
          <MainRouter />
        </MainContent>
      </MainLayout>
    </div>
  );
}
