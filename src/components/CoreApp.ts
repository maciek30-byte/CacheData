import axios from "axios";
import Helper from "./Helper";

class CoreApp {
  data: unknown;
  searchingArray: string[];

  constructor() {
    // validate query//

    this.data = {};
    this.searchingArray = ["dupa"];
  }

  setData(data: unknown):void {
    this.data = data;
  }

  async fetchData(query: string): Promise<unknown> {
    //validate query//
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
      const { data } = await axios.get(url);
      await this.setData(data);
      return data;
    } catch (e) {
      console.log(e.message);
    }
  }

  async cachingData(query: string)  {
    try {
      if (Helper.checkThatExistInArray(query, this.searchingArray)) {
        console.log("data is download froma cache");
        const data = await Helper.readFromJson(query);
        console.log('this is data from rowling',data)
      } else {
        await this.fetchData(query);
        const data = await this.fetchData(query);
        await Helper.writeToJson(query, JSON.stringify(data));
        this.searchingArray.push(query);
        console.log("file succesfull saved");
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default CoreApp;
