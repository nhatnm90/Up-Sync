import api from '@/lib/axios.ts'
import { handleApi } from '@/lib/handleApi.ts'
import type { Task, TaskPayload } from '@/types/task'
import type { TaskResponse } from '@/types/task'

const getTasks = (dateQuery: string, userId: string) =>
  handleApi(async () => {
    const genDateQuery = dateQuery === 'all' ? '' : `?filter=${dateQuery}`
    const res = await api.get<unknown, TaskResponse>(`/tasks/${userId}${genDateQuery}`)
    return res
  })

const addTask = (task: TaskPayload) =>
  handleApi(async () => {
    const res = await api.post<unknown, Task>('/tasks', task)
    return res
  })

const updateTask = (taskId: string, payload: unknown) =>
  handleApi(async () => {
    const res = await api.put<unknown, Task>(`/tasks/${taskId}`, payload)
    return res
  })

const deleteTask = (taskId: string) =>
  handleApi(async () => {
    const res = await api.delete(`/tasks/${taskId}`)
    return res
  })

export const taskService = { getTasks, addTask, updateTask, deleteTask }
