const {
  Queue
} = require('bullmq');

const reminderQueue =
new Queue('reminders');

module.exports =
reminderQueue;


/// add reminder job

await reminderQueue.add(
  'contest-reminder',
  {
    user: 'test@gmail.com'
  }
);

