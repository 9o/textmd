/**
 * ConversationController
 *
 * @description :: Server-side logic for managing conversations
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  fetch: function(req, res, next) {
    Conversation.find({
      id: req.param('id')
    }).exec(function(err, conversation) {
      res.json({
        conversation: conversation
      });
    });
  },
};