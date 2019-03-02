(function(root) {
    function byId(id) {
        return document.getElementById(id);
    }

    function fromClass(parent, clazz) {
        var r = parent.getElementsByClassName(clazz);
        if (r.length <1) {
            alert('fromClass cannot find the target');
        }

        return r[0]; // only need first one
    }

    function byClass(parent, clazz) {
        return parent.getElementsByClassName(clazz);
    }

    function initTableById(id, urls, customSize) {
        initTable(byId(id), urls, customSize);
    }

    function initTable(table, urls, customSize) {
        var currentIdx = 0;
        var img = fromClass(table, 'control-display');
        var productNumber = fromClass(table, 'product-number');
        var btnLeft = fromClass(table, 'arrow-left');
        var btnRight = fromClass(table, 'arrow-right');
        var circles = fromClass(table, 'circles-container');
        var btns = byClass(circles, 'clickable');
        var clickableDoms = byClass(circles, 'clickable');
        var options = [];
        var btns = {};

        var sizeListDom = fromClass(table, 'size-list');
        var originalSizeContent = sizeListDom.innerText

        // parse images url
        urls.forEach(function (url, i) {
            var m = url.match(/.*\/(.+)_(.+)\..*$/);
            if (!m) {
                alert("wrong url:" + url);
            }
            options.push({
                pn: m[1].toLowerCase(),
                color: m[2].toLowerCase(),
                url: url,
                index: i
            });
        });

        // parse clickables from Dom to easier data-structure
        Array.prototype.forEach.call(clickableDoms, function(dom) {
            var color = fromClass(dom, 'hint').innerText.toLowerCase();
            btns[color] = {
                color: color,
                dom: dom
            }
        });

        function moveTo(newIdx) {
            newIdx = newIdx < 0 ? options.length - 1 : newIdx;
            newIdx = newIdx % options.length;
            if (newIdx == currentIdx) {
                return;
            }
            var current = options[newIdx];
            var url = current.url;
            img.src = url;
            productNumber.innerText = current.pn.toUpperCase();

            // if there is custom size for specific product
            if (customSize != null) {
                sizeListDom.innerText = customSize[current.pn]
                    ? customSize[current.pn]
                    : originalSizeContent;
            }

            currentIdx = newIdx;
            for (var key in btns) {
                if (btns[key].color === current.color) {
                    btns[key].dom.classList.add('actived');
                } else {
                    btns[key].dom.classList.remove('actived');
                }
            }
        }

        // bind callback
        btnLeft.addEventListener('click', function() {
            moveTo(currentIdx - 1);
        });
        btnRight.addEventListener('click', function() {
            moveTo(currentIdx + 1);
        });

        function buildCb(selected) {
            return function () {
                var current = options[currentIdx];
                var nextIdx = -1;
                for (var i = 0; i < options.length; i++) {
                    var op = options[i];
                    if (op.color === selected && op.pn === current.pn) {
                        nextIdx = i;
                        break;
                    } else if (op.color === selected) {
                        nextIdx = i;
                    }
                }
                if (nextIdx !== -1) {
                    moveTo(nextIdx);
                }
            }
        }

        for (var color in btns) {
            btns[color].dom.addEventListener('click', buildCb(color));
        }

        // be selected by default
        btns[Object.keys(btns)[0]].dom.classList.add('actived');

        return moveTo;
    }

    window.WearControl = {
        initTableById,
        initTable
    }

})(document);

