export class Project {
  constructor(
    public id?: number,   
    public contractor?: string,
    public targetProjects?: number,
    public completeProjects?: number,
    public date?: Date
  ) { }
}
