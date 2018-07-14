const express = require("express");
const router = express.Router();
//Check why mongoose is grey
const mongoose = require("mongoose");
const passport = require("passport");

//Group model
const Group = require("../../models/Group");

//Post model
const Post = require("../../models/Post");

//Profile model
const Profile = require("../../models/Profile");

//Validation
const validateGroupInput = require("../../validation/post");
//check above to ^ make sure validateGroupInput is correct.

// @route   GET api/groups/test
// @desc    Tests posts route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Groups Works" }));

// @route GET api/groups
// @desc Get groups by id
// @access Public
router.get("/", (req, res) => {
  Group.find()
    .then(groups => res.json(groups))
    .catch(err => res.status(404).json({ nogroupfound: "No groups found" }));
});

// @route GET api/groups/create
// @desc Post new group
// @access Private
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newGroup = new Group({
      groupName: req.body.groupName,
      destination: req.body.destination,
      from: req.body.from,
      to: req.body.to
    });

    newGroup.save().then(group => res.json(group));
  }
);

// @route GET api/groups/:id
// @desc  Get group by id
// @access Public
router.get("/:id", (req, res) => {
  Group.findById(req.params.id)
    .then(group => res.json(group))
    .catch(err =>
      res.status(404).json({ nogroupfound: "No group found with that ID" })
    );
});

//@route DELETE api/groups/:id
//@desc Delete group
//@access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Group.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          //Check for post owner
          if (post.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          //Delete
          post.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    });
  }
);

//@route DELETE api/posts/:id
//@desc Delete post
//@access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Group.findOne({ admin: req.user.id }).then(profile => {
      Group.findById(req.params.id)
        .then(post => {
          //Check for post owner
          if (admin.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ unauthorized: "User not authorized" });
          }

          //Delete
          group.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ groupnotfound: "No group found" })
        );
    });
  }
);

//@route POST api/groups/comment/:id
//@desc Add comment to post
//@access Private

router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateGroupInput(req.body);

    //Check Validation
    if (!isValid) {
      //If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    Group.findById(req.params.id)
      .then(group => {
        const newComment = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id
        };

        //Add to comments array
        group.comments.unshift(newComment);

        //Save
        group.save().then(group => res.json(group));
      })
      .catch(err => res.status(404).json({ groupnotfound: "No group found" }));
  }
);

//@route DELETE api/groups/comment/:id/:comment_id
//@desc Remove comment from post
//@access Private

router.delete(
  "/comment/:id",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    Group.findById(req.params.id)
      .then(group => {
        //Check to see if comment exists
        if (
          group.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ nocommentexists: "Comment does not exist" });
        }

        //Get remove index
        const removeIndex = post.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);

        //Splice comment out of array
        group.comments.splice(removeIndex, 1);

        group.save().then(post => res.json(group));
      })
      .catch(err =>
        res.status(404).json({
          groupnotfound: "No group found"
        })
      );
  }
);

module.exports = router;
