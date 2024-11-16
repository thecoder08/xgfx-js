var xgfx = require('.');
xgfx.initWindow(640, 480, "Testing 123");

var x = 0;
while(true) {
    var event = xgfx.allocEvent();
    while(xgfx.checkWindowEvent(event) > 0) {
        if (event.type == xgfx.WINDOW_CLOSE) {
            process.exit();
        }
        else if (event.type == xgfx.KEY_CHANGE) {
            console.log('key: ' + event.keychange.key + ' state: ' + event.keychange.state);
        }
    }
    xgfx.clear();
    xgfx.circle(x, 240, 10, 0xffff0000);
    xgfx.updateWindow();
    x++;
}