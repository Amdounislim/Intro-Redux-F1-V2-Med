import './App.css';
import Counter from './components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from './JS/Actions/showCounter';

function App() {
  const dispatch = useDispatch()
  const show = useSelector(state => state.reducerShow.show)
  return (
    <div className="App">
      <button onClick={() => dispatch(toggle())}>SHOW</button>
      {show ? <Counter /> : null}
    </div>
  );
}

export default App;
