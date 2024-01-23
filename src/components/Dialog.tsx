import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export function CustomDialog({children, isOpen, handleClose}: {children: React.ReactElement, isOpen: boolean, handleClose: () => void}) {
  // const [open, setOpen] = React.useState(isOpen);

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={()=>{}}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <DialogContent dividers>
          {children}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Fechar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
