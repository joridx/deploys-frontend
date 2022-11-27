import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JenkinsApp} from "../models/job.model";

const baseUrl = 'http://localhost:8080/build-app';

@Injectable({
  providedIn: 'root'
})
export class BuildAppService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<JenkinsApp[]>(baseUrl);
  }
}
