import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, signUpRequestAction } from '../../reducers/signup';
import { Form, Input, PageHeader, Radio, Button, Checkbox, Divider } from 'antd';

import useInput from '../../hooks/useInput';
import DefaultLayout from '../../components/layout/DefaultLayout';
import { fullWidth, errorText } from '../../components/style/CommonStyle';
import { SignupFormWrapper } from './style';




const Signup = () => {

    const router = useRouter();
    const dispatch = useDispatch();

    const { signUpLoading } = useSelector((state) => state.signup);

    const [username, onChangeUsername] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((g) => {
        setPasswordCheck(g.target.value);
        setPasswordError(g.target.value !== password);
    }, [password]);

    const [name, onChangeName] = useInput('');
    const [mobile, onChangeMobile] = useInput('');
    const [gender, onChangeGender] = useInput('');
    const [birth, onChangeBirth] = useInput('');

    const [term, setTerm] = useState('');
    const onChangeTerm = useCallback((g) => {
        setTerm(g.target.checked);
        setTermError(false);
    }, []);
    const [termError, setTermError] = useState(false);

    const [marketing, setMarketing] = useState('');
    const onChangeMarketing = useCallback((g) => {
        setMarketing(g.target.checked);
    }, []);

    const onSubmit = useCallback((successInfo) => {
        console.log("successInfo", successInfo);

        if (password !== passwordCheck) {
            return setPasswordError(true);
        }

        if (!term) {
            return setTermError(true);
        }

        const param = {
            username : username,
            password : password,
            name : name,
            gender : gender,
            birth : birth,
            term : term,
            marketing : marketing,
        }

        console.log(param);
        dispatch(signUpRequestAction(param));
        // router.push('/');

    }, [password, passwordCheck, term]);

    const onSubmitFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <DefaultLayout>
                <PageHeader 
                    title="회원가입"
                />
                <SignupFormWrapper
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={onSubmit}
                    onFinishFailed={onSubmitFailed}
                    autoComplete="off"
                    
                >
                    <Form.Item
                        label="이메일 주소"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "이메일 주소를 입력해주세요."
                            },
                        ]}
                    >
                        <Input type="email" name="username" value={username} required onChange={onChangeUsername} />
                    </Form.Item>
                    <Form.Item
                    label="비밀번호"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '비밀번호를 입력해주세요.',
                        },
                    ]}
                >
                    <Input type="password" name="password" value={password} required onChange={onChangePassword}/>
                </Form.Item>

                <Form.Item
                    label="비밀번호 확인"
                    name="passwordCheck"
                    rules={[
                        {
                            message: '비밀번호를 한번 더 입력해주세요.',
                        },
                    ]}
                >
                    <Input 
                        type="password"
                        name="passwordCheck" 
                        value={passwordCheck}
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && <div style={errorText}>비밀번호가 일치하지 않습니다.</div>}
                </Form.Item>

                <Form.Item
                    label="이름"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input type="text" name="name" value={name} required onChange={onChangeName} />
                </Form.Item>

                <Form.Item
                    label="휴대폰 번호"
                    name="mobile"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your mobile!',
                        },
                    ]}
                >
                    <Input type="text" name="mobile" value={mobile} required onChange={onChangeMobile} />
                </Form.Item>

                <Form.Item
                    label="성별"
                    name="gender"
                    initialValue={'M'}
                >
                    <Radio.Group name="gender" onChange={onChangeGender}>
                        <Radio value={'M'}>남성</Radio>
                        <Radio value={'W'}>여성</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="생년월일"
                    name="birth"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your birth!',
                        },
                    ]}
                >
                    <Input type="text" name="birth" value={birth} required onChange={onChangeBirth} />
                </Form.Item>

                <Divider />

                <Form.Item
                    name="term"
                >
                    <Checkbox name='term' checked={term} onChange={onChangeTerm} value="Y">
                        이용약관 및 개인정보처리방침에 동의합니다. (필수)
                    </Checkbox>
                    {termError && <div style={errorText}>약관에 동의하셔야 합니다.</div>}
                </Form.Item>

                <Form.Item
                    name="marketing"
                >
                    <Checkbox name="marketing" checked={marketing} onChange={onChangeMarketing} value="Y">
                        마케팅 수신에 동의합니다. (선택)
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary"
                        htmlType="submit"
                        loading={signUpLoading}
                        style={fullWidth}
                    >
                        회원가입
                    </Button>
                </Form.Item>
                </SignupFormWrapper>
            </DefaultLayout>
        </>
    )

};

export default Signup;