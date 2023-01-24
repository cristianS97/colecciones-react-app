import './styles/styles.scss';
// Rect router
import { RouterProvider } from "react-router-dom";
// Mis importaciones
import { router } from './router/routes';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
