import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: theme.palette.success.main,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const SuccessMessage = () => {
  const classes = useStyles();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSnackbarClose = () => {
    setShowSuccess(false);
  };

  const handleShowSuccess = () => {
    setShowSuccess(true);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleShowSuccess}>
        Show Success
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={showSuccess}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
        <div className={`${classes.success} ${classes.message}`}>
          <CheckCircleIcon className={classes.icon} />
          <span>Success message!</span>
        </div>
      </Snackbar>
    </div>
  );
};

export default SuccessMessage;