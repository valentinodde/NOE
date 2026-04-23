import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/etablissement/:siret',
    element: <CompanyPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
