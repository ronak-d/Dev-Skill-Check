import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer';
import { useContract } from 'wagmi';


const CreateNft = ({setCreatenfts}) => {

    const NFTaddress = "0xe42De2478343ACbFa6f650E637Ac812cD0d37f87";
    const ABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"_uri","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]

    const [formdata, setFormData] = useState({
        Tittle:"",
        Description:"",
        File:""
    })
    const [imageId, setimageId] = useState("");
    
    async function handleImage(e){
        const auth = 'Basic ' + Buffer.from("2IWjOQ94ggJTqVb1FLWeG7peZvy" + ':' + "8400d21e7d31d41cce5f7397cf53a3ca").toString('base64');
        const client = create({ url: "https://ipfs.infura.io:5001",         // made a client form ipfs npm
            headers: {authorization : auth}
        });                                                             
        const response = await client.add(e.target.files[0]);
        setimageId(response.path);
        handleFormData(e,response.path)
        // console.log("response",response.path);
        // console.log(imageId);
        console.log("p",e,response.path);
    }

    async function handleFormData(e,path) {
        console.log(e,path);
        let key = e.target.name;
        let value = e.target.value;        

        // Just setting up the state
        var newobj = {...formdata};
        // condition to modify the value for image.
        if(key === "File"){
            // console.log("imageId",imageId);
            newobj[key] =(`https://ipfs.io/ipfs/${path}`);
        }else{
            newobj[key] = value;
        }
        setFormData(newobj);

    }
    console.log("formdata",formdata)

    async function deployNFT(e){

        const metadata = {
            ...formdata
        }
        console.log("metadata",metadata)

        // const auth = 'Basic ' + Buffer.from("2IWjOQ94ggJTqVb1FLWeG7peZvy" + ':' + "8400d21e7d31d41cce5f7397cf53a3ca").toString('base64');
        // const client = create({ url: "https://ipfs.infura.io:5001",         // made a client form ipfs npm
        //     headers: {authorization : auth}
        // });                                                             
        // const response = await client.add(JSON.stringify(metadata));
        // console.log(response.path);
        // let data = `https://ipfs.io/ipfs/${response.path}`;
        // console.log(data);
    }

    return (
        // (e)=>handleImage(e) from line85
    <>
        <div style={{display: 'flex',justifyContent: 'flex-end',margin:"10px"}}>
            <Button style={{minWidth:'20px'}}onClick={()=> setCreatenfts(false)} variant="contained"  size="medium">Show Nfts</Button>
        </div>

        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection:'column',margin:"10px"}}>
         <h3>Create NFT Via this form</h3>
        </div> 

        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection:'column',margin:"10px",padding:"10px"}}>
            <TextField style={{minWidth:'280px'}} onChange={handleFormData} id="outlined-basic" name="Tittle" label="Tittle" variant="outlined" size="small" margin="dense" focused/>
            <TextField style={{minWidth:'280px'}} onChange={handleFormData} id="outlined-basic" name="Description" label="Description" multiline variant="outlined" size="small" margin="dense"/>
            <label style={{minWidth:'280px',padding:'5px'}}  for="avatar">Choose a Asset picture:</label>
            <input style={{minWidth:'280px',padding:'10px'}} type="file" onChange={handleImage} name="File" accept="image/png, image/jpeg" />

            <Button style={{minWidth:'280px',padding:'7px', margin:'30px 0px'}} size="small" variant="contained" onClick={()=>deployNFT(formdata)} >Deploy Your NFT</Button>
        </div>

        <div>
        </div>
    </>
  )
}

export default CreateNft;