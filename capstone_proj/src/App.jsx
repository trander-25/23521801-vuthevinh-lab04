import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { PostDetail } from './pages/PostDetail';

// Root component that wraps everything with AuthProvider
const Root = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

// Create the router with all routes
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Root>
        <Login />
      </Root>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <Root>
        <ProtectedRoute />
      </Root>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'post/:postId',
        element: <PostDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
