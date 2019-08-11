import React, { Component } from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import theme from '../components/styles/theme';

const PostBlockContent = styled.div`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: ${props => props.theme.text};
    margin-bottom: 40px;

    h1 {
        margin-bottom: 0;
    }

    p {
        margin: 0;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        font-weight: 600;
        color: #81a5f8;
    }
    a:hover {
        color: ${props => props.theme.blue};
    }

    .tags {
        display: flex;
    }
`;

const Tag = styled.div`
    align-self: center;
    text-decoration: none;
    font-weight: 500;
    color: ${props => props.theme.blue};
    background-color: rgba(0,0,0,.2);
    padding: 10px;
    border-radius: 4px;
    max-height: 20px;
    margin-right: 5px;

    transform: translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover, &:focus, &:active {
        background: transparent;
        background-color: rgba(0,0,0,.1);
        color: #81a5f8;

        transform: scale(1.1);
    }
`;

export default class ArticleInfo extends Component {
    render() {
        return (
            <PostBlockContent theme={theme}>
                <div>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.desc}</p>
                    <p>{this.props.date} / <Link href="https://twitter.com/compose/tweet"><a>Share</a></Link></p>
                    <div className="tags">
                        <Tag theme={theme}>{this.props.tag1}</Tag>
                        <Tag theme={theme}>{this.props.tag2}</Tag>
                    </div>
                </div>
            </PostBlockContent>
        )
    }
}
