var appDirectives = angular.module('appDirectives', []);
appDirectives.directive("page2", function() {
    return {
        scope: {},
        retrict: "AE",
        template: "<div style='text-align: center;'><div id='pager2' class='pager clearfix'></div></div>",
        link: function() {
            $("#pager2").zPager({
                url: 'pageData.json',
                htmlBox: $('#wraper'),
                btnShow: true
            });
        }

    }
});

appDirectives.directive("page3", function() {
    return {
        scope: {},
        retrict: "AE",
        template: "<div style='text-align: center;'><div id='pager3' class='pager clearfix'></div></div>",
        link: function() {
            $("#pager3").sPager({
                url: 'pageData.json',
                htmlBox: $('#wraper'),
                btnShow: true
            });
        }

    }
});

appDirectives.directive("page4", function() {
    return {
        scope: {},
        retrict: "AE",
        template: "<div style='text-align: center;'><div id='pager4' class='pager clearfix'></div></div>",
        link: function() {
            $("#pager4").aPager({
                url: 'pageData.json',
                htmlBox: $('#wraper'),
                btnShow: true
            });
        }

    }
});
appDirectives.directive("page5", function() {
    return {
        scope: {},
        retrict: "AE",
        template: "<div style='text-align: center;'><div id='pager5' class='pager clearfix'></div></div>",
        link: function() {
            $("#pager5").qPager({
                url: 'pageData.json',
                htmlBox: $('#wraper'),
                btnShow: true
            });
        }

    }
});
