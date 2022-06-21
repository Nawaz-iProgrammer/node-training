const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Add a note
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      description: 'Description',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note...');
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading the note...');
  },
});

yargs.command({
  command: 'list',
  describe: 'List the note',
  handler: function () {
    console.log('Listing the notes...');
  },
});

yargs.parse();
