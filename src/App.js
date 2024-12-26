import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddFood from './AddFood';
import FoodList from './FoodList';
import db from './food.json';
import EditFood from './Edit-Food';

function App() {
  console.log("DB: " + db);

  return (
    <div className="App">
      <nav>
        <Link className='link' to="/" >Home</Link>
        <Link className='link' to="/food" >Food</Link>
        <Link className='link' to="/add" >Add New Food</Link>
        <Link className='link' to="/about" >About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<FoodList data={db} />} />
        <Route path="/add" element={<AddFood data={db} />} />
        <Route path="/edit/:id" element={ <EditFood data={db} /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
