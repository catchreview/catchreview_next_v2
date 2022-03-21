import React, { useCallback } from 'react';
import { Affix, Row, Col, Form, Image, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { divider, floatRight } from '../../components/style/CommonStyle';

import useInput from '../../hooks/useInput';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { LoginFormWrapper, LoginHeader, LoginForm, LoginButton } from './style';
import { logInRequestAction } from '../../reducers/auth';

const loginForm = ({}) => {

    const router = useRouter();
    const dispatch = useDispatch();

    const { logInSuccess, logInError, logInLoading } = useSelector((state) => state.auth);
    
    const [username, onChangeUsername] = useInput('');
    const [password, onChangePassword] = useInput('');


    const onSubmitForm = useCallback(() => {
        const data = {
            username : username,
            password : password,
        }        
        dispatch(logInRequestAction(data));
    }, [username, password]);

    if (logInSuccess) {
        router.push("/");
    }

    return (
        <>
            <Affix offsetTop={100}>
                <LoginFormWrapper>
                    <Col xs={24}>
                        <LoginHeader>
                            <Row>
                                <Col xs={8}></Col>
                                <Col xs={8} style={{ textAlign: 'center' }}>
                                    <Image 
                                        width={55}
                                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                                    />
                                </Col>
                                <Col xs={8}></Col>
                            </Row>
                        </LoginHeader>
                    </Col>
                    <Col xs={24}>
                        <LoginForm
                            name="normal_login"
                            onFinish={onSubmitForm}
                            initialValues={{ remember: true }}
                        >
                            <Form.Item
                                name="username"
                                value={username}
                                onChange={onChangeUsername}
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input type="email"
                                       prefix={<UserOutlined className="site-form-item-icon" />} 
                                       placeholder="이메일 주소"
                                />
                            </Form.Item>
                            <Form.Item
                                type="password"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input 
                                        type="password"
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        placeholder="비밀번호"
                                />
                            </Form.Item>
                            <Form.Item
                                style={{ marginBottom: 0 }}
                            >
                              <a style={floatRight} href="">비밀번호를 잊으셨나요?</a>  
                            </Form.Item>
                            <Form.Item>
                                <LoginButton
                                    type="primary"
                                    htmlType="submit"
                                    loading={logInLoading}
                                >
                                    Log in
                                </LoginButton>
                                <div style={divider}>
                                    아직 회원이 아니신가요?&nbsp;
                                    <a href="/secure/signup">회원가입</a>
                                </div>
                            </Form.Item>
                        </LoginForm>
                    </Col>
                </LoginFormWrapper>
            </Affix>
        </>
    )
}

export default loginForm;