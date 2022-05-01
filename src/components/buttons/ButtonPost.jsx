import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormCheques from '../forms/FormChequera'
import TextField from '@mui/material/TextField';
import axios from 'axios'
import '../../assets/styles/ButtonPost.css'

const API = process.env.URLBASE

const buttonPost = {
	backgroundColor: 'black',
	fontWeight: 'bold',
	fontSize: 16
}

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

const box = {
  color: 'white'
}

const button = {
	marginTop: "20px",
  backgroundColor: "black",
	color: 'gray',
	fontWeight: 'bold',
	fontSize: '16px',
  alignItems: "center"
}

const ButtonPost = () => {
	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
	const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
	const [deleteId, setDeleteId] = useState('');

	const data = {
    id: deleteId
  }

  var config = {
    method: 'delete',
    url: `${API}/chequera/${data.id}`,
		headers: {
      'Content-Type': 'application/json'
    },
    data : data
  }

	const fetchDataDelete = async () => {
    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

	const handleClickDelete = () => {
		fetchDataDelete()
	}

	return (
		<div className="button-post">

      <Button sx={buttonPost} variant="contained" onClick={handleOpen}>Create</Button>
			<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<FormCheques />
					</Box>
				</Modal>
			<Button sx={buttonPost} onClick={handleOpenDelete} variant="contained">Delete</Button>
			<Modal open={openDelete}
					onClose={handleCloseDelete}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
				<Box sx={style} >
						<TextField
							id="outlined-number"
							sx={box}
							label="id"
							type="number"
							onChange={event => setDeleteId(event.target.value)}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					<Button onClick={handleClickDelete} sx={button}>Borrar Chequera</Button>
				</Box>
			</Modal>
		</div>
	);
};

export default ButtonPost;
