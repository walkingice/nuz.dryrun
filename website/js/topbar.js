(function() {
    var topbarDom = null;
    window.initTopbar = function (domId) {
        topbarDom = lib.byId(domId);
        if (!lib.assert(topbarDom, 'topbar dom not found')) return 0;
    }

    var lastScrollTop = -1;
    lib.listenScroll(function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop && st > 200 && lastScrollTop != -1){
            topbarDom.classList.add('minimize');
        } else {
            topbarDom.classList.remove('minimize');
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, 200);

})();

