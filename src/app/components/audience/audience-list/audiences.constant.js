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


let audienceRandoms = [];
let i = 0;
for (i = 0; i < 50; i++) {
  const audience = {
    audienceId: 1001,
    title: getRandomFromArray(titlesList),
    createdBy: getRandomFromArray(firstNamesList).concat(' ', getRandomFromArray(lastNamesList)),
    updated: '02/16/2017',
    locations: getRandomFromArray(locationsList)
  };
  audienceRandoms = audienceRandoms.concat([Object.assign({}, audience, {
    audienceId: audience.audienceId + i
  })]);
  i = i + 1;
}



export const audiences = audienceRandoms;