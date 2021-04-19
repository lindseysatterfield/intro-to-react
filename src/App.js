import './App.css';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter appName="Counter 1" initialValue={200}/>
      <Counter appName="Counter 2" initialValue={200}/>
      <Counter appName="Counter 3" initialValue={200}/>
    </>
  )
}

export default App;
