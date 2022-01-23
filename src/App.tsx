import './App.scss';

import Header from './Components/Header';
import MainContent from './Components/MainContent';
import MainLayout from './Components/MainLayout';
import Sidenav from './Components/Sidenav';
import MainRouter from './Components/Router/router';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <MainLayout>
        <Sidenav />
        <MainContent>
          <MainRouter />
        </MainContent>
      </MainLayout>
    </div>
  );
}
