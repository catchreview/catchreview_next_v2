import React from 'react';

import Link from 'next/link';
import { Affix, Col } from 'antd';
import { ArrowRightOutlined, BarsOutlined, CommentOutlined, RedditOutlined, UserOutlined } from '@ant-design/icons';

import { BottomBarWrapper, BottomNavWrapper, colorBlack, iconFontSize } from './style';
import { useSelector } from "react-redux";

const BottomNavBar = ({}) => {

    const isAuthorized = false;

    return (
        <Affix offsetBottom={0} style={{width: '100%'}}>
            <BottomBarWrapper>
                <Col xs={6}>
                    {isAuthorized
                        ?
                        <BottomNavWrapper>
                            <div>
                                <RedditOutlined style={iconFontSize} />
                            </div>
                            <Link href="/login"><a style={colorBlack}>내 켐페인</a></Link>
                        </BottomNavWrapper>
                        :
                        <BottomNavWrapper>
                            <div>
                                <ArrowRightOutlined style={iconFontSize} />
                            </div>
                            <Link href="/secure/login"><a style={colorBlack}>로그인</a></Link>
                        </BottomNavWrapper>
                    }
                </Col>
                <Col xs={6}>
                    <BottomNavWrapper>
                        <div>
                            <CommentOutlined style={iconFontSize} />
                        </div>
                        <Link href="/profile"><a style={colorBlack}>문의하기</a></Link>
                    </BottomNavWrapper>
                </Col>
                <Col xs={6}>
                    <BottomNavWrapper>
                        <div>
                            <UserOutlined style={iconFontSize} />
                        </div>
                        <Link href="/profile"><a style={colorBlack}>내정보</a></Link>
                    </BottomNavWrapper>
                </Col>
                <Col xs={6}>
                    <BottomNavWrapper>
                        <div>
                            <BarsOutlined style={iconFontSize} />
                        </div>
                        <Link href="/blog">
                            <a style={colorBlack}>더보기</a>
                        </Link>
                    </BottomNavWrapper>
                </Col>
            </BottomBarWrapper>
        </Affix >
    )
}

export default BottomNavBar;
