let funcs = {
    appendTitleAndVideo: function (id, title, datas, pars) {
        let tittle = $("<h2 />", {
            class: "tc home-title",
            text: title
        });
        tittle.appendTo($(id));
        _.each(datas, function (data) {
            let url = "./" + pars + ".html?" + pars + "=" + data.titulo;
            let div = $('<div>', {
                    class: "col-md-4"
                }),
                iframe = $('<iframe />', {
                    width: "340",
                    height: "315",
                    src: "https://www.youtube.com/embed/" + data.ytubeId
                }),
                info = $('<div>', {
                    class: "col-md-12 flex",
                    html: '<span class="home-legend"><b>Fecha incorporación: </b>' + data.fechaIncorporación + '</span> <a href="' + url + '" class="btn btn-primary" id="detail" title="Detalle">Mas detalle...</a>'
                });
            iframe.appendTo(div);
            info.appendTo(div);
            div.appendTo($(id));
        });
    }
};