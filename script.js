jQuery(document).ready(function() {

    var sentence = prompt("type your sentence");
    //var newSentence1;
    console.log(sentence);
    var newSentence1;
    var reverseSent;
    

  

        newSentence1 = function symbols (sentence){
        //var regex = /(?<!^).(?!$)/g; //it works but looks weird
        //var censored = sentence.replace(regex, ''); //it works but looks weird
        
        var newSentence = sentence.charAt(0) + sentence.charAt(sentence.length - 1)
        //censored.toUpperCase();
        return newSentence.toUpperCase();
        //return newSentence;
    }
    
    //newSentence1 = sentence;

    alert(newSentence1(sentence));
    console.log(newSentence1);
    

        function reverse (sentence) {
        var finalString1 = sentence.charAt(sentence.length - 1) + sentence.charAt(0);
        //return finalString1.toUpperCase();
        return finalString1.toUpperCase();
     }

     alert(reverse(sentence)); 

     function mainFunction(sentence)    {
         symbols(sentence);
         reverse(sentence);
         return(sentence); 

     }
     alert(mainFunction(sentence));
    
    
    
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




