import React, { Component } from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import theme from '../components/styles/theme';

const PostBlockContent = styled.div`
    a {
        display: flex;
        align-self: center;
        padding: 10px;
        border-radius: 4px;
        text-decoration: none;
        color: ${props => props.theme.text};

        transform: translateZ(0);
        transition-duration: 0.3s;
        transition-property: transform;
    }
    a:hover, a:focus, a:active {
        background: transparent;
        background-color: rgba(0,0,0,.1);
        color: white;

        transform: scale(1.02);
    }

    p {
        margin: 0;
    }

    .title {
        font-weight: 500;
    }
`;

const Tag = styled.div`
    align-self: center;
    text-decoration: none;
    font-weight: 500;
    color: ${props => props.theme.primaryColour};
    background-color: rgba(0,0,0,.2);
    padding: 10px;
    border-radius: 4px;
    max-height: 20px;
    margin-left: auto;
    margin-right: 0;
`;

export default class PostBlock extends Component {
    
    render() {
        return (
            <PostBlockContent theme={theme}>
                <Link href={this.props.href}>
                    <a>
                        <div>
                            <p className="title">{this.props.title}</p>
                            <p>{this.props.desc}</p>
                        </div>
                        <Tag>{this.props.tag}</Tag>
                    </a>
                </Link>
            </PostBlockContent>
        )
    }
}
