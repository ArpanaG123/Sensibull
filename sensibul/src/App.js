import './App.css';
import TableData from './components/TableData';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/"  element = {<TableData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
