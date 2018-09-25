
module.exports = {

    'sayMyNameIntent': (conv, parametr) => {

      console.log('that is parametr' + '\n'+JSON.stringify(parametr));
      var myName = parametr["given-name"];
      console.log(myName);


        conv.ask("Hello " + myName +". What task would you like to add?" );

      }
};



