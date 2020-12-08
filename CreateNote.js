import React,{useState} from 'react';

const CreateNote=({createNote})=>{

	const[note, setNote]= useState('')

	const handleSubmit=(e)=>{
		e.preventDefault();
			const data={
				note,
				id: Math.floor(Math.random()*1000), // returns a random integer between 0 and 999 (both included)  
				date: new Date().toJSON().slice(0,10), // gives current date 
				isImportant: false
			}
			createNote(data)
	}
	return(
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<textarea cols="3" className="form-control" placeholder="Write your dream note :)" value={note} onChange={e=>setNote(e.target.value)}></textarea>
					<button className="btn" type="submit">Add note</button>
				</div>	
			</form>
		</div>
		)
}
export default CreateNote;
