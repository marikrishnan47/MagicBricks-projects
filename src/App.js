import logo from './logo.svg';
import './App.css';
import SearchAppBar from './PropertiesComponents/PropertieSearchBar';
import { PropertySale } from './PropertiesComponents/PropertySale';


function App() {
  return (
    <div className="App">
     <SearchAppBar/>  
     <PropertySale/>     
    </div>
  );
}

export default App;
