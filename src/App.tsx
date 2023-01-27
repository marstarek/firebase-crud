import { useState,useEffect } from 'react';
import './App.css'

import { db } from './firebase-config';
import { collection,getDocs  } from "firebase/firestore"; 

function App() {
  const [users, setUsers] = useState([])
  const CollectionReference = collection(db, 'users');
  useEffect(() => {
    const getUsers = async () => {
      
      const data = await getDocs(CollectionReference);
      // @ts-ignore
     setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
     console.log(data);

    } 

    getUsers()
 
  }, [])
  
  return (
    <div className="App">

      
     
    </div>
  )
}

export default App
