import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TASK_KEYS_ENUM } from "../../enums";
import { createTask } from "../../services/taskServices";

export function useCreateTask(){
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [TASK_KEYS_ENUM.CREATE_TASK],
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TASK_KEYS_ENUM.LIST_TASK] });
    },
  })
}