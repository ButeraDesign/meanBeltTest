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
var StarSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 2 },
 author: {type: String, required: true, minlength: 2 },
 discription: {type: String, required: true, minlength: 3 },
 notes: [{type: Schema.Types.ObjectId, ref: 'Note'}]
}, {timestamps: true });
// define Comment Schema
var NoteSchema = new mongoose.Schema({
 _star: {type: Schema.Types.ObjectId, ref: 'Star'},
 author: {type: String, required: true, minlength: 2 },
 text: {type: String, required: true, minlength: 3 }
}, {timestamps: true });
// set our models by passing them their respective Schemas
mongoose.model('Star', StarSchema);
mongoose.model('Note', NoteSchema);
// store our models in variables
var Star = mongoose.model('Star');
var Note = mongoose.model('Note');


//process route
app.post('/createItem', function(req, res){
  console.log("POST DATA", req.body);
  //item ={productName:'',sellerName: '',startingBid:'',discription:'',endDate:''};

  var theItem = new Star({author: req.body.author, name: req.body.starName, discription: req.body.discription});
  console.log("NEW Star");
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

    console.log("Server get auction id:",req.params.id);

    Star.findOne({_id: req.params.id} , function(err, theItem){
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



  app.get('/oneItem/:id', function(req, res){

   Star.find({_id: req.params.id})
   .populate('notes')
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


 app.get('/allItems', function(req, res){
  Star.find({})
  .populate('notes')
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

  // route for creating one comment with the parent post id
  app.post('/addNote/:id', function (req, res){
    console.log('Add Note');
    Star.findOne({_id: req.params.id}, function(err, star){
           console.log(req.params.id);
           console.log(req.body.author);
           console.log(req.body.discription);
           var note = new Note({ author: req.body.author, text:req.body.discription});
           note._star = star._id;
           console.log(note);
           star.notes.push(note);
           note.save(function(err){
                   star.save(function(err, note){
                         if(err) {
                           console.log('Error');
                           console.log(err);
                           console.log(note.error);
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
