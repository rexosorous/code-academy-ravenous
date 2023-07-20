import './App.css';

import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <ul>
        <BusinessList />
      </ul>
    </div>
  );
}

export default App;
