import { Route, Routes } from 'react-router-dom';

import Categories from '../Categories';
import Dashboard from '../Dashboard';
import Profile from '../Profile';
import Tasks from '../Tasks';
import Welcome from '../Welcome';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/tasks" element={<Tasks />}/>
      <Route path="/categories" element={<Categories />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default MainRouter;
