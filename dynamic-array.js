class DynamicArray {

  constructor(capacity,length,defaultSize = 4) {

    // Your code here
    this.defaultSize = defaultSize;
    this.capacity = capacity || this.defaultSize;
    this.length = length || 0;
    this.data = new Array(this.capacity);
  }

  read(index) {

    // Your code here
    if(this.length < 1){
      return undefined;
    }
    return this.data[0] + index*this.length;

  }

  push(val) {

    // Your code here
  }


  pop() {

    // Your code here
  }

  shift() {

    // Your code here
  }

  unshift(val) {

    // Your code here
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;