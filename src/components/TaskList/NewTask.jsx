import React from 'react'

const NewTask = () => {
  return (
    <div className='flex-shrink-0  h-full p-5 w-[300px] bg-blue-400 rounded-xl items-center'>
                <div className='flex justify-between '>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold '>Make a website</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quos laudantium voluptates soluta officia.</p>
                <div className='mt-4' >
<button>Accept Task</button>
                </div>
            </div>
  )
}

export default NewTask