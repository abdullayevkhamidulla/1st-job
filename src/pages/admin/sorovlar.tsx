import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sorovlar: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('', {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.status === 200 && response.data && response.data.data) {
          console.log('API response:', response.data);
          setData(response.data.data);
        } else {
          console.error('Unexpected API response:', response);
          setFetchError('Unexpected API response');
        }
      } catch (error: any) {
        console.error('Error fetching data:', error);
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : fetchError ? (
        <p>Error: {fetchError}</p>
      ) : (
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
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.userFirstName}</td>
                <td>{item.userSecondName}</td>
                <td>{item.userLastName}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.vacancyName}</td>
                <td>{item.appliedTime}</td>
                <td>{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Sorovlar;
