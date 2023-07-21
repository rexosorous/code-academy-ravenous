import './App.css';

import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';

const businesses = [
  {
    imageSrc:
      "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Bordertown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  }
];


function App() {
  return (
    <div className="App">
      <SearchBar />
      <ul>
        <BusinessList businesses={businesses} name='test' />
      </ul>
    </div>
  );
}

export default App;
