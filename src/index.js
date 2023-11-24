import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './client/App';
import reportWebVitals from './client/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function RootComponent() {
  useEffect(() => {
    // Change the document title
    document.title = 'SavorSauce | Dojo';

    // Optionally, you can return a cleanup function if needed
    return () => {
      // Cleanup logic, if any
    };
  }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

root.render(<RootComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();