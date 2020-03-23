jQuery(document).ready(function() {

    var sentence = prompt("type your sentence");
    var newSentence;
    console.log(sentence);
  

    function capitalize(sentence){
        // var newSentence = /^\w+/     
          
        var re = /(\b[a-z](?!\s))/g;
        newSentence = sentence.replace(re, function(x){return x.toUpperCase();});

        return newSentence;
        



        //var finalString = sentence.charAt(0) + ;
        

    }

console.log(capitalize(sentence))



});

  sentence;




