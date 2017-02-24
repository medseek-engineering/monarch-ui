function getRandomFromArray(textArray){
  let randomNumber = Math.floor(Math.random()*textArray.length);
  return textArray[randomNumber];
}


const titlesList = [
  'Organic Campaign',
  '2016 Ortho Interested Leads',
  'Motherhood Maternity',
  '28 days to better health',
  'Healthy Heart',

];


const channels = [
  'Facebook',
  'Twitter',
  'Google',
  'Organic Search',
  'Website',
  'Email',
  'TV',
  'Print',
  'Outdoor',
  'Radio',
  'Direct Mail'
]

// Social
// Facebook
// Twitter

// Search
// Google
// Organic Search

// Digital
// Website
// Email

// Traditional
// TV
// Print
// Outdoor
// Radio
// Direct Mail



const listSources = [
  [
    {
      type: 'Audience',
      title: 'Men over 40'
    }
  ],
  [
    {
      type: 'Audience',
      title: 'High Risk for Heart Disease'
    }
  ],
  [
    {
      type: 'Leads',
      title: 'Men over 40 campaign'
    }
  ],
  [
    {
      type: 'Leads',
      title: 'Maternity campaign'
    }
  ]
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

const statuses = [
//  'Draft',
  'Active',
//  'Deleted',
  'Paused'
]



function concatString(callback, firstNamesList, lastNamesList) {
  return callback(firstNamesList) + ' ' +callback(lastNamesList);
}

function getRandomStreetNumber() {
 return Math.floor(Math.random()*1000) + 100;
}


function floorFigure(figure, decimals){
    if (!decimals) decimals = 2;
    var d = Math.pow(10,decimals);
    return (parseInt(figure*d)/d).toFixed(decimals);
}

const listTitles = [
  'High Risk for Heart Disease',
  'High Risk for Diabetes',
  'Women under 30',
  'Men over 40',
  'Men over 30'
];

let campaignRandoms = [];
let i = 0;
for (i = 0; i < 50; i++) {
  const newCampaign = {
    campaignId: 1001,
    title: getRandomFromArray(titlesList),
    createdBy: getRandomFromArray(firstNamesList).concat(' ', getRandomFromArray(lastNamesList)),
    created: '02/16/2017',
    updated: '02/16/2017',
    channel: getRandomFromArray(channels),
    sources: getRandomFromArray(listSources),
    leads: Math.floor(Math.random()*20),
    status: getRandomFromArray(statuses),
    listTitle: getRandomFromArray(listTitles),
    budget: floorFigure((Math.random()*3 + 1), 2)
  };
  campaignRandoms = campaignRandoms.concat([Object.assign({}, newCampaign, {
    costPerLead: floorFigure(newCampaign.budget / newCampaign.leads, 3),
    campaignId: newCampaign.campaignId - i,
    total: floorFigure((Math.random()*50000 + 1), 2)
  })]);
  i = i + 1;
}



export const campaigns = campaignRandoms;