import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import axios, { Axios } from 'axios';
import { Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material';

const Home = () => {

const [rows,setRows]=useState([]);
//CONNECTING API
useEffect(()=>{
  axios.get('https://fakestoreapi.com/products').then((res)=>{
  setRows(res.data);
  })
},[])

  return (
   <Grid2 container spacing={2}>
    {rows.map((row) => (
     <Grid2 item key={row.title} xs={12} sm={6} md={4}>
      <Card sx={{ 
         display:'flex',flexDirection:'column',
   height:'100' ,
   width:300,
  backgroundColor: '#f0f0f0', 
     borderRadius: 1, 
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
               '&:hover': {
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              },
            }}
          >
<CardMedia
              
              image={row.image}
              alt={row.title}
              sx={{ height: 200, width:250, objectFit: 'contain', borderRadius: '10px 10px 0 0'}}
            />

           <CardContent sx={{flex:'1 0 auto'}}>


        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#FF69B4',fontWeight:'semibold' }}>    
              {row.title}
            </Typography>
            <Typography variant="body2"  sx={{ color: '#666' }} >
              <b>Price:</b> {row.price}
            </Typography>           
              <Typography variant="body2" sx={{ color: '#666' }}
            >
              <b>Rating:</b> {row.rating.rate}
            </Typography>
            
          </CardContent>
         </Card>
       </Grid2>
     ))}
   </Grid2>
  
  );
}




export default Home