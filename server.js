let express = require("express");
let app = express();
const path = require("path");
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Define the Static Folder:

app.use(express.static(__dirname + '/public/dist'));
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stars');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;
// define Post Schema
var ThoughtSchema = new mongoose.Schema({
 author: {type: String, required: true, minlength: 2 },
 thought: {type: String, required: true, minlength: 10 },
 discription: {type: String, minlength: 3 },
 answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true });
// define Comment Schema
var AnswerSchema = new mongoose.Schema({
 _thought: {type: Schema.Types.ObjectId, ref: 'Thought'},
 author: {type: String, required: true, minlength: 2 },
 answer: {type: String, required: true, minlength: 3 },
 details: {type: String, minlength: 3 },
 likes: {type: Number}
}, {timestamps: true });
// set our models by passing them their respective Schemas
mongoose.model('Thought', ThoughtSchema);
mongoose.model('Answer', AnswerSchema);
// store our models in variables
var Thought = mongoose.model('Thought');
var Answer = mongoose.model('Answer');



//process route
app.post('/createItem', function(req, res){
  console.log("POST DATA", req.body);
  //item ={productName:'',sellerName: '',startingBid:'',discription:'',endDate:''};

  var theItem = new Thought({author: req.body.author, thought: req.body.thought, discription: req.body.discription});
  console.log("NEW Thought");
  theItem.save(function(err){
    if(err){
      console.log('error');
      console.log(theItem.errors);
      res.json('errors');
    }
    else{
      console.log('success');
      //res.redirect('/showall');
      res.json('ok');
    }
  })
});


app.post('/editItem/:id', function(req, res){
   console.log("EDIT ID");
   console.log(req.params.id);

   Star.update({_id: req.params.id}, {name:req.body.name, discription:req.body.name}, function(err){
     if(err){
       // console.log('error')
      //  console.log(friend.errors);
       console.log('errors')
     }
     else{
       console.log('success')
      //  console.log(friend);
       res.json('ok');
     };

   });
 });


 app.get('/getItem/:id', function(req, res){

    console.log("Server get thought id:",req.params.id);

    Thought.findOne({_id: req.params.id} , function(err, theItem){
      if(err){
        console.log('error')
     }
     else{
       console.log('success')
       console.log(theItem);
       res.json(theItem)
     }

   });//findOne ends

  });//get ends


  //one item with populate
  app.get('/oneItem/:id', function(req, res){

   Thought.find({_id: req.params.id})
   .populate('answers')
   .exec(function(err, items) {
     if(err){
       // console.log('error')
       console.log(items.errors);
       res.json('you have errors!')
     }
     else{
       console.log('success');
       console.log(items);
       res.json(items);
     }
   });

  });


//all items with populate
 app.get('/allItems', function(req, res){
  Thought.find({})
  .populate('answers')
  .exec(function(err, items) {
    if(err){
      // console.log('error')
      console.log(items.errors);
      res.json('you have errors!')
    }
    else{
      console.log('success');
      console.log(items);
      res.json(items);
    }
  });

});

  // route for creating one note with the parent post id
  app.post('/addAnswer/:id', function (req, res){
    console.log('Add Answer');
    Thought.findOne({_id: req.params.id}, function(err, thought){
           console.log(req.params.id);
           console.log(req.body.author);
           console.log(req.body.answer);
           console.log(req.body.details);
           var answer = new Answer({ author: req.body.author, answer:req.body.answer, details:req.body.details, likes:0});
           answer._thought = thought._id;
           console.log(answer);
           thought.answers.push(answer);
           console.log('did push');
           answer.save(function(err){
                   thought.save(function(err, answer){
                         if(err) {
                           console.log('Error');
                           console.log(err);
                           console.log(answer.error);
                           //res.render('index', {title: 'you have errors!', errorsComment: note.errors})
                          }
                         else {
                           console.log('Sucess Note');
                           res.json('ok');
                          }
                   });
           });
     });
   });

app.get('*', (req, res) => {
    console.log("unknown route");
    res.sendFile(path.resolve('public/dist/index.html'));
})

app.listen(8000);
