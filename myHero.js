class myHero{
    atk = {
        mago: 'magia',
        guerreiro: 'espada',
        monge: 'artes marciais',
        ninja: 'shuriken'
    }
    constructor( name, age, type ){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    atacar(){
        return `${this.name}, o grande ${this.type}, atacou usando ${this.atk[this.type]}`
    }
}

const mago = new myHero( 'Onda mineira', 49, 'mago');
const guerreiro = new myHero( 'Onda mineira', 49, 'guerreiro');
const monge = new myHero( 'Onda mineira', 49, 'monge');
const ninja = new myHero( 'Onda mineira', 49, 'ninja');

console.log( mago.atacar() );
console.log( guerreiro.atacar() );
console.log( monge.atacar() );
console.log( ninja.atacar() );