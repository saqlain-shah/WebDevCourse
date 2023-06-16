import express from "express";
import {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    Requests,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello admin, you are logged in and you can delete all accounts")
})

//UPDATE
router.post("/:id", Requests);
router.put("/:id", updateUser);
router.put("/", updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GET ALL
router.get("/", verifyUser, getUsers);
export default router;