import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';


const NFTbox = ({nfts}) => {
    let rating = nfts.attributes;
    // console.log(rating);
  return (
    <div>
        <Card sx={{ maxWidth: 345,border: "2px solid black", margin:"20px" }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="180"
            image={nfts.image}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {nfts.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {nfts.description}
            </Typography>

            {rating.map((e,index)=>(
            <div key={index} style={{margin:"20px, 0px"}}>
                <Typography variant="body2" color="text.primary">
                    {e.trait_type}
                </Typography>
                <Rating name="read-only" value={e.max_value}  readOnly />
            </div>
            ))}

            </CardContent>
        </CardActionArea>
        </Card>
    </div>
  )
}

export default NFTbox