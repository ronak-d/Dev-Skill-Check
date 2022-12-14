import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';


const NFTbox = ({nfts}) => {

    const [dataNft, setDataNft] = React.useState([]);

    React.useEffect(() =>{
        (nfts).map((e)=>(setDataNft(e.metadata)))
    },[]);
    console.log(dataNft)

  return (
    <div style={{border: '1px solid black'}}>
        <Card sx={{ maxWidth: 345,border: "2px solid black", margin:"20px" }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="180"
            image={dataNft.image}
            alt="nft image"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {dataNft.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {dataNft.description}
            </Typography>

            {dataNft?.attributes?.map((e,index)=>(
            <div key={index} style={{margin:"5px 5px" ,border:"2px solid pink", borderRadius:"6px"}}>
                <Typography variant="body1" padding="5px" color="text.primary">
                    {e.trait_type}
                </Typography>
                <Rating  name="read-only" value={e.value} max={10} readOnly />
            </div>
            ))}
            
            </CardContent>
        </CardActionArea>
        </Card>
    </div>
  )
}

export default NFTbox;