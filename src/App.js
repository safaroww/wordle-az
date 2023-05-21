import { useEffect, useState } from 'react';
import Wordle from './components/Wordle'


function App() {
  const [solution, setSolutions] = useState(null)


  useEffect(() => {
    fetch('http://localhost:3001/solutions').then(res => res.json()).then(json => {
      const randomSolution = json[Math.floor(Math.random() * json.length)]
      setSolutions(randomSolution.word)
      console.log(solution)
    })
  }, [setSolutions])

  return (
    <div className="App">
      <h1 style={{fontSize: '24px'}}>Wordle AZ</h1>
      { solution &&  <Wordle solution={solution}/>}
    </div>
  );
}

export default App;
