import { useState } from 'react';
import '../Searching/Searchbar.css';
const backendUrl = "http://localhost:8000/store_user_data";

function SubmissionForm() {
  const [access_token, setQuery] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [numOutputs, setNumOutputs] = useState('');

  // Send user inputs to the backend
  const storeUserData = async () => {
    try {
      // Create an object with user data
      const userData = { access_token, apiKey, numOutputs };
  
      // Make a POST request to your backend endpoint
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      // Check if the request was successful (status code 200)
      if (response.ok) {
        console.log('User data sent to the backend successfully!');
      } else {
        console.error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="submission-form">
      <h2>Credentials</h2>
      <label htmlFor="query">OAuth 2.0: </label>
      <input type="text" id="query" value={access_token} onChange={(e) => setQuery(e.target.value)} />
      <hr />

      <label htmlFor="api_key">API Key: </label>
      <input type="text" id="api_key" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
      <hr />

      <label htmlFor="num_outputs">Num Outputs: </label>
      <input type="number" min="1" max="100" id="num_outputs" value={numOutputs} onChange={(e) => setNumOutputs(e.target.value)} />
      <hr />

      <button onClick={storeUserData} className="search-button">
        Submit
      </button>
    </div>
  );
}

export default SubmissionForm;
