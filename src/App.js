import logo from './logo.svg';
import './App.css';
import Home from './component/Home';

import DataProvider from './context/DataProvider';
function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
