import './App.scss';
import Header from './Components/Header';
import MainLayout from './Components/MainLayout';
import Sidenav from './Components/Sidenav';

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainLayout>
        <Sidenav />
      </MainLayout>
    </div>
  );
}
