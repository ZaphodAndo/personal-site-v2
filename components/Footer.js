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
                <Link href="https://twitter.com/ethan_ando">
                    <a target="_blank" rel="noopener">Twitter</a>
                </Link>
                <Link href="https://www.linkedin.com/in/ethan-anderson-41ba9a172/">
                    <a target="_blank" rel="noopener">LinkedIn</a>
                </Link>
                <Link href="https://medium.com/@ethan.anderson">
                    <a target="_blank" rel="noopener">Medium</a>
                </Link>
                <Link href="https://github.com/ZaphodAndo">
                    <a target="_blank" rel="noopener">Github</a>
                </Link>
            </FooterContent>
        )
    }
}
