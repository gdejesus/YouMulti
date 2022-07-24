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
    getMultimedia: function (value, byTitle) {
        let src = multimedia.music;
        return _.filter(src, function (a) {
            return a[byTitle ? "titulo" : "genero"] == value
        });
    },
    getArtist: function (artistSelected) {
        let src = artist.musician.concat(artist.musicalGroups);
        return _.filter(src, function (a) {
            return a.id == artistSelected
        });
    },
    getMoviewsBySong: function (songSelected) {
        let movieSerie = [];
        _.each(songSelected.multimedia, function (sm) {
            movieSerie.push(_.filter(multimedia.movies.concat(multimedia.series), function (m) {
                return m.id == sm;
            })[0]);
        });
        return movieSerie;
    },
    appendPlayer: function () { //availableArtist} {
        $("#video-view").html("");
        let multimediaSelected = $("#multimedia").val();
        funcs.appendyTube(funcs.getMultimedia(multimediaSelected))
    },
    searchMusic: function (music,prevFrom) { //,availableArtist) {
        funcs.clearContent();
        let elements = [];
        let multimediaTitle = $("#multimediaTitle").val();
        let multimediaGender = $("#multimediaGender").val();
        let multimediaArtist = $("#multimediaArtist").val();
        if (multimediaTitle != null && multimediaTitle != "") {
            elements = funcs.getMultimedia(multimediaTitle, true);
        } else if (multimediaGender != null && multimediaGender != "") {
            elements = funcs.getMultimedia(multimediaGender, false);
        } else if (multimediaArtist != null && multimediaArtist != "") {
            let art = _.filter(artist.musician.concat(artist.musicalGroups), function (a) {
                //return a.name == multimediaArtist;
                return a.name.toLowerCase().includes(multimediaArtist.toLowerCase());
            });
            if (art.length) {
                _.each(art[0].multimedia, function (mult) {
                    elements.push(_.filter(multimedia.music, function (m) {
                        return m.id == mult;
                    })[0]);
                });
            }
        }
        if (elements == null) {
            return;
        }
        $("#moreInfo").css('visibility', 'visible');

        _.each(elements, function (element) {
            let row = "<tr>";
            row += "<td>" + element.id + "</td>";
            row += "<td>" + element.titulo + "</td>";
            row += "<td>" + element.album + "</td>";
            row += "<td>" + element.duracion + "</td>";
            row += "<td>" + element.genero + "</td>";
            row += "<td>" + element.fechaEstreno + "</td>";
            row += "<td>" + element.fechaIncorporación + "</td>";
            row += '<td><button type="button" name="popup" id="' + element.id + '--' + element.tipoArtista + '" class="btn btn-primary" title="Reproducir" data-toggle="modal" data-target="#multimVideo" title="Multimedia">Reproducir <i class="fas fa-play"></i> </button></td>'
            row += "</tr>";
            $("#musicBodyTable").append(row);
            //Adding artist
            let $artist = funcs.getArtist(element.artista);
            _.each($artist, function (a) {
                let row = "<tr>";
                row += "<td>" + a.id + "</td>";
                row += "<td>" + a.name + "</td>";
                row += '<td><a href="./artist.html?artist=' + a.name + '&music=' + element.titulo + '&prevFrom='+prevFrom+'" class="btn btn-primary" title="Ver ficha Artista">Ficha artista <i class="fas fa-address-card"></i></a></td>'
                row += "</tr>";
                $("#ArtistBodyTable").append(row);
            });

            let $mov = funcs.getMoviewsBySong(element);
            _.each($mov, function (m) {
                let row = "<tr>";
                row += "<td>" + m.id + "</td>";
                row += "<td>" + m.titulo + "</td>";
                row += '<td><button type="button" name="popup" id="' + m.id + '--' + element.tipoArtista + '--false" class="btn btn-primary" title="Reproducir" data-toggle="modal" data-target="#multimVideo" title="Multimedia">Reproducir <i class="fas fa-play"></i> </button></td>'
                row += "</tr>";
                $("#MovieBodyTable").append(row);
            });

            //Get photos by artist
            let artistPhotos = _.filter(photos, function (ap) {
                return element.artista == ap.artist && ap.tipoArtista == element.tipoArtista;
            });
            if(!artistPhotos.length){
                $("#artistPhotos").css('visibility', 'hidden');
                return;
            }
            $("#artistPhotos").css('visibility', 'visible');
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
        });
        $("[name=popup]").click(function () {
            var $this = $(this);
            let obj = $this.context.id.split("--");
            let src = obj[2] == "false" ? multimedia.movies.concat(multimedia.series) : multimedia.music;
            let multi = _.filter(src, function (m) {
                return obj[0] == m.id
            })[0];
            if (multi == null) {
                return;
            }
            funcs.appendyTube(multi);
        });
    },
    clearContent: function () {
        $("#musicBodyTable").html("");
        $("#ArtistBodyTable").html("");
        $("#carouselIndicators").html("");
        $("#carouselPhotos").html("");
        $("#MovieBodyTable").html("");
    },
    clearForm:function(){
        $("#multimediaTitle").val("");
        $("#multimediaGender").val("");
        $("#multimediaArtist").val("");
        $("#rating").css('visibility', 'hidden');
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