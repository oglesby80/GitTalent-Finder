import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

console.log('Environment Variables:', import.meta.env);

const CandidateSearch: React.FC = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(
    JSON.parse(localStorage.getItem('savedCandidates') || '[]')
  );

  useEffect(() => {
    loadCandidate();
  }, []);

  const loadCandidate = async () => {
    try {
      const newCandidate = await searchGithub();
      console.log('Fetched Candidate:', newCandidate); // Debug: log the candidate data
      setCandidate(newCandidate[0]); // Assuming searchGithub returns an array of candidates
    } catch (error) {
      console.error('Error fetching candidate:', error);
    }
  };
  

  const saveCandidate = () => {
    if (candidate) {
      const updatedCandidates = [...savedCandidates, candidate];
      setSavedCandidates(updatedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
    }
    loadCandidate();
  };

  const skipCandidate = () => {
    loadCandidate();
  };

  return (
    <div className="candidate-search-container">
      <h1>Candidate Search</h1>
      {candidate ? (
        <div className="candidate-card">
          <img
            src={candidate.avatar_url} // Correct property for avatar
            alt={`${candidate.name || candidate.login}'s avatar`} // Use login as fallback if name is not available
            className="candidate-image"
          />
          <p className="candidate-company">({candidate.company || 'N/A'})</p>
          <div className="action-buttons">
            <button onClick={skipCandidate} className="skip-button">
              -
            </button>
            <button onClick={saveCandidate} className="save-button">
              +
            </button>
          </div>
        </div>
      ) : (
        <p>Loading candidate...</p>
      )}
    </div>
  );
};

export default CandidateSearch;




