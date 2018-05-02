'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
    title: {
        type: String,
        required: 'Input your task'
    },
    point: {
    	type: Number,
    	default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'completed']
        }],
        default: ['pending']
    }
});

var StorySchema = new Schema({
	title: {
		type: String,
		required: 'Input your story'
	},
	priority: {
		type: String,
		enum: ['High', 'Medium', 'Low'],
		default: 'Low'
	},
	label: [String],
	start_date: {
		type: Date,
		default: Date.now
	},
	end_date: {
		type: Date,
		required: 'Input your target date'
	},
	tasks: [{
	    name: {
	        type: String,
	        required: 'Input your task'
	    },
	    point: {
	    	type: Number,
	    	default: 0
	    },
	    status: {
	        type: [{
	            type: String,
	            enum: ['pending', 'completed']
	        }],
	        default: ['pending']
	    }
	}]
});

module.exports = mongoose.model('Story', StorySchema);
module.exports = mongoose.model('Tasks', TaskSchema);