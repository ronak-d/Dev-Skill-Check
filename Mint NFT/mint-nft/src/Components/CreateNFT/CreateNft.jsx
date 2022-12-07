import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer';
import DeployNFT from '../DeployNFT/DeployNFT';


const CreateNft = ({setCreatenfts}) => {

    // const NFTaddress = "0xe42De2478343ACbFa6f650E637Ac812cD0d37f87";
    // const ABI = 
    var ImgId;

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
        // condition to modify the value for image.
        if(key === "File"){
            console.log(ImgId);
            newobj[key] =(`https://ipfs.io/ipfs/${ImgId}`) ; 
        }else{
            newobj[key] = value;
        }
        setFormData(newobj);

    }
    console.log(formdata)
    async function handleImage(e){
        
        // console.log("file",e.target.files[0]);
        // proj ID + API key
        const auth = 'Basic ' + Buffer.from("2IWjOQ94ggJTqVb1FLWeG7peZvy" + ':' + "8400d21e7d31d41cce5f7397cf53a3ca").toString('base64');
        const client = create({ url: "https://ipfs.infura.io:5001",         // made a client form ipfs npm
            headers: {authorization : auth}
        });                                                             
        const response = await client.add(e.target.files[0]);
        ImgId = response.path;
        // console.log(ImgId);
    }

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
            <input style={{minWidth:'280px',padding:'10px'}} type="file" onClick={(e)=>handleImage(e)} onChange={(e)=>handleFormData(e)} name="File" accept="image/png, image/jpeg" />
            <Button style={{minWidth:'280px',padding:'7px', margin:'30px 0px'}} size="small" variant="contained" onClick={()=>DeployNFT(formdata)} >Deploy Your NFT</Button>
        </div>

        <div>
        </div>
    </>
  )
}

export default CreateNft;