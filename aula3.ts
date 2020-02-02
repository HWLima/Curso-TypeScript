// objetos
// propriedade com ? é opcional

let obj: {name:string,age:number,active?:boolean} = {
    name:'Henrique',
    age:28
}

let obj2: {[key: string]:any} = {
    name: 'Henrique',
    bar: true
}

function func(){
    console.log(obj2.bar)
}
func()