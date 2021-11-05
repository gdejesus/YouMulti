const funcs = {
    parse_query_string: function (query) {
        var vars = query.split("&");
        var query_string = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            var key = decodeURIComponent(pair[0]);
            var value = decodeURIComponent(pair[1]);
            // If first entry with this name
            if (typeof query_string[key] === "undefined") {
                query_string[key] = decodeURIComponent(value);
                // If second entry with this name
            } else if (typeof query_string[key] === "string") {
                var arr = [query_string[key], decodeURIComponent(value)];
                query_string[key] = arr;
                // If third or later entry with this name
            } else {
                query_string[key].push(decodeURIComponent(value));
            }
        }
        return query_string;
    },
    getArtist: function (artistSelected, actors, musician, musicalGroups) {
        let element = {};
        element = _.filter(actors, function (a) {
            return a.name == artistSelected
        });

        if (element.length == 0) {
            element = _.filter(musician, function (a) {
                return a.name == artistSelected
            });
            if (element.length == 0) {
                element = _.filter(musicalGroups, function (a) {
                    return a.name == artistSelected
                });
                if (element.length == 0) {
                    return;
                }
            }
        }
        return element[0];
    },
    appendTrophies: function (actors, musician, musicalGroups) { //availableArtist} {
        $("#bodyTable").html("");
        let artistSelected = $("#artist").val();

        let element = funcs.getArtist(artistSelected, actors, musician, musicalGroups);
        let trophies = _.filter(winsTrophies, function (wt) {
            return wt.artist == element.id;
        });

        _.each(trophies, function (t) {
            let row = "<tr>";
            row += "<td>" + t.id + "</td>";
            row += "<td>" + t.name + "</td>";
            row += "<td>" + t.description + "</td>";
            row += "<td>" + t.date + "</td>";
            row += "</tr>";
            $("#bodyTable").append(row);
        });
    },
    searchArt: function (actors, musician, musicalGroups) {
        funcs.clearContent();
        let artistSelected = $("#artist").val();
        let element = funcs.getArtist(artistSelected, actors, musician, musicalGroups);
        if (element == null) {
            return;
        }
        $("#optWins").css('visibility', 'visible');
        $("#optSocial").css('visibility', 'visible');

        $("#moreInfo").css('visibility', 'visible');

        $("#idArtist").text(element.id);
        $("#nameArtist").text(element.name);
        $("#countryArtist").text(element.residencia);
        $("#birthArtist").text(element.fechaNacimiento);

        //Get photos by artist
        let artistPhotos = _.filter(photos, function (ap) {
            return element.id == ap.artist && ap.tipoArtista == element.tipoArtista;
        });
        //Adding photos to slice
        _.each(artistPhotos, function (ap, i) {
            let li = $("<li />", {
                'data-target': "#myCarousel",
                'data-slide-to': i,
                class: i == 0 ? "active" : ""
            });
            li.appendTo($("#carouselIndicators"));
            let div = $('<div>', {
                    class: i == 0 ? "item active" : "item"
                }),
                img = $('<img />', {
                    src: ap.src,
                    alt: ap.alt,
                    height: "300"
                });
            img.appendTo(div);
            div.appendTo($("#carouselPhotos"));
        });
        //Adding Multimedia       
        _.each(element.multimedia, function (multi) {
            let md = _.filter(multimedia.movies.concat(multimedia.series), function (m) {
                return multi == m.id && m.tipoArtista == element.tipoArtista;
            })[0];
            if (md == null) {
                md = _.filter(multimedia.music, function (m) {
                    return multi == m.id && m.tipoArtista == element.tipoArtista;
                })[0];
            }
            let row = "<tr>";
            row += "<td>" + md.id + "</td>";
            row += "<td>" + md.titulo + "</td>";
            row += "<td>" + md.fechaEstreno + "</td>";
            row += '<td><button type="button" name="popup" id="' + md.id + '--'+element.tipoArtista+'" class="btn btn-primary" title="Reproducir" data-toggle="modal" data-target="#multimVideo" title="Multimedia"><i class="fas fa-play"></i> </button></td>'
            row += "</tr>";
            $("#multimediaBodyTable").append(row);
        });
        $("[name=popup]").click(function () {
            var $this = $(this);
            let obj = $this.context.id.split("--");
            let multi = _.filter(multimedia.movies.concat(multimedia.series), function (m) {
                return obj[0] == m.id
            })[0];
            if (multi == null) {
                return;
            }
            funcs.appendyTube(multi);
        });
    },
    clearContent: function () {
        $("#socialArtist").text("");
        $("#carouselIndicators").html("");
        $("#carouselPhotos").html("");
        $("#multimediaBodyTable").html("");
    },
    clearForm:function(){
        $("#artist").val("");
    },
    appendyTube: function (multi) {
        let src = "https://www.youtube.com/embed/" + multi.ytubeId,
            $iframe = $("<iframe>").attr("src", src).css({
                "width": 400,
                "height": 300
            }),
            $title = $("<h1>").text(multi.titulo);
        $(".video-view").html($title).append($iframe);
        $iframe.wrap("<div class='class-video'>");
    }
}