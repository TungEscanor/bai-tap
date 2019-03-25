var myDog = {
    weight: 5,
    name: 'Đần',
    age: 1,
    bark : function () {//anonymus funtion
        console.log('meo meo, my name is', this.name);
    },
eat: function(bone) {
    this.weight = this.weight + bone.weight;
    return this;
    }
};
myDog.bark();

var bone = {weight: 0.5};
console.log('Before eating', myDog.weight);

myDog.eat(bone);
console.log('After eating', myDog.weight);


//myDog.bark();
//function back () {
//   console.log('meo meo, my name is', this.name);
//};
//back();
/* Bài tập*/
