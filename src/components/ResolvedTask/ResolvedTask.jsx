import React from 'react';

const ResolvedTask = ({ res }) => {


    return (
        <div>
            <div className="bg-[#E0E7FF] rounded-md p-4 drop-shadow-xl mb-4">
                <p className='lg:text-xl text-lg font-medium'>{res.title}</p>
            </div>
        </div>
    );
};


export default ResolvedTask;