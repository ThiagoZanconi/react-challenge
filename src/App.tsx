import { useState } from 'react'
import './App.css'
import GetCandidateData from './components/GetCandidateData'
import type { CandidateDataGet } from './entities/CandidateDataGet'
import JobList from './components/JobList'
import type { Job } from './entities/Job'
import { getJobs } from './services/CandidateAPIService'

function App() {
  const [candidateDataGet, setCandidateDataGet] = useState<CandidateDataGet | null>(null)
  const [jobs, setJobs] = useState<Array<Job> | null>(null)
  const [jobGetError, setJobGetError] = useState<string | null>(null)

  async function onGetCandidateData(data: CandidateDataGet){
    setCandidateDataGet(data)
    try {
      const jobs = await getJobs();
      setJobs(jobs)
    } catch (error) {
      setJobGetError("Error:"+error);
    }
  }

  return (
    <>
      <div>
        <h1 className="h1-custom">Nimble Gravity React Challenge</h1>
        <GetCandidateData onGetCandidateData={onGetCandidateData}></GetCandidateData>
        <div className='mx-auto w-75 color-black font-bold mb-40'> {candidateDataGet!=null ? "Logged As: "+candidateDataGet.email : "Not logged in"}</div>
        {
          (jobs!=null && candidateDataGet!=null) && (
            <>
            <div className='w-75 mx-auto mt-20'>
              <div className='label-custom2'>Available Jobs</div>
            </div>
              <JobList uuid={candidateDataGet.uuid} candidateId={candidateDataGet.candidateId} applicationId={candidateDataGet.applicationId} jobs={jobs}></JobList>
            </>
          )
        }
        {
          jobGetError!=null && (
            <p className='w-75 mx-auto mt-20 color-red font-bold'>{jobGetError}</p>
          )
        }
      </div>
      
    </>
  )
}

export default App
