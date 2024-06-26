import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Application {
  userFirstName: string;
  userSecondName: string;
  userLastName: string;
  phoneNumber: string;
  vacancyName: string;
  appliedTime: string;
  desc: string;
}

const App: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('https://fc45-213-230-125-170.ngrok-free.app/api/Apply/getApplies');
        setApplications(response.data.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="App">
      <h1>Applications List</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Vacancy Name</th>
            <th>Applied Time</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={index}>
              <td>{app.userFirstName}</td>
              <td>{app.userSecondName}</td>
              <td>{app.userLastName}</td>
              <td>{app.phoneNumber}</td>
              <td>{app.vacancyName}</td>
              <td>{new Date(app.appliedTime).toLocaleString()}</td>
              <td>{app.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
