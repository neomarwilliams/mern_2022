const express= require("express");
const faker= require("faker");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const createFakeUser = () => {
    const newFakeUser = {
        id: faker.datatype.number(1000000),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(), 
        phoneNumber: faker.phone.phoneNumber(), 
        email: faker.internet.email(),
        password: faker.datatype.string(8)
    }

    return newFakeUser;
}

const createFakeCompany = () => {
    const newFakeCompany = {
        _id:faker.finance.account(5),
        name: faker.company.companyName(),
        address:{
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()

        },
    }

    return newFakeCompany;
}

const callNewFakeUser = createFakeUser();
const callNewFakeCompany = createFakeCompany();

app.get("/api/users/new", (request, response)=>{
    response.json({
        FakeUser: callNewFakeUser
    })
});

app.get("/api/companies/new", (request, response)=>{
    response.json({
        FakeCompany: callNewFakeCompany
    })
});

app.get("/api/user/company", (request, response)=>{
    response.json({
        FakeUser: callNewFakeUser,
        FakeCompany: callNewFakeCompany
    })
});

app.listen(8000, ()=>console.log("you have connected to port 8000"));
