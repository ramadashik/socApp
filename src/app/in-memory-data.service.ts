import { InMemoryDbService } from "angular-in-memory-web-api";
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {id: 1, name: "Roman", lastName: "Bylina", age: 23, sex: "male", specialization: "web-developer", languges: "russian, english"}
    ];
    return {users};
  }
}
