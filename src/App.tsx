import React, { useEffect, useMemo, useState } from "react";
import { Grid, List, Typography } from "@mui/material";
import FormTask from "./components/FormTask";
import { CustomDialog } from "./components/Dialog";
import { ListItemTask } from "./components/ListItemTask";
import { useTasks } from "./hooks/states/useTasks";
import { useCreateTask } from "./hooks/mutations/useCreateTask";
import { useDeleteTask } from "./hooks/mutations/useDeleteTask";
import { useTaskById } from "./hooks/states/useTaskById";

export interface ITask {
  id: string;
  description: string;
}

export type ITaskNew = Omit<ITask, "id">;

function App() {

  const [taskId, setTaskId] = useState<string | undefined>();

  const { data: tasks, status: statusTasks } = useTasks();

  const { variables, isPending, isError, mutate } = useCreateTask();

  const { mutate: deleteTask } = useDeleteTask();

  const { data: taskSelected } = useTaskById();

  const isOpenDialog = taskId !== undefined;
  return (
    <React.Fragment>
      <CustomDialog
        isOpen={isOpenDialog}
        handleClose={() => setTaskId(undefined)}
      >
        <Typography gutterBottom>
          Descrição: {taskSelected?.description}
        </Typography>
      </CustomDialog>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={4}
        sx={{
          marginTop: 3,
        }}
      >
        <Grid item xs={2}>
          <FormTask handleSubmitForm={mutate} disableSubmitForm={isPending} />
        </Grid>
        <Grid item xs={10} width="50%">
          {statusTasks === "pending" && <div>carregando...</div>}
          {statusTasks === "success" && (
            <List
              sx={{
                bgcolor: "#1b1a19",
              }}
            >
              {tasks?.map((task) => {
                return (
                  <ListItemTask
                    key={task.id}
                    {...task}
                    handleDelete={deleteTask}
                    handleClick={(id) => setTaskId(id)}
                  />
                );
              })}

              {isPending && (
                <ListItemTask {...variables} id="" variant="pending" />
              )}

              {isError && (
                <ListItemTask
                  {...variables}
                  id=""
                  variant="error"
                  retrySubmit={() => mutate(variables)}
                />
              )}
            </List>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
