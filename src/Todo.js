import React, { Component } from "react";
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: this.props.todo,
            isEdit: false,
            isCompleted: false
        }
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.editButton = this.editButton.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleRemoveTodo() {
        this.props.removeTodo(this.props.id)
    }


    onSubmit(evt) {
        evt.preventDefault()
        this.props.editTodo(this.props.id, this.state.todo)
        this.setState({
            todo: this.state.todo,
            isEdit: false
        })
    }

    onChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    editButton() {
        this.setState({
            isEdit: true,
        })
    }

    handleToggle(evt) {
        this.setState({
            isCompleted: !this.state.isCompleted
        })
    }

    render() {

        const renderForm = this.state.isEdit
            ?
            <div className="Todo">
                <form
                    className="Todo-edit-form"
                    onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="todo"
                        value={this.state.todo}
                        onChange={this.onChange}
                    />
                    <button>SAVE</button>
                </form >
            </div>
            : ""

        const isEditing = !this.state.isEdit
            ? <div className="Todo">
                <li
                    onClick={this.handleToggle}
                    className={this.state.isCompleted ? "Todo-task completed" : "Todo-task"}>
                    {this.props.todo}
                </li>
                <div className="Todo-buttons">
                    <button onClick={this.editButton}>
                        <i className="fas fa-pen"></i>
                    </button>
                    <button onClick={this.handleRemoveTodo}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            : ""

        return (
            <div>
                {isEditing}
                {renderForm}
            </div>

        )
    }
}

export default Todo;