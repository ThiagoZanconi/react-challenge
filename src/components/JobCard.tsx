import type { CandidateDataPost } from '../entities/CandidateDataPost';
import type { Job } from '../entities/Job';
import { postCandidate } from '../services/CandidateAPIService';
import { useState } from 'react'

type ChildProps = {
    uuid: string
    candidateId: string
    job: Job
};

const JobCard = ({ uuid, candidateId, job }: ChildProps) => {
    const[result, setResult] = useState<boolean | null>(null)

    async function onClick(){
        let repository = document.getElementById("repositoryInput")?.textContent
        if(repository!=null){
            let data: CandidateDataPost = {
                uuid : uuid,
                jobId: job.id,
                candidateId: candidateId,
                repoUrl: repository
            }
            let res: boolean = await postCandidate(data)
            setResult(res)
        }
    }

    return (
        <>
            <div className='card-custom'>
                <form className="p-0" onSubmit={onClick}>
                    <div className="label-custom">{job.title}</div>
                    <input
                        className="input-custom"
                        id="repositoryInput"
                        type="link"
                        placeholder="Respository Link"
                        required
                    />
                    <button className="submit-custom" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default JobCard