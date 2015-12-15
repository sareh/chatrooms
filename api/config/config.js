module.exports = {
  'secret': 'supersecretchatroom',
  'database': process.env.MONGOLAB_URI || 'mongodb://localhost:27017/chatrooms'
};