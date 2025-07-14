const Note = require('../models/Note');

exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({ title, content, user: req.user });
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
