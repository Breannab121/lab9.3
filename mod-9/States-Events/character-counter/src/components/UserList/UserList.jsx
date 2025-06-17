import UserProfileCard from "../UserProfileCard/UserProfileCard";

function UserList () {
const users = [
    {id: 1, name: 'Bill', email: 'bill@gmail.com'},
    {id: 2, name: 'Steve', email: 'steve@apple'},
]

const userElement = users.map((user) => (
<UserProfileCard user={user} key={user.id}/>
));

    return (
        <div>
            <h2>User List</h2>
            {userElement}
        </div>
    )
}

export default UserList