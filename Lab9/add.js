define([], function() {  
   return {    
        add: function(err, client,message){
      
            const db = client.db("productiondb");
         const collection = db.collection("products");
        console.log(message);
         collection.insertOne(message, function(err, result){
              
            if(err){ 
                 return console.log(err);
         }
             console.log(result.ops);
            client.close();
        });
        }
    };
});