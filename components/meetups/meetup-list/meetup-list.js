import MeetupItem from '../meetup-item/meetup-item';
import classes from './meetup-list.module.css';

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => (
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                />
            ))}
        </ul>
    );
}

export default MeetupList;
