import { SavingCycle } from "./saving-cycle";
import { User } from "./user";

export interface SavingPlan {
    user: User,
    savingCycle: SavingCycle,
    duration: number,
    amount: number
    aggressive: boolean
    startdate?: Date,
    endDate?: Date,
    reminderOn?: boolean,


    target?: number

}
