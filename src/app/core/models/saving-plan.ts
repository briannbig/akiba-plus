import { Saving } from "./saving";
import { SavingCycle } from "./saving-cycle";
import { SavingStrategy } from "./saving-strategy";

export interface SavingPlan {
    id?: string,
    userId?: string,
    userName?: string,
    savingCycle: SavingCycle,
    goal?: string,
    duration: number,
    amount: number,
    currentBalance?: number,
    savingStrategy: SavingStrategy,
    startdate?: Date,
    endDate?: Date,
    reminderOn?: boolean,
    target?: number,
    savings?: Saving[]

}
