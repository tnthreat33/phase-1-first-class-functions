function receivesAFunction(hi) {
    hi ();
}
function returnsANamedFunction(){
    return function hello(){
        return "Hello!"
    }
}
function returnsAnAnonymousFunction(){
    return function (){
        return "Bye."
    }
}