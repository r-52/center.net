import { IAvailableTask } from './available-task.model';
import { IBaseViewModel } from './base-view-model.model';

export interface IAvailableProject extends IBaseViewModel {
  name: string;

  description: string;

  isActive: boolean;

  projectStart: Date;

  projectEnd?: Date;

  bookableStart: Date;

  bookableEnd: Date;

  tasks: IAvailableTask[];
}
