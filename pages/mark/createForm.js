import React, { useCallback, useState } from 'react';
import { Form, Input, Button, Select, Upload } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

import useInput from '../../hooks/useInput';
import { FormWrapper } from './style';
import DefaultLayout from '../../components/layout/DefaultLayout';

import { fullWidth } from '../../components/style/CommonStyle';

const { Option } = Select;

const normFile = ({e}) => {

    console.log('Upload event:', e);
    
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
};

const CreateForm = ({}) => {

    const [bannerImg, onChangeBannerImg] = useInput('');
    const [title, onChangeTitle] = useInput('');
    const [shortDescription, onChangeShortDescription] = useInput('');
    const [markType, onChangeMarkType] = useInput('');

    const onSubmit = useCallback((successInfo) => {
        console.log("successInfo", successInfo);
    });

    const onSubmitFailed = useCallback((errorInfo) => {
        console.log("errorInfo", errorInfo);
    });


    return (
        <>
            <DefaultLayout>
                <FormWrapper
                    name="createForm"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onSubmit}
                    onFinishFailed={onSubmitFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="bannerImg"
                        label="배너 이미지"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="bannerImg" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>업로드</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        label="마크 유형"
                        name="markType"
                        rules={[
                            {
                                required: true,
                                message: "마크유형을 선택해주세요.",
                            }
                        ]}
                    >
                        <Select placeholder="마크유형을 선택해주세요.">
                           <Option value="diary">다이어리</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="제목"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: "제목을 입력해주세요."
                            }
                        ]}
                    >
                        <Input type="text" name="title" value={title} required onChange={onChangeTitle} />
                    </Form.Item>
                    <Form.Item
                        label="한줄소개"
                        name="shortDescription"
                        rules={[
                            {
                                required: true,
                                message: "한줄소개를 입력해주세요."
                            }
                        ]}
                    >
                        <Input.TextArea name="shortDescription" value={shortDescription} required onChange={onChangeShortDescription} />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            style={fullWidth}
                        >
                            마크 생성하기
                        </Button>
                    </Form.Item>
                </FormWrapper>
            </DefaultLayout>
        </>
    )
}

export default CreateForm;