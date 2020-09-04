// types====================================================================================================

const str:string = "hello"

const isLoading: boolean = true;
const int: number = 42;

const arr: number[] = [1, 2, 3]
const arrNew: Array<number> = [1, 2, 3]

const contact:any = ['bsx', 45254]
const contactNew: [string, number] = ['bsx', 45254]

function sayMyName(name: string): void {
   console.log(name)
}

// sayMyName('bsx')

type Login = string;

const login: Login = 'admin'
type ID = string | number
const idOne: ID = 'ff'


//interface====================================================================================================

interface Rect {
   readonly id: string;
   color?: string;
   size: {
       width: number;
       height: number;
   }
}

const rect1: Rect = {
   id: 'fff',
   size: {
       width: 5,
       height: 3
   }
}

const rect3 = {} as Rect

interface RectWithArea extends Rect {
   getArea: () => number
}

const newRect: RectWithArea = {
   id: 'fff',
   size: {
       width: 5,
       height: 5,
   },
   getArea():number {
       return this.size.width * this.size.height
   }
}

interface Styles {
   [key: string]: string
}

const css: Styles = {
   border: '1px solid black',
   margin: '2px',
   padding: '4px',
}

//enum====================================================================================================

enum Membership {
   Simple,
   Standard,
   Premium,
}

const membership = Membership.Standard
// console.log(Membership);

enum SocialMedia {
   VK = "VK",
   FACEBOOK = 'FACEBOOK',
   INSTAGRAM = 'INSTAGRAM',
}

const social = SocialMedia.FACEBOOK
// console.log(social);


//functions, перегрузка функции=========================================================================

function add(a: number, b: number): number {
   return a + b
}

const adds = (a: number, b: number): number => a * b

// console.log(adds(2, 4));

interface MyPosition {
   x: number | undefined
   y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
   default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
   if(!a && !b) {
       return {x: undefined, y: undefined}
   }

   if(a && !b) {
       return {x: a, y: undefined, default: a.toString()}
   }

   return {x: a, y: b}
}

// console.log('Empty', position());
// console.log('One param', position(42));
// console.log('Two param', position(10, 15));

//classes====================================================================================================

// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
       // поле model можно перезаписать только в constructor
       // несмотря на то, что стоит readonly
       // в других методах мы этого сделать не можем
//     }
// }

class Car {
   readonly numberOfWheels: number = 4
   constructor(readonly model: string) {

   }
}

//+=======
class Animal {
   protected voice: string = ''
   public color: string = 'black'

   private go() {
       console.log('go');
   }
}

class Cat extends Animal {
   public setVoice(voice: string): void {
       this.voice = voice
   }
   // так как наследуемся от Animal, то имеем доступ
   // к приватному свойству voice
}

const cat = new Cat()
// но у инстанса cat мы уже не можем получить доступ
// к приватному свойству. только через setVoice

// private доступны только в том классе, в котором они определены
// в классе cat, мы уже не можем обратиться к нему

//=====================

abstract class Component {
   abstract render(): void
   abstract info(): string
}

class AppComponent extends Component {
   render(): void {
       console.log('Component on render');
   }

   info(): string {
       return 'info info';
   }
}
// abstract class не компилируются, но от них можно наследоваться 
//==========================================================

//guards====================================================================================================

function strip(x: string | number) {
   if(typeof x === 'number') {
       return x.toFixed(2)
   }

   return x.trim()
}

class MyResponse {
   header = 'response header'
   result = 'response result'
}

class MyError {
   header = 'error header'
   message = 'error message'
}

function handle(res: MyResponse | MyError) {
   if(res instanceof MyResponse) {
       return {
           info: res.header + res.result
       }
   } else {
       return {
           info: res.header + res.message
       }
   }
}

//============================
type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
  // ...
}

setAlertType('success')
setAlertType('warning')
// setAlertType('default')

//generic====================================================================================================

const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['hello', 'bsx']


function reverse<T>(array: T[]): T[] {
   return array.reverse()
}

// operators====================================================================================================

interface Person {
   name: string
   age: number
}

type PersonKeys = keyof Person // может принимать либо 'name' | 'age'

let key: PersonKeys = 'name'

// key = 'job'

type User = {
   _id: number
   name: string
   email: string
   createAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createAt'>
// исключается всё, кроме 'name' | 'email'
type UserKeysNoMetaTwo = Pick<User, 'name' | 'email'>
// выбираются свойства