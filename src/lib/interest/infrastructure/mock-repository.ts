import { Interest } from "../domain/interest";
import { InterestRepository } from "../domain/interest-respository";

export const createInterestMockRepository = (): InterestRepository => {
    return {
        getAll: () => {
            const interest: Interest[] = [
                {
                    title: "Interes 1",
                    description: "Descricpion del interes 1",
                    icon: "react",
                },
                {
                    title: "Interes 2",
                    description: "Descricpion del interes 2",
                    icon: "next",
                },
                {
                    title: "Interes 3",
                    description: "Descricpion del interes 3",
                    icon: "typescript",
                },
                {
                    title: "Interes 3",
                    description: "Descricpion del interes 3",
                    icon: "javascript",
                },
                {
                    title: "Interes 3",
                    description: "Descricpion del interes 3",
                    icon: "css",
                },
                {
                    title: "Interes 3",
                    description: "Descricpion del interes 3",
                    icon: "docker",
                }
            ]
            return Promise.resolve(interest);
        }
        
    }
}