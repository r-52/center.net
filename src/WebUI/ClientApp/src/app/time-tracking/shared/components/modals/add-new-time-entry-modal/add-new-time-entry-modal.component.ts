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

export interface IAddNewTimeEntryModalForm {
  startedAt: FormControl<Date>;

  endedAt: FormControl<Date>;

  description?: FormControl<string>;
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

  public constructor(private readonly _formBuilder: FormBuilder) {
    super();
  }

  //#region helper
  public get startedAt() {
    return this.form.get('startedAt')?.value;
  }

  public get endedAt() {
    return this.form.get('endedAt')?.value;
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
    });
  }

  //#region methods
  private _getDefaultStartedAtDate(): Date {
    return DateTime.fromJSDate(new Date()).minus({ hours: 8 }).toJSDate();
  }
  //#endregion
}
