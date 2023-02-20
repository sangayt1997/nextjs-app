//our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/new-meetup-form/new-meetup-form";

function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    );
}

export default NewMeetupPage;
