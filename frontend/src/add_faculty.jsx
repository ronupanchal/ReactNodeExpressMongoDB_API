import React, { useState, useEffect } from "react";
import axios from "axios";

function AddFaculty() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState(0);  
  const [flag, setFlag] = useState(false)
  useEffect(() => {
      console.log("Add Faculty")
  }, [flag])

//   function handleFacultyName(e){    
//     let faculty_name=e.target.value;
// 	console.log(faculty_name);
// 	setName(faculty_name);    
//   } 
//   function handleFacultySalary(e){    
//     let faculty_salary=e.target.value;
// 	console.log(faculty_salary);
// 	setSalary(faculty_salary);    
//   } 
  function handleSubmit(e){
    e.preventDefault();
    console.log("name:"+name + " Salary:"+salary);
    if(!name || !salary ){
        alert("All fields are Mandatory");
    }else{
        setFlag(true); 
        
        axios.post("http://localhost:3001/add_faculty",{
            name: name,
            salary: parseInt(salary)
            }).then((response) => {                    
                    console.log("data:"+response);
            });  
    }   
  }
  return (
    <div>
      <h1>Add Faculty</h1>
      <pre>{(flag)?<h2>Hello, You added {name} successfully!</h2>:""}</pre>
      <form onSubmit={handleSubmit}>
        <div>
            <input type='text' placeholder="Enter Your Faculty Name" name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
            <input type='text' placeholder="Enter Salary" name='salary' value={salary}  onChange={(e) => setSalary(e.target.value)} ></input>
        </div>
        <div>
            <button type="submit">Add Faculty</button>
        </div>

      </form>        
      
    </div>
  );
}

export default AddFaculty;
