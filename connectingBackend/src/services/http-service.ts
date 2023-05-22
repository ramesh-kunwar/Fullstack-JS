import apiClient from "./api-client";

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll<T>() {
    //  <T> is a generic method
    const request = apiClient.get<T[]>(this.endpoint);

    return request;
  }

  delete(id: number) {
    const request = apiClient.delete(this.endpoint + "/" + id);
    return request;
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update<T extends Entity>(entity: T) {
    return apiClient.put(this.endpoint + +"/" + entity.id, entity);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
