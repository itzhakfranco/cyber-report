import { AxiosResponse } from "axios";

export interface IPropsCompose {
	components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
	children: React.ReactNode;
}

export interface IHttpService {
	get: (url: string) => Promise<AxiosResponse>;
	post: (url: string, data: any) => Promise<AxiosResponse>;
	put: (url: string, data: any) => Promise<AxiosResponse>;
	delete: (url: string) => Promise<AxiosResponse>;
}
