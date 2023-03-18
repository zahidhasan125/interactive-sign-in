import { Button, Form, InputNumber } from 'antd';
import React from 'react';

const VerificationCode = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const focusNext = (event) => {
        const form = event.target.form;
        const index = [...form].indexOf(event.target);
        form[index + 1].focus();
        event.preventDefault();


    }
    return (
        <div className='flex'>

            <div className=' md:w-1/2 w-full px-6 md:pt-28 flex items-center justify-center flex-col'>
                {/* Login Form */}
                <div className='w-full max-w-[350px]'>
                    <h2 className='text-3xl font-bold'> Enter the verification <br /> code to continue</h2>
                    <p className='text-xs'>We sent to <span className='text-blue-500 cursor-pointer'>hellouser@heads.design</span>. If you <br /> don’t see it, check your spam.</p>
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
                        onChange={focusNext}
                        className='mt-8 md:mt-10'
                    >
                        <div className='flex items-center gap-2'>
                            <Form.Item
                                name="verification-1"
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please input valid Verification!',
                            //     },
                            // ]}
                            >
                                <InputNumber
                                    autoFocus={true}
                                    className='h-16 w-12 border-[#0858F7] flex items-center justify-center text-2xl font-bold focus:border-bl' />
                            </Form.Item>
                            <Form.Item
                                name="verification-2"
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please input valid Verification!',
                            //     },
                            // ]}
                            >
                                <InputNumber
                                    className='h-16 w-12 border-[#0858F7] flex items-center justify-center text-2xl font-bold focus:border-bl' />
                            </Form.Item>
                            <Form.Item
                                name="verification-3"
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please input valid Verification!',
                            //     },
                            // ]}
                            >
                                <InputNumber
                                    className='h-16 w-12 border-[#0858F7] flex items-center justify-center text-2xl font-bold focus:border-bl' />
                            </Form.Item>
                            <Form.Item
                                name="verification-4"
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please input valid Verification!',
                            //     },
                            // ]}
                            >
                                <InputNumber
                                    className='h-16 w-12 border-[#0858F7] flex items-center justify-center text-2xl font-bold focus:border-bl' />
                            </Form.Item>
                            <Form.Item
                                name="verification-5"
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please input valid Verification!',
                            //     },
                            // ]}
                            >
                                <InputNumber
                                    className='h-16 w-12 border-[#0858F7] flex items-center justify-center text-2xl font-bold focus:border-bl' />
                            </Form.Item>
                            <Form.Item
                                name="verification-6"
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please input valid Verification!',
                            //     },
                            // ]}
                            >
                                <InputNumber
                                    className='h-16 w-12 border-[#0858F7] flex items-center justify-center text-2xl font-bold focus:border-bl' />
                            </Form.Item>    </div>
                        <Form.Item
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Button
                                type="primary"
                                className={`bg-[#0858F7] w-full flex items-center justify-center`}
                                htmlType="submit"
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default VerificationCode;