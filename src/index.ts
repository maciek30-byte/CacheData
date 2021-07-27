import FileHelper from "./components/FileHelper";
import BookApi from "./components/BookApi";
import CacheControler from "./components/CacheControler";

class App {

    async showInformation(book:string){
        if(CacheControler.checkThatQueryExist(book)){
         await FileHelper.readFromJson(book);

            return
        } else {
           const data = await BookApi.getBookByQuery(book);
           await FileHelper.writeToCache(book,JSON.stringify(data))
        }
    }
}

const first = new App()

first.showInformation('harry potter');