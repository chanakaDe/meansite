'use strict';

var request = require('request');
var marked = require('marked');
var mean = require('meanio');

module.exports = function (Wikidocs, app, auth, database) {

    var config = mean.loadConfig();

    app.get('/wikidocs/:page?', function (req, res, next) {
        console.log('https://raw.githubusercontent.com/wiki/' + (config.wikidocsRepo || 'linnovate/mean/') + (req.params.page || (config.wikidocsDefault || 'Getting-Started')) + '.md');
        request.get('https://raw.githubusercontent.com/wiki/' + (config.wikidocsRepo || 'linnovate/mean/') + (req.params.page || (config.wikidocsDefault || 'Getting-Started')) + '.md', function (error, response, body) {

            var renderer = new marked.Renderer();

            marked.setOptions({
                renderer: renderer,
                gfm: true,
                tables: true,
                breaks: true,
                pedantic: false,
                sanitize: true,
                smartLists: false,
                smartypants: false
            });
            renderer.list = function (body) {
                return '<ul class="nav nav-pills nav-stacked">' + body + '</ul>';
            };
            renderer.link = function (href, title, text) {
                var local = true;
                if (href.indexOf('/') !== -1) {
                    local = false;
                }
                return '<a href="' + (local ? '#!/wikidocs/' : '') + href + (title ? '" title="' + title : '') + '">' + text + '</a>';
            };
            var html = marked(body, {
                renderer: renderer
            });

            res.send(html);
        });
    });
};
