import {copyStudent, div, getFullCopyGroup, getFullCopyStudent, mult, StudentType, sum} from "./tasks"

let b: number
let a: number
let student: StudentType

beforeEach(()=>{
    a = 5
    b = 10
    student = {
        name: "Bill",
        age: 19,
        scores: 75,
        money: 220,
        friends: ["Alex", "Nick", "Mike"]

    }
})

test('sum of numbers', () => {
    let result =  sum(a,b)
    expect(result).toBe(15)
})

test('multiplication of numbers', ()=>{
    let result = mult(a,b)
    expect(result).toBe(50)
})

test ('div of numbers', () => {
    expect(div(b, a)).toBe((2))
})

test('clone student object', ()=> {
    const copySt = copyStudent(student)
    let result = copySt === student
    expect(result).toBe(false)
    expect(copySt.name).toBe(student.name)
})

test('get Full Student Copy', ()=> {
    const copySt = getFullCopyStudent(student)
    let result = copySt === student
    let frRes = copySt.friends === student.friends

    expect(result).toBe(false)
    expect(copySt.name).toBe(student.name)
    expect(frRes).toBe(false)
    expect([...copySt.friends].join()).toBe([...student.friends].join())

})

test( 'get full copy group', ()=>{
    getFullCopyGroup()
})