$(function () {

/*
    var page = {
        content: {}
    };

    page.layout = 'layout1';

    page.content[id] = [];
    page.content[id].push({})
*/




    /**
     * Tab initialization
     */
    $('#left')
        .find('.nav-tabs a')
        .click(function (e) {
            e.preventDefault();
            var el = $(this);
            el.tab('show');
        });
    //.find('.nav-tabs a:first')
    //.tab('show');

    $('#right').find('.properties-handle').click(function () {
        $('#right').find('.navbar').toggle();
    });

    var designer = Handlebars.compile($("#designer-hbs").html());
    var widgets = Handlebars.compile($("#thumbs-hbs").html());
    var options = Handlebars.compile($("#options-hbs").html());

    ues.store.gadgets({
        start: 0,
        count: 20
    }, function (err, data) {
        $('#middle')
            .find('.widgets .content').html(widgets(data)).end()
            .find('.thumbnails').on('click', '.add-button', function () {
                //console.log('adding');
                //$('#left').find('.nav-tabs a[href="#designer"]').tab('show');
            });
    });

    ues.store.layouts({
        start: 0,
        count: 20
    }, function (err, data) {

          $.get(data[0].url , function(data) {
              $('#middle')
                .find('.designer .content').html(data);

              $('.ues-widget-box').droppable({
                  //activeClass: 'ui-state-default',
                  hoverClass: 'ui-state-hover',
                  //accept: ':not(.ui-sortable-helper)',
                  drop: function (event, ui) {
                      //$(this).find('.placeholder').remove();
                      var id = ui.helper.data('id');
                      var droppable = $(this);
                      ues.store.gadget(id, function (err, data) {
                          var id = Math.random().toString(36).slice(2);
                          droppable.html('<div id=' + id + ' class="widget"></div>');
                          CommonContainer.renderGadget($('#' + id), data.data.url);
                          console.log('dropping');
                          $('#middle')
                              .find('.designer .optionContent').html(options(data));
                      });
                  }
              });

        }, 'text');

    });




/*
    var gridHtml = '<div class="row"> <div class="col-md-3 ues-widget-box"></div> <div class="col-md-6 ues-widget-box"></div> <div class="col-md-3 ues-widget-box"></div> </div> <div class="row"> <div class="col-md-6 ues-widget-box"></div> <div class="col-md-6 ues-widget-box"></div> </div> <div class="row"> <div class="col-md-4 ues-widget-box"></div> <div class="col-md-4 ues-widget-box"></div> <div class="col-md-4 ues-widget-box"></div> </div>';
    $('#middle')
      //  .find('.designer .content').html(designer({gridContent:'<div class="row"> <div class="col-md-3 ues-widget-box"></div> <div class="col-md-6 ues-widget-box"></div> <div class="col-md-3 ues-widget-box"></div> </div> <div class="row"> <div class="col-md-6 ues-widget-box"></div> <div class="col-md-6 ues-widget-box"></div> </div> <div class="row"> <div class="col-md-4 ues-widget-box"></div> <div class="col-md-4 ues-widget-box"></div> <div class="col-md-4 ues-widget-box"></div> </div>'}));
        .find('.designer .content').html(designer({gridContent: gridHtml}));
*/




    $('.widgets').on('mouseenter', '.thumbnail .drag-handle', function () {
        $(this).draggable({
            cancel: false,
            appendTo: 'body',
            helper: 'clone',
            start: function (event, ui) {
                console.log('dragging');
                $('#left').find('a[href="#designer"]').tab('show');
            },
            stop: function () {
                //$('#left a[href="#widgets"]').tab('show');
            }
        });
    }).on('mouseleave', '.thumbnail .drag-handle', function () {
        $(this).draggable('destroy');
    });

<<<<<<< HEAD
=======
    $('.ues-widget-box').droppable({
        //activeClass: 'ui-state-default',
        hoverClass: 'ui-state-hover',
        //accept: ':not(.ui-sortable-helper)',
        drop: function (event, ui) {
            //$(this).find('.placeholder').remove();
            var id = ui.helper.data('id');
            var droppable = $(this);
            ues.store.asset(id, function (err, data) {
                var id = Math.random().toString(36).slice(2);
                droppable.html('<div id=' + id + ' class="widget"></div>');
                ues.gadget($('#' + id), data.data.url);
            });
        }
    });


>>>>>>> 5f20e7f120d14a3c5d447a31e99c44c208864c6c
    $('#sandbox').load(function () {
        $(this).contents()
            .find('body')
            .html('<div class="container"><div class="row"><div class="col-lg-3 ues-widget-box"></div><div class="col-lg-9 ues-widget-box"></div></div></div>');
    });

    $('.preview-toggle').click(function () {
        $('#sandbox').toggle();
    });

    var source = function (html) {
        return '<div class="container">' + html + '</div>';
    };

    $('.preview').click(function () {
        var html = $('.sandbox .container-fluid').html();
        console.log(html);
        $('#sandbox').contents()
            .find('body')
            .html(source(html));
        /*$('.container').hide();
         $('#sandbox').contents()
         .find('body')
         .html('<div class="container"><div class="row"><div class="col-lg-3 ues-widget-box"></div><div class="col-lg-3 ues-widget-box"></div><div class="col-lg-3 ues-widget-box"></div><div class="col-lg-3 ues-widget-box"></div></div></div>');
         */
    });
});