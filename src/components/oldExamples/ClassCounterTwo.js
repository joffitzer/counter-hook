import React from 'react'

class ClassCounterTwo extends React.Component{

    state = {
        count: 0,
        name: ''
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count){
            console.log('Updating document title')
            document.title = `Clicked ${this.state.count} times`
        }
    }

    // incrementCount = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    render() {
        return(
            <div>
                <input 
                    type="text" 
                    value={this.state.name}
                    onChange={e => {
                        this.setState({ name: e.target.value})
                    }}
                />
                <button onClick={() => this.setState({count: this.state.count + 1})}>Count: {this.state.count}</button>
            </div>
        )
    }

}

export default ClassCounterTwo;