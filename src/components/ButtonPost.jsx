import React from 'react';
import Button from '@mui/material/Button';
import '../assets/styles/ButtonPost.css'

const buttonPost = {
	backgroundColor: 'black',
	fontWeight: 'bold',
	fontSize: 16
}

const ButtonPost = () => {
	return (
		<div className="button-post">
      <Button sx={buttonPost} variant="contained">Create</Button>
			<Button sx={buttonPost} variant="contained">Delete</Button>
		</div>
	);
};

export default ButtonPost;
