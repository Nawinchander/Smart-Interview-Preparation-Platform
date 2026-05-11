const socket =
io('http://localhost:5000');

export default socket;


/// backend 

setInterval(() => {

  io.emit('contest-time', {
    time: Date.now()
  });

}, 1000);

/// frontend

socket.on(
  'contest-time',
  (data) => {
    console.log(data);
  }
);

