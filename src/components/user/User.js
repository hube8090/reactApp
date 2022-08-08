import React from 'react';

function User(props) {
    return (
        <div >
            <h1>User</h1>
            <ul>
                {props.users.map((user, key) => <li key={key}>{user}</li>)}
            </ul>
        </div>
    );
}

export default User;