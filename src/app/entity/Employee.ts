import { Title } from "./Title";
import { Departmant } from "./Departmant";

export class Employee {
    ID:number;
    name:string;
    surname:string;
    email:string;
    password:string;
    profileImageFilename:string;
    isActive:boolean;
    ActivateGuid:string;

    FileName:string;
    fileBase64String:string;
    
    TitleID:number;
    DepartmantID:number;
    Titles:Title;
    Departmant:Departmant;
}