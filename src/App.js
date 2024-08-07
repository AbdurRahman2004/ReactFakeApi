import React, { useState } from "react";
import "./App.css";

function App(){

  const [response , setResponse] = useState([]);


  async function fetchItem(type){
    try{
      const res = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
      if(!res.ok) throw Error("Please reload the app");
      const data = await res.json();
      setResponse(data);
    }
    catch(err){
      console.log(err.message);
    }
  }


  return (
    <div>
      <div className="container">
        <header className="heading">
          <button onClick={async ()=>{await fetchItem('users')}}>User</button>
        </header>
        <header className="heading">
          <button onClick={async ()=>{await fetchItem('comments')}}>comments</button>
        </header>
        <header className="heading">
          <button onClick={async ()=>{await fetchItem('posts')}}>posts</button>
        </header>
      </div>

    <p>
      {
        (response.length > 0)?
      JSON.stringify(response) : 'No data Is Available'
}
    </p>
    </div>
  )
}

export default App;