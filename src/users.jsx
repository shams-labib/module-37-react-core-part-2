import { use } from "react"

export default function users({fetchUsers}){

  const users = use(fetchUsers);
//   console.log(users)



    return(
        <div className="cards">
            <h3>Users : {users.length} </h3>
        </div>
    )
}