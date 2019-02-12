export const enum IdFizzBuzz {
    FIZZ = "Fizz",
    BUZZ = "Buzz",
    FIZZBUZZ = "FizzBuzz"
}

export const getFizzBuzz = (value: number): IdFizzBuzz | undefined => {
    if (value % 3 === 0 && value % 5 === 0) {
        return IdFizzBuzz.FIZZBUZZ;
    } else if (value % 3 === 0 && value % 5 !== 0) {
        return IdFizzBuzz.FIZZ;
    } else if (value % 3 !== 0 && value % 5 === 0) {
        return IdFizzBuzz.BUZZ;
    } else {
        return undefined;
    }
}