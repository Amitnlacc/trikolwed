import './Person.css';
const person = (props) =>{
    return (
        <div className="Person">
            <h1 onClick={props.click}>Hi I'm from Person Name : {props.name} &amp; age: {props.age}</h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    );
}
export default person;
