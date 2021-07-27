import BookApi from "./BookApi";
import FileHelper from "./FileHelper";

class CacheControler {

    static checkThatQueryExist(query:string):boolean{
       return  (FileHelper.findFile(query))
    }

    static async cacheData(chosenBook:string){
        const data = await BookApi.getBookByQuery(chosenBook);
        await FileHelper.writeToCache(chosenBook,JSON.stringify(data))
    }

    static readFromCache(chosenBook:string){
         FileHelper.readFromJson(chosenBook)
    }


}
export default CacheControler