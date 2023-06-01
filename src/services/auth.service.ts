import { HttpService } from "services/http.service";
import { TCredentials } from "types/auth";
import * as storage from "libs/async-storage.lib";

export class AuthService extends HttpService {
	public async login(credentials: TCredentials) {
		try {
			const response = await this.httpClient.post("/auth/login", { ...credentials, type: "client" });

			if (response.status === 200) {
				const data = response.data.data;

				storage.storeItem("@user", data.user);
				storage.storeItem("@accessToken", data.accessToken);

				return { isAuthSuccess: true };
			}

			return { isAuthSuccess: false };
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
