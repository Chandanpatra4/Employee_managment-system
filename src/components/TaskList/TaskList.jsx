import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex justify-start items-center flex-nowrap gap-5 w-full py-5 mt-10'>
<div className= 'flex-shrink-0  h-full p-5 w-[300px] bg-green-400 rounded-xl items-center'>
<div className='flex justify-between '>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
    <h4 className='text-sm'>20 feb 2024</h4>
</div>
<h2 className='mt-5 text-2xl font-semibold '>Make a website</h2>
<p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quos laudantium voluptates soluta officia.</p>
</div>
<div className= 'flex-shrink-0  h-full p-5 w-[300px] bg-blue-400 rounded-xl items-center'>
<div className='flex justify-between '>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
    <h4 className='text-sm'>20 feb 2024</h4>
</div>
<h2 className='mt-5 text-2xl font-semibold '>Make a website</h2>
<p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quos laudantium voluptates soluta officia.</p>
</div>
<div className= 'flex-shrink-0  h-full p-5 w-[300px] bg-yellow-400 rounded-xl items-center'>
<div className='flex justify-between '>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
    <h4 className='text-sm'>20 feb 2024</h4>
</div>
<h2 className='mt-5 text-2xl font-semibold '>Make a website</h2>
<p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quos laudantium voluptates soluta officia.</p>
</div>
<div className= 'flex-shrink-0  h-full p-5 w-[300px] bg-gray-400 rounded-xl items-center'>
<div className='flex justify-between '>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
    <h4 className='text-sm'>20 feb 2024</h4>
</div>
<h2 className='mt-5 text-2xl font-semibold '>Make a website</h2>
<p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quos laudantium voluptates soluta officia.</p>
</div>


    </div>
  )
}

export default TaskList