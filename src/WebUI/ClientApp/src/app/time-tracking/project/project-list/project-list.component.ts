import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent extends BaseComponent implements OnInit {
  public constructor(private readonly _projectService: ProjectService) {
    super();
  }
}
