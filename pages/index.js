import MeetupList from "../components/meetups/meetup-list/meetup-list";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        image: 'https://www.re-thinkingthefuture.com/wp-content/uploads/2021/08/A4877-10-biggest-waterparks-in-the-world-Image-16.jpg',
        title: 'A first meetup',
        address: 'Street 123, Singapore',
        description: 'This is first meetup'
    },
    {
        id: 'm2',
        image: 'http://www.erholen-im-spreewald.de/wp-content/uploads/2017/07/TI_TROPINOCLUB-BUMPERBOATS6_RGB.jpg',
        title: 'A second meetup',
        address: 'Street 234, UK',
        description: 'This is second meetup'
    },
];

function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups}/>
    );
}

// calls during pre-rendering process before HomePage function called.
export async function getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}
export default HomePage;
