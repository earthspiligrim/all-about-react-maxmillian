import meetupItemStyles from './MeetupItem.module.css';

// ila kuda props pass cheyochu
// function MeetupItem(props){
//     return (
//         <li className={meetupItemStyles.item}>
//             <div className={meetupItemStyles.image}>
//                 {console.log()}
//                 <img src={props.src} alt={props.title}/>
//             </div>
//             <div className={meetupItemStyles.content}>
//                 <h3>{props.title}</h3>
//                 <address>{props.address}</address>
//                 <p>{props.description}</p>
//             </div>
//             <div className={meetupItemStyles.actions}>
//                 <button>To Favourites</button>
//             </div>
//         </li>
//     );
// }

//standard way to write components and pass props
function MeetupItem({src, title='', address='', description}){
    return (
        <li className={meetupItemStyles.item}>
            <div className={meetupItemStyles.image}>
                <img src={src} alt={title}/>
            </div>
            <div className={meetupItemStyles.content}>
                <h3>{title}</h3>
                <address>{address}</address>
                <p>{description}</p>
            </div>
            <div className={meetupItemStyles.actions}>
                <button>To Favourites</button>
            </div>
        </li>
    );
}

export default MeetupItem;