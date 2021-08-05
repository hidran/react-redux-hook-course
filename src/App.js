
import './App.css';
const happy = <h2>I am happy</h2>

function  getDate(date) {
  return date.toLocaleDateString() + ' ' +  date.toLocaleTimeString() 
}
function app() {
  return (
    <>
    <div className="App">
      <h1> My first react app</h1>
    </div>
      
      {happy}
      {4 + 4}
      <h2> Today is {getDate(new Date())}</h2>
      <h2>  {getDate(new Date())}</h2>
        <h2>{ getDate(new Date()) }</h2>
      </>
  );
}

export default app;
