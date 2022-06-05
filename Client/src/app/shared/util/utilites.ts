import { HttpHeaders } from '@angular/common/http';

export function AreEquivalent(source, destination): boolean {

    var aProps = Object.getOwnPropertyNames(source);
    var bProps = Object.getOwnPropertyNames(destination);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (!propName.endsWith('_p') && source[propName] !== destination[propName]) {
            return false;
        }
    }
    return true;
}

export function Distinct<T>(inputArray: T[]): T[] {
    return inputArray.filter((n, i) => inputArray.indexOf(n) === i);
}

export async function delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("wait..."));
}

export function GetSecureHeader(): HttpHeaders {
    let header = new HttpHeaders()
        .set('authorization', `Bearer ${localStorage.getItem('token')}`);
    return header;
}

export function Map(source, dest, excludeList = []) {
    let propertyList = Object.getOwnPropertyNames(source).filter(m => !excludeList.includes(m));
    propertyList.forEach(p => {
        dest[p] = source[p];
    })
}


export function GetIndex(array, key, value): number {
    for (let i = 0; i < array.length; i++)
        if (array[i][key] == value)
            return i;
    return -1;
}

export const tokenHashKey = '8c10%$#f9be0b053082'
export const defaultPassword = '123456'
