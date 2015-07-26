'use strict';

/* Test fail with confusing message if running server.js &
    tests at the same time.
*/

require('./endpoint-logging.js');
require('./health.js');
require('./register/');
require('./forward/');
require('./clients/');
require('./child-process/');
require('./hosts/');
require('./connections/');
require('./circuits/');
require('./hyperbahn-client.js');
require('./admin/');
require('./trace.js');
