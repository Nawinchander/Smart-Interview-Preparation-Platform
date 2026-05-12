const {
  Queue
} = require('bullmq');

const reminderQueue =
new Queue('reminders');

module.exports =
reminderQueue;