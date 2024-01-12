import { Tarrif } from "./tarrif";
import { User } from "./user";

export interface SavingPlan {
    user: User,
    tarrif: Tarrif,
    duration: number,
    amount: number
    startdate: Date,
    endDate?: Date,
    reminderOn?: boolean

}
