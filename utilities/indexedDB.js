const createIndexedDB = (dbName, obj = false, storeName = false, getAll = false) => {
    return new Promise((resolve, reject) => {
        let db;
        const dbVer = 69;
        storeName = storeName ? storeName : dbName;
        
        const request = window.indexedDB.open(dbName, dbVer);
        
        request.onsuccess = function(event) {
            db = event.target.result;
            
            if (obj ) {
                const transaction = db.transaction([storeName], "readwrite");
                const objectStore = transaction.objectStore(storeName);
                const addRequest = objectStore.add(obj);

                addRequest.onsuccess = function(event) {
            
                };

                addRequest.onerror = function(event) {
                    reject('Fehler beim Speichern der Daten');
                };
            } 
            
            if (getAll) {
                const transaction = db.transaction([storeName], "readonly");
                const objectStore = transaction.objectStore(storeName);
                const getAllRequest = objectStore.getAll();

                getAllRequest.onsuccess = function(event) {
                    resolve(event.target.result);
                };

                getAllRequest.onerror = function(event) {
                    reject('Fehler beim Abrufen der Daten');
                };
            }
        };

        request.onupgradeneeded = function(event) {
            db = event.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
                console.log('Object Store erstellt');
            }
        };

        request.onerror = function(event) {
            reject('Fehler beim Öffnen der IndexedDB');
        };
    });
};



export const  indexedDB = (dbName,obj,storeName,getAll) => {

   return createIndexedDB(dbName,obj,storeName,getAll)


}

