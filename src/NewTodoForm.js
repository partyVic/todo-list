import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: "",
            id: ""
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit(evt) {
        evt.preventDefault()
        const newTodos = { ...this.state, id: uuidv4() }
        this.props.addTodo(newTodos)
        this.setState({
            todos: ""
        })
    }

    onChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
            <form
                className="NewTodoForm"
                onSubmit={this.onSubmit}>
                <label htmlFor="todos">New Todo</label>
                <input
                    id="todos"
                    type="text"
                    name="todos"
                    value={this.state.todos}
                    onChange={this.onChange}
                    placeholder="New Todo"
                />
                <button>ADD TODO</button>
            </form>
        )
    }
}

export default NewTodoForm;