import React from "react";
import {
  Button,
  CircularProgress,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const ListItemTask = ({
  description,
  id,
  handleDelete,
  variant,
  retrySubmit,
  handleClick
}: {
  description: string;
  id: string;
  handleDelete?: (id: string) => void;
  handleClick?: (id: string) => void;
  retrySubmit?: () => void;
  variant?: "pending" | "error";
}) => {
  const styleListItem: SxProps = {
    bgcolor: "",
  };
  if (variant === "pending") {
    styleListItem.bgcolor = "grey";
  }

  if (variant === "error") {
    styleListItem.bgcolor = "red";
  }
  return (
    <ListItem
      disablePadding
      divider
      sx={styleListItem}
    >
      <ListItemButton onClick={()=> handleClick && handleClick(id)}>
        <ListItemText primary={description} />
      </ListItemButton>
      <ListItemIcon>
        <Divider orientation="vertical" variant="middle" flexItem />
        {handleDelete && variant !== "pending" && (
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => handleDelete(id)}
          >
            <DeleteIcon fontSize="inherit" color="error" />
          </IconButton>
        )}

        {variant === "pending" && <CircularProgress />}
        {variant === "error" && retrySubmit && <Button variant="contained" onClick={retrySubmit}>Tentar novamente</Button>}
      </ListItemIcon>
    </ListItem>
  );
};
