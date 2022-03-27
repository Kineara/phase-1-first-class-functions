function receivesAFunction(func){
    func();
}

function returnsANamedFunction(){
    let namedFunc = function(){};
    return namedFunc;
}

function returnsAnAnonymousFunction(){
    return function(){};
}