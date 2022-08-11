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
            <h2>{this.state.data}</h2>
            </>

            )
        }
    }
    
    export default Home;