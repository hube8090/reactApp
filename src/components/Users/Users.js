function Users (props) {
    console.log(props)
}
return (
    <ul> 
        {props.users.map(user => <li key={user.id}></li>)}     //dopolnenie</ul>
)