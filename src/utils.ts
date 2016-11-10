/**
 * test if an object looks like an array
 * 
 * @export
 * @param {*} object
 * @returns {boolean} true if is an array
 */
export function isArray(object:any): boolean{
    return object.length >= 0;
}

export function startsWith(str:string, pattern:string) :boolean{
    const matched = str.match(`^${pattern}`); 
    return matched ? matched.length > 0 : false;
}