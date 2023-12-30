import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
function Feild({name,email,index}) {
  return (
    <div className="section">
    <h4>{name}</h4>
    <h4>{email}</h4>
    <Button variant="contained" color="success">
        <DeleteIcon/>
      </Button>
   </div>
  )
}

export default Feild