import React from 'react';
import ChildComponent from './childcomponent';
/*
    JSX => return 1 khối div
*/
class MyComponent extends React.Component {

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
                <form >
                    <label for="fname">First name:</label><br />
                    <input 
                        type="text"  
                        value={this.state.firstname} 
                        onChange={(event) => this.handleChangeFirstname(event)}
                        />
                        
                        <br />
                    <label for="lname">Last name:</label><br />
                    <input 
                        type="text"  
                        value={this.state.lastname} 
                        onChange={(event) => this.handleChangeLastname(event)}
                        />
                        <br /><br/>
                        <input type="submit"  
                        
                        onClick={(event) => this.handleSubmit()}
                        />
                </form>

                
            </>
        )
    }
}

export default MyComponent;