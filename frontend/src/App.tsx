import Grid from './components/Grid'
import './App.css'

const level = [
  ['.', '.', '.', '#', '.'],
  ['.', '#', '.', '#', '.'],
  ['.', '#', '.', '.', '.'],
  ['.', '.', '.', '#', '.'],
  ['#', '#', '.', '.', 'G'],
]

function App() {
  return (
    <div className="app">
      <h1>Python Quest 🤖</h1>
      <Grid tiles={level} />
    </div>
  )
}

export default App