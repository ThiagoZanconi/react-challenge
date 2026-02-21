import type { Job } from '../entities/Job';
import JobCard from './JobCard';

type ChildProps = {
    uuid: string
    candidateId: string
    jobs: Array<Job> | null;
};

const JobList = ({ uuid, candidateId, jobs }: ChildProps) => {
  return (
    <>
        <div className='mt-20'>
            {
                jobs?.map(job =>
                    <JobCard uuid={uuid} candidateId={candidateId} job = {job}></JobCard>
                )
            } 
        </div>
    </>
  )
}

export default JobList