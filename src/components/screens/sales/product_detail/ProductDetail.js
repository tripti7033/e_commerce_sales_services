import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const ProductDetailPage = () => {
  const { category, id } = useParams();
  
  // In a real app, you would fetch this data from an API based on category and id
  const product = {
    id: 1,
    name: 'LaserJet Pro M404',
    image: '/images/printer1.jpg',
    description: 'High-speed monochrome laser printer with professional output quality.',
    specifications: [
      'Print speed: Up to 40 ppm',
      'Resolution: 1200 x 1200 dpi',
      'Paper capacity: 250 sheets',
      'Connectivity: USB, Ethernet, Wi-Fi'
    ],
    price: '$499.99'
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        {product.name}
      </Typography>
      
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{ width: { xs: '100%', md: 400 }, objectFit: 'contain', p: 2 }}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Specifications:
          </Typography>
          <ul>
            {product.specifications.map((spec, index) => (
              <li key={index}>
                <Typography variant="body1">{spec}</Typography>
              </li>
            ))}
          </ul>
          
          <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
            {product.price}
          </Typography>
          
          <Button variant="contained" size="large" sx={{ mt: 2 }}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetailPage;