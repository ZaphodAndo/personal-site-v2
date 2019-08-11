import React, { Component } from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import theme from '../components/styles/theme';
import Tag from '../components/styles/Tag';

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
        color: ${props => props.theme.secondaryColour};
    }
    a:hover {
        color: ${props => props.theme.primaryColour};
    }

    .tags {
        display: flex;
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
