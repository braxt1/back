const {Router} = require('express')
const router = Router()
const authController = require('../controllers/authController')

router.post('/signup', authController.signup)

router.post('/login', authController.login)

router.post('/user',authController.user)

router.get('/logout', authController.logout)

module.exports = router