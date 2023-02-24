import MeetupList from "../components/meetups/meetup-list/meetup-list";
import { MongoClient } from "mongodb";

function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups}/>
    );
}

/*export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
    }
}*/

// calls during pre-rendering process before HomePage function called.
export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect(
        'mongodb+srv://sangayt:8OnOOwWqDDrFwWq9@cluster0.gjdigvl.mongodb.net/meetup?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                id: meetup._id.toString(),
                title: meetup.title,
                address: meetup.address,
                image: meetup.image
            }))
        },
        // regenerate the page after 1 seconds
        revalidate: 1
    }
}

export default HomePage;
