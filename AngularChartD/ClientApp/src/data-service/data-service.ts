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

  //createListOfTasks(listOfTasks: ListOfTasks) {

  //  return this.http.post(this.urlTask, listOfTasks);
  //}
  //updateListOfTasks(listOfTasks: ListOfTasks) {

  //  return this.http.put(this.urlTask + '/' + listOfTasks.id, listOfTasks);
  //}
  //deleteListOfTasks(id: number) {
  //  return this.http.delete(this.urlTask + '/' + id);
  //}

}
