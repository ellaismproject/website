import Address from '@/models/Address';
import axios, {AxiosInstance} from 'axios';

interface IApiService {
    getAddressByHash(hash: string): Promise<Address>;
}

export default class ApiService implements IApiService {
    private baseUrl: string = process.env.VUE_APP_API_URI;
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: this.baseUrl,
            validateStatus: (status) => {
                return status >= 200 && status < 300 && status !== 204;
            },
        });
    }

    public async getAddressByHash(hash: string): Promise<Address> {
        const url: string = `${this.baseUrl}/v1/address/${hash}`;
        const response = await this.client.get(url);

        return response.data;
    }
}
