import './todo.css';
import {useState} from'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(propsObjectName) {
    const [ elementOneVariable, elementTwoVariable ] = useState(false);// these hooks can be only called in direct component function; argument is the starting value
    //use state will always return array of two elements
    //firstelement in the array is the current states snapshot --> here the value false is passed so it will take false
    // secondelement in the array is the function which allows you to change the value (state of the component)

    let actionFromModal = null;

    function okHandler(){
        elementTwoVariable(true);
    }

    function closeHandler() {
        elementTwoVariable(false);
    }

    return (
    <div className='card'>
        <h2>{propsObjectName.title}</h2>
        <div className='actions'>
            {actionFromModal}
        <button className='btn' onClick={okHandler}>OK</button>
        {/* <button className="btn">CANCEL</button> */}
        </div>
        { elementOneVariable ? <Modal ifClickedConfirmed= {closeHandler} ifClickedCancel= {closeHandler}/>: null }
        { /* alternative tot he ternary expression  */ }
        { /* {elementOneVariable && <Modal/>}  */ }
        {elementOneVariable && <Backdrop ifClicked = {closeHandler} /> }
        {/* ida paina line lo manam ifClicked ani event ni define chestunam and ala chesi closeHandler kilink chestunam */}
      </div>
    );
}


export default Todo;
