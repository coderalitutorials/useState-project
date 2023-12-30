import { useState } from "react";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Feild from "./components/Feild";
import DeleteIcon from '@mui/icons-material/Delete';
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data , setData] = useState([]);

const AddData = ()=>{
  setData([...data, {name,email}]);
  setName("")
  setEmail("")
}

const removeItem=(index)=>{
    let arr = data;
    arr.splice(index,1);
    setData([...arr])
}
  return (
    <div className="App">
      <Header />

      {/* form */}
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField value={name} 
          onChange={(event)=>setName(event.target.value)}
          id="outlined-basic" label="Name" variant="outlined" />
          <TextField
           value={email} 
           onChange={(event)=>setEmail(event.target.value)}
           id="outlined-basic" label="email" variant="outlined" />
          <Button
          onClick={AddData}
          variant="contained" color="error">
            <AddIcon />
          </Button>
        </Stack>
      </div>
        {/* data */}
      <div className="data">
         <div className="section">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
         </div>
         {
          data.map((element,index)=>{
            return(
              <div key={index} className="section">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
              <Button onClick={()=>removeItem(index)} variant="contained" color="success">
                  <DeleteIcon/>
                </Button>
                </Stack>
             </div>   
            )
          })
         }
      </div>
    </div>
  );
}

export default App;
