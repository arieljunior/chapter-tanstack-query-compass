import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TASK_KEYS_ENUM } from "../../enums";
import { deleteTaskById } from "../../services/taskServices";

export function useDeleteTask(){
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [TASK_KEYS_ENUM.DELETE_TASK],
    mutationFn: deleteTaskById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TASK_KEYS_ENUM.LIST_TASK] });
    },
  });
}