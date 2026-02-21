import type { CandidateDataGet } from "../entities/CandidateDataGet";
import type { CandidateDataPost } from "../entities/CandidateDataPost";
import type { Job } from "../entities/Job";

const BASE_API_URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";

export const getCandidateData = async (
  email: string
): Promise<CandidateDataGet> => {
  try {
    if (!email) {
      throw new Error("Email not provided");
    }

    const url = `${BASE_API_URL}/api/candidate/get-by-email?email=${encodeURIComponent(email)}`;

    const response = await fetch(url);

    if (!response.ok) {
      let errorMessage = "Error fetching candidate data";

      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {}

      throw new Error(errorMessage);
    }

    let data = (await response.json()) as CandidateDataGet;
    console.log(data);
    return data;

  } catch (error) {
    console.error("GET Candidate Data Error:", error);
    throw error;
  }
};

export const getJobs = async (): Promise<Array<Job>> => {
  try {
    const url = `${BASE_API_URL}/api/jobs/get-list`;

    const response = await fetch(url);

    if (!response.ok) {
      let errorMessage = "Error fetching jobs";

      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {}

      throw new Error(errorMessage);
    }
    let data = (await response.json()) as Array<Job>;
    console.log(data);
    return data

  } catch (error) {
    console.error("GET Jobs Error:", error);
    throw error;
  }
};

export const postCandidate = async (
    candidateData: CandidateDataPost
): Promise<boolean> => {
    const response = await fetch("https://api.com/orders", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(candidateData)
    });

    return response.ok
}