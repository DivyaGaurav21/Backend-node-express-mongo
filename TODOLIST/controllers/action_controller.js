//import database model
const Task = require('../models/todolist')


module.exports.create = async (req, res) => {
    // console.log(req.body);
    try { 
      const todo =  await Task.create(req.body);
        // Redirect the user back to the same page after successful creation
        return res.status(200).redirect('back');
    } catch (err) {
        // If an error occurs during task creation, render the error view with the error message
        console.error('Error creating task:', err);
        return res.status(500).render('error', { errorMessage: 'Failed to create task.' });
    }
};

module.exports.delete = async (req, res) => {
    // console.log(req.body);
    // If user haven't selected any task to delete
    if (!req.body.id) {
        console.log("User hasn't selected any task to delete");
        return res.redirect('back');
    }

    try {
        // If only one task is to be deleted
        if (typeof req.body.id === 'string') {
            await Task.findByIdAndDelete(req.body.id);
        } else {
            // If multiple tasks are to be deleted
            const taskIds = req.body.id;
            for (const id of taskIds) {
                await Task.findByIdAndDelete(id);
            }
        }
        return res.redirect('back');
    } catch (err) {
        console.error("Error deleting tasks:", err);
        return res.status(500).render('error', { errorMessage: 'Failed to delete task(s).' });
    }
};
