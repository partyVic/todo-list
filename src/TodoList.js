import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from './Todo'
import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoLists: []
        }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
    }

    addTodo(item) {
        this.setState({
            todoLists: [...this.state.todoLists, item]
        })
    }

    editTodo(id, todo) {
        const newTodo = this.state.todoLists.map(n => {
            if (n.id === id) {
                return { ...n, todos: todo }
            } else {
                return n
            }
        })
        this.setState({
            todoLists: newTodo
        })
    }

    removeTodo(id) {
        this.setState({
            todoLists: this.state.todoLists.filter(n => n.id !== id)
        })
    }

    render() {

        const todos = this.state.todoLists.map(todo => (
            <Todo
                todo={todo.todos}
                id={todo.id}
                key={todo.id}
                removeTodo={this.removeTodo}
                editTodo={this.editTodo}
            />
        ))

        return (
            <div className="TodoList">
                <h1>
                    Todo List <span>Powered by React</span>
                </h1>
                <ul>{todos}</ul>
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodoList;