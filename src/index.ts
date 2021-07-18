import {checkIndexingArray, readOrWriteFile} from "./aplicationCore";

const searchArray:string[] = []

const cacheData = (userQuery:string) => {
readOrWriteFile(userQuery,searchArray)
}


cacheData('harry potter');
cacheData('harry potter');
