import React, { Component } from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import theme from '../components/styles/theme';

const FooterContent = styled.footer`
    text-align: center;
    margin-top: 100px;

    a {
        text-decoration: none;
        color: ${props => props.theme.text};
        padding: 1rem .5rem;
    }
    a:hover {
        color: white;
    }
`;

export default class Footer extends Component {
    render() {
        return (
            <FooterContent theme={theme}>
                <Link href="https://ethana.dev/about.html">
                    <a>Twitter</a>
                </Link>
                <Link href="https://www.linkedin.com/in/ethan-anderson-41ba9a172/">
                    <a>LinkedIn</a>
                </Link>
                <Link href="https://medium.com/@ethan.anderson">
                    <a>Medium</a>
                </Link>
                <Link href="https://github.com/MrGoebbels">
                    <a>Github</a>
                </Link>
            </FooterContent>
        )
    }
}
