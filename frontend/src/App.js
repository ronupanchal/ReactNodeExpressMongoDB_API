import React from 'react';
import './App.css';
import axios from 'axios'
import Faculty from './faculty';
import AddFaculty from './add_faculty';
function App() {

  const [data, setData] =React.useState(null);

  
  React.useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  if (!data) return null;

  return (
    <>
      <center>
      <h1>Hello Dr. Ronak</h1>
      {/* {data.map((item) => {
              return (
                <div key={item._id}>
                  <h1>{item.facultyName}</h1>
                  <h3>{item.facultySalary}</h3>
                </div>
              );
            })} */}
            <AddFaculty/>
            <Faculty/>
            </center>

    </>

  );
}

export default App;
