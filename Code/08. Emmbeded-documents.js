db.passengers.find();

db.passengers.updateMany(
  {},
  { $set: { status: { description: "on time", lastUpdted: "1 hour ago" } } }
);

// Object inside Object OR document inside document

/*
db.passengers.find()
[
  {
    _id: ObjectId('65c9f7f924946694a5098b39'),
    name: 'Max Schwarzmueller',
    age: 29,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b3a'),
    name: 'Manu Lorenz',
    age: 30,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b3b'),
    name: 'Chris Hayton',
    age: 35,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b3c'),
    name: 'Sandeep Kumar',
    age: 28,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b3d'),
    name: 'Maria Jones',
    age: 30,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b3e'),
    name: 'Alexandra Maier',
    age: 27,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b3f'),
    name: 'Dr. Phil Evans',
    age: 47,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b40'),
    name: 'Sandra Brugge',
    age: 33,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b41'),
    name: 'Elisabeth Mayr',
    age: 29,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b42'),
    name: 'Frank Cube',
    age: 41,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b43'),
    name: 'Karandeep Alun',
    age: 48,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b44'),
    name: 'Michaela Drayer',
    age: 39,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b45'),
    name: 'Bernd Hoftstadt',
    age: 22,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b46'),
    name: 'Scott Tolib',
    age: 44,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b47'),
    name: 'Freddy Melver',
    age: 41,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b48'),
    name: 'Alexis Bohed',
    age: 35,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b49'),
    name: 'Melanie Palace',
    age: 27,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b4a'),
    name: 'Armin Glutch',
    age: 35,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b4b'),
    name: 'Klaus Arber',
    age: 53,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  },
  {
    _id: ObjectId('65c9f7f924946694a5098b4c'),
    name: 'Albert Twostone',
    age: 68,
    status: { description: 'on time', lastUpdted: '1 hour ago' }
  }
]
*/
