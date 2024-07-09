import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import { useSelector , useDispatch } from 'react-redux';
import { store } from './redux/store';
import { increment } from './redux/action';
import Counter from './counter';

function App() {

  return (
    <Provider store={store}>

    <div className="App">
     <Counter/>
    </div>
    </Provider>
  );
}

export default App;
