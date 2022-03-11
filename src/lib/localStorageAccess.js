const getQuantity = data => {
    let obj = {}
    data.forEach( el => {
        obj[el] =  obj[el] ? obj[el] + 1 : 1
    });
    return obj
}

const setData = (key, data) => {
    const dataObject = Array.isArray(data) ? getQuantity(data) : data;
    const dataJSON = JSON.stringify( dataObject );
    localStorage.setItem(key, dataJSON)
}

const getStorageData = key => {
    const dataObject = JSON.parse(localStorage.getItem(key));
    return dataObject;
}

const deleteData = (key) => {
    localStorage.removeItem(key);
}

const deleteSingleData = (key, property) => {
    let dataObject = getStorageData(key);
    delete dataObject[property];
    setData(key, dataObject);
}

const setSingleCounter = (key, data) => {
    const dataObject = getStorageData(key);
    dataObject[data.key] = dataObject[data.key] ? dataObject[data.key] + 1 : 1;
    setData(key, dataObject)
}

const setSingleData = (key, data) => {
    let dataObject = getStorageData(key);
    dataObject[data.key] = data;
    setData(key, dataObject);
}

const isStorage = key => {
    const dataJSON = localStorage.getItem(key);
    return dataJSON ? true : false;
}

export {
    getQuantity,
    setData,
    getStorageData,
    deleteData,
    deleteSingleData,
    setSingleCounter,
    setSingleData,
    isStorage
}