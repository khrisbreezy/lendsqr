export function lsGet(str) {
    if (typeof window !== 'undefined') {
        //TODO:Getting current state-> event
    return JSON.parse(sessionStorage.getItem(str));
    }

    return 
}

export function lsSet(str, obj) {
    if (typeof window !== 'undefined') {
    //Set storage
    sessionStorage.setItem(str, JSON.stringify(obj));
    }
}