define(function(require, exports, module) {
    
module.exports = function(session, options){
    var YELLOW = "\x1b[01;33m";
    var RESETCOLOR = "\x1b[0m";
    
    session.install({
        "name": "Grav",
        "description": "A Modern Flat-File CMS",
        "cwd": "~/.c9",
        "optional": true
    }, [
        {
            "ubuntu": ["php5-curl"],
            "centos": ["php-curl"]
        },
        {
            "zip": {
                "url": "https://github.com/getgrav/grav-skeleton-blog-site/releases/download/1.0.1/grav-skeleton-blog-site-v1.0.1.zip",
                "target": "~/workspace/blog-site",
                "dir": "grav-skeleton-blog-site"
            }
        },
        {
            "message": YELLOW + "Start Apache by clicking the [Run Project] button in the toolbar" + RESETCOLOR + "\n"
        }
    ]);

    session.start();
};

module.exports.version = 1;

});