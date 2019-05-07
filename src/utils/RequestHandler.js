const API_BASE_URL = 'http://localhost:4000/api/';
export default class RequestHandler {
  static isSuccess(response) {
    if (!(response.ok || response.status === 200 || response.status === 201)) {
      // showFailureNotification(handleError(response));
      throw Error(response.statusText);
    }
    return response;
  }

  static get(url, options) {
    return new Promise((resolve, reject) => {
      fetch(`${API_BASE_URL}${url}`, {
        method: 'GET'
      })
        .then(RequestHandler.isSuccess)
        .then(response => resolve(response.json()))
        .catch(error => reject(error));
    });
  }

  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(`${API_BASE_URL}${url}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      })
        .then(RequestHandler.isSuccess)
        .then(response => resolve(response.json()))
        .catch(error => reject(error));
    });
  }
}
