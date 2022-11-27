import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {JenkinsApp, Job} from "../../models/job.model";
import {BuildAppService} from "../../services/build-app.service";

@Component({
  selector: 'app-builds-overview',
  templateUrl: './builds-overview.component.html',
  styleUrls: ['./builds-overview.component.scss']
})
export class BuildsOverviewComponent implements OnInit {

  data: JenkinsApp[];

  constructor(private buildAppService : BuildAppService) { }

  ngOnInit(): void {
    this.getApps();
  }

  getApps(): void {
    this.buildAppService.getAll()
      .subscribe({
        next: (data) => {
          console.log(data);
          this.data = data;
        },
        error: (e) => console.error(e)
      });
  }

  onValueChanged(e) {
    console.log(e.previousValue);
    console.log(e.value);
  }

}
