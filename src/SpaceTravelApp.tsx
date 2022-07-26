import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';

function SpaceTravelApp() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default SpaceTravelApp;
