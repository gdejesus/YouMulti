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
    getMultimedia: function (multimediaSelected, artistType) {
        let src = artistType == "actors" ? multimedia.movies.concat(multimedia.series) : multimedia.music;
        return _.filter(src, function (a) {
            return a.titulo == multimediaSelected
        })[0];
    },
    getArtist: function (multimediaSelected) {
        let artst = [];
        _.each(artist.actors, function (a) {
            if (a.multimedia.includes(multimediaSelected)) {
                artst.push(a);
            }
        });
        return artst;
    },
    getDirector: function (id) {
        let artst = [];
        return _.filter(artist.directors, function (a) {
            return a.id == id
        })[0].nombre;
    },
    getMoviewsByDirectors: function (multimediaSelected) {
        let multim = funcs.getMultimedia(multimediaSelected, "actors");
        if(multim == null){
            return;
        }
        let dir = _.filter(artist.directors, function (d) {
            return d.id == multim.director
        })[0];
        if(dir== null){
            return;
        }
        return dir.pelicula;
    },
    appendPlayer: function () { 
        $("#video-view").html("");
        let dateSelected = $("#datepicker").val();
        let artistSelected = $("#artist").val();
        let multimediaSelected = $("#multimedia").val();
        let filter = multimediaSelected != null && multimediaSelected != "" ? multimediaSelected :
            dateSelected != null && dateSelected != "" ? dateSelected :
            artistSelected;
        funcs.appendyTube(funcs.getMultimedia(filter, "actors"))
    },
    searchMultimedia: function () { 
        funcs.clearContent();
        let elements = [];
        let element = null;
        let artistSelected = $("#artist").val();
        let multimediaSelected = $("#multimedia").val();
        if (multimediaSelected != null && multimediaSelected != "") {
            element = funcs.getMultimedia(multimediaSelected, "actors");
            elements.push(element);
        } else if (artistSelected != null && artistSelected != "") {
            let art = _.filter(artist.actors, function (a) {
                return a.name == artistSelected;
            });
            if (art.length) {
                _.each(art[0].multimedia, function (mult) {
                    elements.push(_.filter(multimedia.movies.concat(multimedia.series), function (m) {
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
            let director = funcs.getDirector(element.director),
            row = "<tr>";
            $("#multimediaDirOrCap").text(element.tipo == "serie"?"Capitulos":"Peliculas de "+ director);
            row += "<td>" + element.id + "</td>";
            row += "<td>" + element.titulo + "</td>";
            //row += "<td>" + element.album + "</td>";
            row += "<td>" + element.duracion + "</td>";
            row += "<td>" + element.genero + "</td>";
            row += "<td>" + element.fechaEstreno + "</td>";
            row += "<td>" + element.fechaIncorporación + "</td>";
            row += "<td>" + director + "</td>";
            row += '<td><button type="button" name="popup" id="' + element.id + '--' + element.tipoArtista + '" class="btn btn-primary" title="Reproducir" data-toggle="modal" data-target="#multimVideo" title="Multimedia">Reproducir <i class="fas fa-play"></i> </button></td>'
            row += "</tr>";
            $("#multimBodyTable").append(row);
            //Adding artist
            let $artist = funcs.getArtist(element.id);
            _.each($artist, function (a) {
                let row = "<tr>";
                row += "<td>" + a.id + "</td>";
                row += "<td>" + a.name + "</td>";
                row += '<td><a href="./artist.html?artist=' + a.name + '&multimedia=' + element.titulo + '" class="btn btn-primary" title="Ver ficha Artista">Ficha artista <i class="fas fa-address-card"></i></a></td>'
                row += "</tr>";
                $("#ArtistBodyTable").append(row);
            });
            let $mov = funcs.getMoviewsByDirectors(element.titulo);
            _.each($mov.slice(0,5), function (m) {
                let row = "<tr>";
                row += "<td>" + m.id + "</td>";
                row += "<td>" + m.titulo + "</td>";
                row += '<td><button type="button" name="popup" id="' + m.id + '--' + m.tipoArtista + '" class="btn btn-primary" title="Reproducir" data-toggle="modal" data-target="#multimVideo" title="Multimedia">Reproducir <i class="fas fa-play"></i></button></td>'
                row += "</tr>";
                $("#DirectorBodyTable").append(row);
            });
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
        $("#ArtistBodyTable").html("");
        $("#multimBodyTable").html("");
        $("#DirectorBodyTable").html("");
    },
    clearForm:function(){
        $("#multimedia").val("");
        $("#artist").val("");
        $("#moreInfo").css('visibility', 'hidden');
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