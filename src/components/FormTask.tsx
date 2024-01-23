import * as React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { ITaskNew } from "../App";

interface IFormTasksProps {
  handleSubmitForm: (form: ITaskNew) => void;
  disableSubmitForm?: boolean
}

export default function FormTask({ handleSubmitForm, disableSubmitForm }: IFormTasksProps) {
  const [description, setDescription] = React.useState<string>("");

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmitForm({ description });
        setDescription("");
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <TextField
            name="description"
            label="Descrição"
            variant="filled"
            color="primary"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
            sx={{ bgcolor: "#f1f1f1" }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" variant="contained" disabled={disableSubmitForm}>
            Criar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
