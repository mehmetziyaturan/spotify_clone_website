// gönderilmesi gereken header'lar
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "04583f8a38msh7548f61a53ce374p11ee49jsn7a55c8c508d4",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

// fonksiyonların bir arada tutulması için class yapısını tercih edelim
export default class API {
  // popüler müzikleri getiricek
  async getPopular() {
    const data1 = await this.searchMusic("tarkan");
    const data2 = await this.searchMusic("sezen");

    return [...data1, ...data2];
  }

  // aratulan kelimeye uygun sonuçları getirecek
  async searchMusic(query) {
    // term parametresini dinamik olarak belirledik
    const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr`;

    // api isteğini at - gelen cevabı işle
    const res = await fetch(url, options);
    const data = await res.json();

    // veriyi formatladık
    const formatted = data.tracks.hits.map((item) => item.track);

    // fonksiyonun çağrdılığı yere veriyi döndürdük
    return formatted;
  }
}
