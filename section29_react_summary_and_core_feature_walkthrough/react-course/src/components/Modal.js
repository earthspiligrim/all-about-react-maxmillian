function Modal(props) {

    function onClickedConfirmed() {
        props.ifClickedConfirmed();
        // calling the event defined the parent
    }
    
    function onClickedCancel() {
        props.ifClickedCancel();
        // calling the event defined the parent
    }

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={onClickedCancel}>Cancel</button>
            {/* connecting to the onClickedCancel call */}
            <button className='btn' onClick={onClickedConfirmed}>Confirm</button>
        </div>
    );
}

export default Modal;