import React, { useState } from "react";
import Table from "react-bootstrap/Table";

import axios from "axios";
function Faculty() {
  const [data, setData] = useState(null);


  React.useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  if (!data) return null;
  return (
    <div>
      <h1>Faculty</h1>
      
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Faculty Name</th>
            <th>Faculty Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.facultyName}</td>
                <td>{item.facultySalary}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Faculty;
