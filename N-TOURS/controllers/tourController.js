
const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const allTour = await Tour.find();
    res.status(200).json({
      status: 'success',
      data: {
        allTour
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error
    });
  }
};


exports.getTour = async (req, res) => {
  try {
    const singleTour = await Tour.findById(req.params.id);
    //both are similar
    // const singleTour = await Tour.findOne({ _id: req.params.id })
    res.status(200).json({
      status: 'success',
      data: {
        singleTour
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error
    });
  }



};


exports.createTour = async (req, res) => {
  console.log(req.body);

  //we can take 1st approach
  // const newTour = new Tour({
  //   ---------------
  // })
  // newTour.save().(doc=>console.log(doc))

  //but direct you can Tour.create(req.body)
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newTour
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }

};


exports.updateTour = async (req, res) => {
  console.log(req.body)
  try {
    const updatedtour = await Tour.findByIdAndUpdate(req.params.id, req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: 'success',
      data: {
        updatedtour
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
};

exports.deleteTour = async (req, res) => {
  console.log(req.params.id);
  try {
    // const deletedItem = await Tour.findByIdAndDelete(req.params.id);
    // // if deletedItem may be deleted document or null 
    // if (!deletedItem) {
    //   res.status(204).json({
    //     status: 'successfully deleted',
    //     data: null
    //   });
    // }
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail in delete item',
      message: error
    });
  }
};
