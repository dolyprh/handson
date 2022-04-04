import './App.css';
import { useEffect } from 'react'
import SearchAPI from './pages/home/index';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <SearchAPI />
    </Provider>
  );
}

export default App;
