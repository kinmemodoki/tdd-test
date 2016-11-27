module.exports.stack = class stack{
  constructor(){
    this.value = [];
  }

  isEmpty() {
    return this.value.length  === 0;
  }

  push(val){
    this.value.push(val);
    return;
  }

  top(){
    if(this.value.length === 0){
      throw new Error('EmptyStackException');
    }
    return this.value[this.value.length-1];
  }

  size(){
    return this.value.length;
  }

  pop(){
    if(this.value.length === 0){
      throw new Error('EmptyStackException');
    }
    this.value.pop();
    return;
  }
}
