import { Component, Input, OnInit } from '@angular/core';
import { Job} from "../../models/job.model";
import { JenkinsService} from "../../services/jenkins.service";

@Component({
  selector: 'app-builds-overview',
  templateUrl: './builds-overview.component.html',
  styleUrls: ['./builds-overview.component.scss']
})
export class BuildsOverviewComponent implements OnInit {

  @Input() job: Job = {
    url:''
  };

  constructor(private jenkinsService : JenkinsService) { }

  ngOnInit(): void {
    this.getJob();
  }

  getJob(): void {
    this.jenkinsService.getByUrl('https%253A%252F%252Fjenkins-adp-tools-itmp-frontend.apps.crp.ec1.aws.aztec.cloud.allianz%252Fjob%252FRws_UI-editor%252Fjob%252Fdevelop')
      .subscribe({
        next: (data) => {
          console.log(data);
          this.job = data;
          console.log('description:' + this.job.healthReport.description);
        },
        error: (e) => console.error(e)
      });
  }

}
