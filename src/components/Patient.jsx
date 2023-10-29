import React from 'react'

export default function Patient() {
  return (
    <div className='bg-white m-3 shadow-md px-5 py-10 rounded-xl'>
          <p className='text-gray-700 font-bold mb-3 uppercase'>
            Pet&apos;s name: {''}
            <span className='font-normal normal-case'>
              Hook
            </span> 
          </p>
          <p className='text-gray-700 font-bold mb-3 uppercase'>
            Owner: {''}
            <span className='font-normal normal-case'>
              React
            </span> 
          </p>
          <p className='text-gray-700 font-bold mb-3 uppercase'>
            Email: {''}
            <span className='font-normal normal-case'>
              react@mail.com
            </span> 
          </p>
          <p className='text-gray-700 font-bold mb-3 uppercase'>
            Discharge date: {''}
            <span className='font-normal normal-case'>
              12/12/2023
            </span> 
          </p>
          <p className='text-gray-700 font-bold mb-3 uppercase'>
            Symptoms: {''}
            <span className='font-normal normal-case'>
              KKCK
            </span> 
          </p>
        </div>
  )
}
