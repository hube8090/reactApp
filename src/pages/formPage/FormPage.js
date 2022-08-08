import React from "react";

class FormPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                name: "",
                age: 0,
                username: ""
            },
            title: "I am initial title"
        }
    }


    componentDidMount() {
       this.setState(state: {
        ...this.state,                 //чтоб собрать все параметры к-е разбросаны
        title: "I am a new title"
       })

    //    console.log(this.state.title)   //asinhronnaya-все равно старый тайтл будет показывать
    }
       componentDidUpdate(prevState: Readonly <P> ) //чтобы новый тайтл пишем это
           if(this.state.title !== prevState.title) {
               console(this.state.title)
           }
    
       changeInput = (e) => {
        this.setState({
                data: {
                    ...this.state.data,
                    [e.target.name]: e.target.value
                }
            }
        )
    }

    submitData = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1> {this.state.title}</h1>
                <input
                    type="text"
                    placeholder="name"
                    onChange={this.changeInput}
                    name="name"
                />

                <input
                    type="number"
                    placeholder="age"
                    name="age"
                    onChange={this.changeInput}
                />

                <input
                    type="text "
                    placeholder="username"
                    name="username"
                    onChange={this.changeInput}
                />

                <button onClick={this.submitData}>register user</button>


            </div>
        );
    }
}


export default FormPage;