import React from 'react';
import Note from './Note';
import toggle_note from './App';

const AllNotes=({notes,toggle_note})=>{
	
		return(
		 <div className='my-3'>
		 <h3> All notes</h3>
		 <div className="row">
		 {
		 	notes.map(note=><Note key={note.id} note={note} toggle_note={toggle_note}/>)
		 }
		 </div>
		 </div>
		 )
	
}
export default AllNotes;