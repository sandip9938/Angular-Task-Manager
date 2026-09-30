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



// Component Anatomy
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Selector is used to identify the component in HTML
  templateUrl: './app.component.html', // Template URL points to the HTML file for the component
  styleUrls: ['./app.component.css'], // Style URLs point to the CSS files for the component
  standalone: true // Standalone components are self-contained and do not require a module to be declared in
})

// Class Definition
export class AppComponent {
  title = 'angular-task-manager'; // Title property for the component
}