window.addEventListener('load',()=>{
    let app=new App('factories12','factory12');
    app.db.load(app.tbl);
    app.db.addList(app.tbl);
    app.create();
    });
        
  