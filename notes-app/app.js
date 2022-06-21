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
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

// Remove a note
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading the note...');
  },
});

// List the notes
yargs.command({
  command: 'list',
  describe: 'List the note',
  handler() {
    notes.listNotes();
  },
});

yargs.parse();
