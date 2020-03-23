jQuery(document).ready(function() {

    var sentence = prompt("type your sentence");
    var newSentence;
    console.log(sentence);
  

    function symbols (sentence){
        var regex = /(?<!^).(?!$)/g;
        //var w = sentence;
        //var censored = sentence.replace(regex, function(x){return x.toUpperCase();});
        var censored = sentence.replace(regex, '');
        //censored.toUpperCase();
        return censored.toUpperCase();
    }
    alert(symbols(sentence));

    
    
    
    // function capitalize(sentence){
    //     // var newSentence = /^\w+/     
          
    //     var re = /(\b[a-z](?!\s))/g;
    //     newSentence = sentence.replace(re, function(x){return x.toUpperCase();});

    //     return newSentence;
        



        //var finalString = sentence.charAt(0) + ;
        
 
//     }

// console.log(capitalize(sentence))



});

  sentence;




