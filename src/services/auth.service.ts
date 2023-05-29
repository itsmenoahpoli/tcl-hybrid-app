import { HttpService } from "services/http.service";
import { TCredentials } from "types/auth";

export class AuthService extends HttpService {
	public async login(credentials: TCredentials) {
		try {
			const response = await this.httpClient.get("/healthcheck");

			console.log(response.data);
		} catch (error) {
			this.handleError(error);
		}
	}

	public async registerAccount() {
		try {
			//
		} catch (error) {
			this.handleError(error);
		}
	}
}
