import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Navigation from './components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <div className = "App">
        <Navigation />
        <Routes />
      </div>
    </Router> 
  );
}

export default App;
