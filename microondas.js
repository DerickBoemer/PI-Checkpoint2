function opcoes(comida) {
    let tempoPadrao

    if (comida == "pipoca") {tempoPadrao = 10}
    else if (comida == "macarrão") {tempoPadrao = 8}
    else if (comida == "carne") {tempoPadrao = 15}
    else if (comida == "feijão") {tempoPadrao = 12}
    else if (comida == "brigadeiro") {tempoPadrao = 8}
    else {console.log("Não há esta opção. Existem pipoca, macarrão, carne, feijão e brigadeiro")}
    return tempoPadrao}


function microondar(tempo,comida) {
    let tempoPadrao = opcoes(comida)

    if (tempo > tempoPadrao) 
    {console.log(comida,"queimado(a)! Colocou",tempo-tempoPadrao,"de mais, tente",tempoPadrao)}

    else if (tempo < tempoPadrao) 
    {console.log(comida,"gelado(a)! Colocou",tempoPadrao-tempo,"de menos, tente",tempoPadrao)}

    else {console.log(comida,"perfeito(a)!")}}

microondar("","carne")