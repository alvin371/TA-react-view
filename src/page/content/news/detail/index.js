import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from '@mui/material/CardMedia';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const NewsDetail = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(props)
  return (
    <div>
      <Button onClick={handleOpen}>Learn More</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box className="absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 w-1/3 bg-gray border-2 border-black shadow-sm p-4"> */}
        <Box sx={style}>
        <CardMedia
          component="img"
          height="50"
          image={props.posts.picture}
          alt="green iguana"
        />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.posts.title}
          </Typography>
          <Typography id="modal-modal-title" variant="subtitle1" component="h2">
            created by:{props.posts.creator_name}
          </Typography>
          <div className="overflow-auto">
          <Typography id="modal-modal-description" variant="body1" sx={{ mt: 2 }}>
            {props.posts.content}
          </Typography>
          </div>
        
        </Box>
      </Modal>
    </div>
  );
};

export default NewsDetail;
