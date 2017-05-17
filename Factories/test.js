var BeingProto = {
   // Members
   name: '',
   alive: true,

   // Methods
   die: function die() {
      this.alive = false;
      console.log(this.name + ' died');
      return this;
   }
}
var BeingFactory = function BeingFactory(options) {
   return Object.assign(Object.create(BeingProto), options);
}

var AnimalProto = {
   // Members
   walking: false,

   // Methods
   walk: function walk() {
      this.walking = true;
      console.log(this.name + ' walks');
      return this;
   },
   rest: function rest() {
      this.walking = false;
      console.log(this.name + ' rests');
      return this;
   },
   kill: function kill(beeing) {
      console.log(this.name + ' kills the ' + beeing.name);
      beeing.die();
   }
}
var AnimalFactory = function AnimalFactory(options) {
   return Object.assign(Object.create(AnimalProto), BeingProto, options);
}


var antilope = AnimalFactory({name: 'Antilope'});
antilope.walk();

var tiger = AnimalFactory({name: 'Tiger'});
tiger.walk();
tiger.kill(antilope);
