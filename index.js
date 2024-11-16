var koffi = require('koffi');
var xgfx = koffi.load('libxgfx.so');

koffi.struct('KeyChangeEvent', {
    type: 'int',
    key: 'uint',
    state: 'uint'
});

koffi.struct('MouseMoveEvent', {
    type: 'int',
    x: 'int',
    y: 'int'
});

koffi.struct('MouseButtonEvent', {
    type: 'int',
    button: 'uint',
    state: 'uint'
});

koffi.struct('WindowCloseEvent', {
    type: 'int'
});

koffi.union('Event', {
    type: 'int',
    keychange: 'KeyChangeEvent',
    mousemove: 'MouseMoveEvent',
    mousebutton: 'MouseButtonEvent',
    windowclose: 'WindowCloseEvent'
});

module.exports.allocEvent = function() {
    return new koffi.Union('Event');
}

module.exports.initWindow = xgfx.func('void initWindow(int width, int height, const char* title)');
module.exports.updateWindow = xgfx.func('void updateWindow()');
module.exports.checkWindowEvent = xgfx.func('int checkWindowEvent(_Out_ Event* event)');
module.exports.plot = xgfx.func('void plot(int x, int y, unsigned int color)');
module.exports.clear = xgfx.func('void clear()');
module.exports.buffer = xgfx.func('void buffer(int x, int y, int width, int height, int depth, char* buffer)');
module.exports.rectangle = xgfx.func('void rectangle(int x, int y, int width, int height, unsigned int color)');
module.exports.circle = xgfx.func('void circle(int x, int y, int radius, unsigned int color)');
module.exports.line = xgfx.func('void line(int x0, int y0, int x1, int y1, unsigned int color)');

module.exports.KEY_CHANGE = 1;
module.exports.MOUSE_MOVE = 2;
module.exports.MOUSE_BUTTON = 3;
module.exports.WINDOW_CLOSE = 4;

module.exports.BUTTON_LEFT = 1;
module.exports.BUTTON_MIDDLE = 2;
module.exports.BUTTON_RIGHT = 3;
module.exports.BUTTON_SCROLL_UP = 4;
module.exports.BUTTON_SCROLL_DOWN = 5;
module.exports.BUTTON_SCROLL_LEFT = 6;
module.exports.BUTTON_SCROLL_RIGHT = 7;
module.exports.BUTTON_BACKWARD = 8;
module.exports.BUTTON_FORWARD = 9;