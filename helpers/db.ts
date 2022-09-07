import axios from "axios";
import { Task } from "types/tasks";

export class DBHelper {
    getTasks = () => axios.post("http://localhost:8000/api/get");
    addTask = (date: string, type: string, description: string) => 
        axios.post("http://localhost:8000/api/add", {
                date,
                type,
                description,
            }
        )
    deleteTask = (id: number) => 
        axios.post("http://localhost:8000/api/delete", {id})
}

export const getDBHelper = () => new DBHelper();