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


export class ProjectTableComponent implements OnInit {

  oneProject: Project = new Project();
  projects: Project[];
  tableMode: boolean = true;

  constructor(private dataService: DataService, private httpClient: HttpClient, private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.loadProjects();
  }

  //получаем данные через сервис
  loadProjects() {
    this.dataService.getProjects()
      .subscribe((data: Project[]) => {
        this.projects = data;
      });
  }
  //// сохранение данных
  saveProject() {

    if (typeof this.oneProject.contractor == 'undefined' || this.oneProject.contractor.length == 0 ||
      (this.oneProject.completeProjects <= 0) || (this.oneProject.targetProjects <= 0) ||
      typeof this.oneProject.date == 'undefined') {
      return;
    }

    if (this.oneProject.id == null) {
      this.dataService.createProject(this.oneProject)
        .subscribe((data: Project) => this.projects.push(data));
    } else {
      this.dataService.updateProject(this.oneProject)
        .subscribe((data: Project) => {
          var updateProjectIndex = this.projects.findIndex(p => p.id == data.id);
          this.projects[updateProjectIndex] = data;
        }
        );
    }
    this.cancelProject();
  }

  deleteProject(project: Project) {
    this.dataService.deleteProject(project.id)
      .subscribe((data: Project) => {
        var deleteProjectIndex = this.projects.findIndex(p => p.id == data.id);
        this.projects.splice(deleteProjectIndex, 1);      
      }
      );
  }


  cancelProject() {
    this.oneProject = new Project();
    this.tableMode = true;
  }

  addProject() {
    this.tableMode = false;
    this.oneProject = new Project();
    this.oneProject.completeProjects = 1;
    this.oneProject.targetProjects = 1;
    this.oneProject.date = new Date(Date.now());
  }

  editProject(project: Project) {
    this.tableMode = false;
    this.oneProject = project;
  }

}

