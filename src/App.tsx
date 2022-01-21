import './App.scss';
import Header from './Header';
import MainLayout from './MainLayout';
import Sidenav from './Sidenav';

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
