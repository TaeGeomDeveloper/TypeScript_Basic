
// unknown
// any 와 짝으로 any 보다 type-safe 한 타입
// any와 같이 아무거나 할당할수 있다.
// 컴파일러가 타입을 추론할 수 있게 끔 타입의 유형을 좁히거나
// 타입을 확정해주지 않으면 다른곳에 할당 할수 없고, 사용할수 없다.

declare const maybe: unknown;

const aNumber : number = maybe;

if( maybe === true )
{
  const aBoolean: boolean = maybe === true;
  //const aString: string = maybe; 
}

if(typeof maybe === 'string'){
  const aString: string = maybe;
  // const boolean: boolean = maybe;
}