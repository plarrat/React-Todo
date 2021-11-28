import TodoList from './TodoList';
import './../css/App.css';
import { useState } from 'react';

function App() {
  const [liste, setListe] = useState([]);
  const [todoGroup, setTodoGroup] = useState("");
  const [nbTotal, setNbTotal] = useState(0);

  const addTodoGroup = ()=>{
    let obj = {titre:todoGroup, nb:0};
    setListe((liste)=>[...liste, obj]);
    setTodoGroup("");
  }

  const majNb = (id,nb)=>{
    let tmpListe = [...liste];
    tmpListe[id].nb = nb;
    setListe(tmpListe);
    let total = 0;
    tmpListe.forEach(obj=>total+=obj.nb);
    setNbTotal(total);
  }

  const displayTodoGroup = liste.map((item, id)=>{
    return (
      <div className="col-md-6" key={"todo-"+id.toString()}>
        <TodoList idTodo={id} majNb={majNb}  titre={item.titre}></TodoList>
      </div>
    );
  })

  
  
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a className="navbar-brand" href="#">TodoList</a>
          </div>
        </nav>
      </header>

      <section className="container ">
        <div className="row mt-5 mb-5">
          <div className="col">
            <h1>Gestion des todoList ({nbTotal})</h1>
            <hr />
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6">
            <div class="input-group mb-3">
              <input type="text" value={todoGroup} onChange={e=>setTodoGroup(e.target.value)} class="form-control" placeholder="Titre de la nouvelle todo liste"  />
              <button onClick={addTodoGroup} class="btn btn-outline-secondary" type="button" id="button-addon2">+ Créer</button>
            </div>
          </div>
        </div>

        <div className="row">
          {displayTodoGroup}
        </div>

      </section>
    </div>
  );
}

export default App;
