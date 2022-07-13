import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Detail from '../detail'



export default function MultiActionAreaCard({ post }) {
  return (<div className="holder space-y-4 space-x-2 mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
    {post && (post.map((posts) => (
      <Card sx={{ maxWidth: 345 }} key={post.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={posts.picture}
            alt={post.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {posts.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {posts.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
          <Detail posts={posts} />
        </CardActions>
      </Card>
    )))}


  </div>
  )
}
