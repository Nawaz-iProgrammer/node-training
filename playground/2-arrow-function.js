// const show = {
//   name: 'Bday event',
//   guest: ['Tom', 'peter', 'kand'],
//   printGuestList: function () {
//     console.log('Guest List for ' + this.name);

//     this.guest.forEach(function (guest) {
//       console.log(guest + ' is attending ' + this.name);
//       //normal func has this binding issues
//     });
//   },
// };

const show = {
  name: 'Bday event',
  guest: ['Tom', 'peter', 'kand'],
  printGuestList() {
    console.log('Guest List for ' + this.name);

    this.guest.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name);
      //arrow func solves this binding issues
    });
  },
};

show.printGuestList();
