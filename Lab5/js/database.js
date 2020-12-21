function DataBase(name){
    this.dbName=name;
    this.db = openDatabase(this.dbName, '1.0', 'super-base', 100*1024*1024);
    }
    
    
    DataBase.prototype.create=function(name){
        var strFields='';
        var fields={
        fio:'TEXT',
        email:'TEXT',
        productionType:'TEXT',
        staffNumber:'TEXT',
        addInfo: 'TEXT',
        }
        for(const key in fields){
            strFields+=", "+key+' '+fields[key];
        }
        this.db.transaction(function(tx){
        tx.executeSql('create table if not exists '+name+' (id integer primary key autoincrement '+strFields+')');
        });
        
        };
        
        DataBase.prototype.add=function(name){
    
        var q=new Array();
        var vars=new Array();
        var vals=new Array();
        
        var values={
        fio: document.getElementById('name').value,
        productionType: document.getElementById('type').value,
        email: document.getElementById('email').value,
        staffNumber: document.getElementById('num').value,
        addInfo: document.getElementById('address').value
        }
        for(var i=0;i<Object.keys(values).length;i++){
            q.push('?');
        }
        for(const key in values){
            vars.push(key);
        }
        for(const key in values){
            vals.push(values[key]);
        }
        this.db.transaction(function(tx){
        tx.executeSql('insert into '+name+'('+vars.join(", ")+') values('+q.join(", ")+')',vals);
       
        });
        };
        
        
        DataBase.prototype.load=function(name){
          var sql='select * from '+ name;
         
          document.querySelector('.table').innerHTML='';
          this.db.transaction(function(tx){
              tx.executeSql(sql, [], function(tx, result){
                  var n = result.rows.length;
                  for(var i = 0; i < n; i++){
                      var work = result.rows.item(i);
                      var tbl_block = document.querySelector('.table');
                      var cell_name = document.createElement('div');
                      cell_name.setAttribute('class','cell-tbaable');
                      cell_name.setAttribute('data-id', work.id);
                      var cell_surname = cell_name.cloneNode(true);
                      var cell_mail = cell_name.cloneNode(true);
                      var cell_phone =cell_name.cloneNode(true);
                      var cell_id=cell_name.cloneNode(true);
                      var cell_info = cell_name.cloneNode(true);
                      cell_name.setAttribute('data-field','name');
                      cell_surname.setAttribute('data-field','surname');
                       cell_mail.setAttribute('data-field','email');
                      cell_phone.setAttribute('data-field','phone');
                      cell_id.setAttribute('data-field','id');   
                      cell_info.setAttribute('data-field','info'); 
                      cell_id.innerHTML=work.id;
                      cell_name.innerHTML = work.fio;
                      cell_surname.innerHTML = work.email;
                      cell_mail.innerHTML = work.productionType;
                      cell_phone.innerHTML = work.staffNumber;
                      cell_info.innerHTML = work.addInfo;
                      tbl_block.appendChild(cell_id);
                      tbl_block.appendChild(cell_name);
                      tbl_block.appendChild(cell_surname);
                      tbl_block.appendChild(cell_mail);
                      tbl_block.appendChild(cell_phone);
                      tbl_block.appendChild(cell_info);
                    
                  }
              });
          });
        };
        
        DataBase.prototype.addList=function(name){
            var list=document.getElementById('select');
            
           
             var sql='select * from '+ name;
             while(list.firstChild)
          
    {
    list.removeChild(list.firstChild);
    }
             this.db.transaction(function(tx){
                 tx.executeSql(sql, [], function(tx, result){
                     var n = result.rows.length;
                     for(var i = 0; i < n; i++){
                         var work=result.rows.item(i);
                        var oOption = document.createElement("option");
                        oOption.appendChild(document.createTextNode(work.id));
                         oOption.setAttribute("value", work.id );
                         list.insertBefore(oOption,list[list.length]);
                     }
                 });
             });
     
        };
    
        DataBase.prototype.update=function(name,field,value,id){
        var sql='UPDATE '+name+' SET "'+field+'" = "'+value+ '" WHERE id = '+id;   
        alert(sql);
    
        this.db.transaction(function(tx){
            tx.executeSql(sql);
        });
       
        };

        DataBase.prototype.del=function(name,id){
            alert(id);
            var sql='DELETE FROM '+name+' WHERE id = '+ id;

            this.db.transaction((tx)=>{
                tx.executeSql(sql);
                alert(sql);
            });
        };
        
        DataBase.prototype.clear=function(name){
            var sql='DROP TABLE '+name;
            this.db.transaction(function(tx){
            
                tx.executeSql(sql);
            });
            document.querySelector('.table').innerHTML='';
            };
        