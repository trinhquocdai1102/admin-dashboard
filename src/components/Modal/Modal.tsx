import * as React from 'react';
import { Typography, Button, Modal, Box } from '@mui/material';
import './Modal.scss';

interface Props {
  openModal: boolean;
  data?: any;
  width?: any;
  handleEvent(any: any): void;
  setOpenModal: any;
  message: string;
}

const ModalC = (props: Props) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: props.width,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      className="main-modal"
      open={props.openModal}
      onClose={() => props.setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="container">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {props.message}
        </Typography>
        <Box>
          <Button
            variant="contained"
            className="cancelButton"
            onClick={() => props.setOpenModal(false)}
          >
            No
          </Button>
          <Button
            variant="contained"
            className="confirmButton"
            onClick={() => {
              props.handleEvent(props.data);
              props.setOpenModal(false);
            }}
          >
            Yes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalC;
