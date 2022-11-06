const { Router, text } = require("express");
const router = Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.signup);

router.post("/login", authController.login);

router.post("/user", authController.user);

router.post("/withdraw", authController.withdraw);

router.post("/forgot-password/:log", authController.sendPassword);

router.post("/changePassword", authController.changePassword);

router.get("/logout", authController.logout);

module.exports = router;




// (
//     address text,
//     deposit integer,
//     email text UNIQUE PRIMARY KEY NOT NULL,
//     joined timestamp NOT NULL,
//     name character varying(100),
//     password text,
//     phone text,
//     profits integer,
//     referral integer
//     withdrwal integer,
//                         admin boolean,
                            
                                
                                    
// )