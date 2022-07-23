import React, { Component } from 'react';

class List extends Component {
    constructor (props){
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.todo.map((el, i) => 
                <ul key={i}>
                    {console.log('info',el)}
                    <li>List component: - {el}</li>
                </ul>
                )}
            </div>
        );
    }
}

export default List;