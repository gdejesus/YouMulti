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
        if(_.isNull(movieSerie) || _.isEmpty(movieSerie)){
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
        let elements =  multimedia.movies.concat(multimedia.series),
         artistSelected = $("#artist").val(),
         multimediaSelected = $("#multimedia").val(),
         date = $('#datepicker').datepicker("getDate"),
         shortDate = $("#datepicker").val();
        
        let filter = (date != null && date != "" && date != new Date() ? shortDate : "").toLowerCase();
        if(!_.isEmpty(filter)){
            this.initMultimedia(elements);
            funcs.filterTable(filter);
        }else if (artistSelected != null && artistSelected != "") {
            funcs.clearContent();
            let artists = _.filter(artist.actors, function (a) {
                return a.name.toLowerCase().includes(artistSelected.toLowerCase());
            });
            if(!artists.length){
                elements =[];
            }else{
                let multimedia = [];
                _.each(artists, (art)=>{
                    _.each(art.multimedia, function (mult) {
                        multimedia.push(_.filter(elements, function (m) {
                            return m.id == mult;
                        })[0]);
                    });
                });
                elements = _.uniq(multimedia, movieSerie => movieSerie.id);
            }            
        }else if (multimediaSelected != null && multimediaSelected != "") {
            funcs.clearContent();
            elements =_.filter(elements, function (m) {
                return m.titulo.toLowerCase().includes(multimediaSelected.toLowerCase());
            });
        }
        $("#multimediaNotFound").css('display',!elements.length? 'block':'none');
        $("#moviesSeriresBody").css('visibility',!elements.length? 'hidden':'visible');
        if (!elements.length) return;

        this.initMultimedia(elements);
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
        //funcs.initMultimedia();
    },
    clearForm:function(){
        $("#multimedia").val("");
        $("#artist").val("");
        $('#datepicker').val("");
        $("#moreInfo").css('visibility', 'hidden');
        $("#multimediaNotFound").css('display','none');
    }
    
}