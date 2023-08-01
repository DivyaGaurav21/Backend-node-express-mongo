// =========================BASIC NODE USING node inbuilt method===============================//

// console.log(__dirname);
// ------------------------------>
// const fs = require('fs');
// fs.readFile(`${__dirname}/dog.txt`,'utf-8' ,  (err ,data) => {
//    if(err) console.log(err)
//     console.log(data)
// })
// ------------------------------>
// const fs = require('fs');
// fs.readFile(`${__dirname}/dog.txt` , (err , data) => {
//     if(err){
//         // console.log('ERROR IN READING FILE' , err); // err give-error object
//         console.log('ERROR IN READING FILE');
//     }
//     console.log(`Breeed : ${data}`)
// })
// ------------------------------>





// ====================================CALLBACK HELL===========================================//
// const fs = require('fs');
// const superagent = require('superagent');
// fs.readFile(`${__dirname}/dog.txt` , (err , data) => {
//     if(err)  console.log('ERROR IN READING FILE');
//     console.log(`Breeed : ${data}`)
//     superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err ,res) => {
//         if(err) console.log(`error in fetching data:${err.message}`)
//         console.log(res.body.message);
//         fs.writeFile('dog-new.txt' , res.body.message , (err) => {
//             if(err) console.log(`cant able to write file : ${err.message}`)
//             console.log('random file saved in parent directory')
//         })
//     })
// })

// console.log('blocking or non blocking') // ?: nonblocking

// =================================CALLBACK HANDLED BY PROMISE====================================//

// const fs = require('fs');
// const superagent = require('superagent');

// // Function to read the file using a Promise
// function readFilePromise(file) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('ERROR IN READING FILE');
//       resolve(data);
//     });
//   });
// }
// // Function to make the API request using superagent with a Promise
// function fetchDogImagePromise(breed) {
//   return new Promise((resolve, reject) => {
//     superagent.get(`https://dog.ceo/api/breed/${breed}/images/random`)
//       .end((err, res) => {
//         if (err) reject(`error in fetching data:${err.message}`);
//         resolve(res.body.message);
//       });
//   });
// }
// // Using the Promise-based functions
// readFilePromise(`${__dirname}/dog.txt`)
//   .then(data => {
//     console.log(`Breed: ${data}`);
//     return fetchDogImagePromise(data);
//   })
//   .then(imageUrl => {
//     console.log(imageUrl);
//     return writeFilePromise('dog-new.txt', imageUrl);
//   })
//   .then(() => {
//     console.log('Random file saved in the parent directory');
//   })
//   .catch(err => {
//     console.log(err);
//   });

// // Function to write the file using a Promise
// function writeFilePromise(file, content) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, content, err => {
//       if (err) reject(`Can't able to write file: ${err.message}`);
//       resolve();
//     });
//   });
// }
// console.log("blocking or nonblocking") :? nonblocking

// ================================== NOW BTY USING ASYNC/AWAIT =======================================//

// const fs = require('fs');
// const superagent = require('superagent');

// // Function to read the file using async/await
// function readFileAsync(file) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('ERROR IN READING FILE');
//       resolve(data);
//     });
//   });
// }
// // Function to make the API request using superagent with async/await
// function fetchDogImageAsync(breed) {
//   return new Promise((resolve, reject) => {
//     superagent.get(`https://dog.ceo/api/breed/${breed}/images/random`)
//       .end((err, res) => {
//         if (err) reject(`error in fetching data:${err.message}`);
//         resolve(res.body.message);
//       });
//   });
// }
// // Function to write the file using async/await
// function writeFileAsync(file, content) {
//     return new Promise((resolve, reject) => {
//       fs.writeFile(file, content, err => {
//         if (err) reject(`Can't able to write file: ${err.message}`);
//         resolve();
//       });
//     });
//   }


// // Using async/await
// async function fetchDogImage() {
//   try {
//     const data = await readFileAsync(`${__dirname}/dog.txt`);
//     console.log(`Breed: ${data}`);

//     const imageUrl = await fetchDogImageAsync(data);
//     console.log(imageUrl);

//     await writeFileAsync('dog-new.txt', imageUrl);
//     console.log('Random file saved in the parent directory');
//   } catch (err) {
//     console.log(err);
//   }
// }
// console.log("synchronously")
// // Call the main function
// fetchDogImage();
// console.log("blocking or nonblocking")// :? nonblocking
// // NOTE=> ASYNC FUNCTION RETURNS PROMISE 

// ===========================  EVENTLOOP (chapter 2) =============================//

// const fs = require("fs");
// process.env.UV_THREADPOOL_SIZE = 4;

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("dog-new.txt", () => { 
//   console.log("______________"); 
//   setTimeout(() => console.log("Timer 2 finished"), 0);
//   setTimeout(() => console.log("Timer 3 finished"), 3000);
//   setImmediate(() => console.log("Immediate 2 finished"));

// })
// console.log("Hello from the top-level code");
//-----------------------------------------------------------

// console.log(arguments);

// =====================================================================//












//==============================BASIC EXPRESS UNDERSTANDING============================//
// ===============================EXPRESS LECTURE - 1==================================//
// const fs = require('fs');
// const express = require('express');
// const port = 8000;
// const app = express();

// app.get('/' , (req , res) => {
//     res.status(200).send("divya")
// })
// --------------------//
// app.get('/' , (req , res) => {
//     res.status(200).json({name :  "divya" , age: 25})
// })
// app.post('/' , (req , res) => {
//     res.status(200).send('<h1>you can post on this end point !!</h1>')
// })
// ---------------------//
// console.log(__dirname)
// const tours = fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json` , 'utf-8')
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
// console.log(tours)

// JSEND DATA FORMAT OF RESPONSE 
// app.get('/api/vi/tours' , (req , res) => {
//     res.status(200).json({
//         status : 'success',
//         results:tours.length,
//         data : {
//             tours
//         }
//     })
// })



// app.listen(port , (err) => {
//     if(err){
//         console.log(`error in running server ${err}`);
//     }else{
//         console.log(`Yeah ! App is running on port ${port} `)
//     }
// })

// ===============================EXPRESS LECTURE - 1==================================//
// const fs = require('fs');
// const express = require('express');
// const port = 8000;
// const app = express();

// // POST REQUEST by express(express does not put body data in request so make express middleware for availability of dara)
// //middleware is just a function to modify incoming request data
// //this express middleware put data in req.body 
// //if we comment this and do post request then we get udenfine in req body
// app.use(express.json());

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
// // console.log(tours)

// // JSEND DATA FORMAT OF RESPONSE 
// app.get('/api/v1/tours', (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         results: tours.length,
//         data: {
//             tours
//         }
//     })
// })
// // POST REQUEST by express(express does not put body data in request so make custom middleware for availability of dara)
// //post request means client sending data to server
// app.post('/api/v1/tours', (req, res) => {
//     //    console.log(req.body);
//     //    res.send("Post Done")
//     const newTourData = req.body;
//     tours.push(newTourData);
//     fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
//         res.status(201).json({
//             status: 'success',
//             data: {
//                 tour: newTourData
//             }
//         })
//     })
// })

// // request params 
// app.get('/api/v1/tours/:id', (req, res) => {
//     //    console.log(req.params)
//     const id = req.params.id * 1;
//     const tour = tours.find((el) => el.id === id);

//     // if(id > tours.length){
//     if(!tour){
//         return res.status(404).json({
//             status : 'fail',
//             message:'invalid Id'
//         })
//     }

//     res.status(200).json({
//         status: 'success',
//         data: {
//             tour
//         }
//     })
// })


// //PUT request
// // The PUT request is used to update an entire resource or replace it with a new representation.
// // When you make a PUT request, you send the entire updated representation of the resource in the request body.
// //  PATCH request
// // The PATCH request is used to apply partial modifications to a resource.
// // When you make a PATCH request, you send only the specific fields that you want 
// // to update in the request body, leaving other fields unchanged.

// app.patch('/api/v1/tours/:id', (req, res) => {
//     //    console.log(req.params)
//     if(req.params.id > tours.length){
//         return res.status(404).json({
//             status : 'fail',
//             message:'invalid Id'
//         })
//     }

//     res.status(200).json({
//         status: 'success',
//         data: {
//             tour : '<update in the request body, leaving other fields unchanged>'
//         }
//     })
// })

// // for DELETE request 
// //status code for no content is 204
// app.delete('/api/v1/tours/:id', (req, res) => {
//     //    console.log(req.params)
//     if(req.params.id > tours.length){
//         return res.status(404).json({
//             status : 'fail',
//             message:'invalid Id'
//         })
//     }

//     res.status(204).json({
//         status: 'success',
//         data: null
//     })
// })


// app.listen(port, (err) => {
//     if (err) {
//         console.log(`error in running server ${err}`);
//     } else {
//         console.log(`Yeah ! App is running on port ${port} `)
//     }
// })


// =======================================EXPRESS LECTURE 2=========================================//

// const fs = require('fs');
// const express = require('express');
// const port = 8000;
// const app = express();

// app.use(express.json());

// //creating our own middleware
// app.use((req, res, next) => {
//     console.log('hello from our middle ware');
//     next();
// })

// //custom middleware to see request time 
// app.use((req, res, next) => {
//     req.reqTime = new Date().toISOString();
//     next();
// })

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

// //--------all controller function separately---------------------//
// const getAllTours = (req, res) => {
//     console.log(req.reqTime);
//     res.status(200).json({
//         status: 'success',
//         requestedAt :req.reqTime,
//         results: tours.length,
//         data: {
//             tours
//         }
//     })
// }
// const createTour = (req, res) => {
//     const newTourData = req.body;
//     tours.push(newTourData);
//     fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
//         res.status(201).json({
//             status: 'success',
//             data: {
//                 tour: newTourData
//             }
//         })
//     })
// }
// const getTour = (req, res) => {
//     const id = req.params.id * 1;
//     const tour = tours.find((el) => el.id === id);
//     if (!tour) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'invalid Id'
//         })
//     }

//     res.status(200).json({
//         status: 'success',
//         data: {
//             tour
//         }
//     })
// }
// const updateTour = (req, res) => {
//     if (req.params.id > tours.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'invalid Id'
//         })
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             tour: '<update in the request body, leaving other fields unchanged>'
//         }
//     })
// }
// const deleteTour = (req, res) => {
//     if (req.params.id > tours.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'invalid Id'
//         })
//     }
//     res.status(204).json({
//         status: 'success',
//         data: null
//     })
// }

// // app.get('/api/v1/tours', getAllTours);
// // app.post('/api/v1/tours', createTour);
// // app.get('/api/v1/tours/:id', getTour);
// // app.patch('/api/v1/tours/:id', updateTour);
// // app.delete('/api/v1/tours/:id', deleteTour);

// app.route('/api/v1/tours').get(getAllTours).post(createTour);

// // app.use((req , res , next) => {
// //     console.log('hello from our middle ware');
// //     next();
// //     })

// app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour);


// app.listen(port, (err) => {
//     if (err) {
//         console.log(`error in running server ${err}`);
//     } else {
//         console.log(`Yeah ! App is running on port ${port} `)
//     }
// })


// ==================== ROUTER MOUNTING =====================================//


const fs = require('fs');
const express = require('express');
const port = 8000;
const app = express();

app.use(express.json());

//creating our own middleware
app.use((req, res, next) => {
    console.log('hello from our middle ware');
    next();
})

//custom middleware to see request time 
app.use((req, res, next) => {
    req.reqTime = new Date().toISOString();
    next();
})
// --------------------------------------------------------------//
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
//--------all controller function separately---------------------//
const getAllTours = (req, res) => {
    console.log(req.reqTime);
    res.status(200).json({
        status: 'success',
        requestedAt: req.reqTime,
        results: tours.length,
        data: {
            tours
        }
    })
}
const createTour = (req, res) => {
    const newTourData = req.body;
    tours.push(newTourData);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTourData
            }
        })
    })
}
const getTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find((el) => el.id === id);
    if (!tour) {
        return res.status(404).json({
            status: 'fail',
            message: 'invalid Id'
        })
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    })
}
const updateTour = (req, res) => {
    if (req.params.id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'invalid Id'
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<update in the request body, leaving other fields unchanged>'
        }
    })
}

const deleteTour = (req, res) => {
    if (req.params.id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'invalid Id'
        })
    }
     res.status(204).json({
        status: 'success',
        data: null
    })
}

// -------------------------------------------------------------------------------------//

const getAllUsers = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "this route is not yet define !"
    })
}
const createUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "this route is not yet define !"
    })
}
const getUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "this route is not yet define !"
    })
}
const updateUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "this route is not yet define !"
    })
}
const deleteUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "this route is not yet define !"
    })
}



//tours route
app.route('/api/v1/tours').get(getAllTours).post(createTour);
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour);

//users routes
app.route('/api/v1/users').get(getAllUsers).post(createUser);
app.route('/api/v1/users/:id').get(getUser).patch(updateUser).delete(deleteUser);

app.listen(port, (err) => {
    if (err) {
        console.log(`error in running server ${err}`);
    } else {
        console.log(`Yeah ! App is running on port ${port} `)
    }
})

// ===========now practicing mvc by separate folder of router controller model and view================//