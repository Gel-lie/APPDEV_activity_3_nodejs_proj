const info = require('../models/UserInformation');
const okay ={
    index:(req, res) =>{
        res.render('index');
    
    },
    edit:(req, res) =>{
        const id = req.params.id;
        info.getInformation(id, (err, results) =>{
            if(err) throw err;
            res.render('edit', {info: results[0]});
        });
    },
    update:(req, res) =>{
        const id =  req.params.id;
        const data = req.body;
        info.update(id, data, (err)=>{
            if(err) throw err;
            res.redirect('/');
        });
    },
    delete:(req, res) =>{
        const id = req.params.id;
        info.delete(id, (err) =>{
            if(err) throw err;
            res.redirect('/');
        })
    },
    information:(req, res)=>{
        info.getAllInformation((err, results)=>{
            if (err) throw err;
            res.render('list', {information: results});
        })
    },
    save:(req, res) =>{
        const data = req.body;
        info.save(data,(err)=>{
            if(err) throw err;
            res.redirect('/');
        })

    }
};
module.exports = okay;