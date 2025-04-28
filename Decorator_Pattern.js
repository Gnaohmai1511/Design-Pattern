class Coffee {
    cost() {
      return 5;
    }
  }
  
  class MilkDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost() + 2;
    }
  }
  
  class SugarDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost() + 1;
    }
  }
  
  // Kiểm tra
  let myCoffee = new Coffee();
  console.log(myCoffee.cost()); // 5
  
  myCoffee = new MilkDecorator(myCoffee);
  console.log(myCoffee.cost()); // 7
  
  myCoffee = new SugarDecorator(myCoffee);
  console.log(myCoffee.cost()); // 8
  