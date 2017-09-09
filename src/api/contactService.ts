import axios, { AxiosInstance, AxiosPromise } from 'axios';

const ENDPOINT_MESSAGES = 'messages';

class ContactService {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: 'http://59b4016a95ddb9001143e97a.mockapi.io/api/v1/',
            timeout: 3000 // Mock API is slow
        });
    }

    createMessage(fullName: string, emailAddress: string, message: string): AxiosPromise {
        const payload = {fullName, emailAddress, message};
        return this.client.post(ENDPOINT_MESSAGES, payload);
    }

}

export default ContactService;