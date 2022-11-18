import axios, {
	AxiosResponse,
	AxiosRequestHeaders,
	AxiosInstance,
} from "axios";
import { IHttpService } from "ts/interfaces/Report.interface";

class HttpService implements IHttpService {
	private httpModule: AxiosInstance = axios;
	public baseURL: string = "http://localhost:3000/mock-data";

	private headers: AxiosRequestHeaders = {
		"Content-Type": "application/json",
	};

	public get(url: string) {
		return this.httpModule.get(`${this.baseURL}/${url}`, {
			headers: this.headers,
		});
	}

	public post(url: string, data: any): Promise<AxiosResponse> {
		return this.httpModule.post(`${this.baseURL}/${url}`, data, {
			headers: this.headers,
		});
	}

	public put(url: string, data: any): Promise<AxiosResponse> {
		return this.httpModule.put(`${this.baseURL}/${url}`, data, {
			headers: this.headers,
		});
	}

	public delete(url: string): Promise<AxiosResponse> {
		return this.httpModule.delete(`${this.baseURL}/${url}`, {
			headers: this.headers,
		});
	}

	public setHeaders(headers: any): void {
		this.headers = { ...this.headers, ...headers };
	}

	public setBaseURL(baseURL: string): void {
		this.baseURL = baseURL;
	}
}

export default new HttpService();
