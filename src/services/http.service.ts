import axios, { AxiosError, AxiosInstance } from "axios";
import { APP_CONFIG } from "config";

export class HttpService {
	protected http: AxiosInstance;

	constructor() {
		this.setupAxios();
	}

	private setupAxios() {
		this.http = axios.create({
			baseURL: APP_CONFIG.API_BASEURL,
		});

		this.http.interceptors.request.use();

		this.http.interceptors.response.use();
	}

	protected get httpClient() {
		return this.http;
	}

	protected handleError(error: unknown) {
		if (error instanceof AxiosError) {
			console.log(error.response.status);
		}
	}
}
