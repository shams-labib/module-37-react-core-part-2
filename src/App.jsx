import  Counter from './counter'
import './App.css'
import Batsman from './Batsman'
// import Users from './users'
import { Suspense } from 'react'
import Friends from './friends'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())

// second data fetch kortesi practice hisebe
const FriendsFetch = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

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

      <Suspense fallback={<h3>Loading....</h3>}>
      <Friends FriendsFetch={FriendsFetch}></Friends>
      </Suspense>
        
        {/* <Suspense fallback={<h3>Loadning.....</h3>}>
        <Users fetchUsers ={fetchUsers}></Users>
        </Suspense> */}
      
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
