import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StudyOSProvider } from './context/StudyOSContext';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Subjects } from './pages/Subjects';
import { Calendar } from './pages/Calendar';
import { Analytics } from './pages/Analytics';
import { Workout } from './pages/Workout';
import { Settings } from './pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'calendar', element: <Calendar /> },
      { path: 'subjects', element: <Subjects /> },
      { path: 'analytics', element: <Analytics /> },
      { path: 'workout', element: <Workout /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
]);

function App() {
  return (
    <StudyOSProvider>
      <RouterProvider router={router} />
    </StudyOSProvider>
  );
}

export default App;
