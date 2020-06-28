

export class User {
  public id: number = 0;
  public name: string = "";
  public password: string = "";


  public setUser(id: number, name: string, password: string) {
    this.id = id;
    this.name = name;
    this.password = password;
  }
}
