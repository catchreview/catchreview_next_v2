import styled from 'styled-components';
import { Row, PageHeader, Form, Button } from 'antd';

export const LoginFormWrapper = styled(Row)`
    padding : 30px;
`;

export const LoginHeader = styled(PageHeader)`
    font-size : 24px;
    font-weight : bold;
    magin-bottom : 20px;
`;

export const LoginForm = styled(Form)`
    max-width : 300px;
    margin : 0 auto;
`;

export const LoginButton = styled(Button)`
    width : 100%;
`;

export const SignupFormWrapper = styled(Form)`
    padding: 30px;
    padding-top: 0px;
`;