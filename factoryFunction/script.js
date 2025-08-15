// // function.createElement(typeof,)

// function Person(n){
//     return{name: n}
// }

// const me = Person("faisu");

// const me2 = Person("Fouzi");
// console.log(me);


// function human(n){
//     //new this{}
//     this.name = n;
//     //return
//     // console.log(`${this.name}`)
// }

// const you = new human("faisu");
// console.log(you)

// Inheritance

// function Person1(){
//     this.talk = function(){
//         return "talking";
//     }
// }

// const me1 = new Person1();
// const you1 = new Person1();

// console.log(me1);
// console.log(you1);

// you.talk = function(){
//     return "modified talking"
// };

// console.log(me.talk());
// console.log(you.talk());

// Ideal way to avoid inconsistencies and achieve inheritance

// function Person(age, name){
//     this.age = age;
//     this.name = name;
// }

// Person.run = function(){
//     return "running";
// }
// Person.talk = function(){
//     return "Talking";
// }

const me = new Person(21,"fouzi");
const you = new Person(24,"Faisu");

console.log(me);
console.log(you);

class Person{
    talk(){
        return "talking";
    }
}

const faisu = new Person();
console.log(faisu);

class SuperHuman extends Person{
    fly(){
        return "flying";
    }
}

const fouzi = new SuperHuman();
console.log(fouzi);

console.log(fouzi.talk());


function createElement(type,text,color){
    const el = document.createElement(type);
    el.textContent = text;
    el.style.color = color;

    document.body.append(el);

    return {
        setColor(color){
            el.style.color = color; p
        }
    }

}

const h = new createElement('h1','Faisu','blue');
const p = new createElement('p','Faisu loves Fouzi','red');
const p1 = new createElement('p','Faisu loves Fouzi','red');
const p2 = new createElement('p','Faisu loves Fouzi','red');

p.setColor('blue');