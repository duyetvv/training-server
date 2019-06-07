import connection from '../helpers/mysql';

class Database {
  constructor(name, props) {
    this.props = props;
    this.name = name;
    this.creating();
  }

  creating = async () => {
    const fields = Object.keys(this.props).map((field) => (
      `${field} ${fields[field].type} ${fields[field].required} default ${fields[field].default}`
    ));

    const queryStr = `create table if not exists ${this.name}(
      id int primary key auto_increment,
      ${fields.join(', ')}
    )`;

    connection.connect((err) => {
      if (err) {
        console.error('error: ' + err.message);
        return err;
      }

      connection.query(queryStr, function(err, results, fields) {
        if (err) {
          console.log(err.message);
          return err;
        }

        return results;
      });
    })
  }

  inserting = async (entity) => {
    const fields = Object.keys(this.props).sort();
    const values = fields.map((field) => (
      entity[field] || this.props[field].default
    ));

    const queryStr = `
      INSERT INTO ${this.name}(${fields.join(',')}) 
      VALUES(${values.join(',')})
    `;

    connection.query(queryStr, function(err, results, fields) {
      if (err) {
        console.log(err.message);
        return err;
      }

      return results;
    });
  }

  queryall = async () => {
    const queryStr = `SELECT * FROM todos`;
    connection.query(queryStr, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
    });
  }

  updating = async (id, valObj) => {
    const newVal = Object.keys(valObj).map((field) => (
      `${field} = ${valObj[field]}`
    ));

    const queryStr =  `UPDATE ${this.name} 
      SET ${newVal.join(', ')}
      WHERE id = ${id}
    `;

    connection.query(queryStr, data, (error, results, fields) => {
      if (error){
        return console.error(error.message);
      }
      console.log('Rows affected:', results.affectedRows, fields);
    });
  }

  deleting = (id) => {
    const queryStr = `DELETE FROM todos WHERE id = ${id}`;
 
    connection.query(queryStr, 1, (error, results, fields) => {
      if (error)
        return console.error(error.message);
    
      console.log('Deleted Row(s):', results.affectedRows);
    });
  }
}


export default Database;