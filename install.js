define(function(require, exports, module) {
    
module.exports = function(session, options){
    var YELLOW = "\x1b[01;33m";
    var RESETCOLOR = "\x1b[0m";
    
    session.install({
        "name": "Grav",
        "description": "A Modern Flat-File CMS"
    }, [
        {
            "ubuntu": ["php5-curl"],
            "centos": ["php-curl"],
            "darwin": ["php-curl"]
        },
        {
            "bash": "sudo service apache2 restart &> /dev/null || true"
        },
        {
            "zip": {
                "url": "https://getgrav.org/download/skeletons/blog-site/latest",
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
