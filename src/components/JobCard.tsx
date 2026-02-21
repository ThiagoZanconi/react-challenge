import type { Job } from '../entities/Job';

type ChildProps = {
    job: Job
};

const JobList = ({ job }: ChildProps) => {

    async function onClick(){

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

export default JobList