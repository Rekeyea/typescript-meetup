interface IHavePropertyA {
    A: number;
}

interface IHavePropertyB {
    B: number;
}

function doWithAB(element : IHavePropertyA & IHavePropertyB){
    console.log(element.A, element.B);
}

function doWithAOrB(element: IHavePropertyA | IHavePropertyB){
    
}

doWithAOrB({A : 1});
doWithAOrB({B : 1});
doWithAOrB({A : 1, B: 2});
doWithAOrB({C : 1});

type AORB = IHavePropertyA | IHavePropertyB;

function doWithAOrB2(element: AORB){
    
}

doWithAOrB2({A : 1});
doWithAOrB2({B : 1});
doWithAOrB2({A : 1, B: 2});
doWithAOrB2({C : 1});


// discriminated unions necesitan un discriminante para las guardas
/*
function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever(s); // error here if there are missing cases
    }
}
*/