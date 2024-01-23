import { useQuery } from "@tanstack/react-query";
import { getAllTasks } from "../../services/taskServices";
import { TASK_KEYS_ENUM } from "../../enums";

export function useTasks(){
  return useQuery({
    queryKey: [TASK_KEYS_ENUM.LIST_TASK],
    queryFn: getAllTasks,
    // retry: false,
    // refetchInterval: 5 * 1000,
    
  });
}