import React, { Component } from 'react'
import Meta from '../components/Meta';
import Header from '../components/Header';

export default class articles extends Component {
    render() {
        return (
            <div>
                <Meta></Meta>
                <Header></Header>
                <div>Welcome to the articles page! 📚🧾</div>
            </div>
        )
    }
}
