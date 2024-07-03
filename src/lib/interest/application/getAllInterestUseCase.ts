import { Interest } from "../domain/interest";
import { InterestRepository } from "../domain/interest-respository";

export const getAllInterest = (repository: InterestRepository): Promise<Interest[]> => {
    return repository.getAll();
}