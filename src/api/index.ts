const BASE_URL = "https://13.ecmascript.pages.academy/big-trip";
const TOKEN = "Basic kTy9gIdsz2317rD";

export class PointService {
  static async fetchPoints() {
    const headers = new Headers();
    headers.append(`Authorization`, TOKEN);

    return fetch(`${BASE_URL}/points`, { method: "get", headers: headers });
  }
}
