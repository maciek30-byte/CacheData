import FileHelper from "./components/FileHelper";
import BookApi from "./components/BookApi";
import CacheControler from "./components/CacheControler";

class App {
  async showInformation(bookName: string) {
    if (CacheControler.checkThatQueryExist(bookName)) {
       await FileHelper.readFromJson(bookName);
    } else {
      const data = await BookApi.getBookByQuery(bookName);
      await FileHelper.writeToCache(bookName, JSON.stringify(data));
      return data;
    }
  }
}

const first = new App();

first.showInformation("harry potter");
