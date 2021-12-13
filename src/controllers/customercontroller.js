const controller={};

controller.list=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM DOCENTE',(err,docentes)=>{
            if(err){
                res.json(err);
            }
            res.render('docentes',{
                data:docentes
            });
        });
    });
};

controller.save= (req,res)=>{
    const data =req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO DOCENTE SET ?',[data],(err,rows)=>{
            res.redirect('/');
        })
    })
};

controller.delete= (req,res)=>{
    req.params;
};

/*controller.save=(req,res)=>{
    res.send('hola mundo');
};


controller.delete=(req,res)=>{
    res.send('hola mundo');
};

controller.edit=(req,res)=>{
    res.send('hola mundo');
};
*/
module.exports=controller;