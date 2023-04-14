import TaskEntity from '../entities/Task/Task.entity'

export enum actionTypeEnum {
  COMPLETE = 'complete',
  CREATE = 'create',
  DELETE = 'delete',
  UPDATE = 'update',
  FETCH = 'fetch',
}

export type ActionTask =
  | { type: actionTypeEnum.COMPLETE; payload: number }
  | { type: actionTypeEnum.CREATE; payload: string }
  | { type: actionTypeEnum.DELETE; payload: number }
  | { type: actionTypeEnum.UPDATE; payload: { id: number; title: string } }
  | { type: actionTypeEnum.FETCH; payload: TaskEntity[] }
