import './App.css';
import Example from './components/pages/Example'

function App() {
  return (
    <>
      <Example done={90} />
      <Example done={50} />
      <Example done={30} />
    </>
  )
}

export default App;
