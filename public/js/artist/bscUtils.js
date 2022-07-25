const funcs = {  
    getArtist: function (artistSelected, actors, musician, musicalGroups) {
        let elements = actors.concat(musician).concat(musicalGroups);
        if(!_.isEmpty(artistSelected)){
            elements = _.filter(elements, function (a) {
                return a.name.toLowerCase().includes(artistSelected.toLowerCase());
            });
        }
        return elements;
    },
    initArtist:function(artists){
        if(_.isNull(artists) || _.isEmpty(artists)){
            artists = artist.actors.concat(artist.musician).concat(artist.musicalGroups);
        }
        _.each(artists,function(data){
            let row = "<tr>";
            row += "<td>" + data.name + "</td>";
            row += '<td><a href="./artist.html?artist=' + data.name + '&from=bscArtist" class="btn btn-primary" title="Ver detalle artista">Detalle <i class="fas fa-clipboard-list"></i> </a></td>'
            row += "</tr>";
            $("#artistBodyTable").append(row);
        });
    
    },

    searchArtist: function () { 
        funcs.clearContent();
        let artistSelected = $("#artist").val();
        let elements = funcs.getArtist(artistSelected, actors, musician, musicalGroups);
        $("#artistNotFound").css('display',!elements.length? 'block':'none');
        $("#artistBody").css('visibility',!elements.length? 'hidden':'visible');
        if (!elements.length) return;

        this.initArtist(elements);
    },
    clearContent: function () {
        $("#artistBodyTable").html("");
    },
    clearForm:function(){
        $("#artist").val("");
        $("#artistNotFound").css('display','none');
    }
    
}