import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job, Build, HealthReport} from "../models/job.model";

const baseUrl = 'http://localhost:8080/jenkins';

@Injectable({
  providedIn: 'root'
})
export class JenkinsService {

  constructor(private http: HttpClient) { }

  getByUrl(url: string) {
    console.log(`${baseUrl}/${url}`);
    return this.http.get<Job>(`${baseUrl}/${url}`);
  }
}
