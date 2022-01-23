import { Route, Routes } from 'react-router-dom';
import Tasks from '../Tasks';

import Welcome from '../Welcome';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/tasks" element={<Tasks />}/>
    </Routes>
  );
};

export default MainRouter;
