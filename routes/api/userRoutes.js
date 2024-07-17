const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  deleteAllUsers // Make sure to add the new controller method here
} = require('../../controllers/userController');

// /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser)
  .delete(deleteAllUsers); // Add the new route here

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
