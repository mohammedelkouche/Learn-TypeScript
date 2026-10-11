declare function returnNumber(val: number): number;
declare function returnString(val: string): string;
declare function returnBoolean(val: boolean): boolean;
declare function returnValue<T>(val: T): T;
declare const returnValueArrow: <T>(val: T) => T;
declare function testType<T>(val: T): string;
declare function multipleTypes<T, S>(valueOne: T, valueToo: S): string;
declare class User<T> {
    value: T;
    constructor(value: T);
    show(msg: T): void;
}
declare let userOne: User<string>;
declare let usertwo: User<number>;
//# sourceMappingURL=generics.d.ts.map