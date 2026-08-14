import { createBrowserRouter } from 'react-router-dom';
import Login from './features/Auth/pages/Login'
import Register from './features/Auth/pages/Register';
import { Protected } from './features/Auth/components/Protected';
import Restricted from './features/Auth/components/Restricted';
import Dashboard from './features/Student/pages/Dashboard';
import AdminDashboard from './features/admin/pages/AdminDashboard';
import RoleProtectedRoute from './features/Auth/components/RoleProtectedRoute';

export const AppRoute = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  }, {
    path: '/register',
    element: <Register />
  }, {
    path: '/student',
    element:
      <Protected>
        <RoleProtectedRoute allowedRole='student'>
          <Dashboard />
        </RoleProtectedRoute>
      </Protected>
  },
  {
    path: '/admin',
    element:
      <Protected>
        <RoleProtectedRoute allowedRole='admin'>
          <AdminDashboard />
        </RoleProtectedRoute>
      </Protected>
  }, {
    path: '/unauthorized',
    element: <Restricted />
  }
])