import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { create } from 'ipfs-http-client'


const CreateNft = ({setCreatenfts}) => {

    const [formdata, setFormData] = useState({
        Tittle:"",
        Description:"",
        File:""
    })

    function handleFormData(e) {
        // console.log(e.target.name)
        // console.log(e.target.value)
        let key = e.target.name;
        let value = e.target.value;
        let file ;

        if(formdata.File){
            file = e.target.files[0];         // refer from GFG how to handle file data.
        }
        console.log("file",file)

        // const client = create({ url: "http://127.0.0.1:5002/api/v0" });

        let newobj = {...formdata};
        newobj[key] = value;
        setFormData(newobj);
    }
    // console.log(formdata)

    return (
    <>
        <div style={{display: 'flex',justifyContent: 'flex-end',margin:"10px"}}>
            <Button style={{minWidth:'20px'}}onClick={()=> setCreatenfts(false)} variant="contained"  size="medium">Show Nfts</Button>
        </div>

        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection:'column',margin:"10px"}}>
         <h3>Create NFT Via this form</h3>
        </div>

        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection:'column',margin:"10px",padding:"10px"}}>
                <TextField style={{minWidth:'280px'}} onChange={(e)=>handleFormData(e)} id="outlined-basic" name="Tittle" label="Tittle" variant="outlined" size="small" margin="dense" focused/>
                <TextField style={{minWidth:'280px'}} onChange={(e)=>handleFormData(e)} id="outlined-basic" name="Description" label="Description" multiline variant="outlined" size="small" margin="dense"/>
                <label style={{minWidth:'280px',padding:'5px'}}  for="avatar">Choose a Asset picture:</label>
                <input style={{minWidth:'280px',padding:'10px'}} type="file" onChange={(e)=>handleFormData(e)} name="File" accept="image/png, image/jpeg" />
        </div>
    </>
  )
}

export default CreateNft;