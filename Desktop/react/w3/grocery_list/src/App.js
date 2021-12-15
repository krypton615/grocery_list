
import './App.css';
import { GroceryList } from './grocerylist';
import image1 from './man.jpg';
import image2 from './shoping.jpg';
function App() {
  return (
    <div className='app'>
      <div className='container'><img src={image2} alt='shoping' width='200'/></div>
      <div className='container'><h1>Grocery List</h1></div>
      <GroceryList/>
      <div className='container'><img src={image1} alt='man' width='200'/></div>
    </div>
  );
}

export default App;
