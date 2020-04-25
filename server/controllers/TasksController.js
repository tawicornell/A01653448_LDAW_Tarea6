const Task = require("../models/Task");

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.todo;
  Task.create(task).then( result => {
    res.redirect("http://localhost:3000/tasks")
  })



  // Task.create(task).then(id => {
  //   if (req.xhr || req.headers.accept.indexOf("json") >= 0) {
  //     Task.find(id).then(task => {
  //       res.json(task);
  //     });
  //   } else {
  //     res.send("Success");
  //   }
  // });
};

exports.tasks = (req, res) => {
  let tasks = Task.all().then((tasks) => {
    tasks.sort((a, b) => {
      return b.id - a.id;
    });
    res.json({tasks: tasks});
  });
};



exports.done = (req, res) => {
  Task.find(req.params.id)
    .then(task => {
      if (task) {
        return Task.done(req.params.id);
      }
    })
    .then(() => {
      if (req.xhr || req.headers.accept.indexOf("json") >= 0) {
        Task.find(req.params.id).then(task => {
          res.json(task);
        });
      } else {
        res.redirect("http://localhost:3000/tasks")
      }
    });
};

exports.delete = (req, res) => {
  Task.find(req.params.id)
    .then(task => {
      if (task) {
        return Task.delete(req.params.id);
      }
    })
    .then(() => {
      if (req.xhr || req.headers.accept.indexOf("json") >= 0) {
        res.json({ id: req.params.id });
      } else {
        res.redirect("http://localhost:3000/tasks")
      }
    });
};
