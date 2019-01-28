export const removeDuplicates = (arr,key) =>{
    const map = new Map();
    arr.map(el => {
        if (!map.has(el[key])) {
            map.set(el[key], el);
        }
    });
    return [...map.values()];
}

export const removeObjWithId = (arr,id) => {
    return arr.filter(item => item.id !== id)    
}