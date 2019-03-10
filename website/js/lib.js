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

    function assert(obj, msg) {
        if (!obj) {
            console.error('assert error', msg);
            return false;
        }
        return true;
    }

    function _buildScrollOrder(service) {
        var requireService = false;
        // guest will request for service
        var guest = function () {
            requireService = true;
        }
        // servant watch if there is any service
        var servant = function () {
            if (requireService) {
                requireService = false;
                service();
            }
        }
        return {
            guest,
            servant
        }
    }

    var _orders = {
    };

    function listenScroll(callback, _delay, _name) {
        var order = _buildScrollOrder(callback);
        var delay = _delay ? _delay : 300;
        window.addEventListener('scroll', order.guest);
        order.checkout = window.setInterval(order.servant, delay);
        if (_name) {
            _orders[_name] = order;
        }

        return _name;
    }

    function stopListenScroll(name) {
        var order = _orders[name];
        if (order) {
            delete _orders[name];
            window.removeEventListener('scroll', order.guest);
            window.clearInterval(order.checkout);
        }
    }

    window.lib = {
        byId,
        byClass,
        fromClass,
        listenScroll,
        stopListenScroll,
        assert
    }
})(document);

