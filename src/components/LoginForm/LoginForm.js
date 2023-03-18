import { Button, Form, Input, Typography, Select } from 'antd';
import React, { useRef, useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
const { Option } = Select;
const { Title } = Typography;

const LoginForm = () => {
    const [showIcon, setShowIcon] = useState(false);
    const mouseHover = () => {
        setShowIcon(!showIcon)
        console.log("object");
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const arrowRef = useRef(null)
    console.log(arrowRef.current);

    const suffixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                defaultValue="@heads.design"
            >
                <Option value="@heads.design">@heads.design</Option>
                <Option value="@gmail.com">@gmail.com</Option>
                <Option value="@yahoo.com">@yahoo.com</Option>
            </Select>
        </Form.Item>
    );
    return (
        <div className='flex'>

            <div className=' md:w-1/2 w-full px-6 md:pt-28 flex items-center justify-center flex-col'>
                {/* Login Form */}
                <div className='w-full max-w-[350px]'>
                    <h2 className='text-3xl font-bold'> Welcome to <br /> Systempackage</h2>

                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 24,
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
                        className='mt-8 md:mt-10'
                    >
                        <Form.Item
                            name="userName"
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
                                size='large'
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
                            <Input.Password
                                size='large' />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Link to='/step-2'>
                                <Button
                                    type="primary"
                                    className={`bg-[#0858F7] w-full flex items-center justify-center`}
                                    htmlType="submit"
                                    size='large'
                                    onMouseEnter={mouseHover}
                                    onMouseLeave={mouseHover}>
                                    Next

                                    <ArrowRightOutlined ref={arrowRef} className={!showIcon ? 'invisible' : ''} />

                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>
                    <p className='text-md text-center'>Forgot your password?</p>
                </div>
            </div>
            <div className='hidden md:flex'>
                {/* Cards  */}
                cards here
            </div>
        </div>
    );
};

export default LoginForm;