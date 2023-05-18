function Profile(props) {
    console.log(props);
    return (
        <h1>
            Name : {props.name} {props.lastname}
        </h1>
    );  
}
export default Profile;