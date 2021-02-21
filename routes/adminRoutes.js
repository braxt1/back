const {Router} = require('express')
const router = Router()
const {allUsers,editUser,del} = require('../controllers/adminController')
const {requireA} = require('../middleware/AdminMiddleware')


// router.use(requireA)
router.post('/all', requireA, allUsers)

router.post('/editUser', editUser)

router.post('/delete', del)

module.exports = router
