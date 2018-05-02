'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/todoListController');

    // story Routes
    app.route('/story')
        .get(todoList.list_all_story)
        .post(todoList.create_a_story);


    app.route('/story/:storyId')
        .get(todoList.read_a_story)
        .put(todoList.update_a_story)
        .delete(todoList.delete_a_story);

    // task Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);


    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
};
