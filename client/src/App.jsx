import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </div>
  );
};

export default App;