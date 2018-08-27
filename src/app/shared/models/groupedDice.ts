export class GroupedDice{
    setValue: number;
    remainder: Array<number>;

    constructor(inputSetValue: number, inputRemainder: Array<number>){
        this.setValue = inputSetValue;
        this.remainder = inputRemainder;
    }
}