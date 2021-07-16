import axios from "axios";
import { read, writeToFile } from "./helper";

const cachedData: string[] = ["yeremi"];

const checkThatExistInArray = (query: string) => {
  const result = cachedData.findIndex((q) => query === q);
  if (result !== -1) {
    return true;
  } else {
    return false;
  }
};

const checked = (query: string) => {
  if (checkThatExistInArray(query)) {
    console.log("wpadlo do odczytu");
    read(query);
  } else {
    console.log("wpadlo do zapisu");
    writeToFile(query);
  }
};

checked("dupa");
