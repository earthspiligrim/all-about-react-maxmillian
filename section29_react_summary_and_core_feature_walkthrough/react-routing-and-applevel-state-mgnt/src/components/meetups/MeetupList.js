import MeetupItem from './MeetupItem';
import meetupListStyles from './MeetupList.module.css';

function MeetupList(props){
    return (
        <ul className={meetupListStyles.list}>
            {props.meetups.map((everyMeetupItem) => <MeetupItem 
                                                        key={everyMeetupItem.id} 
                                                        id={everyMeetupItem.id}
                                                        image={everyMeetupItem.image}
                                                        title={everyMeetupItem.title}
                                                        address={everyMeetupItem.address}
                                                        description={everyMeetupItem.description}
                                                        src={everyMeetupItem.src}
                                                        />)}
            {/* key prop is  */}
        </ul>
    );
}

export default MeetupList;