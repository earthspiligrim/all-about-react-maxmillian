import MeetupList from '../components/meetups/MeetupList';
const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      src:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',

    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      src:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

function AllMeetup() {
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA}/>
        </section>
    );
}

export default AllMeetup;