import AppRouter from './app-routes/AppRouter';
import Navbar from './components/Navbar/Navbar';

import './main.scss'


function App() {
  return (
    <div className="App">
   
     <AppRouter/>
     <Navbar/>
    
    </div>
  );
}

export default App;
