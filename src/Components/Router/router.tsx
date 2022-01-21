import { Route, Routes } from 'react-router-dom';
import Welcome from '../Welcome';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
};

export default MainRouter;
