(function(root) {
    /*
     * var parent = document.getElementById('main-bg1');
     * drawBubbles(parentDom, 'canvasId', {
     *     density: 5.8,
     *     styles: [
     *         'rgba(255, 0, 0, 0.1)',
     *         'rgba(0, 255, 0, 0.1)'
     *     ]
     * });
     */
    window.drawBubbles = function(parentDom, canvasId, options) {
        if (!parentDom) {
            console.log('no parent to use');
            return;
        }

        var canvas = insertCanvas(parentDom, canvasId);
        if (!canvas) {
            return;
        }

        var drawFunc = function () {
            drawOnCanvas(canvas, parentDom, options);
        }

        // first draw
        drawFunc();
        // redraw on window-resize
        window.addEventListener("resize", drawFunc);
    }

    // create a canvas and prepend to parent-dom
    function insertCanvas(parent, canvasId) {
        //Build canvas and prepend it
        var canvas = document.createElement("canvas");
        var W = (parent) ? parent.clientWidth : window.innerWidth;
        var H = (parent) ? parent.clientHeight : window.innerHeight;
        canvas.width = W;
        canvas.height = H;


        parent.insertBefore(canvas, parent.firstChild);
        canvas.style.position = 'absolute';
        canvas.id = !!canvasId ? canvasId : '';

        //Test for canvas
        if(canvas.getContext || canvas.getContext('2d')) {
            //Canvas exists
            return canvas;
        } else {
            // no canvas, avoid drawing
            return null;
        }
    }

    function drawOnCanvas(canvas, parent, options) {
        var density = options.density ? options.density : 1;
        var minRadius = options.minRadius ? options.minRadius : 0.1;
        var maxRadius = options.maxRadius ? options.maxRadius : 10;
        var styles = options.styles ? options.styles : ["rgba(255, 0, 0, 0.1)"];

        var ctx = canvas.getContext("2d");
        var W = canvas.width;
        var H = canvas.height;

        ctx.clearRect(0, 0, W, H);
        //This varies the number of snowflakes showing dependent on size of the element
        var numBubbles = Math.floor( W / (10 / density));

        function getRandomRange(min, max) {
                return Math.random() * (max - min) + min;
        }

        var data = [];
        for (var i = 0; i < numBubbles; i++) {
            var radius = getRandomRange(minRadius, maxRadius);
            var x = Math.random() * W; //x-coordinate
            var y = Math.random() * H; //y-coordinate
            data.push({
                x: Math.max(radius, Math.min(W - radius, x)), // ensure bubble is in rectangle
                y: Math.max(radius, Math.min(H - radius, y)), // ensure bubble is in rectangle
                r: radius
            });
        }

        for (var i = 0; i < data.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = styles[i % styles.length];
            var p = data[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
            ctx.fill();
        }
    };

})(document);


