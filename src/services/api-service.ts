
export interface SampleData {
    id: number;
    firstName: string;
    lastName: string;
    ssn: string;
    address: string;
}

const mockData: SampleData[] = [
    {
        id: 0,
        firstName: 'Chris',
        lastName: 'Simpson',
        ssn: '123-45-6789',
        address: '123 Address St'
    },
    {
        id: 1,
        firstName: 'Joe',
        lastName: 'Schmo',
        ssn: '111-22-3333',
        address: '321 Address St'
    },

]

export class APIService {
    constructor(private endpoint?: string) {}

    public async query() {
        return [...mockData];
    }

    public async get(id: number) {
        return {...mockData.find(d => d.id === id)};
    }

    public async post(data: SampleData) {
        mockData.push(data);
        return [...mockData];
    }
}