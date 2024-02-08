const express = require('express');
const router = express.Router();
const Verification = require('../models/Verification');

router.get('/', async (req, res) => {
  try {
    const verifications = await Verification.find();
    res.json(verifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const verification = new Verification({
    userId: req.body.userId,
    details: req.body.details
  });
  try {
    const newVerification = await verification.save();
    res.status(201).json(newVerification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
