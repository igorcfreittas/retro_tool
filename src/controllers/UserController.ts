import ErrorHandler from "../handlers/ErrorHandler";

class UserController {

    /**
     * Teste de comentario metodo
     * @return {object}
     */
    public defaultMethod() {
        return {
            text: `You have reached the ${this.constructor.name} default method`
        };
    }

    public errorMethod() {
        throw new ErrorHandler(501, 'Not implemented method');
    }
}

export = new UserController();