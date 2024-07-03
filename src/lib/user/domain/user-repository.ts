import { User } from "./user";

export interface UserRepository {
    getDefault(): Promise<User>
}