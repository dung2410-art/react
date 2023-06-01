import React from "react";
import AddTodo from "./AddTodo";
//import "./ListTodo.scss";


class ListTodo extends React.Component {

    state = {
        listTodos: [
            {
                id: 'todo1',
                title: 'Doing homework'
            },
            {
                id: 'todo2',
                title: 'Doing homework1'
            },
            {
                id: 'todo3',
                title: 'Doing homework2'
            }
        ],

        EditTodo: {

        }

    }


    addNewTodo = (todo) => {
        // let currentListTodo = this.state.listTodos;
        // currentListTodo.push(todo)
        this.setState({
            ListTodos: [...this.state.listTodos, todo]
            // listTodos: currentListTodo
        })
    }


    handleDeletetodo = (todo) => {
        let currenttodos = this.state.listTodos;
        currenttodos = currenttodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currenttodos
        })
        // toast.success('delete successfully')
    }

    handleEditTodo = (todo) => {
        let [EditTodo, listTodos] = this.state
        let isEmptyObj = Object.keys(EditTodo).length === 0;
        if (isEmptyObj === false && EditTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id == todo))

            listTodosCopy[objIndex].title = EditTodo.title

            this.setState({
                listTodos: listTodosCopy
            })
            return;
        }
        this.setState({
            EditTodo: todo
        })

    }

    handleonChangeEditTodo = (event) => {
        let editTodoCopy = [...this.state.EditTodo];
        editTodoCopy.title = event.target.value;
        this.setState({
            EditTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, EditTodo } = this.state

        let isEmptyObj = Object.keys(EditTodo).length === 0
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span> {index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {EditTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={EditTodo.title}

                                                        onChange={(event) => this.handleonChangeEditTodo(event)} />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>
                                    }
                                    {/* <input value ={item.title}/> */}
                                    <button
                                        onClick={() => this.handleEditTodo(item)}

                                    >
                                        {isEmptyObj === false && EditTodo.id === item.id ?
                                            'Save' : 'Edit'}
                                    </button>
                                    <button onClick={() => this.handleDeletetodo(item)}>Delete</button>
                                </div>
                            )
                        }
                        )}
                </div>
            </div>
        )
    }

}

export default ListTodo;