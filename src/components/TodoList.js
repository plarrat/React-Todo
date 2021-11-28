import { useState } from "react";
export default function TodoList(props){
    const [liste, setListe] = useState([]);
    const [todo, setTodo] = useState("");
    const {majNb} = props;

    const addTodo = ()=>{
        let tmpListe = [...liste];
        tmpListe.push(todo);

        setListe(tmpListe); 
        setTodo("");  
        majNb(props.idTodo, tmpListe.length);     
    }

    let lignes = liste.map((item, i)=>{
        return (
            <li key={props.idTodo +'-'+i} className="list-group-item">{item}</li>
        );
    });

    return (
        <div>
            <h2>
                {props.titre} ({liste.length})
            </h2>
            <hr/>

            <div class="input-group mb-3 mt-3">
              <input type="text" className="form-control" value={todo} onChange={(e)=>{setTodo(e.target.value)}} placeholder="Nouvelle tache"  />
              <button className="btn btn-secondary" type="button" id="button-addon2" onClick={addTodo}>+ Ajouter</button>
            </div>
            <ul className="mt-3 list-group list-group-flush">
                {lignes}
            </ul>
        </div>
    );
}