import {IArea} from "./../interfaces/IArea";

export const algo = <T>(p1: T, p2: T) => {
    console.log(p1, p2);
}; 


export function algoMas<T>(p1: T, p2: T) {
    console.log(p1, p2);
}

export const sumarAreas = <T extends IArea>(p1: T, p2: T) => {
    console.log(p1.area() + p2.area());
}; 