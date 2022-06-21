const fs = require('fs');

const getNotes = () => {
  return 'Your notes...';
};

const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicatNotes = notes.filter((note) => note.title === title);

  if (duplicatNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log('New note added...');
  } else {
    console.log('Note title taken...');
  }
};

const removeNotes = function (title) {
  const notes = loadNotes();

  const noteFiltered = notes.filter(function (note) {
    return note.title !== title;
  });

  if (noteFiltered.length !== notes.length) {
    saveNotes(noteFiltered);
    console.log('Note removed');
  } else {
    console.log('Note does not exist');
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNotes,
  removeNotes,
};
