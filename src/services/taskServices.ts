import { ITask, ITaskNew } from "../App";
import api from "./api";
import { v4 as uuidv4 } from "uuid";

const ROUTE_BASE_TASK = '/tasks'

export const getAllTasks = async (): Promise<ITask[]> => await (await api.get(ROUTE_BASE_TASK)).data;
export const getTaskById = async (id: string): Promise<ITask> => await (await api.get(`${ROUTE_BASE_TASK}/${id}`)).data;
export const deleteTaskById = async (id: string): Promise<Boolean> => (await (api.delete(`${ROUTE_BASE_TASK}/${id}`))).status === 200;
export const createTask = async (task: ITaskNew) => api.post(ROUTE_BASE_TASK, { ...task, id: uuidv4() });
