import { SavingPlan } from "./saving-plan";

export interface Saving {
    saving: SavingPlan,
    amount: number,
    timestamp: Date
}
