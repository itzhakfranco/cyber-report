// main switch - url / proxy.
export const apiURL: any = "http://localhost:8000";

// # tokenkey
export const tokenKey: any = "userInfo";

export const getLocalSKey: any = localStorage.getItem(tokenKey);

// # for nonAuth requests.
export const unAuthHeaders: any = {
	"Content-Type": "application/json",
};
// # for Auth requests.
export const autheaders: any = {
	authorization: `Bearer ${
		JSON.parse(getLocalSKey) && JSON.parse(getLocalSKey).token
	}`,
	"Content-Type": "application/json",
};
