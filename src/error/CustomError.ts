export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidFriendship extends CustomError{ 
    constructor(){
        super(400, "Essa amizade não existe!")
    }
}

export class InvalidBody extends CustomError{ 
    constructor(){
        super(400, "Preencha os campos corretamente!")
    }
}

export class InvaliType extends CustomError{ 
    constructor(){
        super(400, "O type deve ser event ou normal!")
    }
}

export class InvalidDescription extends CustomError{ 
    constructor(){ 
        super(400, "A descrição deve ter mais de 8 caracteres!")
    }
}

export class InvalidId extends CustomError{ 
    constructor(){ 
        super(400, "Id inválido!")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){ 
        super(400, "Email inválido!")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){ 
        super(400, "Senha deve ter pelo menos 8 caracteres!")
    }
}