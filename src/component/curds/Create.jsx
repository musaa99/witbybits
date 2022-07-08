import React, { useState } from 'react' 
import { Button, Form } from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import array from '../curds/Array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
  
function Create() {
  
    // Making usestate for setting and
    // fetching a value in jsx
    const [name, setname] = useState('');
    const [school, setschool] = useState('');
    const [result, setresult] = useState('');
    const [score, setscore] = useState('');
    const [grade, setgrade] = useState('');
  
    // Using useNavigation for redirecting to pages
    let history = useNavigate();
  
    // Function for creating a post/entry
    const handelSubmit = (e) =>{
        e.preventDefault();  // Prevent reload
  
        const ids = uuid() // Creating unique id
        let uni = ids.slice(0,8) // Slicing unique id
  
        // Fetching a value from usestate and 
        // pushing to javascript object
        let a = name, b=school, c=result,d=score,f=grade
        array.push({id:uni,Name:a,school:b,Result:c,Score:d,Grade:f})
  
  
       // Redirecting to home page after creation done
       history('/')
         
    }
  
  return (
    <div >
        <Form className="d-grid gap-2" style={{margin:'15rem'}}>
  
  {/* Fetching a value from input textfirld 
   in a setname using usestate*/}
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control onChange={e => setname(e.target.value)} 
                  type="text"
                  placeholder="Student Name" required/> 
  </Form.Group>
  
  
    {/* Fetching a value from input textfirld in
     a setage using usestate*/}
  <Form.Group className="mb-3" controlId="formBasicAge">
    <Form.Control onChange={e => setschool(e.target.value)} 
                  type="text"
                  placeholder="Class" required/>
  </Form.Group>
    {/* Fetching a value from input textfirld in
     a setage using usestate*/}
  <Form.Group className="mb-3" controlId="formBasicAge">
    <Form.Control onChange={e => setresult(e.target.value)} 
                  type="text"
                  placeholder="Result" required/>
  </Form.Group>
    {/* Fetching a value from input textfirld in
     a setage using usestate*/}
  <Form.Group className="mb-3" controlId="formBasicAge">
    <Form.Control onChange={e => setscore(e.target.value)} 
                  type="text"
                  placeholder="Score" required/>
  </Form.Group>
    {/* Fetching a value from input textfirld in
     a setage using usestate*/}
  <Form.Group className="mb-3" controlId="formBasicAge">
    <Form.Control onChange={e => setgrade(e.target.value)} 
                  type="text"
                  placeholder="Grade" required/>
  </Form.Group>
  
    {/* handing a onclick event in button for
     firing a function */}
  <Button
  onClick={e => handelSubmit(e)}
    variant="primary" type="submit">
    Submit
  </Button>
  
  {/* Redirecting back to home page */}
  <Link className="d-grid gap-2" to='/'>
    <Button variant="info" size="lg">
      Home
    </Button>
  </Link>
  
</Form>
    </div>
  )
}
  
export default Create