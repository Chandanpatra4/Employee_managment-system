import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    // width screen for this div  if necessary
    <div className='flex mt-10 justify-between gap-5 '>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-red-400'> 
            <h2 className='text-3xl font-semibold'>{data.taskSummary.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[40%] bg-red-400'> 
            <h2 className='text-3xl font-semibold'>{data.taskSummary.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-red-400'> 
            <h2 className='text-3xl font-semibold'>{data.taskSummary.failed}</h2>
            <h3 className='text-xl font-medium'>failed Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-red-400'> 
            <h2 className='text-3xl font-semibold'>{data.taskSummary.active}</h2>
            <h3 className='text-xl font-medium'><b>active Task</b></h3>
        </div>

    </div>
  )
}

export default TaskListNumbers