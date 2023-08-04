const Task = require('../models/todolist')

//you can see on color on ui i store color in Array
let colors = {
   personal : 'darkgreen',
   work : 'darkmagenta',
   school : 'darkorange',
   cleaning : 'darkblue',
   other : 'darkcyan',
   study : 'grey' ,
   'n/a' : 'red',
} 

//function for redirect to main home page
module.exports.home=async (req , res) => {
     try{
      const TotalList = await Task.find();
      return res.status(200).render('home' , {
         title: 'home' ,
         todoList : TotalList,
         color_list: colors
      })
     }catch(err){
      console.error('Error creating task:', err);
        return res.status(500).render('error', { errorMessage: 'Fetching Task' });
     }

}
