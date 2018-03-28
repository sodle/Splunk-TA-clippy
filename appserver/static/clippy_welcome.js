(function() {
    "use strict";

    require.config({
        paths: {
            "appBase"   : "../app/TA-clippy"
        }
    });

    require([
        "/static/app/TA-clippy/build/clippy.min.js"
    ], function() {
        window.agent = null;
        clippy.load('Clippy', function(agent) {
            window.agent = agent;
            agent.moveTo(100, 100);
            agent.show();
            agent.play('GetTechy');
            agent.speak('Welcome to Splunk!');
        });
    }, function(err) {
        var failedId = err.requireModules && err.requireModules[0];
        console.error('Error when loading Clippy dependencies: ', err);
    });
}).call(this);