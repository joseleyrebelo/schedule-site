import {Months} from "./dates"

export type Task = { id:number, date: string, name: string, description: string }

export enum TaskTypes {
  bills = "bills",
}
