import TaskEntity from '../entities/Task/Task.entity'

export enum actionTypeEnum {
  COMPLETE = 'complete',
  CREATE = 'create',
  DELETE = 'delete',
  UPDATE = 'update',
  FETCH = 'fetch',
}

export type ActionTaskType =
  | { type: actionTypeEnum.COMPLETE; payload: string }
  | { type: actionTypeEnum.CREATE; payload: string }
  | { type: actionTypeEnum.DELETE; payload: string }
  | { type: actionTypeEnum.UPDATE; payload: { id: string; title: string } }
  | { type: actionTypeEnum.FETCH; payload: TaskEntity[] }
