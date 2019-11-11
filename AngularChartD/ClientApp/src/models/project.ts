export class Project {
  constructor(
    public id: number,
    public company: string,
    public targetProjects: number,
    public completeProjects: number,
    public date: Date
  ) { }
}
