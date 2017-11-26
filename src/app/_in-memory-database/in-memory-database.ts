import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      { id: 1, firstName: "Roman", secondName: "Bylina", sex: "male", age: "23", specialization: "Web-developer",
        description: "Angular Demo", imgUrl: "https://pp.userapi.com/c836634/v836634863/52a2a/qVhyvu5kREA.jpg"},
      { id: 2, firstName: "Inna", secondName: "Romas", sex: "female", age: "22", specialization: "Raspizdyayka",
        description: "Angular Demo", imgUrl: "https://pp.userapi.com/c836121/v836121398/5c31c/vKNRT70NomI.jpg"}
    ];
    return {users};
  }
}
