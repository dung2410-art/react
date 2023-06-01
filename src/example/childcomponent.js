import React from 'react';
/*
    JSX => return 1 khối div
*/

//props truyền data từ cha => con
class ChildComponent extends React.Component {

    state = {
        firstname: '',
        lastname: ''
    }

    handleChangeFirstname = (event) => {
        this.setState(
            {
                firstname : event.target.value
            }
        )
    }

    handleChangeLastname = (event) => {
        this.setState(
            {
                lastname : event.target.value
            }
        )
    }

    
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('', this.state)
    }

    render() {

        return (
            <>
             <div>Child Component : {this.props.name}</div>
            </>
        )
    }
}

export default ChildComponent;