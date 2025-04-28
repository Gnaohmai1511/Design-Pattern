class Subject {
    constructor() {
      this.observers = [];
    }
  
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    unsubscribe(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notify(data) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
  
  class User {
    constructor(name) {
      this.name = name;
    }
  
    update(product) {
      console.log(`${this.name} được thông báo về sản phẩm mới: ${product}`);
    }
  }
  
  // Kiểm tra
  const shop = new Subject();
  const user1 = new User("Alice");
  const user2 = new User("Bob");
  
  shop.subscribe(user1);
  shop.unsubscribe(user2);
  
  shop.notify("iPhone 15 Pro Max");
  // Alice được thông báo về sản phẩm mới: iPhone 15 Pro Max
