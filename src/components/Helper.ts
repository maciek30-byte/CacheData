import fs from "fs";
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

  static readFromJson(jsonName: string) {
    fs.readFile(`src/Db/${jsonName}.json`, (error, data: unknown) => {
      if (error) {
        console.log(error.message);
        return;
      } else {
        console.log("Read Works properly", data);
        return JSON.parse(data);
      }
    });
  }

  static writeToJson(phrase: string, data: unknown) {
    fs.writeFile(`src/Db/${phrase}.json`, JSON.stringify(data), (error) => {
      if (error) {
        console.log(error.message);
      } else {
        console.log("saved to file success");
      }
    });
  }
}
