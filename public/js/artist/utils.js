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
    redir:function(where,qs){
            let urlRedirect = "./"+where+".html?artist="+qs.artist;
            if(!_.isEmpty(qs.multimedia) && !_.isUndefined(qs.multimedia)){
                urlRedirect += "&multimedia="+qs.multimedia;
            }
            if(!_.isEmpty(qs.music) && !_.isUndefined(qs.music)){
                urlRedirect+= "&music="+qs.music;
            }
            if(!_.isEmpty(qs.from)){
                urlRedirect+="&from="+qs.from;
            }
            if(!_.isEmpty(qs.prevFrom)){
                urlRedirect+="&prevFrom="+qs.prevFrom;
            }
            document.location.href=urlRedirect;
            return urlRedirect
    },
    getArtist: function (artistSelected, actors, musician, musicalGroups) {
        let element = {};
        element = _.filter(actors, function (a) {
            return a.name.toLowerCase().includes(artistSelected.toLowerCase());
        });

        if (element.length == 0) {
            element = _.filter(musician, function (a) {
                return a.name.toLowerCase().includes(artistSelected.toLowerCase());
            });
            if (element.length == 0) {
                element = _.filter(musicalGroups, function (a) {
                    return a.name.toLowerCase().includes(artistSelected.toLowerCase());
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
            $("#artistNotFound").css('display', 'block');
            $("#artistDetail").css('display', 'none');
            $("#moreInfo").css('display', 'none');
            return;
        }
        $("#artistNotFound").css('display', 'none');
        $("#artistDetail").css('display', 'block');
        $("#moreInfo").css('display', 'block');

        $("#idArtist").text(element.id);
        $("#nameArtist").text(element.name);
        $("#countryArtist").text(element.residencia);
        $("#birthArtist").text(element.fechaNacimiento);
    },
    clearContent: function () {
        $("#socialArtist").text("");
        $("#carouselIndicators").html("");
        $("#carouselPhotos").html("");
        $("#multimediaBodyTable").html("");
    },
    clearForm:function(){
        $("#artist").val("");
        $("#artistNotFound").css('display', 'none');
        $("#artistDetail").css('display', 'none');
        $("#moreInfo").css('display', 'none');
        funcs.clearContent();
    },

}