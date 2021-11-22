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
    
    initMultimedia:function(movieSerie){
        if(_.isNull(movieSerie)){
            movieSerie = multimedia.movies.concat(multimedia.series);
        }
        _.each(movieSerie,function(data){
            let row = "<tr>";
            row += "<td>" + data.titulo + "</td>";
            row += "<td>" + data.fechaEstreno + "</td>";
            row += '<td><a href="./multimedia.html?multimedia=' + data.titulo + '" class="btn btn-primary" title="Ver detalle multimedia">Detalle <i class="fas fa-clipboard-list"></i> </a></td>'
            row += "</tr>";
            $("#multimBodyTable").append(row);
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
    filterTable : function(filter){
        $("#multimBodyTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(filter) > -1);
        });
    },
    searchMultimedia: function () { 
        let elements = [];
        let artistSelected = $("#artist").val();
        let multimediaSelected = $("#multimedia").val();
        let date = $('#datepicker').datepicker("getDate");
        let shortDate = $("#datepicker").val();

        let filter = (date != null && date != "" && date != new Date() ? shortDate : multimediaSelected != null && multimediaSelected != "" ? multimediaSelected :  "").toLowerCase();
        if(!_.isEmpty(filter)){
            funcs.filterTable(filter);
        }else if (artistSelected != null && artistSelected != "") {
            funcs.clearContent();
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
            if (elements == null) {
                return;
            }
            this.initMultimedia(elements);
        }
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
        funcs.initMultimedia();
    },
    clearForm:function(){
        $("#multimedia").val("");
        $("#artist").val("");
        $("#moreInfo").css('visibility', 'hidden');
    }
    
}