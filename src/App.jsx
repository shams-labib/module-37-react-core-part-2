import  Counter from './counter'
import './App.css'
import Batsman from './Batsman'

function App() {

  function handleClick(){
    alert('i am fucked yess.')
  }

  const addFunction=(num)=>{
    const newNumber = num + 5;
    alert(newNumber)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>







      <button onClick={handleClick}>Click me</button>
      <button onClick={()=> alert('i am cumming')}>Click me 2</button>

        {/* ekhane kono man pathaite gele direct function call kore dile react eta click korar agei etar result show koray dey, tai react e onClick e btn e event kaj koranor jonno arrow()=> function use kore tarpor fucntion dite hoy */}

      <button onClick={()=> addFunction(7)}>Click to add 5</button>
    </>
  )
}

export default App
