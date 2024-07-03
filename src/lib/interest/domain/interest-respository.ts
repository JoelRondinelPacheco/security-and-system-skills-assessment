import { Interest } from "./interest";

export interface InterestRepository {
    getAll: () => Promise<Interest[]>
}