import MeetupDetail from "../../components/meetups/meetup-detail/meetup-detail";

function MeetupDetails() {
    return (
        <MeetupDetail
            image="http://www.erholen-im-spreewald.de/wp-content/uploads/2017/07/TI_TROPINOCLUB-BUMPERBOATS6_RGB.jpg"
            title="A first meetup"
            address="Street 12, UK"
            description="The first meetup."
        />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            {
                params: {
                    meetupId: 'm2',
                }
            }
        ]
    }
}
export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log(meetupId);

    // fetch data for single meetup
    return {
        props: {
            meetupData: {
                id: meetupId,
                image: "http://www.erholen-im-spreewald.de/wp-content/uploads/2017/07/TI_TROPINOCLUB-BUMPERBOATS6_RGB.jpg",
                title: "A first meetup",
                address: "Street 12, UK",
                description: "The first meetup."
            }
        }
    }
}
export default MeetupDetails;
