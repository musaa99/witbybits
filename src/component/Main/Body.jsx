// important imports
import React from 'react'
import { BrowserRouter as Router,Route, Routes }
	from 'react-router-dom';
// import './App.css';
import Create from '../curds/Create';
import Edit from '../curds/Edit';
import Home from '../curds/Home';

function Body() {
return (
	<div className='App'>

	<Router>
	<Routes>
		<Route path='/' element={<Home/>}/>
		<Route path='/create' element={<Create/>}/>
		<Route path='/edit' element={<Edit/>}/>
	</Routes>
	</Router>
</div>
);

}

export default Body;
