import { promises as fs } from "fs";

class Helper {
  static checkThatExistInArray(phrase: string, array: string[]) {
    const result = array.findIndex((element) => element === phrase);
    if (result !== -1) {
      console.log("znalazlem element w tablicy");
      return true;
    } else {
      console.log("nie znalazlem elementu w tablicy");
      return false;
    }
  }

  static async readFromJson(jsonName: string) {
    try {
      await fs.readFile(`src/Db/${jsonName}.json`, { encoding: "utf-8" });
    } catch (e) {
      console.log(e.message);
    }
  }

  static async writeToJson(phrase: string, data: any) {

    try {
      await fs
        .writeFile(`src/Db/${phrase}.json`, data, { encoding: "utf-8" })
        .then(() => {
          console.log("mayby there try append data to file ");
        });
    } catch (e) {
      console.log(e);
    }

    //   fs.writeFile(`src/Db/${phrase}.json`, JSON.stringify(data), (error) => {
    //     if (error) {
    //       console.log(error.message);
    //     } else {
    //       console.log("saved to file success");
    //     }
    //   });
    // }
  }
}

export default Helper;
