import React, { Component } from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import theme from '../components/styles/theme';

const LargePostBlockContent = styled.div`
    a {
        display: flex;
        align-self: center;
        padding: 10px;
        border-radius: 4px;
        text-decoration: none;
        color: ${props => props.theme.text};
        border-bottom: 2px solid #343434;

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
        font-size: 1.2rem;
    }

    .date {
        color: #798499;
    }

    .desc {
        margin-top: 5px;
        margin-bottom: 5px;
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
    margin-left: auto;
    margin-right: 0;
`;

export default class LargePostBlock extends Component {
    render() {
        return (
            <LargePostBlockContent theme={theme}>
                <Link href={this.props.href}>
                    <a>
                        <div>
                            <p className="title">{this.props.title}</p>
                            <p className="desc">{this.props.desc}</p>
                            <p className="date">{this.props.date}</p>
                        </div>
                        <Tag theme={theme}>{this.props.tag}</Tag>
                    </a>
                </Link>
            </LargePostBlockContent>
        )
    }
}
