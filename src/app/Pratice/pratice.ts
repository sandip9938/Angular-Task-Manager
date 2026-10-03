import { RouterLink } from '@angular/router';

//String, number, boolean, array, tuple, enum, any, void, null, undefined, never
let name1: String = 'Sandip';
let age: number = 12;
let isActive: boolean = true;

//Interface
interface User {
  Id: number;
  name1: string;
  age: number;
  isActive: boolean;
}

//Calling the interface
const user: User = {
  Id: 1,
  name1: 'Sandip',
  age: 12,
  isActive: true,
};

//Array
const userList: User[] = [];
userList.push({ Id: 2, name1: 'John', age: 25, isActive: false });
console.log(userList);

//Union
let statusOne: 'pending' | 'Completed';

//Optional Property
interface User1 {
  Id: number;
  name1: string;
  age: number;
  isActive: boolean; // Required property
  address?: string; // Optional property (address is optional)
}

//Function
function userDtails(user: User1): string {
  return `User: ${user.name1}, Age: ${user.age}`;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

function logMessage(message: string): void {
  console.log(message);
}

function findTaskById(id: number): User1 | undefined {
  // Implementation for finding task by ID
  return userList.find((user) => user.Id === id);
}

//ROUTES(router , routerLink, routOutlet)

//router (it is used to navigate between different components or pages in an Angular application. It allows you to define routes and handle navigation based on the URL.)

//routerLink (it is a directive used in Angular templates to create links that navigate to different routes defined in the router configuration. It allows you to bind a route path to an element, such as an anchor tag or a button, enabling navigation when the element is clicked.)

//routerOutlet (it is a directive used in Angular templates to specify where the routed components should be displayed. It acts as a placeholder for the component associated with the current route, allowing dynamic rendering of different components based on the active route.)


//ActivatedRoute (it is a service provided by Angular's router module that allows you to access information about the currently activated route. It provides access to route parameters, query parameters, and other route-related data, enabling you to retrieve and utilize this information within your components.)

