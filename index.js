

function receivesAFunction(thing) {
    thing();
}



function returnsANamedFunction() {
    return function stuff(stuff) {console.log("Ta da");}
}


function returnsAnAnonymousFunction() {
    return function() {
        console.log("ding dong");
    };
}