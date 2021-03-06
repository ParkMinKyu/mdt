var css = require("css"),
    fs = require("fs")
    datauri = require("datauri");

module.exports = function(grunt) {

    var base_src = [
        // core
        "js/base.js",
        "js/core.js",

        // util
        "js/util/math.js",
        "js/util/transform.js",
        "js/util/time.js",
        "js/util/scale.js",
        "js/util/color.js",
        "js/util/svgbase.js",
        "js/util/svg3d.js",
        "js/util/svg.js"
    ];

    var ui_src = [
        "js/ui/button.js",
        "js/ui/combo.js",
        "js/ui/datepicker.js",
        "js/ui/colorpicker.js",
        "js/ui/dropdown.js",
        "js/ui/modal.js",
        "js/ui/notify.js",
        "js/ui/paging.js",
        "js/ui/tooltip.js",
        "js/ui/layout.js",
        "js/ui/accordion.js",
        "js/ui/switch.js",
        "js/ui/slider.js",
        "js/ui/progress.js",
        "js/ui/colorpicker.js",

        "js/uix/autocomplete.js",
        "js/uix/tab.js",
        "js/uix/table.js",
        "js/uix/tree.js",
        "js/uix/window.js",
        "js/uix/xtable.js"
    ];

    var table_src = [
        "js/ui/dropdown.js",
        "js/ui/modal.js",
        "js/uix/table.js",
        "js/uix/tree.js",
        "js/uix/xtable.js"
    ];

    var chart_src = [
        // chart (core)
        "js/chart/vector.js",
        "js/chart/draw.js",
        "js/chart/axis.js",
        "js/chart/map.js",
        "js/chart/builder.js",

        // chart.theme
        "js/chart/theme/jennifer.js",
        "js/chart/theme/gradient.js", // jennifer gradient style
        "js/chart/theme/dark.js",
        "js/chart/theme/pastel.js",
        "js/chart/theme/pattern.js",

        // chart.pattern 
        "js/chart/pattern/jennifer.js",

        // chart.icon
        "js/chart/icon/jennifer.js",

        // chart.polygon
        "js/chart/polygon/core.js",
        "js/chart/polygon/grid.js",
        "js/chart/polygon/line.js",
        "js/chart/polygon/point.js",
        "js/chart/polygon/cube.js",

        // chart.grid
        "js/chart/grid/draw2d.js",
        "js/chart/grid/draw3d.js",
        "js/chart/grid/core.js",
        "js/chart/grid/block.js",
        "js/chart/grid/date.js",
        "js/chart/grid/dateblock.js",
        "js/chart/grid/fullblock.js",
        "js/chart/grid/radar.js",
        "js/chart/grid/range.js",
        "js/chart/grid/log.js",
        "js/chart/grid/rule.js",
        "js/chart/grid/panel.js",
        "js/chart/grid/table.js",
        "js/chart/grid/overlap.js",
        "js/chart/grid/topologytable.js",
        "js/chart/grid/grid3d.js",
        
        // chart.brush
        "js/chart/brush/core.js",
        "js/chart/brush/imagebar.js",
        "js/chart/brush/imagecolumn.js",
        "js/chart/brush/patternbar.js",
        "js/chart/brush/patterncolumn.js",
        "js/chart/brush/bar.js",
        "js/chart/brush/column.js", // extends bar
        "js/chart/brush/bar3d.js",
        "js/chart/brush/column3d.js",
        "js/chart/brush/cylinder3d.js",
        "js/chart/brush/clusterbar3d.js",
        "js/chart/brush/clustercolumn3d.js",
        "js/chart/brush/clustercylinder3d.js",
        "js/chart/brush/stackbar.js", // extends bar
        "js/chart/brush/stackcolumn.js", // extends stackbar
        "js/chart/brush/stackbar3d.js",
        "js/chart/brush/stackcolumn3d.js",
        "js/chart/brush/stackcylinder3d.js",
        "js/chart/brush/fullstackbar.js", // extends stackbar
        "js/chart/brush/fullstackcolumn.js", // extends fullstackbar
        "js/chart/brush/fullstackbar3d.js",
        "js/chart/brush/fullstackcolumn3d.js",
        "js/chart/brush/fullstackcylinder3d.js",
        "js/chart/brush/bubble.js",
        "js/chart/brush/bubble3d.js", // extends bubble
        "js/chart/brush/candlestick.js",
        "js/chart/brush/ohlc.js",
        "js/chart/brush/equalizer.js",
        "js/chart/brush/line.js",
        "js/chart/brush/path.js",
        "js/chart/brush/pie.js",
        "js/chart/brush/donut.js", // extends pie
        "js/chart/brush/scatter.js",
        "js/chart/brush/scatterpath.js",
        "js/chart/brush/bargauge.js",
        "js/chart/brush/circlegauge.js",
        "js/chart/brush/fillgauge.js",
        "js/chart/brush/area.js", // extends line
        "js/chart/brush/stackline.js", // extends line
        "js/chart/brush/stackarea.js", // extends area
        "js/chart/brush/stackscatter.js", // extends scatter
        "js/chart/brush/gauge.js", // extends donut
        "js/chart/brush/fullgauge.js", // extends donut
        "js/chart/brush/stackgauge.js", // extends donut
        "js/chart/brush/waterfall.js",
        "js/chart/brush/splitline.js",
        "js/chart/brush/splitarea.js",
        "js/chart/brush/rangecolumn.js",
        "js/chart/brush/rangebar.js",
        "js/chart/brush/topologynode.js",
        "js/chart/brush/focus.js", // brush supporter
        "js/chart/brush/pin.js",  // brush supporter

        // map brush
        "js/chart/brush/map.core.js",
        "js/chart/brush/map.selector.js",
        "js/chart/brush/map.note.js",
        "js/chart/brush/map.bubble.js",
        "js/chart/brush/map.comparebubble.js",
        "js/chart/brush/map.flightroute.js",
        "js/chart/brush/map.marker.js",
        "js/chart/brush/map.weather.js",

        // polygon brush (full 3d)
        "js/chart/brush/polygon.core.js",
        "js/chart/brush/polygon.scatter.js",
        "js/chart/brush/polygon.column.js",
        "js/chart/brush/polygon.line.js",

        // chart.widget
        "js/chart/widget/core.js",
        "js/chart/widget/tooltip.js",
        "js/chart/widget/title.js",
        "js/chart/widget/legend.js",
        "js/chart/widget/zoom.js",
        "js/chart/widget/zoomscroll.js",
        "js/chart/widget/scroll.js", // horizontal scroll
        "js/chart/widget/vscroll.js", // vertical scroll
        "js/chart/widget/cross.js",
        "js/chart/widget/topologyctrl.js",
        "js/chart/widget/dragselect.js",

        // map widget
        "js/chart/widget/map.core.js",
        "js/chart/widget/map.control.js",
        "js/chart/widget/map.tooltip.js",

        // polygon widget (full 3d)
        "js/chart/widget/polygon.core.js",
        "js/chart/widget/polygon.rotate.js",

        // chart wrapper
        "js/chartx/realtime.js",
        "js/chartx/mini.js"
    ];

    grunt.initConfig({
        watch : {
            scripts : {
                files : [ "js/**" ],
                tasks : [ "js" ],
                options : {
                    spawn : false
                }
            },
            styles: {
                files: [ "less/**" ],
                tasks: [ "css" ],
                options: {
                    spawn : false
                }
            }
        },
        qunit: {
            options: {
                timeout: 10000
            },
            all: [ "test/*.html", "test/*/*.html" ]
        },
        concat : {
            // jui all 
            dist : {
                src : base_src.concat(ui_src, chart_src),
                dest : "dist/jui.js"
            },
            // jui table, tree, xtable
            table : {
                src : base_src.concat(table_src),
                dest : "dist/jui.table.js"
            },
            // jui chart
            chart : {
                src : base_src.concat(chart_src),
                dest : "dist/jui.chart.js"
            }            
        },
        uglify: {
            dist : {
                files : {
                    "dist/jui.min.js" : [ "dist/jui.js" ]
                }
            },
            table : {
                files : {
                    "dist/jui.table.min.js" : [ "dist/jui.table.js" ]
                }
            },
            chart : {
                files : {
                    "dist/jui.chart.min.js" : [ "dist/jui.chart.js" ]
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    "dist/jui.min.css": "dist/jui.css",
                    "dist/jennifer.theme.min.css": "dist/jennifer.theme.css",
                    "dist/dark.theme.min.css": "dist/dark.theme.css"
                }
            }
        },
        less: {
            dist: {
                files: {
                    "dist/jui.css" : [
                        "less/main.less"
                    ],
                    "dist/jennifer.theme.css" : [
                        "less/theme/jennifer.less"
                    ],
                    "dist/dark.theme.css" : [
                        "less/theme/dark.less"
                    ]
                }
            }
        },
        icon : {
            css : "dist/jui.css",
            dist : "js/chart/icon/jennifer.js"
        },
        pattern : {
            src : "dist/img/pattern/*.png",
            dist : "js/chart/pattern/jennifer.js"
        },
        pkg: grunt.file.readJSON("package.json")
    });

    require("load-grunt-tasks")(grunt);

    grunt.registerTask("pattern", "Image Patter Build", function() {
        var arr = grunt.file.expand(grunt.config('pattern.src')),
            list = {};

        arr.forEach(function(it) {
            var filename = it.split("/").pop().replace(".png", "").replace("pattern-", "");

            var obj = {
                type : "pattern",
                    attr: { id: "pattern-jennifer-" + filename, width: 12, height: 12, patternUnits: "userSpaceOnUse" },
                children : [
                    { type : "image" , attr : { "xlink:href" : datauri(it), width: 12, height : 12 } }
                ]
            }

            list[filename] = obj;
        })

        var str = 'jui.define("chart.pattern.jennifer", [], function() {\n' + '\treturn ' + JSON.stringify(list, null, 4)+ "\n" + "});";

        fs.writeFileSync(grunt.config("pattern.dist"), new Buffer(str));

        grunt.log.writeln("File " + grunt.config("pattern.dist") + " created.");

    });

    // 커스텀 빌드 모듈
    grunt.registerTask("icon", "SVG Icon Build", function() {
        var content = fs.readFileSync(grunt.config("icon.css"), { encoding : "utf8" }),
            obj = css.parse(content),
            icons = [];

        obj.stylesheet.rules.forEach(function(item) {
            if (item.declarations && item.declarations[0] && item.declarations[0].property == "content"  ) {

                if (item.selectors[0].indexOf(".datepicker") > -1 || item.selectors[0].indexOf(".calendar") > -1) {

                }  else {
                    var obj = {
                        name : item.selectors[0].replace(".jui .icon-", "").replace(":before", ""),
                        content : '\\' + item.declarations[0].value.replace(/\"/g, "").replace(/[\\]+/g, 'u')
                    }

                    icons.push('\t\t"' + obj.name + '" : "' + obj.content + '"');
                }

            }
        })

        var str = 'jui.define("chart.icon.jennifer", [], function() {\n' +
            '\treturn ' +
            "{\n" + icons.join(",\r\n") + "\n\t}\n" +
            "});";

        fs.writeFileSync(grunt.config("icon.dist"), new Buffer(str));

        grunt.log.writeln("File " + grunt.config("icon.dist") + " created.");
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("js", [ "icon", "pattern", "concat", "uglify" ]);
    grunt.registerTask("css", [ "less", "cssmin" ]);
    grunt.registerTask("test", [ "qunit" ]);
    grunt.registerTask("default", [ "css", "test", "js" ]);
};
