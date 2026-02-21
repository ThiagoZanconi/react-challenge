import { useState } from 'react';
import type { CandidateDataGet } from '../entities/CandidateDataGet';
import { getCandidateData } from '../services/CandidateAPIService';

type ChildProps = {
    onGetCandidateData: (data: CandidateDataGet) => void;
};
const GetCandidateData = ({ onGetCandidateData }: ChildProps) => {
    const [email, setEmail] = useState<string>("");
    
    const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if(email!=""){
            try {
                let data: CandidateDataGet = await getCandidateData(email)
                onGetCandidateData(data);
            } catch (error) {
                console.log("Hubo un error:", error);
            }
        }
    }

  return (
    <> 
        <div className='mt-20 mx-auto w-75'>
            <form className="p-0" onSubmit={onSubmit}>
                <div className="label-custom">Email</div>
                <div className='flex'>
                    <input
                        className="input-custom"
                        id="emailInput"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
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

export default GetCandidateData