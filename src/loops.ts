/**
 * Complete the following problems using loops and arrays.
 */

/**
 * Given an array of numbers, return their sum. If the array is empty, return 0.
 * @param nums An array of numbers
 * @returns The sum of all numbers in the array
 */
export function summate(nums: number[]): number {
    /**
    can also do this
    acc: accumulator variable
    val: value in the array
    acc + val: what we want to happen with the value
    0: the default value of acc

    nums.reduce((acc, val) => acc + val, 0)
     */
    let sum: number = 0;
    nums.forEach((n: number) => (sum += n));
    return sum;
}

/**
 * Given an array of numbers, return their average. If the array is empty, return 0.
 * @param nums An array of numbers
 * @returns The average of all numbers in the array
 */
export function average(nums: number[]): number {
    let l: number = nums.length;
    return l !== 0 ? summate(nums) / nums.length : 0;
}

/**
 * Given an array of numbers, divide each number by 2.
 * @param nums An array of numbers
 * @returns The array of numbers divided by 2
 */
export function halve(nums: number[]): number[] {
    return nums.map((n: number) => n / 2);
}

/**
 * Given an array of numbers, return only the positive numbers.
 * @param nums An array of numbers
 * @returns An array of only positive numbers
 */
export function onlyPositives(nums: number[]): number[] {
    return nums.filter((n: number) => n > 0);
}

/**
 * Given an array of numbers, return the average of only the positive numbers.
 * @param nums An array of numbers
 * @returns The average of only the positive numbers
 */
export function averagePositives(nums: number[]): number {
    let pos: number[] = onlyPositives(nums);
    return !pos.length ? 0 : summate(pos) / pos.length;
}

/**
 * Given an array of strings, return only the strings that end with 's'.
 * @param words An array of strings
 * @returns An array of only strings that end with 's'
 */
export function getPlurals(words: string[]): string[] {
    return words.filter((w: string) => w.endsWith("s"));
}

/**
 * Given an array of strings, return the first string that ends with 's'.
 * If no string ends with 's', return an empty string.
 * @param words An array of strings
 * @returns The first string that ends with 's'
 */
export function firstPlural(words: string[]): string {
    let found = words.find((w: string) => w.endsWith("s"));
    return found === undefined ? "" : found;
}

/**
 * Given an array of numbers and a threshold number, increase all values in the array by 1 if they are less than the threshold.
 * @param nums An array of numbers
 * @param threshold A threshold number
 * @returns The array of numbers with values less than the threshold increased by 1
 */
export function growIfSmall(nums: number[], threshold: number): number[] {
    /*
    note the double return! the first is big return, the second 
    is the return of the unnamed function (i forgot the name)
    */
    return nums.map((n: number) => {
        return n >= threshold ? n : n + 1;
    });
}

/**
 * Given an array of strings, return the longest string.
 * If the array is empty, return an empty string.
 * If there is a tie, return the first longest string.
 * @param words An array of strings
 * @returns The longest string
 */
export function longestString(words: string[]): string {
    return !words.length ? "" : (
            words.reduce((acc, val) => {
                return acc.length < val.length ? (acc = val) : acc;
            }, words[0])
        );
}

/**
 * Given an array of strings, return the longest string that ends with 's'.
 * If no string ends with 's', return an empty string.
 * If there is a tie, return the first longest plural string.
 * @param words An array of strings
 * @returns The longest string that ends with 's'
 */
export function longestPlural(words: string[]): string {
    let ws: string[] = getPlurals(words);
    return longestString(ws);
}

/**
 * Given two arrays of numbers, add the numbers at each index together and return a new array of the sums.
 * If the arrays are different lengths, use the longer array's length and use zero for the missing values
 * in the smaller array.
 * @param nums1 An array of numbers
 * @param nums2 An array of numbers
 * @returns An array of the sums of the numbers at each index
 */
export function addPairs(nums1: number[], nums2: number[]): number[] {
    let newNums: number[] = [];
    let numsCopy: number[] = [];
    if (nums1.length > nums2.length) {
        numsCopy = Array.from(nums2);
        for (let i = nums2.length; i < nums1.length; i++) {
            numsCopy.push(0);
        }
        for (let i = 0; i < nums1.length; i++) {
            newNums.push(nums1[i] + numsCopy[i]);
        }
        return newNums;
    } else if (nums2.length > nums1.length) {
        numsCopy = Array.from(nums1);
        for (let i = nums1.length; i < nums2.length; i++) {
            numsCopy.push(0);
        }
        for (let i = 0; i < nums2.length; i++) {
            newNums.push(numsCopy[i] + nums2[i]);
        }
        return newNums;
    } else {
        for (let i = 0; i < nums1.length; i++) {
            newNums.push(nums1[i] + nums2[i]);
        }
        return newNums;
    }
}
