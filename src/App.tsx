import './App.scss';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import MainLayout from './Components/MainLayout';
import MainRouter from './Components/Router/router';
import Sidenav from './Components/Sidenav';

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainLayout>
        <Sidenav />
        <MainContent>
          <MainRouter />
        </MainContent>
      </MainLayout>
    </div>
  );
}
