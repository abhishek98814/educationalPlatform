const express = require("express");
const {
  assignSubscription,
  getUserSubscription,
  getAllUserSubscriptions,
  expireSubscription,
} = require("../controller/usersubscription.controller");

const router = express.Router();

router.post("/", assignSubscription); // Assign a subscription
router.get("/:userId", getUserSubscription); // Get active subscription of a user
router.get("/", getAllUserSubscriptions); // Get all user subscriptions
router.put("/expire/:id", expireSubscription); // Expire a subscription

module.exports = router;
