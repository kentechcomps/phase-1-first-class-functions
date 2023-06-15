function receivesAFunction(spy){
   spy();  
}
 function returnsANamedFunction(){
    var fn = function (){
        console.log("function");
    }
    return fn
 }
 function returnsAnAnonymousFunction(){
    var fn = function(){
        console.log("function");
    }
    return fn 
 } 
