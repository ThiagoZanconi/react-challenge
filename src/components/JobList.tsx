import type { Job } from '../entities/Job';
import JobCard from './JobCard';

type ChildProps = {
  jobs: Array<Job> | null;
};

const JobList = ({ jobs }: ChildProps) => {
  return (
    <>
        <div className='mt-20'>
            {
                jobs?.map(job =>
                    <JobCard job = {job}></JobCard>
                )
            } 
        </div>
    </>
  )
}

export default JobList