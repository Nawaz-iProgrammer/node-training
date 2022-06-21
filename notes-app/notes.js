const fs = require('fs');

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
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

const removeNote = (title) => {
  const notes = loadNotes();

  const noteFiltered = notes.filter((note) => note.title !== title);

  if (noteFiltered.length !== notes.length) {
    saveNotes(noteFiltered);
    console.log('Note removed');
  } else {
    console.log('Note does not exist');
  }
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();

  const getNote = notes.find((note) => note.title === title);

  if (getNote) {
    console.log(`Title : ${getNote.title}, Description : ${getNote.body}`);
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
  addNote,
  removeNote,
  listNotes,
  readNote,
};
