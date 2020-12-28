export type StudentType = {
    name: string
    age: number
    scores: number
    money: number
    friends: Array<string>
}

export type StudentGroupType = Array<StudentType>

export function sum(a: number, b: number): number {
    return a + b;
}

export function mult(a: number, b: number): number {
    return a * b;
}

export function div(a: number, b: number): number {
    return a / b;
}

export function copyStudent(st: StudentType): StudentType {
    return {...st}
}

export function getFullCopyStudent(st: StudentType):StudentType{
    return {...st, friends:[...st.friends]}
}

export function getFullCopyGroup(students: Array<StudentType>): Array<StudentType>{
    return students.map( st => ({...st,friends:[...st.friends]}))
}