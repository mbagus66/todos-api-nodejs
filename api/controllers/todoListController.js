'use strict';
var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks'),
    Story = mongoose.model('Story');

// rest story
exports.list_all_story = function (req, res) {
    Story.find({}, function (err, story) {
        if (err)
            res.send(err);
        console.log(story);
        res.json(story);
    });
};

exports.create_a_story = function (req, res) {
    var new_story = new Story(req.body);
    new_story.save(function (err, story) {
        if (err)
            res.send(err);
        console.log(story);
        res.json(story);
    });
};

exports.read_a_story = function (req, res) {
    Story.findById(req.params.storyId, function (err, story) {
        if (err)
            res.send(err);
        console.log(story);
        res.json(story);
    });
};

exports.update_a_story = function (req, res) {
    Story.findOneAndUpdate({_id: req.params.storyId}, req.body, {new: true}, function (err, story) {
        if (err)
            res.send(err);
        console.log(story);
        res.json(story);
    });
};

exports.delete_a_story = function (req, res) {
    Story.remove({
        _id: req.params.storyId
    }, function (err, story) {
        if (err)
            res.send(err);
        res.json({message: 'Story successfully deleted'});
    });
};



// rest task
exports.list_all_tasks = function (req, res) {
    Task.find({}, function (err, task) {
        if (err)
            res.send(err);
        console.log(task);
        res.json(task);
    });
};

exports.create_a_task = function (req, res) {
    var new_task = new Task(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        console.log(task);
        res.json(task);
    });
};

exports.read_a_task = function (req, res) {
    Task.findById(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        console.log(task);
        res.json(task);
    });
};

exports.update_a_task = function (req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function (err, task) {
        if (err)
            res.send(err);
        console.log(task);
        res.json(task);
    });
};

exports.delete_a_task = function (req, res) {
    Task.remove({
        _id: req.params.taskId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({message: 'Task successfully deleted'});
    });
};