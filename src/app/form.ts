export class Form {
    fieldName: string ;
    fieldType:string; 
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

