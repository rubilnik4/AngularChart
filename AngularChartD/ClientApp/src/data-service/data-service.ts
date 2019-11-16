import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';

@Injectable()
export class DataService {

  private urlTask = "/api/Project";

  constructor(private http: HttpClient) {
  }

  getProjects() {
    return this.http.get(this.urlTask);
  }

  createProject(project: Project) {
    return this.http.post(this.urlTask, project);
  }
  updateProject(project: Project) {
    return this.http.put(this.urlTask + '/' + project.id, project);
  }
  deleteProject(id: number) {
    return this.http.delete(this.urlTask + '/' + id);
  }

}
