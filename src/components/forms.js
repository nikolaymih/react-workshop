import React, { Component } from 'react';
import './Demо.css';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'Tsveti',
            age: 20,
            bio: '',
            profession: 'unemployed',
            errors: {
                email: false
            }
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);

        this.emailInput = React.createRef()
    }

    submitHandler(e) {
        e.preventDefault();

        const { username, age, bio } = this.state;


        if (!this.emailInput.current.value.includes('@')) {
            console.log('test');
            this.setState({ errors: { email: true } })

            this.emailInput.current.focus()
        }
    }


    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Demo js</h1>

                <form >
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.onChangeHandler} />
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" name="age" value={this.state.age} onChange={this.onChangeHandler} />

                    <label htmlFor="email">Email</label>
                    <input
                        ref={this.emailInput}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com" />
                    <div className={`input-validation ${this.state.errors.email && 'show'}`}>Invalid email</div>


                    <textarea name="bio" value={this.state.bio} onChange={this.onChangeHandler} />

                    <label htmlFor="occupation">Please select</label>
                    <select name="occupation" id="occupation" value={this.state.profession} onChange={this.onChangeHandler}>
                        <option value="it">It</option>
                        <option value="engineer">Engineer</option>
                        <option value="unemployed">Unemployed</option>
                    </select><br />

                    <input type="submit" value="Send" onClick={this.submitHandler.bind(this)} />
                </form>
            </div>
        )
    }
}

export default Form