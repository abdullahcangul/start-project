import { Process } from "./Process";

export class Project {
    ID:number;
    name:string;
    description:string;

    CustomerID:number;
    EmployeeID:number;
    
    Processes:Process[];
}