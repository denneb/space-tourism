import { Route, Routes } from 'react-router-dom';
import { CrewPage } from '../pages/Crew';
import { DestinationPage } from '../pages/Destination';
import { Home } from '../pages/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='destination' element={<DestinationPage />} />
      <Route path='crew' element={<CrewPage />} />
      <Route path='technology' element={<Home />} />
    </Routes>
  );
};
