import React from "react";


class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleonChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleonClickAddTodo = () => {
        let todo = {
            id: Math.floor(Math.random() * 10),
            title: this.state.title
        }

        console.log(todo)

        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }

    render() {

        let { title } = this.state
        return (

            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleonChangeTitle(event)}
                />
                <button type="button"
                    onClick={() => this.handleonClickAddTodo()}
                >
                    Add
                </button>
            </div>
        )
    }

}

export default AddTodo