// interface
// export para reutilizar a interface

export interface User {
    name: string;
    age: number;
    active? : boolean;
}

let usuario: User = {
    name: 'Henrique',
    age: 28    
}