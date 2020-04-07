import React from 'react'

class ClassCounterTwo extends React.Component{

    state = {
        count: 0
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = `Clicked ${this.state.count} times`
    }

    // incrementCount = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    render() {
        return(
            <div>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Count: {this.state.count}</button>
            </div>
        )
    }

}

export default ClassCounterTwo;