var request = require("request");

var fs = require("fs");


module.exports = {

  'saveToDoTask': (conv, parametr) => {

      var myTask = parametr["any"];
      console.log(myTask)



      fs.appendFile('tasks', myTask+"\r\n", function (err) {
          if (err) throw err;
          console.log('Saved!');
      });







      conv.ask("I have saved your task as "+myTask+"");

  }

};



