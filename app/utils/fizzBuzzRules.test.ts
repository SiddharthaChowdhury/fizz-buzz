import {IdFizzBuzz, getFizzBuzz} from "./fizzBuzzRules";
const fizzNumbers = [3, 9, 12, 18];
const buzzNumbers = [5, 10, 20];
const fizzBuzzNumbers = [0, 15, 30];

describe("\nTesting output of Fizz-Buzz number rule", () => {
    it (`Should return "${IdFizzBuzz.FIZZ}" for each values in [${fizzNumbers.toString()}]`, () => {
        for (var i = 0; i < fizzNumbers.length; i++) {
            expect(getFizzBuzz(fizzNumbers[i])).toBe(IdFizzBuzz.FIZZ);
        }
    });

    it (`Should return "${IdFizzBuzz.BUZZ}" for each values in [${buzzNumbers.toString()}]`, () => {
        for (var i = 0; i < buzzNumbers.length; i++) {
            expect(getFizzBuzz(buzzNumbers[i])).toBe(IdFizzBuzz.BUZZ);
        }
    });

    it (`Should return "${IdFizzBuzz.FIZZBUZZ}" for each values in [${fizzBuzzNumbers.toString()}]`, () => {
        for (var i = 0; i < fizzBuzzNumbers.length; i++) {
            expect(getFizzBuzz(fizzBuzzNumbers[i])).toBe(IdFizzBuzz.FIZZBUZZ);
        }
    });
});