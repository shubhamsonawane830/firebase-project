const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { firestore } = require('firebase-admin');


// Function for updating partners  during a order is created
exports.ordersDocumentCreate = functions.firestore.document('/orders/{documentID}')
    .onCreate( async (snap, context) => {
     console.log(snap.data());

      const db= admin.firestore();
      const orderdata = snap.data().orderdata;

      const activities = admin.firestore().orders('activities');

      if (orders === 'requests') {
        return activities.add({text: 'a new tutorial request was added' })
      }
      
      return null;

    })


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
