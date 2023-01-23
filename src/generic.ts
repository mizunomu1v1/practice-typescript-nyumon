function repeat<T>(element: T, length: number): T[]{
    const result: T[] = [];
    for (let i = 0; i < length; i++){
        result.push(element);
    }
    return result;
}

console.log(repeat("a",5));
console.log(repeat<number>(123,3));

const repeat2 = function<T>(element: T, length: number): T[]{
    const result: T[] = [];
    for (let i = 0; i < length; i++){
        result.push(element);
    }
    return result;
}

const repeat3 = <T>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++){
        result.push(element);
    }
    return result;
}