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

  const jobsTest: Array<Job> = [
    { id: 1, title: "Frontend Developer" },
    { id: 2, title: "Backend Developer" },
    { id: 3, title: "Fullstack Developer" }
  ];

  async function onGetCandidateData(data: CandidateDataGet){
    setCandidateDataGet(data)
    try {
      const jobs = await getJobs();
      setJobs(jobs)
    } catch (error) {
      console.log("Hubo un error:", error);
    }
  }

  return (
    <>
      <div className='mx-auto'>
        <h1 className="h1-custom">Nimble Gravity React Challenge</h1>
        <GetCandidateData onGetCandidateData={onGetCandidateData}></GetCandidateData>
        {
          jobsTest!=null && (
            <JobList jobs={jobsTest}></JobList>
          )
        }
      </div>
      
    </>
  )
}

export default App
