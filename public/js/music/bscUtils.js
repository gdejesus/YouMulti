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
    
    initMusic:function(music){
        if(_.isNull(music) || _.isEmpty(music)){
            music = multimedia.music;
        }
        _.each(music,function(data){
            let row = "<tr>";
            row += "<td>" + data.titulo + "</td>";
            row += "<td>" + data.fechaEstreno + "</td>";
            row += '<td><a href="./music.html?music=' + data.titulo + '" class="btn btn-primary" title="Ver detalle musica">Detalle <i class="fas fa-clipboard-list"></i> </a></td>'
            row += "</tr>";
            $("#musicBodyTable").append(row);
        });
    },
    filterTable : function(filter){
        $("#musicBodyTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(filter) > -1);
        });
    },
    getMusic: function (value, byTitle) {
        let src = multimedia.music;
        return _.filter(src, function (a) {
            return a[byTitle ? "titulo" : "genero"].toLowerCase().includes(value.toLowerCase())
        });
    },
    searchMusic: function () { 
        funcs.clearContent();
        let elements = [],
         musicArtist = $("#musicArtist").val(),
         musicGender = $("#musicGender").val(),
         musicTitle = $('#music').val();

         if (musicTitle != null && musicTitle != "") {
            elements = funcs.getMusic(musicTitle, true);
        } else if (musicGender != null && musicGender != "") {
            elements = funcs.getMusic(musicGender, false);
        }  else if (musicArtist != null && musicArtist != "") {
            let art = _.filter(artist.musician.concat(artist.musicalGroups), function (a) {
                return a.name.toLowerCase().includes(musicArtist.toLowerCase());
            });
            if (art.length) {
                _.each(art[0].multimedia, function (mult) {
                    elements.push(_.filter(multimedia.music, function (m) {
                        return m.id == mult;
                    })[0]);
                });
            }
        }
        $("#musicNotFound").css('display',!elements.length? 'block':'none');
        $("#musicBody").css('visibility',!elements.length? 'hidden':'visible');
        if (!elements.length) return;
        
        this.initMusic(elements);
    },
    clearContent: function () {
        $("#musicBodyTable").html("");
    },
    clearForm:function(){
        $("#music").val("");
        $("#musicGender").val("");
        $('#musicArtist').val("");
        $("#musicNotFound").css('display','none');
    }
    
}