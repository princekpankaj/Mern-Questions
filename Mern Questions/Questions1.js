const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/update-password', async (req, res) => {
  const { userId, currentPassword, newPassword } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10); 

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update password' });
  }
});
module.exports = router;
