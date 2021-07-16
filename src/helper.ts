import axios from "axios";
const url = "https://www.googleapis.com/books/v1/volumes?q=harry potter";
import fs from "fs";

const cachedData: string[] = ["yeremi"];

const basedUrl = `https://www.googleapis.com/books/v1/volumes?q=clarcson`;

// sprawdz moja pomocnicza tablice //

const checkThatExistInArray = (query: string) => {
    const result = cachedData.findIndex((q) => query === q);
    if (result !== -1) {
        return true;
    } else {
        return false;
    }
};
// odczytaj z pliku json

const readJson = (jsonName: string) => {
    fs.readFile(`src/Db/${jsonName}.json`, (error, data) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(data.toString());
    })}

export const read = (jsonName:string)=> {
    fs.readFile(`src/Db/${jsonName}.json`, ((error,data)=> {
        if(error) {
            console.error('something goes wrong');
            return
        }
        console.log('read works properly',data)
        return data.toString()

    }))
}
// zapisz do pliku json
//     const saveToJson = (query:string,data?:{}))=> {
//        fs.writeFile(`src/Db/${query}.json`,JSON.stringify(data),(error)

// }

const fetchData = (query: string) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    if (checkThatExistInArray(query)) {
        console.log(readJson(query));
        return readJson(query);
    } else {
        console.log('cos poszlo nie tak')
    }



};

// }
// const objToSave = {
//     name:'Maciek',
//     orderCount:0}
// const readJson = ()=> {
//     fs.readFile('src/Db/db.json',(error,data)=> {
//         if(error){
//             console.error(error)
//             return
//         }
//         console.log(data.toString())
//     })

// // mozliwa rowniez wersja synchroniczna
// }
// const dataToSave = JSON.stringify(objToSave)
// writeFile('src/Db/newJson.json',JSON.stringify(objToSave),(e:any)=> {
//     if(e){
//         console.log(e);
//         return
//     }else {
//         console.log('succes')
//     }
// })
// fs.access('src/Db/hary-poter.json', (e)=> {
//     if(e) {
//     console.log('directory is not exist')
//     } else {
//         console.log('directory is exist well done')
//     }
// })

export const writeToFile = (name:string)=> {
    fs.writeFile(`src/Db/${name}.json`,JSON.stringify('pieczarla'),(e)=> {
        if(e){
            console.error('something went wrong')
        } else {
            console.log('directory is saved :)')
        }
    })
}

