import { faker } from '@faker-js/faker';

export const generateUserData = () => {
  return {
    accountType: "USER",
    address: faker.location.streetAddress(),
    allowOffersPromotion: true,
    cityName: faker.location.city(),
    countryId: "US",
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    loginName: faker.internet.userName().substring(0, 13) + faker.number.int({ min: 10, max: 99 }), 
    password: "Password1!",
    phoneNumber: faker.string.numeric(10),
    stateProvince: faker.location.state({ abbreviated: true }),
    zipcode: faker.location.zipCode('#####')
  };
};