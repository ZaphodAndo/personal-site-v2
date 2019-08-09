import React, { Component } from 'react'
import Meta from '../components/Meta';
import Header from '../components/Header';

export default class about extends Component {
    render() {
        return (
            <div>
                <Meta></Meta>
                <Header></Header>
                <div>
                    This is the about page 🦀
                </div>
            </div>
        )
    }
}
