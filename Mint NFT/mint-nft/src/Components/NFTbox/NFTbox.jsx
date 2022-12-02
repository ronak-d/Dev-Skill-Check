import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';


const NFTbox = ({nfts}) => {

    console.log(nfts)
  return (
    <div style={{border: '1px solid black'}}>
        {/* <Card sx={{ maxWidth: 345,border: "2px solid black", margin:"20px" }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="180"
            image={nfts.image}
            alt="nft image"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {nfts.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {nfts.description}
            </Typography>

            {nfts.attributes.map((e,index)=>(
            <div key={index} style={{margin:"20px"}}>
                <Typography  variant="body1" color="text.primary">
                    {e.trait_type}
                </Typography>
                <Rating  name="read-only" value={e.value} max={10} readOnly />
            </div>
            ))}
            
            </CardContent>
        </CardActionArea>
        </Card> */}
    </div>
  )
}

export default NFTbox