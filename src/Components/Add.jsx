import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Add = () => {
  const [product, setProduct] = useState({
    Title: '',
    ProductPrice: '',
    ProductRate: '',
  });
  const [errors, setErrors] = useState({});

  const fetchValue = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!product.Title) errors.Title = 'Title is required';
    if (!product.ProductPrice || isNaN(product.ProductPrice)) 
      errors.ProductPrice = 'Invalid price';
    if (!product.ProductRate || isNaN(product.ProductRate) || product.ProductRate < 1 || product.ProductRate > 5) 
      errors.ProductRate = 'Invalid rate (1-5)';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendData = () => {
    if (validateForm()) {
      console.log(product);
    }
  };

  return (
    <div style={{ backgroundColor: '#9A92BE', padding: 20 }}>
      <h2>Add Product</h2>
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          name="Title"
          onChange={fetchValue}
          error={!!errors.Title}
          helperText={errors.Title}
        /><br />
        <TextField
          id="filled-basic"
          label="Product Price"
          variant="outlined"
          name="ProductPrice"
          onChange={fetchValue}
          error={!!errors.ProductPrice}
          helperText={errors.ProductPrice}
        /><br />
        <TextField
          id="standard-basic"
          label="Product Rate"
          variant="outlined"
          name="ProductRate"
          onChange={fetchValue}
          error={!!errors.ProductRate}
          helperText={errors.ProductRate}
        /><br />
        <Button variant="contained" onClick={sendData}>Submit</Button>
      </Box>
    </div>

  )
}

export default Add