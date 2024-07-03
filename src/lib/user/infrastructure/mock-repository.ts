import { UserRepository } from "../domain/user-repository";
import { User } from "../domain/user";

export const createUserMockRepository = (): UserRepository => {
    return {
        getDefault: () => {
            const defaultUser: User =  { name: "Joel", lastname: "Rondinel Pacheco", imageUrl: ""};
            return Promise.resolve(defaultUser);
        },
    }
}