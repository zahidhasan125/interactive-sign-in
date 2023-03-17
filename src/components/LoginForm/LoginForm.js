import { Button, Form, Input, InputNumber, Select } from 'antd';
import React from 'react';
const { Option } = Select;

const LoginForm = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const suffixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                defaultValue= "@heads.design"
            >
                <Option value="@heads.design">@heads.design</Option>
                <Option value="@gmail.com">@gmail.com</Option>
                <Option value="@yahoo.com">@yahoo.com</Option>
            </Select>
        </Form.Item>
    );
    return (
        <div className='flex'>

            <div>
                {/* Login Form */}

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="donation"
                        rules={[
                            {
                                required: true,
                                message: 'Please input valid username!',
                            },
                        ]}
                    >
                        <Input
                            addonAfter={suffixSelector}
                            placeholder="hellouser"
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>


                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button
                            type="primary"
                            className='bg-[#0858F7] w-full'
                            htmlType="submit">
                            Next
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div>
                {/* Cards  */}
            </div>
        </div>
    );
};

export default LoginForm;