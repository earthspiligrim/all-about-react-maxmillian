function Backdrop(props) {
    return <div className='backdrop' onClick={props.ifClicked}/>
    // directly linking to the event prop
}

export default Backdrop;