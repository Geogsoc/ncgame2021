const {
  deleteComment,
  changeCommentVote,
} = require("../models/comments.model");

exports.removeAComment = (req, res, next) => {
  const { comment_id } = req.params;
  deleteComment(comment_id)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
};

exports.editCommentVote = (req, res, next) => {
  const { comment_id } = req.params;
  const { inc_votes } = req.body;
  changeCommentVote(comment_id, inc_votes)
    .then((comment) => {
      res.status(200).send({ comment });
    })
    .catch(next);
};
