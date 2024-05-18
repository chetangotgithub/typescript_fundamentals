

//as const
let a = "hello" as const
let b = [10, 20] as const;// readonly tupels;
let c = {text: "Hello WOrld" } as const // readonly object
let d = <const> "Hello world" 

//a = "Hi";
//c.text = ""; 
//d = " ";

// Error! A 'const' assertion can only be applied to a
// to a string, number, boolean, array, or object literal.
//let a1 = (Math.random() < 0.5 ? 0 : 1) as const;
//let b1 = (60 * 60 * 1000) as const;
// Works!
let c1 = Math.random() < 0.5 ? (0 as const) : (1 as const);
let d1 = 3_600_000 as const;
let e1 = 4_5_00;
console.log(d1, " ", e1);

//TypeScript 3.4 introduces support for type-checking ECMAScript’s new globalThis - a global variable that, well, 
//refers to the global scope. Unlike the above solutions, globalThis provides a standard way for 
//accessing the global scope which can be used across different environments. (var) not let / const

var abc = "hello world"
console.log(globalThis.abc);//undefined
globalThis.abc = "hello"
console.log(globalThis.abc , " ", abc);//hello   hello world

