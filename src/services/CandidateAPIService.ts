import type { CandidateData } from "../entities/CandidateData";

const BASE_API_URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";

export const getCandidateData = async (
  email: string
): Promise<CandidateData> => {
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

    return (await response.json()) as CandidateData;

  } catch (error) {
    console.error("GET Candidate Data Error:", error);
    throw error;
  }
};