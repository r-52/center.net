import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as luxon from 'luxon';
import { DateTime } from 'luxon';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { IAvailableProject } from 'src/app/shared/models/available-project.model';
import { ProjectService } from 'src/app/shared/services/project.service';

export interface IAddNewTimeEntryModalForm {
  startedAt: FormControl<Date>;

  endedAt: FormControl<Date>;

  description?: FormControl<string | null>;

  isWorkTime: FormControl<number>;

  humanTime?: FormControl<string | null>;

  isHumanTime: FormControl<boolean>;

  projectId?: FormControl<number | null>;

  taskId?: FormControl<number | null>;

  userId?: FormControl<number | null>;

  timeTypeId: FormControl<number>;
}

@Component({
  selector: 'app-add-new-time-entry-modal',
  templateUrl: './add-new-time-entry-modal.component.html',
  styleUrls: ['./add-new-time-entry-modal.component.scss'],
})
export class AddNewTimeEntryModalComponent
  extends BaseComponent
  implements OnInit
{
  protected form!: FormGroup<IAddNewTimeEntryModalForm>;

  protected projects: IAvailableProject[] = [];

  protected selectedProject!: IAvailableProject;

  public constructor(
    private readonly _projectService: ProjectService,
    private readonly _formBuilder: FormBuilder
  ) {
    super();
  }

  //#region helper
  public get startedAt() {
    return this.form.value.startedAt;
  }

  public get endedAt() {
    return this.form.value.endedAt;
  }

  public get timeTypeId() {
    return this.form.value.timeTypeId;
  }

  public get description() {
    return this.form.value.description;
  }

  public get isWorkTime() {
    return this.form.value.isWorkTime;
  }

  public get projectId() {
    return this.form.value.projectId;
  }

  public get taskId() {
    return this.form.value.taskId;
  }

  public get userId() {
    return this.form.value.userId;
  }

  public get humanTime() {
    return this.form.value.humanTime;
  }

  public get isHumanTime() {
    return this.form.value.isHumanTime;
  }
  //#endregion

  protected onBuildForm(): void {
    super.onBuildForm();
    // TODO: get the default work time per day from server
    const maybeStartDate = this._getDefaultStartedAtDate();
    this.form = this._formBuilder.group<IAddNewTimeEntryModalForm>({
      startedAt: new FormControl<Date>(maybeStartDate, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      endedAt: new FormControl<Date>(new Date(), {
        validators: [Validators.required],
        nonNullable: true,
      }),
      description: new FormControl<string>('', {
        nonNullable: false,
      }),
      isHumanTime: new FormControl<boolean>(false, {
        nonNullable: true,
      }),
      isWorkTime: new FormControl<number>(0, {
        nonNullable: true,
      }),
      timeTypeId: new FormControl<number>(0, {
        nonNullable: true,
      }),
      projectId: new FormControl<number>(0, {
        nonNullable: false,
      }),
      taskId: new FormControl<number>(0, {
        nonNullable: false,
      }),
      userId: new FormControl<number>(0, {
        nonNullable: false,
      }),
      humanTime: new FormControl<string>('', {
        nonNullable: false,
      }),
    });
  }

  protected projectChanged(x: Event) {}

  //#region methods
  private _getDefaultStartedAtDate(): Date {
    return DateTime.fromJSDate(new Date()).minus({ hours: 8 }).toJSDate();
  }
  //#endregion
}
