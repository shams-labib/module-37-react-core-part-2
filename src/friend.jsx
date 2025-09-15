export default function friend({friend}){

    console.log(friend)
    const {name, email, id} = friend;

    return(
        <div className="cards">
            <h3>ID: {id}</h3>
            <h4>Name : {name} </h4>
            <p>Email : {email}</p>
        </div>
    )
}