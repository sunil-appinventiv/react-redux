
import './App.css';
import { useSelector , useDispatch } from 'react-redux';

import { increment, decrement } from './redux/action';

function Counter() {
  const dispatch =useDispatch()
  const count = useSelector((state)=> state.count)
 
  return (
 <>
    <h1>Simple Redux Counter</h1>

      <button onClick={()=> dispatch(increment())}> INCREMENT </button>
       {count}
      <button onClick={()=> dispatch(decrement())}> DECREMENT </button>
    
      </>
    
  );
}

export default Counter;
