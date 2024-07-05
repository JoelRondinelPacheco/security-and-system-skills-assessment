import { UserRepository } from "../domain/user-repository";

export const getDefaultUser = (repository: UserRepository) => {
    return repository.getDefault();
}

