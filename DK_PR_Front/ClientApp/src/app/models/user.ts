

export class User {
  public username: string = "";
  public password: string = "";


  public setUser(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
