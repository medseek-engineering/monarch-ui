function getRandomFromArray(textArray){
  let randomNumber = Math.floor(Math.random()*textArray.length);
  return textArray[randomNumber];
}


const titlesList = [
  'High Risk for Heart Disease',
  'High Risk for Diabetes',
  'Women under 30',
  'Men over 40',
  'Men over 40'
];

const locationsList = [
  'Community Hospital of the Monterey Peninsula',
  'Miami General',
  'Tampa Bay Community Hospital',
  'Tampa Bay Community Hospital, Community Hospital of the Monterey Peninsula',
  'Community Hospital of the Monterey Peninsula, Community Hospital of the Monterey Peninsula'
];

const firstNamesList = [
  'Adam',
  'Brittany',
  'Ryan',
  'Leslie',
  'Benjamin',
  'Patricia',
  'Jeff',
  'Harper'
];

const lastNamesList = [
  'Jones',
  'Smith',
  'West',
  'Banala',
  'Smith-Jones',
  'Strong',
  'Johnson',
  'Smithhart'
];

function concatString(callback, firstNamesList, lastNamesList) {
  return callback(firstNamesList) + ' ' +callback(lastNamesList);
}

function getRandomStreetNumber() {
 return Math.floor(Math.random()*1000) + 100;
}

function getPersons() {

  let persons = [];
  let i = 0;
  for (i = 0; i < 5063; i++) {
    const person = {
      id: 4917580,
      firstName: getRandomFromArray(['Adam', 'Brittany', 'Ryan', 'Leslie', 'Benjamin', 'Patricia', 'Jeff', 'Harper']),
      lastName: getRandomFromArray(['Jones', 'Smith', 'West', 'Banala', 'Smith-Jones', 'Strong', '', 'Johnson', 'Smithhart']),
      address: getRandomFromArray([getRandomStreetNumber() + ' Address St', getRandomStreetNumber() + ' Avenue St', getRandomStreetNumber() + ' 1st Ave S', getRandomStreetNumber() + ' 2nd Ave S', getRandomStreetNumber() + ' 3rd Ave N', getRandomStreetNumber() + ' 5th Ave S', getRandomStreetNumber() + ' University Blvd']),
      city: getRandomFromArray(['Birmingham, AL 35216', 'Alabaster, AL 35007', 'Atlanta, GA 30002', 'Atlanta, GA 30033']),
      type: getRandomFromArray(['individual', 'household']),
      gender: getRandomFromArray(['Male', 'Female', 'Unknown']),
      age: Math.floor(Math.random()*70) + 18
    };
    persons = persons.concat([Object.assign({}, person, {
      id: person.id - i,
      email: person.firstName.toLowerCase() + person.lastName.toLowerCase() + '@example.com'
    })]);
    //i = i + 1;
  }

  return persons;

}

let persons = getPersons();


let audienceRandoms = [];
let i = 0;
for (i = 0; i < 50; i++) {
  const audience = {
    audienceId: 1001,
    title: getRandomFromArray(titlesList),
    createdBy: getRandomFromArray(firstNamesList).concat(' ', getRandomFromArray(lastNamesList)),
    updated: '02/16/2017',
    locations: getRandomFromArray(locationsList),
    persons: persons
  };
  audienceRandoms = audienceRandoms.concat([Object.assign({}, audience, {
    audienceId: audience.audienceId + i
  })]);
  i = i + 1;
}



export const audiences = audienceRandoms;