var watch = require('../models/watches');
// List of all watchs
exports.watch_list = function(req, res) {
    res.send('NOT IMPLEMENTED: watch list');
};
// for a specific watch.
exports.watch_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await watch.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle watch create on POST.
exports.watch_create_post = async function(req, res) {
    console.log(req.body)
    let document = new watch();
    document.watch_Name = req.body.watch_Name;
    document.country = req.body.country;
    document.price = req.body.price;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};

// Handle watch delete form on DELETE.
exports.watch_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: watch delete DELETE ' + req.params.id);
};

// Handle watch update form on PUT.

exports.watch_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: watch update PUT' + req.params.id);
};

exports.watch_list = async function(req, res) {
    try{
        thewatchess = await watch.find();
        res.send(thewatchess);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};

//Handle watch update form on PUT.
exports.watch_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await watch.findById( req.params.id)
        // Do updates of properties
        if(req.body.watch_Name)
               toUpdate.watch_Name = req.body.watch_Name;
        if(req.body.country) toUpdate.country = req.body.country;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// VIEWS
// Handle a show all view

exports.watch_view_all_Page = async function(req, res) {
    try{
        thewatchess = await watch.find();
        res.render('watch', { title: 'watch Search Results', results: thewatchess });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
}; 