import { useState } from 'react'

function JobList() {
  const [count, setCount] = useState(0)
  
  function getCandidateData(){
    let email = document.getElementById("emailInput")?.textContent
    if(email!=null){

    }

  }

  return (
    <> 
      <div className='mt-20 ml-50'>
        <form className="p-0" onSubmit={getCandidateData}>
            <div className="label-custom">Email</div>
            <div className='flex'>
                <input
                    className="input-custom"
                    id="emailInput"
                    type="email"
                    placeholder="Enter your email"
                    required
                />
                <button className="button-custom" type="submit">
                    Get Data
                </button>
            </div>

        </form>
      </div>
    </>
  )
}

export default JobList