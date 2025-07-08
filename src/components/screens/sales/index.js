import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, Grid, Chip, IconButton, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from './sales.style';
import { ShoppingCart, Star, Visibility } from '@mui/icons-material';

// const Sales = () => {
//      const classes = useStyles();
//   // Sample product data
//   const products = {
//     printers: [
//       { id: 1, name: 'LaserJet Pro M404', image: '/assets/monitors/images 615c pro crop.jpg' },
//       { id: 2, name: 'Inkjet Color 550', image: '/images/printer2.jpg' },
//       { id: 3, name: 'OfficeJet Pro 9015', image: '/images/printer3.jpg' },
//       { id: 4, name: 'EcoTank ET-4760', image: '/images/printer4.jpg' },
//     ],
//     cpu: [
//       { id: 1, name: 'Core i9 Workstation', image: '/images/cpu1.jpg' },
//       { id: 2, name: 'Ryzen 7 Pro', image: '/images/cpu2.jpg' },
//       { id: 3, name: 'Xeon Server CPU', image: '/images/cpu3.jpg' },
//       { id: 4, name: 'Threadripper Pro', image: '/images/cpu4.jpg' },
//     ],
//     scanners: [
//       { id: 1, name: 'Document Scan 3000', image: '/images/scanner1.jpg' },
//       { id: 2, name: 'Portable Sheetfed', image: '/images/scanner2.jpg' },
//       { id: 3, name: 'High-Speed 5000', image: '/images/scanner3.jpg' },
//       { id: 4, name: 'Flatbed Pro', image: '/images/scanner4.jpg' },
//     ],
//     webCameras: [
//       { id: 1, name: '4K Pro Webcam', image: '/images/webcam1.jpg' },
//       { id: 2, name: 'Conference Cam', image: '/images/webcam2.jpg' },
//       { id: 3, name: 'Streaming HD', image: '/images/webcam3.jpg' },
//       { id: 4, name: 'Privacy Webcam', image: '/images/webcam4.jpg' },
//     ]
//   };

//   const renderProductCategory = (category, title) => {
//     return (
//       <Box sx={{ mb: 6 }}>
//         <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
//           {title}
//         </Typography>
//          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
//           <Link component={Link} to={`/${category}`} className={classes.text}>
//             View More
//           </Link>
//         </Box>
//         <Grid container spacing={4}>
//           {products[category].slice(0, 4).map((product) => (
//             <Grid item xs={12} sm={6} md={3} key={product.id}>
//               <Card sx={{ height: '250px', display: 'flex', flexDirection: 'column' }}>
//                 <CardMedia
//                   component="img"
//                   image={product.image}
//                   alt={product.name}
//                   sx={{ height: 200, objectFit: 'contain', p: 1 }}
//                 />
//                 <CardContent sx={{ flexGrow: 1 , display: 'flex', justifyContent: 'center'}}>
//                   <Link to={`/product/${category}/${product.id}`} className={classes.text} >
//                     {product.name}
//                   </Link>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//         {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//           <Button variant="outlined" component={Link} to={`/${category}`}>
//             More
//           </Button>
//         </Box> */}
//       </Box>
//     );
//   };

//   return (
//     <Box className={classes.brandContainer}>
//     <Box className={classes.brandBoxHeading}>
//       <Typography variant="h4" gutterBottom className={classes.brandHeading}>
//         Our Products
//       </Typography>
//       </Box>
      
//       {renderProductCategory('printers', 'Printers')}
//       {renderProductCategory('cpu', 'CPUs & Workstations')}
//       {renderProductCategory('scanners', 'Scanners')}
//       {renderProductCategory('webCameras', 'Web Cameras')}
//     </Box>
//   );
// };

// export default Sales;


const products = [
  { id: 1, name: "LaserJet Pro M404", category: "Printers", image: "/placeholder.svg", price: "$299.99", rating: 4.5, reviews: 128, badge: "Best Seller" },
  { id: 2, name: "Inkjet Color 550", category: "Printers", image: "/placeholder.svg", price: "$199.99", rating: 4.2, reviews: 89, badge: "New" },
  { id: 3, name: "OfficeJet Pro 9015", category: "Printers", image: "/placeholder.svg", price: "$249.99", rating: 4.7, reviews: 156, badge: "Popular" },
  { id: 4, name: "EcoTank ET-4760", category: "Printers", image: "/placeholder.svg", price: "$399.99", rating: 4.6, reviews: 203, badge: "Eco-Friendly" },
  { id: 5, name: "Core i9 Workstation", category: "CPUs & Workstations", image: "/placeholder.svg", price: "$1,299.99", rating: 4.8, reviews: 67, badge: "Professional" },
  { id: 6, name: "Ryzen 7 Pro", category: "CPUs & Workstations", image: "/placeholder.svg", price: "$899.99", rating: 4.4, reviews: 94, badge: "High Performance" },
  { id: 7, name: "Xeon Server CPU", category: "CPUs & Workstations", image: "/placeholder.svg", price: "$2,199.99", rating: 4.9, reviews: 45, badge: "Enterprise" },
  { id: 8, name: "Threadripper Pro", category: "CPUs & Workstations", image: "/placeholder.svg", price: "$1,899.99", rating: 4.7, reviews: 78, badge: "Creator Edition" },
];



const categories = ["All Products", "Printers", "CPUs & Workstations"];

const Sales = () => {
    const products1 = {
        printers: [
          { id: 1, name: 'LaserJet Pro M404', image: '/assets/monitors/images 615c pro crop.jpg' },
          { id: 2, name: 'Inkjet Color 550', image: '/images/printer2.jpg' },
          { id: 3, name: 'OfficeJet Pro 9015', image: '/images/printer3.jpg' },
          { id: 4, name: 'EcoTank ET-4760', image: '/images/printer4.jpg' },
        ],
        cpu: [
          { id: 1, name: 'Core i9 Workstation', image: '/images/cpu1.jpg' },
          { id: 2, name: 'Ryzen 7 Pro', image: '/images/cpu2.jpg' },
          { id: 3, name: 'Xeon Server CPU', image: '/images/cpu3.jpg' },
          { id: 4, name: 'Threadripper Pro', image: '/images/cpu4.jpg' },
        ],
        scanners: [
          { id: 1, name: 'Document Scan 3000', image: '/images/scanner1.jpg' },
          { id: 2, name: 'Portable Sheetfed', image: '/images/scanner2.jpg' },
          { id: 3, name: 'High-Speed 5000', image: '/images/scanner3.jpg' },
          { id: 4, name: 'Flatbed Pro', image: '/images/scanner4.jpg' },
        ],
        webCameras: [
          { id: 1, name: '4K Pro Webcam', image: '/images/webcam1.jpg' },
          { id: 2, name: 'Conference Cam', image: '/images/webcam2.jpg' },
          { id: 3, name: 'Streaming HD', image: '/images/webcam3.jpg' },
          { id: 4, name: 'Privacy Webcam', image: '/images/webcam4.jpg' },
        ]
      };
  const classes = useStyles();

  const renderProductCategory = (category, title) => {
    return (
      <Box sx={{ mb: 6, ml: 6, mr: 6, mt: 2}}>
        <Typography  gutterBottom sx={{ fontWeight: 'bold', color: '#333', mt: 2, ml: 8, fontSize: '20px !important' }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr: 2, mb: 2 }}>
        <Link component={Link} to={`/${category}`} className={classes.text}>
             View More
           </Link>
         </Box>
        <Grid container spacing={4}>
          {products1[category].slice(0, 4).map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card sx={{ height: '250px', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ height: 200, objectFit: 'contain', p: 1 }}
                />
                <CardContent sx={{ flexGrow: 1 , display: 'flex', justifyContent: 'center'}}>
                  <Link to={`/product/${category}/${product.id}`} className={classes.text} >
                    {product.name}
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="outlined" component={Link} to={`/${category}`}>
            More
          </Button>
        </Box> */}
      </Box>
    );
  };


  return (
    <Box className={classes.section}>
    <Box className={classes.brandContainer}>
     <Box
      className={classes.brandBoxHeading}
    >
      {/* <Container maxWidth="lg"> */}
        <Typography
        className={classes.brandHeading}
          variant="h3"
        //   fontWeight="bold"
        //   mb={2}
        //   sx={{ fontSize: { xs: '2rem', md: '3rem' } }} // text-4xl md:text-5xl
        >
          Our Premium Products
        </Typography>
        <Typography
          variant="h6"
          className={classes.brandSubHeading}
        >
          Discover our comprehensive range of professional-grade printers, workstations, and computing solutions
        </Typography>
      {/* </Container> */}
    </Box>
    </Box>
     {renderProductCategory('printers', 'Printers')}
     {renderProductCategory('cpu', 'CPUs & Workstations')}
       {renderProductCategory('scanners', 'Scanners')}
       {renderProductCategory('webCameras', 'Web Cameras')}
      {/* <Box className={classes.categoryFilter}>
        {categories.map((cat) => (
          <Button key={cat} variant={cat === "All Products" ? "contained" : "outlined"}>{cat}</Button>
        ))}
      </Box> */}
      {/* <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card className={classes.productCard}>
              <Box position="relative">
                <img src={product.image} alt={product.name} width={300} height={192} className={classes.productImage} />
                <Chip label={product.badge} size="small" className={classes.badge} />
                <Box className={classes.overlay}>
                  <IconButton color="inherit" sx={{ bgcolor: "white", mr: 1 }}>
                    <Visibility fontSize="small" />
                  </IconButton>
                  <IconButton color="primary" sx={{ bgcolor: "white" }}>
                    <ShoppingCart fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
              <CardContent>
                <Typography variant="body2" color="primary">
                  {product.category}
                </Typography>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  {product.name}
                </Typography>
                <Box display="flex" alignItems="center" mb={1}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fontSize="small"
                      className={i < Math.floor(product.rating) ? classes.star : ""}
                      sx={{ color: i < Math.floor(product.rating) ? "#facc15" : "#d1d5db" }}
                    />
                  ))}
                  <Typography variant="caption" color="textSecondary" ml={1}>
                    ({product.reviews})
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" color="textPrimary">
                    {product.price}
                  </Typography>
                  <Button variant="contained" size="small">
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};

export default Sales;
