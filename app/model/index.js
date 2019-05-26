import connection from '../helpers/mysql';

class Model {
  constructor(name, props) {
    super(props);
    this.props = props;
    this.name = name;
  }

  create = async () => {
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

  insert = async (entity) => {
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

  querying = async (conditions) => {

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
}


export default Model;