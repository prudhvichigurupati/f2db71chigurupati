var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var watches_controller = require('../controllers/watches');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// watches ROUTES ///
// POST request for creating a watches.  
router.post('/watchess', watches_controller.watch_create_post);
// DELETE request to delete watches.
router.delete('/watchess/:id', watches_controller.watch_delete);
// PUT request to update watches.
router.put('/watchess/:id', watches_controller.watch_update_put);
// GET request for one watches.
router.get('/watchess/:id', watches_controller.watch_detail);
// GET request for list of all watches items.
router.get('/watchess', watches_controller.watch_list);
module.exports = router;
// GET request for one watches.
router.get('/watchess/:id', watches_controller.watch_detail);