/*
    Javascript
    clint-side language
    interpreted language (not compliled)
    object oriented (oop)
    weakly typed (duck typing)
    ECMAScript (organization that sets standars
        for JS)
*/


/*
        Comments

        blocks of code that are being ignored
        // for a single line of comment
        /* for multiline comments

        for developers to understand what the code
        is doing
        as a learner, helps takes notes
        help others understand what our code does

        ctrl + / for single line comments
        alt + shift + a for multiline comments

*/

/*
        Console

        gives us acess to brower (or node) for
        reading output
        In VSCODE use ctrl + ` to open console
        is an object


*/

2 + 2; //runs, but doesn't slow in console

console.log(2 + 2); // shows in our console

/*
        JS Datatypes

        Primitives : lowest level imutable (cant be changed)
            string
            number
            bigint
            boolean
            undefined
            symbol
            null
            NaN (Not a Number)

        Objests
            console
            array
            map
            object we difine ourselves

*/

/* 
        Strings

        data types that represents text
        enclosed in '', "",``
*/

"This is a String"
console.log("This is a string")

console.log("2024")
console.log(2024)
console.log("It is the year 2024")
console.log("It is the year " + 2024)// strings can be concatenated

let str = "This is a variable"
console.log(str)

//strings can be indexed
console.log(str[0])

//strings also have methods
console.log(str.length)
console.log(str[str.length - 1])
console.log(str[str.length]) //fencepost error

console.log(`This is template literal`)
console.log(`this is the length of "str":${str.length}`)

//console.log("This is also the length of "str": " + str.length)   <----ERORR
console.log("This is also the length of 'str': " + str.length)

//strings can be sliced

console.log(str.slice(0, 5)) //This
console.log()
str.slice(0, 4)


/* 
        Booleans
        booleans are yes, or no
        things that aren't booleans still have boolean values (truthy or falsey)





*/


console.log(true)
console.log(false)
console.log(2 == 2)
console.log(2 == 5)

let comp = "string to compare"
console.log(str = comp) // ERROR! Make sure to use == for comparison

console.log(2 == "2") // true
console.log(2 === "2") //strict true or false, its false -> 

console.log(typeof "2") //get the type of object

/*
        Type Coercion

        because JS is duck-typed, it infers what the type should be 
        comparison (==) dosen't care about the type
        strict comparison (===) DOES care about the type
*/


console.log(null == undefined) //1
console.log(null === undefined)//2
console.log(null == NaN)//3
console.log(null === NaN)//4
console.log(undefined == NaN)//5
console.log(undefined === NaN)//6


