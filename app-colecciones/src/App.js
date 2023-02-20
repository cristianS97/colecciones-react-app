import './styles/styles.scss';
// Rect router
import { RouterProvider } from "react-router-dom";
// Mis importaciones
import { router } from './router/routes';
import AuthState from './reducer/state/authState';

function App() {
  return (
    <AuthState>
      <RouterProvider router={router} />
    </AuthState>
  );
}

export default App;
