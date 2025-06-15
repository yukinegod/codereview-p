import { JOBS } from '../config/config'
import Job from './Job'

export default function JobsList() {
  return (
    <div className='flex flex-col'>
      {JOBS.map((job: any, index: number) => (
        <div key={index}>
          <Job title={job.title} companyName={job.companyName} />
          {index !== JOBS.length - 1 && (
            <div className='w-full h-[1px] border-1 border-[#EAEAEA] my-[15px]' />
          )}
        </div>
      ))}
    </div>
  )
}
