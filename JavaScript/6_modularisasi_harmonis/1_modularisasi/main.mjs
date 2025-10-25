import myFunction from "./anotherfile.mjs";
myFunction();

import result from "./anotherfile.mjs";
result();

import {name, email, age} from './anotherfile.mjs';
console.log(name);
console.log(email);
console.log(age);

import * as variable from './anotherfile.mjs';
console.log(variable.name);
console.log(variable.email);
console.log(variable.age);

import { myFunction as UserFunction } from "./user.mjs";
import { myFunction as customerFunction } from "./customerFunction.mjs";

UserFunction();
customerFunction();

