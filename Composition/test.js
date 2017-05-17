const Vehicle = (name) => {

   // Variables
   let state = "";

   // Functions
   return {
      drive: () => {
         this.state = 'driving';
         console.log(name + ' startet ' + this.state)
      },

      stop: () => {
         this.state = 'stopped';
         console.log(name + ' has ' + this.state)
      },

      setName: (newName) => {
         name = newName;
      },

      state: () => {
         console.log(name + ' is ' + this.state)
      },
   }
}

const AutonomousVehicle = (name) => {

   // Functions
   return Object.assign(
      {
         drive: () => {
            this.state = 'driving';
            console.log(name + ' startet ' + this.state + 'alone!!!!')
         },
         drivesAlone: () => {
            console.log(name + ' can drive without a driver!')
         }
      },
      Vehicle(name)
   )
}

const ferrari = AutonomousVehicle("The Ferrari");

ferrari.drive();
ferrari.setName('The new Ferrari');
ferrari.state();
ferrari.drivesAlone();
ferrari.stop();
ferrari.state();
