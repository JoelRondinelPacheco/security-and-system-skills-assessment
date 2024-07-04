import { Interest } from "../domain/interest";
import { InterestRepository } from "../domain/interest-respository";

export const createInterestMockRepository = (): InterestRepository => {
    return {
        getAll: () => {
            const interest: Interest[] = [
                {
                    title: "Interes 1",
                    description: "Descricpion del interes 1"
                },
                {
                    title: "Interes 2",
                    description: "Descricpion del interes 2"
                },
                {
                    title: "Interes 3",
                    description: "Descricpion del interes 3"
                },
                {
                    title: "Interes 3",
                    description: "Descricpion del interes 3"
                },
                {
                    title: "Interes 3",
                    description: "Descricpion del interes 3"
                },
                {
                    title: "Interes 3",
                    description: "Descricpion del interes 3"
                }
            ]
            return Promise.resolve(interest);
        }
        
    }
}