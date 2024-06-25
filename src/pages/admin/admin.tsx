import React from 'react';
import Layout from '../../components/Layout';

const Dashboard: React.FC = () => {
  return (
    <div>

    
    <Layout children={undefined}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="bg-white p-4 shadow-md rounded">
          <h2 className="text-xl font-semibold mb-2">Card 1</h2>
          <p>Content for card 1</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded">
          <h2 className="text-xl font-semibold mb-2">Card 2</h2>
          <p>Content for card 2</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded">
          <h2 className="text-xl font-semibold mb-2">Card 3</h2>
          <p>Content for card 3</p>
        </div>
      </div>
    
      </div>

  );
};

export default Dashboard;