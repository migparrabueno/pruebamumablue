export class Producto{
    'hydra:member': Array<any>;
    'hydra:search': Array<any>;


    constructor(pMember: Array<any>, pSearch: Array<any>){
        this['hydra:member'] = pMember;
        this['hydra:search'] = pSearch;
    }
}