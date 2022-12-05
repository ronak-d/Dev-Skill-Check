import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer';


const CreateNft = ({setCreatenfts}) => {

    const [formdata, setFormData] = useState({
        Tittle:"",
        Description:"",
        File:""
    })

    async function handleFormData(e) {

        let key = e.target.name;
        let value = e.target.value;        

        // Just setting up the state
        var newobj = {...formdata};
        newobj[key] = value;
        setFormData(newobj);

    }
    console.log(formdata)

    async function handleImage(e){
        
        console.log("file",e.target.files[0]);
        const auth = 'Basic ' + Buffer.from("" + ':' + "").toString('base64');
        const client = create({ url: "https://ipfs.infura.io:5001",         // made a client form ipfs npm
            headers: {authorization : auth}
        });                                                             
        const response = await client.add(e.target.files[0]);
        console.log(client);
        console.log(client,"response",response);
    }
    // 33 mins
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
                <input style={{minWidth:'280px',padding:'10px'}} type="file" onChange={(e)=>handleImage(e)} name="File" accept="image/png, image/jpeg" />
        </div>
    </>
  )
}

export default CreateNft;