db.person.insertMany([
  {
    name: "Max",
    hobbies: [
      {
        title: "Sports",
        frequency: 3,
      },
      {
        title: "Cooking",
        frequency: 6,
      },
    ],
    phone: 131782734,
  },
  {
    name: "Manuel",
    hobbies: [
      {
        title: "Cooking",
        frequency: 5,
      },
      {
        title: "Cars",
        frequency: 2,
      },
    ],
    phone: "012177972",
    age: 30,
  },
  {
    name: "Anna",
    hobbies: [
      {
        title: "Sports",
        frequency: 2,
      },
      {
        title: "Yoga",
        frequency: 3,
      },
    ],
    phone: "80811987291",
    age: null,
  },
  {
    name: "Chris",
    hobbies: ["Sports", "Cooking", "Hiking"],
  },
]);
