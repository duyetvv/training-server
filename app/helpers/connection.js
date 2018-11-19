import { connectString, dbName } from '../config';

const MongoClient = require('mongodb').MongoClient;

class Connection {
  constructor() {
    this.db = null;
  }

  _open(callback, fallback) {
    if (this.db) {
      callback(this.db);
      return;
    }

    MongoClient.connect(connectString, (error, client) => {
      if (error) {
        console.log(`can't open the connection`);
        fallback(error)
        return;
      }

      const db = client.db(dbName);
      this.db = db;
      console.log('Open MongoDB training Database');
      callback(db);
    })
  }

  insert(tableName, entity) {
    if (!todo) { return; }

    return new Promise((resolve, reject) => {
      this._open(db => {
        db.collection(tableName).insertOne(entity, (error, result) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(result);
        })
      }, error => {
        reject(error);
      })
    })
  }

  update(tableName, condition, entity) {
    return new Promise((resolve, reject) => {
      this._open(db => {
        db.collection(tableName).updateOne(condition, entity, (error, result) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(result);
        })
      }, error => {
        reject(error);
      })
    })
  }

  delete(tableName, entity) {
    return new Promise((resolve, reject) => {
      this._open(db => {
        db.collection(tableName).deleteOne(entity, (error, result) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(result);
        })
      }, error => {
        reject(error);
      })
    })
  }

  getAll(tableName) {
    return new Promise((resolve, reject) => {
      this._open(db => {
        db.collection(tableName).find().toArray((error, data) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        })
      }, error => {
        reject(error);
      })
    })
  }

  getOne(tableName, queryObj) {
    return new Promise((resolve, reject) => {
      this._open(db => {
        const result = db.collection(tableName).findOne(queryObj);

        if (Object.keys(result).length) {
          resolve({ status: 1, data: result });
        } else {
          reject({ status: 0, errors: null });
        }
      }, error => {
        reject({ status: 0, errors: null });
      })
    })
  }
}

export default new Connection();
