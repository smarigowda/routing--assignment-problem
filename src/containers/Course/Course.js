import React, { Component } from 'react';

class Course extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render () {
        let queryString = new URLSearchParams(this.props.location.search);

        return (
            <div>
                <h1>{queryString.get('title')}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;