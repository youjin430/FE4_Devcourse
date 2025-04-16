{
  // 인터페이스
  interface Car {
    name: string;
    options:
      | {
          color: string;
        }
      | {
          wheels: number;
        };
  }

  const car1: Car = {
    name: "bmw",
    options: {
      color: "red",
    },
  };

  const car2: Car = {
    name: "g90",
    options: {
      wheels: 4,
    },
  };
}
{
  // 인터페이스
  interface Car<T> {
    name: string;
    options: T;
  }

  const car1: Car<{ color: string }> = {
    name: "bmw",
    options: {
      color: "red",
    },
  };

  const car2: Car<{ wheels: number }> = {
    name: "g90",
    options: {
      wheels: 4,
    },
  };
}
<<<<<<< HEAD
//인터페이스나 타입별칭은 제네릭 썼을 때 타입 추론 안되서 써줘야함 물론 순서도 같게
//인터페이스와 타입별칭ㅇ의 차이
=======
{
  type Pair<T, U> = {
    first: T;
    second: U;
  };

  const numberStringPair: Pair<string, number> = {
    first: "a",
    second: 1,
  };
}
{
  type ID = string | number;
  type Pair<T extends ID, U extends number> = T | U;
  const numberAndString: Pair<string, number> = 10;
}
{
  interface Length {
    length: number;
  }

  function getLength<T extends Length>(value: T[]): number {
    return value.length;
  }
}
>>>>>>> FE5_김기수
