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
    const [repository, setRepository] = useState<string>("");

    const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(repository!=""){
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
                <form className="p-0" onSubmit={onSubmit}>
                    <div className="label-custom">{job.title}</div>
                    <input
                        className="input-custom"
                        id="repositoryInput"
                        type="link"
                        onChange={(e) => setRepository(e.target.value)}
                        placeholder="Respository Link"
                        required
                    />
                    <button className="submit-custom" type="submit">
                        Submit
                    </button>
                </form>
            </div>
            {
                result!=null && (
                    <p className={`w-75 mx-auto mt-20 ${result ? "color-green" : "color-red"} font-bold`}>{result ? "Success" : "Error" }</p>
                )
            }
        </>
    )
}

export default JobCard