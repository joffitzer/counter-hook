import React from 'react'

class IntervalClassCounter extends React.Component{
    
    state = {
        count: 0
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return <h1>{this.state.count}</h1>
    }
}

export default IntervalClassCounter;