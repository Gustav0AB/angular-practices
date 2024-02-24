export interface User{
    id: Number,
    name: String,
    lastname: String,
    birthday: String,
    service: String,
    image: String,
    amount: Number,
    duedate: String,
    status: string
};

export interface UserInformation{
    id?: Number,
    name: String,
    lastname: String,
    birthday: String,
    services: [],
    image: String
    phoneNumber: String
};

export interface Services{
    id: Number,
    name: String
};
// amount, service, status