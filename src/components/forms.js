import { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }
    submitHandler(e){
        e.preventDefault();

        console.log(e.target.username.value);
    }

    onChangeHandler(e) {
        this.setState({username: e.target.value})
    }
    render() {
        return (
            <div>
                <h1>Demo js</h1>
    
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.onChangeHandler.bind(this)} />
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" name="age" defaultValue="24" />
                    <input type="submit" value="Send" />
                    <button>Click me</button>
                </form>
            </div>
        )
    }
}

export default Form