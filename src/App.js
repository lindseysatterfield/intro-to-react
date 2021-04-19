import './App.css';
import Counter from './Counter';

const App = () => {
  const array = [
    {
      appName: "Counter 1",
      initialValue: 200
    },
    {
      appName: "Counter 3",
      initialValue: 0
    },
    {
      appName: "Counter 3",
      initialValue: 100
    },
    {
      appName: "Counter 4",
      initialValue: 15
    }
  ];

  return (
    <>
      {array.map((counter, i) => <Counter key={i} appName={counter.appName} initialValue={counter.initialValue}/>)}
    </>
  )
}

export default App;
