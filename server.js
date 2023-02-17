const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
    
const createUser = () => {
    const newFake = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        name: faker.company.name(),
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()

    };
    return newFake;
};

const newUser = createUser();
console.log(newUser);
const newCompany = createCompany();
console.log(newCompany);

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
    res.json({createUser: createUser()})
})

app.get("/api/companies/new", (req, res) => {
    res.json({createCompany: createCompany()})
})

app.get("/api/user/company", (req, res) => {
    res.json({createCompany: createCompany(), createUser: createUser()})
})



app.listen( port, () => console.log(`Listening on port: ${port}`) );