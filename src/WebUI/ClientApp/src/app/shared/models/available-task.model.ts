import { IBaseViewModel } from './base-view-model.model';

export interface IAvailableTask extends IBaseViewModel {
  name: string;

  description: string;

  isBookable: boolean;
}
