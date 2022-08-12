import React from 'react';


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                isFetching: false,
                data: []
        }
    }

    componentDidMount() {
        this.setState({ isFetching: true });
        fetch("https://api.adviceslip.com/advice")
            .then(response => response.json())
            .then(data => this.setState({ data: data.slip.advice, isFetching: false }));
    }

 
    render() {
        return (
            <>
                <h1>This is the home page</h1>
                <p>{this.state.isFetching ? "Loading..." : this.state.data}</p>
            </>

            )
        }
    }
    
    export default Home;
