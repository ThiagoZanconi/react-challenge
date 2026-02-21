import type { Job } from '../entities/Job';
import JobCard from './JobCard';

type ChildProps = {
    uuid: string
    candidateId: string
    applicationId: string
    jobs: Array<Job> | null;
};

const JobList = ({ uuid, candidateId, applicationId, jobs }: ChildProps) => {
  return (
    <>
        <div className='mt-20'>
            {
                jobs?.map(job =>
                    <JobCard uuid={uuid} candidateId={candidateId} applicationId={applicationId} job = {job}></JobCard>
                )
            } 
        </div>
    </>
  )
}

export default JobList