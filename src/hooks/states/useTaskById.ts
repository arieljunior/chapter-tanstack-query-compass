import { useQuery } from "@tanstack/react-query";
import { getTaskById } from "../../services/taskServices";
import { TASK_KEYS_ENUM } from "../../enums";

export function useTaskById(taskId?: string){
  return useQuery({
    queryKey: [TASK_KEYS_ENUM.SELECTED_TASK, taskId],
    queryFn: () => getTaskById(taskId as string),
    enabled: !!taskId,
  });
}