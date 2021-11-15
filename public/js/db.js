let multimedia = {
        movies: [{
                id: 1,
                titulo: 'El Padrino I',
                clasificación: "18 16 (2011)",
                duracion: "177 minutos",
                genero: "Gánsteres Drama",
                fechaEstreno: "10 de agosto de 1972",fechaIncorporación: "2 de noviembre de 2021",
                director: 1,
                tipo:"pelicula",
                tipoArtista: "actors",
                ytubeId: "dk3yWsxddLI"
            }, {
                id: 2,
                titulo: 'El Padrino II',
                clasificación: "+13",
                duracion: "200 minutos",
                genero: "Drama Crimen",
                fechaEstreno: "12 de diciembre de 1974",fechaIncorporación: "2 de noviembre de 2021",
                director: 1,
                tipo:"pelicula",
                tipoArtista: "actors",
                ytubeId: "Kc0p8_R3140"
            }, {
                id: 3,
                titulo: 'Dementia 13',
                clasificación: "+13",
                duracion: "81 minutos",
                genero: "Terror, suspenso y cine de explotación",
                fechaEstreno: "12 de diciembre de 1963",fechaIncorporación: "2 de noviembre de 2021",
                director: 1,
                tipo:"pelicula",
                tipoArtista: "actors",
                ytubeId: "T5Lu2G0O3TA"
            },
            {
                id: 4,
                titulo: 'Apocalypse Now',
                clasificación: "R",
                duracion: "181 minutos",
                genero: "Drama Bélico Suspenso Misterio",
                fechaEstreno: "15 de agosto de 1979",fechaIncorporación: "2 de noviembre de 2021",
                director: 1,
                tipo:"pelicula",
                tipoArtista: "actors",
                ytubeId: "_Clcf3B7rh0"
            }
        ],
        series: [{
                id: 5,
                titulo: 'Cobra Kai',
                clasificación: "-",
                duracion: "22-36 minutos",
                genero: "Acción Artes marciales",
                fechaEstreno: "2 de mayo de 2018",
                fechaIncorporación: "2 de noviembre de 2021",
                director: 3,
                tipo:"serie",
                tipoArtista: "actors",
                ytubeId: "_rB36UGoP4Y"
            },
            {
                id: 6,
                titulo: 'Jaguar',
                clasificación: "-",
                duracion: "-",
                genero: "Antigua",
                fechaEstreno: "22 de septiembre de 2021",fechaIncorporación: "2 de noviembre de 2021",
                director: 3,
                tipo:"serie",
                tipoArtista: "actors",
                ytubeId: "y5tQYDTg_j0"
            },
            {
                id: 7,
                titulo: 'Sombras y Huesos',
                clasificación: "-",
                duracion: "-",
                genero: "Fantasia",
                fechaEstreno: "23 de abril de 2021",fechaIncorporación: "2 de noviembre de 2021",
                director: 5,
                tipoArtista: "actors",
                tipo:"serie",
                ytubeId: "pYNRJvWcK2A"
            },
            {
                id: 8,
                titulo: 'test',
                clasificación: "-",
                duracion: "-",
                genero: "Antigua",
                fechaEstreno: "22 de septiembre de 2021",fechaIncorporación: "2 de noviembre de 2021",
                director: 3,
                tipo:"serie",
                tipoArtista: "actors",
                ytubeId: "y5tQYDTg_j0"
            },
            {
                id: 9,
                titulo: 'test2',
                clasificación: "-",
                duracion: "-",
                genero: "Antigua",
                fechaEstreno: "22 de septiembre de 2021",fechaIncorporación: "2 de noviembre de 2021",
                director: 3,
                tipo:"serie",
                tipoArtista: "actors",
                ytubeId: "y5tQYDTg_j0"
            },
        ],
        music: [{
                id: 1,
                titulo: 'Smooth Criminal',
                artista: 3,
                album: "2001",
                tipoArtista: "musicalGroups",
                duracion: "3:30 minutos",
                genero: "Pop punk",
                multimedia:[1,2],
                fechaEstreno: "2001",fechaIncorporación: "2 de noviembre de 2021",
                ytubeId: "CDl9ZMfj6aE"
            },
            {
                id: 2,
                titulo: 'First Date',
                artista: 4,
                album: "2001",
                tipoArtista: "musicalGroups",
                duracion: "3:32 minutos",
                genero: "Pop punk",
                fechaEstreno: "2001",fechaIncorporación: "2 de noviembre de 2021",
                multimedia:[2,3],
                ytubeId: "vVy9Lgpg1m8"
            },
            {
                id: 3,
                titulo: 'I just wanna live',
                artista: 5,
                tipoArtista: "musicalGroups",
                album: "2009",
                duracion: "3:16 minutos",
                genero: "Pop punk",
                multimedia:[3,4,5],

                fechaEstreno: "2001",fechaIncorporación: "2 de noviembre de 2021",
                ytubeId: "rISYCquFeI8"
            },
            {
                id: 4,
                titulo: 'Al lado del camino',
                artista: 1,
                tipoArtista: "musician",
                album: "Renovación (1999-2004)",
                duracion: "7:16 minutos",
                genero: "Rock",
                multimedia:[2,3,6,1],
                fechaEstreno: "1999",fechaIncorporación: "2 de noviembre de 2021",
                ytubeId: "xFTvBkcXKEg"
            },
            {
                id: 5,
                titulo: 'Solo le pido a dios',
                artista: 2,
                tipoArtista: "musician",
                album: "Corazon americano",
                duracion: "5:09 minutos",
                genero: "Rock",
                multimedia:[6],
                fechaEstreno: "1985",fechaIncorporación: "2 de noviembre de 2021",
                ytubeId: "l_5MqluGbf0"
            }
        ],
        photos: [{
                src: './img/ramon/1.jpg',
                alt: 'Martin Sheen 1',
                artist: 1,
                tipoArtista: "actors"

            },
            {
                src: './img/ramon/2.jpg',
                alt: 'Martin Sheen 2',
                artist: 1,
                tipoArtista: "actors"

            }, {
                src: './img/ramon/3.jpg',
                alt: 'Martin Sheen 3',
                artist: 1,
                tipoArtista: "actors"

            },
            {
                src: './img/marlon/1.jpg',
                alt: 'Marlon Brando 1',
                artist: 2,
                tipoArtista: "actors"

            },
            {
                src: './img/marlon/2.jpg',
                alt: 'Marlon Brando 2',
                artist: 2,
                tipoArtista: "actors"

            }, {
                src: './img/marlon/3.jpg',
                alt: 'Marlon Brando 3',
                artist: 2,
                tipoArtista: "actors"

            },
            {
                src: './img/pacino/1.jpg',
                alt: 'Alfred James Pacino 1',
                artist: 3,
                tipoArtista: "actors"

            },
            {
                src: './img/pacino/2.jpg',
                alt: 'Alfred James Pacino 2',
                artist: 3,
                tipoArtista: "actors"

            }, {
                src: './img/pacino/3.jpg',
                alt: 'Alfred James Pacino 3',
                artist: 3,
                tipoArtista: "actors"

            },
            {
                src: './img/duval/1.jpg',
                alt: 'Robert Duval 1',
                artist: 5,
                tipoArtista: "actors"

            },
            {
                src: './img/duval/2.jpg',
                alt: 'Robert Duval 2',
                artist: 5,
                tipoArtista: "actors"

            }, {
                src: './img/duval/3.jpg',
                alt: 'Robert Duval 3',
                artist: 5,
                tipoArtista: "actors"

            },
            {
                src: './img/gieco/1.jpg',
                alt: 'Gieco 1',
                artist: 2,
                tipoArtista: "musician"
            },
            {
                src: './img/gieco/2.jpg',
                alt: 'Gieco 2',
                artist: 2,
                tipoArtista: "musician"
            },
            {
                src: './img/fpaez/1.jpg',
                alt: 'paez 1',
                artist: 1,
                tipoArtista: "musician"
            },
            {
                src: './img/fpaez/2.jpg',
                alt: 'paez 2',
                artist: 1,
                tipoArtista: "musician"
            },
            {
                src: './img/laruso/1.jpg',
                alt: 'laruso 1',
                artist: 7,
                tipoArtista: "actors"
            },
            {
                src: './img/laruso/2.jpg',
                alt: 'laruso 2',
                artist: 7,
                tipoArtista: "actors"
            }
        ]
    },
    artist = {
        actors: [{
                id: 1,
                name: "Ramón Antonio Gerardo Estévez",
                pais: "Estados Unidos",
                residencia: "Estados Unidos",
                fechaNacimiento: "3 de agosto de 1940 (81 años)",
                multimedia: [4],
                tipoArtista: "actors"
            },
            {
                id: 2,
                name: "Marlon Brando Jr",
                pais: "Estados Unidos",
                residencia: "-",
                fechaNacimiento: "03 de abril de 1924",
                multimedia: [1, 4],
                tipoArtista: "actors"

            },
            {
                id: 3,
                name: "Alfredo James Pacino",
                pais: "Estados Unidos",
                residencia: "Estados Unidos",
                fechaNacimiento: "25 de abril de 1940 (81 años)",
                multimedia: [1,2,4,1],
                tipoArtista: "actors"

            },
            {
                id: 5,
                name: "Robert Duvall",
                pais: "Estados Unidos",
                residencia: "Estados Unidos",
                fechaNacimiento: "5 de enero de 1931 (90 años)",
                multimedia: [1, 2, 3],
                tipoArtista: "actors"

            },
            {
                id: 6,
                name: "Emilio Estévez",
                pais: "Estados Unidos",
                residencia: "Malibu",
                fechaNacimiento: "12 de mayo de 1962 (59 años)",
                multimedia: [4],
                tipoArtista:"actors"
            },
            {
                id: 7,
                name: "Daniel Sam",
                pais: "Estados Unidos",
                residencia: "Malibu",
                fechaNacimiento: "12 de mayo de 1972",
                multimedia: [5],
                tipoArtista:"actors"
            }
        ],
        directors: [{
                id: 1,
                nombre: "Francis Ford Coppola",
                pelicula: _.filter(multimedia.movies.concat(multimedia.series), function (m) {
                    return m.director == 1;
                })
            },
            {
                id: 2,
                nombre: "Emilio Estévez",
                pelicula: _.filter(multimedia.movies.concat(multimedia.series), function (m) {
                    return m.director == 2;
                })
            },
            /*{
                id: 3,
                nombre: "Jon Hurwitz",
                pelicula: _.filter(multimedia, function (m) {
                    return m.director == 3;
                })
            },*/
            {
                id: 4,
                nombre: "Carlos Sedes",
                pelicula: _.filter(multimedia.movies.concat(multimedia.series), function (m) {
                    return m.director == 4;
                })
            },
            {
                id: 5,
                nombre: "Eric Heisserer",
                pelicula: _.filter(multimedia.movies.concat(multimedia.series), function (m) {
                    return m.director == 5;
                })
            },
            {
                id: 3,
                nombre: "test",
                pelicula: _.filter(multimedia.movies.concat(multimedia.series), function (m) {
                    return m.director == 3;
                })
            },
        ],
        musician: [{
                id: 1,
                name: "Fito Paez",
                pais: "Argentino",
                residencia: "Argentina",
                fechaNacimiento: "13 de marzo de 1963 (edad 58 años)",
                multimedia: [4,4,5,5,4],
                tipoArtista: "musician",
            },
            {
                id: 2,
                name: "Raúl Alberto Antonio Gieco",
                pais: "Argentino",
                residencia: "Argentina",
                fechaNacimiento: "20 de noviembre de 1951 (69 años)",
                multimedia: [5,4,4,5,4],
                tipoArtista: "musician",
            }
        ],
        musicalGroups: [{
                id: 3,
                name: "Alien Ant Farm",
                pais: "Estados Unidos",
                residencia: "Estados Unidos",
                fechaNacimiento: "1996",
                multimedia: [1,2,1,2,2],
                tipoArtista: "musicalGroups",
            },
            {
                id: 4,
                name: "Blink 182",
                pais: "Estados Unidos",
                residencia: "Estados Unidos",
                fechaNacimiento: "1992",
                multimedia: [2,2,2,1,1],
                tipoArtista: "musicalGroups",
            },
            {
                id: 5,
                name: "Good Charlotte",
                pais: "Estados Unidos",
                residencia: "Estados Unidos",
                fechaNacimiento: "1996",
                multimedia: [3,3,3,2,1],
                tipoArtista: "musicalGroups",
            }
        ]
    },
    rewards = {
        trophies: [{
                id: 1,
                name: "MTV Movie Awards",
                description: "Cubo de plata de la concesión por la Excelencia",
                date: "2005",
                artist: 4
            },
            {
                id: 2,
                name: "Globos de Oro",
                description: "Mejor actor de televisión en una serie dramática",
                date: "-",
                artist: 2
            },
            {
                id: 3,
                name: "Premios Emmy",
                description: "Mejor actor invitado en una serie dramática",
                date: "1994",
                artist: 1
            },
            {
                id: 4,
                name: "Premios Oscar",
                description: "Mejor actor",
                date: "1984",
                artist: 5
            },
            {
                id: 5,
                name: "Medalla",
                description: "Medalla nacional de las artes",
                date: "2005",
                artist: 5
            },
            {
                id: 5,
                name: "Gotham",
                description: "Tributo",
                date: "2010",
                artist: 5
            },
            {
                id: 6,
                name: "Premio Grammy latino",
                description: "Premio Grammy latino por mejor álbum cantautor (2008)",
                date: "2008",
                artist: 1
            },
        ]
    }