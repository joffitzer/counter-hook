import React from 'react'

class ClassCounter extends React.Component{

    state = {
        count: 0
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.incrementCount}>Count: {this.state.count}</button>
            </div>
        )
    }

}

export default ClassCounter;