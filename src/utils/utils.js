/* remove the duplicates the values from an array */ 
export const removeDuplicateUtils = (data,key) =>{
    const map = new Map();
    data.forEach(item => {
        if (!map.has(item[key])) {
            map.set(item[key], item);
        }
    });
    return [...map.values()];
}

/* remove the object from an array w.r.t Id */ 
export const removeObjWithId = (arr,id) => {
    return arr.filter(item => item.id !== id)    
}