import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;

const Cards = () => {
    return (
        <div className='hidden md:flex w-[480px]'>
            <Card
                hoverable
                // style={{
                //     width: 240,
                // }}
                className='bg-[#0858F7] text-white rounded-3xl'
                cover={<img className='pt-12' alt="example" src="https://i.ibb.co/ftNtZRh/Screenshot-2023-03-18-at-5-26-50-PM-removebg-preview.png" />}
            >
                <div className='bg-black inline-block p-1 rounded-md'>New</div>
                <div className=' flex flex-col gap-5'>
                    <h3 className='text-3xl font-bold'>Developer handoff improvements</h3>
                    <p className='text-xs'>You’ll now see a highlight around Symbols on <br /> the Canvas and in the Inspector.</p>
                    <div className='flex items-center justify-between'>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <p>Share</p>
                    </div>
                </div>

            </Card>
        </div>
    );
};

export default Cards;