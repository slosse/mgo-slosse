
import * as firebase from "firebase/app"
import { getFirestore, getDoc, doc, getDocs, collection, query, where, writeBatch, addDoc,Timestamp } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDDNrVr5S5aMZJAgFZ7-asFYLYQOlYdV3A",
  authDomain: "mgoweb-96f1e.firebaseapp.com",
  projectId: "mgoweb-96f1e",
  storageBucket: "mgoweb-96f1e.appspot.com",
  messagingSenderId: "558776893580",
  appId: "1:558776893580:web:747e1507fd7c45e7e8fba9"
};


firebase.initializeApp(firebaseConfig);

export const db = getFirestore()

export const getCollection = (dbCollection, filter, operator, condition) => {

  const vQuery = dbCollection && filter && operator && condition ? query(collection(db, dbCollection), where(filter, operator, condition)) : collection(db, dbCollection)

  return new Promise((resolve, reject) => {

    getDocs(vQuery).then(querySnapshot => {
      const list = querySnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })
      resolve(list)
    }).catch((error) => {
      reject('Error searching collection ' + dbCollection, error)
    })
  })
}

export const saveOrder = (objOrder) => {

  const order = {date: Timestamp.fromDate(new Date()),...objOrder}

  const batch = writeBatch(db)
  const outOfStock = []
  
  return new Promise((resolve, reject) => {

    objOrder.items.forEach((prod, i) => {
      getDoc(doc(db, 'products', prod.id)).then(DocumentSnapshot => {
        if (DocumentSnapshot.data().stock >= order.items[i].quantity) {
          batch.update(doc(db, 'products', DocumentSnapshot.id), {
            stock: DocumentSnapshot.data().stock - order.items[i].quantity
          })
        } else {
          outOfStock.push({ ...DocumentSnapshot.data(), id: DocumentSnapshot.id })
        }
      })
    })
    
    if(outOfStock.length === 0) {
      addDoc(collection(db, 'orders'), order).then(() => {
          batch.commit().then(() => {
              //setNotification('success', 'La orden se ejecuto con exito')
              resolve()
          })
      }).catch((error) => {
          //setNotification('error','Error al ejecutar la orden')
          reject(error)
      })
  }




  })
}