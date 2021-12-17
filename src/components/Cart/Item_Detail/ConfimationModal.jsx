import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteOutline from '@mui/icons-material/DeleteOutline';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #E7E7E7',
    p: 4,
    outline: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center'
};

export default function ConfirmationModal({data, open, handleOpen, handleClose, handleDelete}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Remove <span style = {{fontWeight: 500}}>{data.name}</span> from your cart?
          </Typography>
          <img src = {data.imagesArray[0]} alt = "image" style = {{width: '300px', height: 'auto'}}/>
          <Button startIcon = {<DeleteOutline size = "medium" sx = {{color:"white"}}/>} disableElevation sx = {{width: '200px'}} variant = "contained" onClick = {() => handleDelete()}>Remove Item</Button>
        </Box>
      </Modal>
    </div>
  );
}
