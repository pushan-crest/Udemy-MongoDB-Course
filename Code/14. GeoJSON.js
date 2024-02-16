awsomeplaces> db.places.insertOne({name:'Crest Office', location: { type: 'Point', coordinates: [72.793188, 21.185161] } })

{
  acknowledged: true,
  insertedId: ObjectId('65cc9e3f58aa8b459c319994')
}

// ===========================================================================================

awsomeplaces> db.places.createIndex({location: '2dsphere'})
location_2dsphere

// ===========================================================================================

awsomeplaces> db.places.find({location: {$near: {$geometry: {type: 'point', coordinates: [72.804808, 21.190053]}, $maxDistance: 3000, $minDistance: 10}}})

[
  {
    _id: ObjectId('65cc9e3f58aa8b459c319994'),
    name: 'Crest Office',
    location: { type: 'Point', coordinates: [ 72.793188, 21.185161 ] }
  }
]

// ===========================================================================================

// Inserting other Locations
awsomeplaces> db.places.find()

[
  {
    _id: ObjectId('65cc9fff58aa8b459c31999b'),
    name: 'Crest infoSystem',
    location: { type: 'Point', coordinates: [ 72.7999107, 21.194006 ] }
  },
  {
    _id: ObjectId('65cca00f58aa8b459c31999c'),
    name: 'Sardar Bridge',
    location: { type: 'Point', coordinates: [ 72.806669, 21.198609 ] }
  },
  {
    _id: ObjectId('65cca03358aa8b459c31999d'),
    name: 'Temple',
    location: { type: 'Point', coordinates: [ 72.80675, 21.191246 ] }
  },
  {
    _id: ObjectId('65cca05858aa8b459c31999e'),
    name: 'Adajan Circle',
    location: { type: 'Point', coordinates: [ 72.796821, 21.206643 ] }
  }
]

// ===========================================================================================

awsomeplaces> let p1 = [72.77935746154787, 21.204352463332928]

awsomeplaces> let p2 = [72.80447603633452, 21.209396471383997]

awsomeplaces> let p3 = [72.81035733214543, 21.194829180780406]

awsomeplaces> let p4 = [72.78533987981542, 21.1922920338533]

// ===========================================================================================

awsomeplaces> db.places.find({location: {$geoWithin: {$geometry: {type: 'Polygon', coordinates: [[p1,p2,p3,p4,p1]]}}}})
[
  {
    _id: ObjectId('65cca05858aa8b459c31999e'),
    name: 'Adajan Circle',
    location: { type: 'Point', coordinates: [ 72.796821, 21.206643 ] }
  },
  {
    _id: ObjectId('65cc9fff58aa8b459c31999b'),
    name: 'Crest infoSystem',
    location: { type: 'Point', coordinates: [ 72.7999107, 21.194006 ] }
  },
  {
    _id: ObjectId('65cca00f58aa8b459c31999c'),
    name: 'Sardar Bridge',
    location: { type: 'Point', coordinates: [ 72.806669, 21.198609 ] }
  }
]

// ===================================================================================

db.areas.insertOne({name: 'Adajan', area: {type: 'Polygon', coordinates: [[p1,p2,p3,p4,p1]]}})
{
  acknowledged: true,
  insertedId: ObjectId('65cd82f158aa8b459c31999f')
}


awsomeplaces> db.areas.find()
[
  {
    _id: ObjectId('65cd82f158aa8b459c31999f'),
    name: 'Adajan',
    area: {
      type: 'Polygon',
      coordinates: [
        [
          [ 72.77935746154787, 21.20435246333292 ],
          [ 72.80447603633452, 21.209396471383997 ],
          [ 72.81035733214543, 21.194829180780406 ],
          [ 72.78533987981542, 21.1922920338533 ],
          [ 72.77935746154787, 21.20435246333292 ]
        ]
      ]
    }
  }
]


// ===================================================================================

awsomeplaces> db.arease.createIndex({area : '2dsphere'})
area_2dsphere

// ===================================================================================

db.areas.find({area: {$geoIntersects: {$geometry: {type: "Point", coordinates: [72.79870302153608, 21.19584457284073]}}}})
[
  {
    _id: ObjectId('65cd82f158aa8b459c31999f'),
    name: 'Adajan',
    area: {
      type: 'Polygon',
      coordinates: [
        [
          [ 72.77935746154787, 21.20435246333292 ],
          [ 72.80447603633452, 21.209396471383997 ],
          [ 72.81035733214543, 21.194829180780406 ],
          [ 72.78533987981542, 21.1922920338533 ],
          [ 72.77935746154787, 21.20435246333292 ]
        ]
      ]
    }
  }
]

// ===================================================================================

// here radius is 1 km
db.places.find({location: {$geoWithin: {$centerSphere: [[72.79153615923828, 21.1992855752203],1/6378.1 ]}}})

[
  {
    _id: ObjectId('65cca05858aa8b459c31999e'),
    name: 'Adajan Circle',
    location: { type: 'Point', coordinates: [ 72.796821, 21.206643 ] }
  }
]