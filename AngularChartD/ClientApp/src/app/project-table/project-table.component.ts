import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';
import { DataService } from '../../data-service/data-service';
import { Project } from '../../models/project';

@Component({
  selector: 'ProjectTable',
  templateUrl: './project-table.component.html',
  providers: [DataService]
})
//export class ProjectTableComponent {

//  constructor(private router: Router, private http: HttpClient) { }


//}

export class ProjectTableComponent implements OnInit {

  //oneList: ListOfTasks = new ListOfTasks();
  projects: Project[];
  tableMode: boolean = true;

  //addName: string;
  //errorModel: boolean = false;

  //isUserAuthenticated = false;
  //isReadByrefMode = false;

  //userName: string;
  //idRef: string

  constructor(private dataService: DataService, private httpClient: HttpClient, private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.loadProducts();
  }


  //получаем данные через сервис
  loadProducts() {
    this.dataService.getProjects()
      .subscribe((data: Project[]) => this.projects = data);
  }
  //// сохранение данных
  //save() {
  //  this.errorModel = false;
  //  let error = false;

  //  if (typeof this.oneList.tasksTo !== 'undefined' && this.oneList.tasksTo.length > 0) {
  //    error = this.oneList.tasksTo.some(l => l.name == null || l.name == "");
  //  }

  //  if (error == true) {
  //    this.errorModel = true;
  //  }
  //  else {
  //    if (this.oneList.id == null) {
  //      this.dataService.createListOfTasks(this.oneList)
  //        .subscribe((data: ListOfTasks) => this.allLists.push(data));
  //    } else {
  //      this.dataService.updateListOfTasks(this.oneList)
  //        .subscribe(data => this.loadProducts());
  //    }
  //    this.cancel(false);
  //  }

  //}
  //editList(l: ListOfTasks) {
  //  this.cancel(false);
  //  this.tableMode = false;

  //  let count = 0;
  //  l.tasksTo.forEach(function (value) {
  //    value.idTable = count++;
  //  });

  //  this.oneList = l;
  //}
  //cancel(updateNeed: Boolean) {
  //  this.oneList = new ListOfTasks();
  //  this.tableMode = true;
  //  if (updateNeed) {
  //    this.loadProducts();
  //  }
  //}
  //delete(p: ListOfTasks) {
  //  this.dataService.deleteListOfTasks(p.id)
  //    .subscribe(data => this.loadProducts());
  //}
  //add() {
  //  this.cancel(false);
  //  this.tableMode = false;
  //  this.oneList = new ListOfTasks();
  //}

  //addTask(name: string) {
  //  if (typeof this.oneList.tasksTo !== 'undefined' && this.oneList.tasksTo.length > 0) {
  //    let idmax = Math.max.apply(Math, this.oneList.tasksTo.map(function (o) { return o.idTable; }));
  //    this.oneList.tasksTo.push(new TaskTo(0, idmax + 1, false, name));
  //  }
  //  else {
  //    this.oneList.tasksTo = [new TaskTo(0, 0, false, name)];
  //  }
  //}

  //deleteTask(t: TaskTo) {
  //  const index: number = this.oneList.tasksTo.indexOf(t);
  //  if (index !== -1) {
  //    this.oneList.tasksTo.splice(index, 1);
  //  }
  //}

  //saveLink() {
  //  this.dataService.copyMessage(environment.Url + '/' + this.idRef);
  //}

  //createZipAndDownload() {
  //  this.dataService.getZipByRef(this.idRef).subscribe(data => {
  //    var a = document.createElement('a');
  //    var blob = new Blob([data], { type: "application/zip" });
  //    a.href = URL.createObjectURL(blob);
  //    a.download = this.userName;
  //    a.click();
  //  });
  //}

}

