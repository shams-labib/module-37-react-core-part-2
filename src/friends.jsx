import { use } from "react"
import Friend from './friend'

export default function friends({FriendsFetch}) {

    const userFriends = use(FriendsFetch);
    return(
        <div  className="cards">
            <h3>Friends : {userFriends.length} </h3>

            {
                userFriends.map(friend => <Friend key={friend.id} friend = {friend}></Friend>)
            }
        </div>
    )
}