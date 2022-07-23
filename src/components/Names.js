import React, { Component } from 'react';

class Names extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div>
                {this.props.todo.map((user, key)=>
                <ul key={key}>
                    <li>Names component: - {user}</li>
                </ul>
                )}
                <ul>
                    <li>
                        
                    </li>
                </ul>
            </div>
        );
    }
}

export default Names;