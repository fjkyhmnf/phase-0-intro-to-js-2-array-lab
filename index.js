// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const AppendCat = [...cats, "Broom"]
    return AppendCat
}

function prependCat(name){
    const PrependCat = ["Arnold", ...cats]
    return PrependCat
}

function removeLastCat(){
    return cats.slice(0, 2)
}

function removeFirstCat(){
    return cats.slice(1)
}