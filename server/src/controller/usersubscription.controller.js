const UserSubscription = require("../model/UserSubscription");
const User = require("../model/user.model");
const Subscription = require("../model/Subscription");

exports.assignSubscription = async (req, res) => {
  try {
    const { userId, subscriptionId } = req.body;

    const user = await User.findById(userId);
    const subscription = await Subscription.findById(subscriptionId);

    if (!user || !subscription) {
      return res.status(404).json({ success: false, message: "User or Subscription not found" });
    }

    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + subscription.durationInDays);

    const userSubscription = new UserSubscription({
      user: user._id,
      subscription: subscription._id,
      startDate,
      endDate,
      status: "active",
      paymentInfo: req.body.paymentInfo || {},
    });

    await userSubscription.save();

    // Optionally, update user's current subscription
    user.subscription = userSubscription._id;
    await user.save();

    res.status(201).json({
      success: true,
      message: "Subscription assigned to user successfully",
      data: userSubscription,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ---------------- GET USER'S ACTIVE SUBSCRIPTION ----------------
exports.getUserSubscription = async (req, res) => {
  try {
    const { userId } = req.params;

    const userSubscription = await UserSubscription.findOne({
      user: userId,
      status: "active",
    })
      .populate("subscription")
      .populate("user");

    if (!userSubscription) {
      return res.status(404).json({ success: false, message: "Active subscription not found" });
    }

    res.status(200).json({ success: true, data: userSubscription });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ---------------- GET ALL USER SUBSCRIPTIONS ----------------
exports.getAllUserSubscriptions = async (req, res) => {
  try {
    const subscriptions = await UserSubscription.find()
      .populate("user")
      .populate("subscription")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: subscriptions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ---------------- EXPIRE USER SUBSCRIPTION ----------------
exports.expireSubscription = async (req, res) => {
  try {
    const { id } = req.params;

    const userSubscription = await UserSubscription.findByIdAndUpdate(
      id,
      { status: "expired" },
      { new: true }
    );

    if (!userSubscription) {
      return res.status(404).json({ success: false, message: "Subscription not found" });
    }

    res.status(200).json({ success: true, message: "Subscription expired", data: userSubscription });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
