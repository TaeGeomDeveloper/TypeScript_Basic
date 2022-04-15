
// never
// 모든 타입의 subtype 이며, 모든 타입에 할당 할수 있다.
// any 조차도 never 할당 할수 없다.

function error(message: string):never {
  throw new Error(message);
}

function fail(){
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}

let str2: string = "hello";

if(typeof str !== 'string'){

}