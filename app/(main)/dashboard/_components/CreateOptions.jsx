import { Phone, Video } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CreateOptions() {
  return (
    <div className='grid grid-cols-2 gap-5'>
        <Link href={'/dashboard/create-interview'} className='bg-white border border-gray-200 rounded-lg p-5 flex flex-col gap-2 cursor-pointer'>
            <Video className='p-3 text-primary bg-cyan-50 rounded-lg h-12 w-12'/>
            <h2 className='font-bold'>Launch Interview</h2>
            <p className='text-gray-500'>Configure an AI interview and book a time with the candidates.</p>
        </Link>
        <div>
            <div className='bg-white border border-gray-200 rounded-lg p-5'>
            <Phone className='p-3 text-primary bg-cyan-50 rounded-lg h-12 w-12'/>
            <h2 className='font-bold'>Initiate Phone Screening</h2>
            <p className='text-gray-500'>Schedule a first-round call with a candidate.</p>
        </div>
        </div>
    </div>
  )
}

export default CreateOptions