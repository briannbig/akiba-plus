import { SavingCycle } from "./saving-cycle";
import { SavingStrategy } from "./saving-strategy";
import { User } from "./user";

export interface SavingPlan {
    user: User,
    savingCycle: SavingCycle,
    duration: number,
    amount: number
    strategy: SavingStrategy,
    startdate?: Date,
    endDate?: Date,
    reminderOn?: boolean,
    target?: number

}
