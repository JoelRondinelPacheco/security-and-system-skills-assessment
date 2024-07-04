import { SVGProps } from "react"
import { cssIcon, dockerIcon, javaScriptIcon, nextJSIcon, reactIcon, typeScriptIcon } from "./icons/icons"

export const getCardIcon = (icon: string, props?: SVGProps<SVGSVGElement>) => {
    switch (icon) {
        case "react":
            return reactIcon(props);
        case "next":
            return nextJSIcon(props);
        case "typescript":
            return typeScriptIcon(props);
        case "javascript":
            return javaScriptIcon(props);
        case "css":
            return cssIcon(props);
        case "docker":
            return dockerIcon(props);
        default:
            return reactIcon(props);
    }
}