const name = "MinHyeok", age = 25, gender="male";

const sayHi = (name:string, age, gender?) => {
    console.log(`Hello ${name}, you're ${age} and you're ${gender}`)
}

sayHi(name, age);

export {};