import React from 'react'

const AcceptTask = () => {
    return (
        <div className='flex-shrink-0  h-full p-5 w-[300px] bg-green-400 rounded-xl items-center'>
            <div className='flex justify-between '>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold '>Make a website</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quos laudantium voluptates soluta officia.</p>
            <div className='flex justify-between mt-2' >
                <button className='bg-green-500 py-1 px-2 text-sm rounded-xl ' >
                    Mark as Completed
                </button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded-xl' >
                    Mark as Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask