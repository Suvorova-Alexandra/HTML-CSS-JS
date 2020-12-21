
function App(baseName,tableName){
    this.db=new DataBase(baseName);
    this.tbl=tableName;
    this.fields={
        addName:  document.querySelector('#name'),
        addPrType:document.querySelector('#type'),
        addEmail:document.querySelector('#email'),
        addStaffNumber:document.querySelector('#num'),
        addInfo:document.querySelector('#address')
    };
    this.btn={
    add:document.querySelector('#add'),
    clear:document.querySelector('#сlear'),
    del:document.querySelector('#del'),
    show:document.querySelector('#show'),
    addInform: document.querySelector('#addAddress'),
    tabl: document.querySelector('.table')
    };
    
    };
    
    App.prototype.create=function(){
    this.db.create(this.tbl);

    
this.btn.addInform.addEventListener( 'click',e=>{
    var list=document.getElementById('select');
    var selValue=list.options[list.selectedIndex].text;
        if(e.target.tagName=='INPUT'){
          
            this.db.update(this.tbl, "addInfo",this.fields.addInfo.value, selValue);
            this.db.load(this.tbl);
        }
    }
);

    this.btn.add.addEventListener('click',e=>{
    if(e.target.tagName=='INPUT'){
    if(this.fields.addName!=''&& this.fields.addPrType!='' && this.fields.addEmail!='' && this.fields.addStaffNumber!=''){
        this.db.add(this.tbl);
        this.db.addList(this.tbl);
        this.db.load(this.tbl);
        
    }
    for(const key in this.fields){
        this.fields[key].value='';
    }
    }});

    this.btn.del.addEventListener('click', e =>{
        var list=document.getElementById('select');
        var selValue=list.options[list.selectedIndex].text;
        alert(selValue);
       if(e.target.tagName == 'INPUT'){
            this.db.del(this.tbl,selValue);
            this.db.addList(this.tbl);
            this.db.load(this.tbl);
       }
    });
    this.btn.show.addEventListener('click', e =>{
        if(e.target.tagName == 'INPUT'){
        openNewWin('./table.html');
        }
    });
    if (this.btn.clear !== null) {
    this.btn.clear.addEventListener('click', e =>{
        alert("213");
        if(e.target.tagName == 'INPUT'){
            if(this.fields.addName!=''&& this.fields.addPrType!='' && this.fields.addEmail!='' && this.fields.addStaffNumber!=''){
                this.fields.addName.innerHTML='';
            }
        }
    });
}

    
    };
    
    function openNewWin(url) {
        myWin= open(url);
      }