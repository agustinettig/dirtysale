export class BusinessError extends Error {

    public readonly httpCode: number;
    public readonly modelState : Map<string, string[]> | undefined;

    constructor(httpCode: number, description: string, modelState?: Map<string, string[]>) {        
        super(description);
        this.httpCode = httpCode;
        this.modelState = modelState;
    }
}

