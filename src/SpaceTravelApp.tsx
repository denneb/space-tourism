import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

function SpaceTravelApp() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default SpaceTravelApp;
