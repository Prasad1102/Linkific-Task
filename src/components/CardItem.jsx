import React from 'react'
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material'

/**
 * CardItem - Generic card component used across pages.
 * Props: title, description, image, actions
 */
export default function CardItem({ title, description, image, actions }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ height: 160 }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {actions || <Button size="small">Learn More</Button>}
      </CardActions>
    </Card>
  );
}
