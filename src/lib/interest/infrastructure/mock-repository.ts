import { Interest } from "../domain/interest";
import { InterestRepository } from "../domain/interest-respository";

export const createInterestMockRepository = (): InterestRepository => {
    return {
        getAll: () => {
            const interest: Interest[] = [
                {
                    title: "React",
                    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, dignissimos cupiditate.",
                    icon: "react",
                },
                {
                    title: "NextJS",
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                    icon: "next",
                },
                {
                    title: "TypeScript",
                    description: "Laborum, nisi vel qui repudiandae nesciunt iusto, eveniet tempora quis sequi aliquid quasi molestiae ut.",
                    icon: "typescript",
                },
                {
                    title: "JavaScript",
                    description: "Consequatur neque minus dicta, atque nam reiciendis.",
                    icon: "javascript",
                },
                {
                    title: "CSS",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    icon: "css",
                },
                {
                    title: "Docker",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    icon: "docker",
                }
            ]
            return Promise.resolve(interest);
        }
        
    }
}