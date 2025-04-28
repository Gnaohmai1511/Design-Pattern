class Database {
    constructor() {
      if (Database.instance) {
        return Database.instance;
      }
      this.connection = "Connected to database";
      Database.instance = this;
    }
  
    getConnection() {
      return this.connection;
    }
  }
  
  // Kiểm tra
  const db1 = new Database();
  const db2 = new Database();
  
  console.log(db1.getConnection()); // Connected to database
  console.log(db1 === db2);    