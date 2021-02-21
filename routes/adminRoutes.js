const { Router } = require("express");
const router = Router();
const {
  allUsers,
  editUser,
  del,
  withdrwal,
} = require("../controllers/adminController");
const { requireA } = require("../middleware/AdminMiddleware");

// router.use(requireA)
router.post("/all", requireA, allUsers);

router.post("/withdrawal", requireA, withdrwal);

router.post("/editUser", editUser);

router.post("/delete", del);

module.exports = router;
