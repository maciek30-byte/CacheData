import axios from "axios";
class BookApi {
  static async getBookByQuery(query: string) {
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      console.log(e.message);
    }
  }
}
export default BookApi;
