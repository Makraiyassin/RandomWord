const setWords = new Set([
    "Tour Eiffel",

    "Beyoncé",

    "Tesla",

    "Harry Potter",

    "Avocado",

    "Amazon",

    "Las Vegas",

    "Big Ben",

    "Louis Vuitton",

    "McDonald's",

    "Netflix",

    "Serena Williams",

    "Mona Lisa",

    "Star Wars",

    "Monopoly",

    "Gucci",

    "Pyramides",

    "Cléopâtre",

    "Friends (série TV)",

    "iPhone",

    "Barack Obama",

    "Ferrari",

    "Facebook",

    "Coca-Cola",

    "Amazonie",

    "James Bond",

    "Kinder",

    "Poudlard",

    "Tour de France",

    "Croissant",

    "Louboutin",

    "Shakira",

    "Halloween",

    "Ikea",

    "Venise",

    "Youtube",

    "La Joconde",

    "Google",

    "Disneyland",

    "Iron Man",

    "Super Mario",

    "Michel-Ange",

    "Porsche",

    "Marseille",

    "Hollywood",

    "Dwayne Johnson",

    "Playstation",

    "Chocolatine",

    "Notre-Dame",

    "Titanic",

    "Selena Gomez",

    "Spiderman",

    "Coachella",

    "Amazon Prime",

    "Stromae",

    "Birkin (sac)",

    "Pac-Man",

    "Taj Mahal",

    "Lionel Messi",

    "Nutella",

    "Eminem",

    "Einstein",

    "Game of Thrones",

    "New York",

    "McLaren",

    "Zidane",

    "Starbucks",

    "Lady Gaga",

    "Star Trek",

    "Chanel",

    "Rolex",

    "Frida Kahlo",

    "Le Caire",

    "Cannes",

    "Tinder",

    "Poutine",

    "Napoléon",

    "Malala",

    "Los Angeles",

    "Super Bowl",

    "Leonardo DiCaprio",

    "Lamborghini",

    "Google Maps",

    "Audrey Hepburn",

    "Wembley",

    "Burger King",

    "Cristiano Ronaldo",

    "Kylian Mbappé",

    "Canada",

    "Barbie",

    "Elon Musk",

    "Paris",

    "Red Bull",

    "Victoria's Secret",

    "Woodstock",

    "AirPods",

    "Billie Eilish",

    "Picasso",

    "David Beckham",

    "Brooklyn",

    "Google Earth",

    "Fortnite",

    "Puma",

    "Claude Monet",

    "Da Vinci",

    "Nike",

    "Platon",

    "Mohamed Ali",

    "Texas",

    "Golden Gate",

    "Justine Bieber",

    "Shrek",

    "Led Zeppelin",

    "Grotte de Lascaux",

    "Coupe du Monde",

    "Rock'n'Roll",

    "Scarlett Johansson",

    "Superman",

    "Vogue",

    "Céline Dion",

    "Hermès",

    "Karl Lagerfeld",

    "Empire State Building",

    "Thomas Pesquet",

    "Airbnb",

    "Maserati",

    "Met Gala",

    "Spotify",

    "Beethoven",

    "Molière",

    "Champions League",

    "Toyota",

    "Café de Flore",

    "Hôtel de Ville",

    "Breaking Bad",

    "Red Carpet",

    "Johnny Hallyday",

    "Pizza Margherita",

    "Dubaï",

    "Yoda",

    "Queen",

    "Air France",

    "BTS",

    "Montmartre",

    "Téléphone",

    "Mad Max",

    "Dior",

    "Patrick Bruel",

    "Brooklyn Bridge",

    "Samsung",

    "Neymar",

    "Renault",

    "Justin Trudeau",

    "Karl Marx",

    "Angleterre",

    "Vikings",

    "Twitter",

    "Johnny Depp",

    "Seine",

    "Xbox",

    "Madone",

    "Nike Air",

    "Tokyo",

    "The Beatles",

    "Al Pacino",

    "Baobab",

    "Tour Montparnasse",

    "Uber",

    "Rosetta Stone",

    "Billie Jean",

    "Chaplin",

    "Van Gogh",

    "Nintendo",

    "Alaska",

    "Sushi",

    "Clint Eastwood",

    "Astérix",

    "Minecraft",

    "Niagara",

    "Shakespeare",

    "Daft Punk",

    "Tour de Pise",

    "Bruce Lee",

    "KFC",

    "McFly",

    "Amazon Alexa",

    "Hercule",

    "Ben Affleck",

    "Lego",

    "Marilyn Monroe",

    "Mount Fuji",

    "Coldplay",

    "L'Arc de Triomphe",

    "Angelina Jolie",

    "Versailles",

    "Bob Marley",

    "Place Rouge",

    "Route 66",

    "Batman",

    "Julia Roberts",

    "Casanova",

    "Mars",

    "Orsay",

    "Les Simpson",

    "Jay-Z",

    "Sherlock Holmes",

    "E.T.",

    "Milka",

    "Moonwalk",

    "Muhammad Ali",

    "Avenue des Champs-Élysées",

    "Matrix",

    "Jurassic Park",

    "Grand Canyon",

    "Wonder Woman",

    "Bob Dylan",

    "Rolling Stones",

    "Casablanca",

    "Goku",

    "Frozen",

    "Dolce & Gabbana",

    "Game Boy",

    "Pompéi",

    "Freddie Mercury",

    "Champagne",

    "Instagram",

    "Giza",

    "Cendrillon",

    "Birmanie",

    "Tiramisu",

    "Salvador Dali",

    "Scarlett",

    "E=mc²",

    "Broadway",

    "Homer Simpson",

    "Mont Blanc",

    "Nostradamus",

    "Minions",

    "Haribo",

    "Mahatma Gandhi",

    "Audrey Tautou",

    "Aquarium",

    "Kremlin",

    "Hawaï",

    "Casino Royale",

    "Black Panther",

    "Atlantis",

    "Pizza Hut",

    "Fiat",

    "Hulk",

    "Popeye",

    "Foot Locker",

    "Antartica",

    "Bretzel",

    "Nabilla",

    "Catacombes",

    "Bluetooth",

    "Rasputin",

    "Johnny Cash",

    "Kung Fu",

    "Opéra Garnier",

    "Himalaya",

    "Michael Jackson",

    "Alibaba",

    "Boeing",

    "Gladiateur",

    "San Francisco",

    "Jimi Hendrix",

    "Sneakers",

    "Avatar",

    "Nirvana",

    "Moscou",

    "Olive et Tom",

    "Gaudi",

    "Apple Store",

    "Steve Jobs",

    "Narnia",

    "Marsupilami",

    "Cold War",

    "Orange mécanique",

    "Schwarzenegger",

    "Olympia",

    "Safari",

    "Pink Floyd",

    "Rafael Nadal",

    "Vésuve",

    "Mustang",

    "Black Mamba",

    "Marco Polo",

    "Alcatraz",

    "Moulin Rouge",

    "Mary Poppins",

    "Gainsbourg",

    "Pantheon",

    "Manhattan",

    "Adidas",

    "Pacifique",

    "Miami Beach",

    "Mark Zuckerberg",

    "Lion King",

    "Scorpion",

    "Rubik's Cube",

    "Sagrada Familia",

    "Chopin",

    "The Crown",

    "Berlin",

    "Mafia",

    "Da Vinci Code",

    "Armageddon",

    "Rodin",

    "Les Misérables",

    "Caviar",

    "Empereur",

    "Basketball",

    "Apollon",

    "Hubble",

    "Richard Branson",

    "Pyramides de Gizeh",

    "Messi",

    "Ghandi",

    "Vercingétorix",

    "Burj Khalifa",

    "Cro-Magnon",

    "Playmobil",

    "Phantom",

    "Walt Disney",

    "Pandémie",

    "Croatie",

    "Escher",

    "Velázquez",

    "Rockefeller",

    "Nessie",

    "Forêt Amazonienne",

    "Crocs",

    "Palm Springs",

    "Maharaja",

    "Versace",

    "Fast and Furious",

    "Bayonne",

    "Amazon Rainforest",

    "Apollo 11",

    "Fado",

    "Captain America",

    "Coupe d'Europe",

    "Don Quichotte",

    "Art déco",

    "TGV",

    "Mobydick",

    "Zorro",

    "Via Ferrata",

    "Pop Art",

    "Sourire de Mona Lisa",

    "Aladdin",

    "Singapour",

    "Emirats Arabes Unis",

    "Métro",

    "Canal de Suez",

    "Hamlet",

    "Super Nintendo",

    "Cristal",

    "Alexandre Le Grand",

    "Copenhague",

    "Grande Muraille",

    "Héraclès",

    "Tetris",

    "Neptune",

    "Pina Colada",

    "Aquaman",

    "Les Tontons Flingueurs",

    "Reine Elizabeth",

    "Espace",

    "Licorne",

    "Histoire sans fin",

    "Dr. Dre",

    "Bounty",

    "Bora Bora",

    "Blue Lagoon",

    "Rennes",

    "Bretagne",

    "Abeille",

    "Roi Soleil",

    "Valentino",

    "Naples",

    "Kung Fu Panda",

    "Révolution Française",

    "Amphithéâtre",

    "Dragon Ball",

    "Cyclope",

    "Stalagmite",

    "Galilée",

    "Jules Verne",

    "Andromède",

    "Zèbre",

    "Dolmen",

    "X-Men",

    "Sicile",

    "Chupa Chups",

    "Gladiator",

    "Aladin",

    "Tahiti",

    "Ratatouille",

    "Vancouver",

    "Ibiza",

    "Excalibur",

    "Gizeh",

    "Kilimandjaro",

    "Atlantique",

    "Alexandre Dumas",

    "Toboggan",

    "Pommes de Terre",

    "Londres",

    "Fjord",

    "Théâtre",

    "Bordeaux",

    "Amélie Poulain",

    "Gargantua",

    "Magellan",

    "Odysée",

    "Bruxelles",

    "Spartacus",

    "Tabasco",

    "Liberté",

    "César",

    "Figaro",

    "Rose des Vents",

    "Eau de Javel",

    "Rocamadour",

    "Amazon River",

    "Tintin",

    "Saut de l'ange",

    "Naruto",

    "Colisée",

    "Temple de Salomon",

    "Taj Mahal",

    "Opéra",

    "Accordéon",

    "Octopus",

    "Tsar",

    "Phénix",

    "Atlantide",

    "Tintin et Milou",

    "Machu Picchu",

    "Madagascar",

    "Moët et Chandon",

    "Nouvelle Orléans",

    "Paon",

    "Fenêtre sur cour",

    "Adonis",

    "Soleil levant",

    "Papillon",

    "Douarnenez",

    "Duc de Normandie",

    "Pégase",

    "Couronne d'Angleterre",

    "Capitaine Crochet",

    "Anaconda",

    "Cathédrale",

    "Périgord",

    "Arc de Triomphe",

    "Bagheera",

    "Coyote",

    "Aurore Boréale",

    "Les Mystérieuses Cités d'Or",

    "Chutes du Niagara",

    "Éclipse",

    "Tristan et Iseult",

    "Amazone",

    "Pyramide de Khéops",

    "Cyclone",

    "Renaissance",

    "La Fontaine",

    "Lancelot",

    "Ulysse",

    "Orion",

    "Tempête",

    "Pic du Midi",

    "Carcassonne",

    "Bayeux",

    "Monte Cristo",

    "Mont Saint-Michel",

    "Vercors",

    "Grotte de Chauvet",

    "Toundra",

    "Carthage",

    "Cap Canaveral",

    "Baguette magique",

    "Muse",

    "Dauphin",

    "Raphaël",

    "Christophe Colomb",

    "Rosa Parks",

    "Vague",

    "Moby Dick",

    "Eau vive",

    "Lune",

    "Meiji",

    "Tigre",

    "Détroit de Gibraltar",

    "Neptune",

    "Everest",

    "Vénus",

    "Opéra de Sydney",

    "Louvre",

    "Wakanda",

    "Mont Fuji",

    "Observatoire",

    "Pavillon",

    "Sirius",

    "Roi Lion",

    "Empire Romain",

    "Caravelle",

    "Esquimau",

    "Bacchus",

    "Caprice",

    "Olympe",

    "Cité Interdite",

    "Saint Graal",

    "Mandala",

    "Uranus",

    "Orage",

    "Corne de l'Afrique",

    "Griffon",

    "Tombeau",

    "Pyramide de Saqqarah",

    "Sphinx",

    "Volcan",

    "Laos",

    "Indus",

    "Route de la Soie",

    "Bivouac",

    "Tsé-tsé",

    "Jungle",

    "Cristal de roche",

    "Symphonie",

    "Mont Olympe",

    "Atlas",

    "Pic de l'Aneto",

    "Désert de Gobi",

    "Révolution Industrielle",

    "Eléphant",

    "Cathédrale de Reims",

    "Mer Noire",

    "Pyramides d'Égypte",

    "Khéops",

    "Renaissance Italienne",

    "Sahara",

    "Orée des Bois",

    "Stalactite",

    "Montagnes Rocheuses",

    "Planisphère",

    "Empire Ottoman",

    "Basque",

    "Yeti",

    "K2",

    "Galapagos",

    "Liban",

    "Océan Atlantique",

    "Rubis",

    "Rhin",

    "Alpes",

    "Cristaux de glace",

    "Tempête de neige",

    "Himalaya",

    "Japon",

    "Sardine",

    "Iroquois",

    "Pyramide de Gizeh",

    "Béarn",

    "Inuits",

    "Perle de Tahiti",

    "Monastère",

    "Bosquets",

    "Manchot",

    "Californie",

    "Sardaigne",

    "Îles Canaries",

    "Edelweiss",

    "Prague",

    "Grenade",

    "Polynésie",

    "Montagnes des Pyrénées",

    "Bivouac",

    "Géode",

    "Sommet Annapurna",

    "Bosphore",

    "Panthéon",

    "Marathon",

    "Monarque",

    "Temples Bouddhistes",

    "Mer de Corail",

    "Cervin",

    "Fjord de Norvège",

    "Bosquet de bambous",

    "Pharaon",

    "Grand Canyon",

    "Baie d'Ha Long",

    "Montagne Sainte-Victoire",

    "Abeille d'or",

    "Orque",

    "Les Quatre Saisons",

    "Titanesque",

    "Dolmen de Carnac",

    "Vitrail",

    "Pyramide des âges",

    "Tropical",

    "Alpaga",

    "Geyser",

    "Marée",

    "Nuage",

    "Eruption",

    "Papyrus",

    "Gorille",

    "Sahel",

    "Sénégal",

    "Banquise",

    "Vallée de la Mort",

    "Lagon",

    "Ceylan",

    "Alcazar",

    "Astroboy",

    "Baleine",

    "Broadway",

    "Cactus",

    "Concorde",

    "Dalmatien",

    "Espresso",

    "Freddie Mercury",

    "Garnier",

    "Hélicoptère",

    "Indiana Jones",

    "Jumanji",

    "King Kong",

    "Lacoste",

    "MacGyver",

    "Neige",

    "Oasis",

    "Pélican",

    "Quick",

    "Ruban",

    "Snorky",

    "T-Rex",

    "U2",

    "Valhalla",

    "Wifi",

    "Xéna",

    "Yasmina Khadra",

    "Zelda",

    "Arbre à pain",

    "Ballerine",

    "Casque",

    "Drapeau",

    "Eruption",

    "Fort Boyard",

    "Globe",

    "Hôtel",

    "Ivoire",

    "Joystick",

    "Klaxon",

    "Lama",

    "Mobylette",

    "Norvège",

    "Panthère",

    "Quenelle",

    "Radio",

    "Sable",

    "Tom & Jerry",

    "UFO",

    "Violette",

    "Whisky",

    "Youtubeur",

    "Zircon",

    "Arbalète",

    "Béluga",

    "Casimir",

    "Dinghy",

    "Ecureuil",

    "Faucon",

    "Geyser",

    "Hologramme",

    "Incas",

    "Karma",

    "Meringue",

    "Nefertiti",

    "Orchidée",

    "Pinata",

    "Quartz",

    "Raclette",

    "Sarcophage",

    "Trident",

    "Unicorn",

    "Velib",

    "Wagyu",

    "Xerus",

    "Yeti",

    "Zodiaque",

    "Aborigènes",

    "Baguette",

    "Carnaval",

    "Désert",

    "Emeraude",

    "Friteuse",

    "Glace",

    "Hamac",

    "Insecticide",

    "Jasmin",

    "Kangourou",

    "Lune de miel",

    "Maki",

    "Nénuphar",

    "Océan",

    "Palmier",

    "Quark",

    "Radeau",

    "Salamandre",

    "Tambour",

    "Uranium",

    "Verre pilé",

    "Webcam",

    "Xylophone",

    "Ziggourat",

    "Anguille",

    "Bambou",

    "Caravanes",

    "Dauphin",

    "Elixir",

    "Flamant rose",

    "Gondole",

    "Hamster",

    "Immortelle",

    "Jarre",

    "Kiwi",

    "Lait de coco",

    "Maracas",

    "Nautilus",

    "Oliviers",

    "Paquebot",

    "Quicksilver",

    "Rizière",

    "Serpentine",

    "Trampoline",

    "Urubu",

    "Vortex",

    "Web",

    "Yack",

    "Zebre",

    "Ammonite",

    "Bison",

    "Chapeau",

    "Déluge",

    "Eternité",

    "Flamenco",

    "Goudron",

    "Houblon",

    "Igloo",

    "Jaguar",

    "Kabbale",

    "Liane",

    "Magma",

    "Nautique",

    "Oryx",

    "Pampelmousse",

    "Quinoa",

    "Ravin",

    "Sapin",

    "Taureau",

    "Urne",

    "Voyageur",

    "Winch",

    "Xanadu",

    "Yaourt",

    "Zazie",

    "Asphalte",

    "Blason",

    "Castor",

    "Dunes",

    "Envolée",

    "Fantôme",

    "Guitare",

    "Houle",

    "Icare",

    "Jalousie",

    "Kayak",

    "Luciole",

    "Moustique",

    "Noix de cajou",

    "Opium",

    "Plongeoir",

    "Quai",

    "Radar",

    "Souffle",

    "Tuba",

    "Uni",

    "Vision",

    "Week-end",

    "Xérès",

    "Yuzu",

    "Zigzag",

    "Alchimie",

    "Bois flotté",

    "Capeline",

    "Dragonfly",

    "Echelle",

    "Forêt vierge",

    "Glaçon",

    "Hublot",

    "Ivoire",

    "Jambe de bois",

    "Koré",

    "Lentille",

    "Machine à écrire",

    "Narval",

    "Ours blanc",

    "Paysan",

    "Quartz rose",

    "Suricate",

    "Abra",

    "Bélier",

    "Capitaine",

    "Détroit",

    "Fouet",

    "Gâteau",

    "Héron",

    "Inuit",

    "Javelot",

    "Kraken",

    "Lanterne",

    "Méduse",

    "Naga",

    "Océanographie",

    "Pétrole",

    "Quasar",

    "Refuge",

    "Souk",

    "Trophée",

    "Vaisseau",

    "Wave",

    "Xénomorphe",

    "Yaourt nature",

    "Zébu",

    "Agave",

    "Bidonville",

    "Corail",

    "Dragon",

    "Escalier",

    "Félin",

    "Grillon",

    "Hache",

    "Igname",

    "Jardin",

    "Loup",

    "Montgolfière",

    "Nymphe",

    "Orchidée",

    "Pavot",

    "Quiche",

    "Rame",

    "Sphinx",

    "Tramway",

    "Ure",

    "Voilier",

    "Wok",

    "Xyloïdine",

    "Yole",

    "Zizi",

    "Acajou",

    "Bison",

    "Ciel",

    "Dentelle",

    "Émeraude",

    "Fougère",

    "Gorille",

    "Huitre",

    "Iguane",

    "Jambon",

    "Kilo",

    "Lac",

    "Moustache",

    "Neige",

    "Oléoduc",

    "Pierre",

    "Queue",

    "Roc",

    "Sapin",

    "Talon",

    "Urgence",

    "Valise",

    "Windy",

    "Xenon",

    "Youpi",

    "Zigzaguer",

    "Ananas",

    "Bougie",

    "Cristal",

    "Dauphin",

    "Éclipse",

    "Feuillage",

    "Globe terrestre",

    "Houle",

    "Île",

    "Joyau",

    "Koala",

    "Lame",

    "Métronome",

    "Nocturne",

    "Outillage",

    "Paillette",

    "Quatuor",

    "Ruche",

    "Souffleur",

    "Tableau",

    "Urne",

    "Violette",

    "Xénon",

    "Yeti",

    "Zodiaque",

    "Amplitude",

    "Boussole",

    "Carte",

    "Drapeau",

    "Enigme",

    "Fée",

    "Grotte",

    "Hérisson",

    "Ignition",

    "Jardinier",

    "Kraken",

    "Lotus",

    "Marmotte",

    "Nénuphar",

    "Oxydation",

    "Parasol",

    "Quintuple",

    "Requin",

    "Sonar",

    "Trône",

    "Urubu",

    "Ventouse",

    "Wangari",

    "Xylographe",

    "Yucca",

    "Zinnia",

    "Abat-jour",

    "Ballon",

    "Cygne",

    "Désert",

    "Encre",

    "Feuilles",

    "Gourde",

    "Hippopotame",

    "Insecte",

    "Jumeaux",

    "Karaté",

    "Liane",

    "Médaille",

    "Noyau",

    "Ours",

    "Péninsule",

    "Quiche",

    "Rando",

    "Sablier",

    "Tracteur",

    "Unité",

    "Volcan",

    "Wagyu",

    "Xylophone",

    "Yuka",

    "Zouk",

    "Amour",

    "Blanchisserie",

    "Chat",

    "Dés",

    "Étoile",

    "Foule",

    "Garçon",

    "Homme",

    "Idée",

    "Jambe",

    "Kiwi",

    "Lancer",

    "Manteau",

    "Neige",

    "Oiseau",

    "Pompier",

    "Quark",

    "Rose",

    "Sol",

    "Thon",

    "Urgence",

    "Voix",

    "Wagon",

    "Xylophone",

    "Yogourt",

    "Zéro",

    "Ampleur",

    "Bénéfice",

    "Crâne",

    "Délire",

    "Empreinte",

    "Forêt",

    "Gagnant",

    "Héros",

    "Invention",

    "Joie",

    "Kinésithérapeute",

    "Légende",

    "Miroir",

    "Numéro",

    "Option",

    "Poussin",

    "Quête",

    "Rideau",

    "Spectacle",

    "Tissu",

    "Le Seigneur des Anneaux",

    "Harry Potter",

    "Game of Thrones",

    "Breaking Bad",

    "La Casa de Papel",

    "Stranger Things",

    "Narcos",

    "Friends",

    "How I Met Your Mother",

    "Les Simpsons",

    "Avengers",

    "Titanic",

    "Forrest Gump",

    "Gladiator",

    "Le Roi Lion",

    "Shrek",

    "Intouchables",

    "Bienvenue chez les Ch'tis",

    "Amélie Poulain",

    "La Haine",

    "Kaamelott",

    "Astérix et Obélix : Mission Cléopâtre",

    "OSS 117 : Le Caire, nid d'espions",

    "Spider-Man",

    "Batman : The Dark Knight",

    "Inception",

    "Matrix",

    "Avatar",

    "Jurassic Park",

    "Star Wars",

    "Pirates des Caraïbes",

    "Les Bronzés font du ski",

    "Les Visiteurs",

    "Le Fabuleux Destin d'Amélie Poulain",

    "Deadpool",

    "Iron Man",

    "Thor",

    "Les Tuches",

    "La Grande Vadrouille",

    "Le Dîner de Cons",

    "The Walking Dead",

    "Dexter",

    "Vikings",

    "The Witcher",

    "Squid Game",

    "Black Mirror",

    "The Crown",

    "Sherlock",

    "Lupin",

    "Emily in Paris",

    "Peaky Blinders",

    "Westworld",

    "Doctor Who",

    "Les Gendarmes de Saint-Tropez",

    "Le Cinquième Élément",

    "Taken",

    "Les Choristes",

    "Taxi",

    "Fast and Furious",

    "Rocky",

    "Rambo",

    "Léon",

    "The Big Bang Theory",

    "Mad Men",

    "Malcolm",

    "Les Sopranos",

    "House of Cards",

    "24 Heures Chrono",

    "Prison Break",

    "Buffy contre les vampires",

    "Charmed",

    "Scrubs",

    "Grey's Anatomy",

    "ER (Urgences)",

    "Lost",

    "Desperate Housewives",

    "Gossip Girl",

    "Supernatural",

    "The Office",

    "Parks and Recreation",

    "Community",

    "Modern Family",

    "Homeland",

    "True Detective",

    "Big Little Lies",

    "Money Heist (La Casa de Papel)",

    "Le Hobbit",

    "Le Parrain",

    "Pulp Fiction",

    "Reservoir Dogs",

    "Kill Bill",

    "Django Unchained",

    "Les Évadés",

    "Se7en",

    "Fight Club",

    "The Social Network",

    "Bohemian Rhapsody",

    "La La Land",

    "Whiplash",

    "Parasite",

    "Joker",

    "Chat",

    "Chien",

    "Lion",

    "Tigre",

    "Éléphant",

    "Girafe",

    "Hippopotame",

    "Rhinocéros",

    "Zèbre",

    "Crocodile",

    "Alligator",

    "Ours brun",

    "Ours polaire",

    "Loup",

    "Renard",

    "Cerf",

    "Biche",

    "Sanglier",

    "Lapin",

    "Lièvre",

    "Ecureuil",

    "Castor",

    "Rat",

    "Souris",

    "Hamster",

    "Chauve-souris",

    "Dauphin",

    "Requin",

    "Baleine",

    "Orque",

    "Poisson-clown",

    "Poisson rouge",

    "Méduse",

    "Raie manta",

    "Crabe",

    "Homard",

    "Hérisson",

    "Panda",

    "Koala",

    "Kangourou",

    "Otarie",

    "Manchot",

    "Pingouin",

    "Aigle",

    "Faucon",

    "Hibou",

    "Chouette",

    "Corbeau",

    "Pie",

    "Moineau",

    "Colibri",

    "Perroquet",

    "Canari",

    "Autruche",

    "Flamant rose",

    "Poule",

    "Coq",

    "Dinde",

    "Oie",

    "Canard",

    "Cygne",

    "Cheval",

    "Âne",

    "Zébu",

    "Vache",

    "Taureau",

    "Bélier",

    "Mouton",

    "Chèvre",

    "Porc",

    "Sanglier",

    "Lémurien",

    "Chimpanzé",

    "Gorille",

    "Orang-outan",

    "Babouin",

    "Toucan",

    "Piranha",

    "Serpent",

    "Python",

    "Cobra",

    "Vipère",

    "Caméléon",

    "Iguane",

    "Gecko",

    "Tortue",

    "Grenouille",

    "Crapaud",

    "Fourmi",

    "Abeille",

    "Guêpe",

    "Moustique",

    "Papillon",

    "Chenille",

    "Escargot",

    "Limace",

    "Étoile de mer",

    "Hippocampe",

    "Jules César",

    "Alexandre le Grand",

    "Napoléon Bonaparte",

    "Cléopâtre",

    "Marie Curie",

    "Albert Einstein",

    "Isaac Newton",

    "Galilée",

    "Léonard de Vinci",

    "Michel-Ange",

    "Vincent van Gogh",

    "Pablo Picasso",

    "Wolfgang Amadeus Mozart",

    "Ludwig van Beethoven",

    "Johann Sebastian Bach",

    "William Shakespeare",

    "Victor Hugo",

    "Charles Dickens",

    "Honoré de Balzac",

    "Voltaire",

    "Jean-Jacques Rousseau",

    "Socrate",

    "Platon",

    "Aristote",

    "Confucius",

    "Bouddha",

    "Jésus-Christ",

    "Mahomet",

    "Martin Luther King Jr.",

    "Nelson Mandela",

    "Mahatma Gandhi",

    "Che Guevara",

    "Karl Marx",

    "Friedrich Engels",

    "Vladimir Lénine",

    "Joseph Staline",

    "Adolf Hitler",

    "Winston Churchill",

    "Franklin D. Roosevelt",

    "John F. Kennedy",

    "Abraham Lincoln",

    "George Washington",

    "Simon Bolivar",

    "Sun Tzu",

    "Gengis Khan",

    "Attila",

    "Joan of Arc",

    "Catherine de Médicis",

    "Élisabeth Ire",

    "Marie-Antoinette",

    "Louis XIV",

    "Charlemagne",

    "Charles de Gaulle",

    "Jacques Cartier",

    "Christophe Colomb",

    "Amerigo Vespucci",

    "Marco Polo",

    "Ferdinand Magellan",

    "Neil Armstrong",

    "Youri Gagarine",

    "Alan Turing",

    "Ada Lovelace",

    "Steve Jobs",

    "Bill Gates",

    "Thomas Edison",

    "Nikola Tesla",

    "Alexander Graham Bell",

    "Benjamin Franklin",

    "James Watt",

    "Henry Ford",

    "Wright Brothers",

    "Hippocrate",

    "Sigmund Freud",

    "Carl Jung",

    "Florence Nightingale",

    "Clara Barton",

    "Mère Teresa",

    "Jeanne Calment",

    "Charles Darwin",

    "Gregor Mendel",

    "Louis Pasteur",

    "Joseph Lister",

    "André-Marie Ampère",

    "Antoine Lavoisier",

    "René Descartes",

    "Blaise Pascal",

    "Immanuel Kant",

    "Friedrich Nietzsche",

    "Jean-Paul Sartre",

    "Simone de Beauvoir",

    "Confucius",

    "Érasme",

    "Thomas More",

    "John Locke",

    "Adam Smith",

    "David Ricardo",

    "Francis Bacon",

    "Georges Clemenceau",

    "Theodore Roosevelt",

    "Sherlock Holmes",

    "Harry Potter",

    "Frodon Sacquet",

    "Aragorn",

    "Gandalf",

    "Legolas",

    "Bilbo Baggins",

    "Darth Vader",

    "Luke Skywalker",

    "Yoda",

    "Leia Organa",

    "Han Solo",

    "Obi-Wan Kenobi",

    "Chewbacca",

    "James Bond",

    "Indiana Jones",

    "Lara Croft",

    "Jon Snow",

    "Daenerys Targaryen",

    "Tyrion Lannister",

    "Cersei Lannister",

    "Walter White",

    "Jesse Pinkman",

    "Homer Simpson",

    "Marge Simpson",

    "Bart Simpson",

    "Lisa Simpson",

    "Maggie Simpson",

    "Rick Sanchez",

    "Morty Smith",

    "Tony Stark (Iron Man)",

    "Steve Rogers (Captain America)",

    "Thor",

    "Bruce Banner (Hulk)",

    "Natasha Romanoff (Black Widow)",

    "Clint Barton (Hawkeye)",

    "Black Panther",

    "Spider-Man (Peter Parker)",

    "Doctor Strange",

    "Wanda Maximoff",

    "Vision",

    "Thanos",

    "Batman (Bruce Wayne)",

    "The Joker",

    "Superman (Clark Kent)",

    "Wonder Woman (Diana Prince)",

    "Aquaman (Arthur Curry)",

    "The Flash (Barry Allen)",

    "Green Lantern (Hal Jordan)",

    "Catwoman",

    "Harley Quinn",

    "Robin (Dick Grayson)",

    "Alfred Pennyworth",

    "Shrek",

    "Fiona",

    "Donkey",

    "Puss in Boots",

    "Simba",

    "Mufasa",

    "Scar",

    "Nala",

    "Timon",

    "Pumbaa",

    "Elsa",

    "Anna",

    "Olaf",

    "Kristoff",

    "Sven",

    "Woody",

    "Buzz Lightyear",

    "Mr. Incredible",

    "Elastigirl",

    "Frozone",

    "Violet Parr",

    "Dash Parr",

    "Jack-Jack Parr",

    "Hercule Poirot",

    "Miss Marple",

    "Paddington Bear",

    "Winnie the Pooh",

    "Piglet",

    "Tigger",

    "Eeyore",

    "Christopher Robin",

    "Dora the Explorer",

    "Swiper",

    "Sonic the Hedgehog",

    "Mario",

    "Luigi",

    "Princess Peach",

    "Bowser",

    "Link",

    "Zelda",

    "Kirby",

    "Donkey Kong",

    "Pikachu",

    "Charizard",

    "Ash Ketchum",

    "Misty",

    "Brock",

    "Pizza Margherita",

    "Spaghetti Carbonara",

    "Lasagnes",

    "Raviolis",

    "Risotto",

    "Tiramisu",

    "Penne Arrabbiata",

    "Fettuccine Alfredo",

    "Gnocchis",

    "Pesto alla Genovese",

    "Bouillabaisse",

    "Cassoulet",

    "Coq au Vin",

    "Boeuf Bourguignon",

    "Ratatouille",

    "Quiche Lorraine",

    "Soupe à l'oignon",

    "Croque-Monsieur",

    "Crêpes",

    "Galettes",

    "Poulet Basquaise",

    "Tartiflette",

    "Raclette",

    "Fondue Savoyarde",

    "Choucroute",

    "Blanquette de Veau",

    "Gratin Dauphinois",

    "Hachis Parmentier",

    "Filet Mignon",

    "Magret de Canard",

    "Foie Gras",

    "Escargots de Bourgogne",

    "Couscous",

    "Tajine",

    "Pastilla",

    "Briouates",

    "Paella",

    "Tortilla de Patatas",

    "Gazpacho",

    "Churros",

    "Empanadas",

    "Bacalhau à Brás",

    "Feijoada",

    "Acarajé",

    "Poutine",

    "Tourtière",

    "Clam Chowder",

    "Mac and Cheese",

    "Hamburger",

    "Hot Dog",

    "Cheesecake",

    "Brownies",

    "Apple Pie",

    "Steak Frites",

    "Fish and Chips",

    "Shepherd's Pie",

    "Chicken Tikka Masala",

    "Butter Chicken",

    "Naan",

    "Biryani",

    "Samosas",

    "Momos",

    "Dim Sum",

    "Sushi",

    "Ramen",

    "Tempura",

    "Okonomiyaki",

    "Katsu Curry",

    "Bibimbap",

    "Kimchi",

    "Bulgogi",

    "Pho",

    "Banh Mi",

    "Spring Rolls",

    "Pad Thai",

    "Tom Yum",

    "Green Curry",

    "Satay",

    "Laksa",

    "Nasi Goreng",

    "Baklava",

    "Moussaka",

    "Souvlaki",

    "Tzatziki",

    "Dolmas",

    "Kebab",

    "Falafel",

    "Hummus",

    "Taboulé",

    "Shakshuka",

    "Baba Ganoush",

    "Pierogi",

    "Goulash",

    "Strudel",

    "Sachertorte",

    "Bratwurst",

    "Sauerkraut",

    "Pretzel",

    "Black Forest Cake"
]);

const setPersons = new Set([
    "Cléopâtre",

    "Napoléon Bonaparte",

    "Louis XIV",

    "Marie-Antoinette",

    "Jeanne d'Arc",

    "Charlemagne",

    "Voltaire",

    "Victor Hugo",

    "Léonard de Vinci",

    "Jules César",

    "Winston Churchill",

    "Mahatma Gandhi",

    "Nelson Mandela",

    "Adolf Hitler",

    "Che Guevara",

    "Albert Einstein",

    "Nikola Tesla",

    "Sigmund Freud",

    "Karl Marx",

    "Rosa Parks",

    "Pablo Picasso",

    "Salvador Dalí",

    "Michel-Ange",

    "Claude Monet",

    "Vincent Van Gogh",

    "Frida Kahlo",

    "Paul Cézanne",

    "Émile Zola",

    "Charles Baudelaire",

    "Gustave Flaubert",

    "Marcel Proust",

    "Molière",

    "Antoine de Saint-Exupéry",

    "Jean-Paul Sartre",

    "Albert Camus",

    "Jacques Prévert",

    "Honoré de Balzac",

    "Georges Simenon",

    "Alexandre Dumas",

    "Rimbaud",

    "Édith Piaf",

    "Johnny Hallyday",

    "Céline Dion",

    "Claude François",

    "Charles Aznavour",

    "Michel Sardou",

    "Stromae",

    "Jean Dujardin",

    "Marion Cotillard",

    "Omar Sy",

    "Gad Elmaleh",

    "Florence Foresti",

    "Dany Boon",

    "Kev Adams",

    "Angèle",

    "Lomepal",

    "Zaz",

    "Vanessa Paradis",

    "Guillaume Canet",

    "Zinedine Zidane",

    "Kylian Mbappé",

    "Lionel Messi",

    "Cristiano Ronaldo",

    "Serena Williams",

    "Roger Federer",

    "Rafael Nadal",

    "Tony Parker",

    "Teddy Riner",

    "Usain Bolt",

    "Michael Jordan",

    "Diego Maradona",

    "Pelé",

    "Novak Djokovic",

    "Simone Biles",

    "Laure Manaudou",

    "Alain Prost",

    "Ayrton Senna",

    "Michael Schumacher",

    "Martin Fourcade",

    "Marie Curie",

    "Pierre Curie",

    "Louis Pasteur",

    "Thomas Edison",

    "Charles Darwin",

    "Stephen Hawking",

    "Isaac Newton",

    "Alan Turing",

    "Galileo Galilei",

    "Neil Armstrong",

    "Buzz Aldrin",

    "Elon Musk",

    "Bill Gates",

    "Steve Jobs",

    "Mark Zuckerberg",

    "Jacques-Yves Cousteau",

    "Claude Shannon",

    "Rosalind Franklin",

    "Gregor Mendel",

    "Francis Crick",

    "Astérix",

    "Obélix",

    "Tintin",

    "Milou",

    "Le capitaine Haddock",

    "Lucky Luke",

    "Rantanplan",

    "Spirou",

    "Fantasio",

    "Gaston Lagaffe",

    "Harry Potter",

    "Hermione Granger",

    "Ron Weasley",

    "Albus Dumbledore",

    "Voldemort",

    "Luke Skywalker",

    "Dark Vador",

    "Yoda",

    "Chewbacca",

    "C-3PO",

    "Brad Pitt",

    "Angelina Jolie",

    "Beyoncé",

    "Jay-Z",

    "Rihanna",

    "Lady Gaga",

    "Justin Bieber",

    "Taylor Swift",

    "Eminem",

    "Kanye West",

    "Kim Kardashian",

    "Jennifer Lopez",

    "George Clooney",

    "Tom Cruise",

    "Scarlett Johansson",

    "Leonardo DiCaprio",

    "Dwayne 'The Rock' Johnson",

    "Keanu Reeves",

    "Chris Hemsworth",

    "Robert Downey Jr.",

    "Achille",

    "Ulysse",

    "Hercule",

    "Persée",

    "Médée",

    "Minotaure",

    "Prométhée",

    "Icare",

    "Zeus",

    "Poséidon",

    "Aphrodite",

    "Héra",

    "Hadès",

    "Athéna",

    "Thor",

    "Odin",

    "Loki",

    "Freyja",

    "Beowulf",

    "Tristan et Iseult",

    "Thomas Pesquet",

    "Emmanuel Macron",

    "Jean-Luc Mélenchon",

    "Éric Zemmour",

    "Anne Hidalgo",

    "François Hollande",

    "Nicolas Sarkozy",

    "Soprano",

    "Jul",

    "Clara Luciani",

    "Aya Nakamura",

    "Vianney",

    "Amel Bent",

    "François Cluzet",

    "Jean Reno",

    "Sandrine Kiberlain",

    "Christophe Maé",

    "Kendji Girac",

    "Louane Emera",

    "Philippe Etchebest",

    "Megan Fox",

    "Cardi B",

    "Doja Cat",

    "Post Malone",

    "Ed Sheeran",

    "Chris Evans",

    "Margot Robbie",

    "Jason Momoa",

    "Gal Gadot",

    "Henry Cavill",

    "Benedict Cumberbatch",

    "Tom Hiddleston",

    "Millie Bobby Brown",

    "Finn Wolfhard",

    "Anya Taylor-Joy",

    "Pedro Pascal",

    "Oscar Isaac",

    "Florence Pugh",

    "Andrew Garfield",

    "Hailee Steinfeld",

    "James Bond",

    "Indiana Jones",

    "Tony Stark",

    "Steve Rogers",

    "Natasha Romanoff",

    "Peter Parker",

    "Bruce Wayne",

    "Clark Kent",

    "Diana Prince",

    "Frodo Baggins",

    "Aragorn",

    "Gollum",

    "Gandalf",

    "Katniss Everdeen",

    "Peeta Mellark",

    "Daenerys Targaryen",

    "Jon Snow",

    "Tyrion Lannister",

    "Arya Stark",

    "Walter White",

    "Sheldon Cooper",

    "Penny",

    "Chandler Bing",

    "Monica Geller",

    "Ross Geller",

    "Rachel Green",

    "Joey Tribbiani",

    "Michael Scott",

    "Dwight Schrute",

    "Jim Halpert",

    "Phoebe Buffay",

    "Eleven",

    "Hopper",

    "Daryl Dixon",

    "Rick Grimes",

    "Tony Soprano",

    "Don Draper",

    "Carrie Bradshaw",

    "Samantha Jones",

    "Tom Brady",

    "Muhammad Ali",

    "Mike Tyson",

    "Conor McGregor",

    "Tiger Woods",

    "Kobe Bryant",

    "Stephen Curry",

    "Venus Williams",

    "Naomi Osaka",

    "Andy Murray",

    "Don Quichotte",

    "Sancho Panza",

    "Javert",

    "Jean Valjean",

    "Cosette",

    "Gavroche",

    "Emma Bovary",

    "Anna Karénine",

    "Hercule Poirot",

    "Miss Marple",

    "Arsène Lupin",

    "Rouletabille",

    "D’Artagnan",

    "Athos",

    "Porthos",

    "Aramis",

    "Sherlock Holmes",

    "Dr. Watson",

    "Dracula",

    "Frankenstein",

    "Moïse",

    "Bouddha",

    "Jésus-Christ",

    "Mahomet",

    "Krishna",

    "Vishnu",

    "Shiva",

    "Hera",

    "Dionysos",

    "Apollon",

    "Artemis",

    "Anubis",

    "Isis",

    "Osiris",

    "Seth",

    "Gilgamesh",

    "Énée",

    "Orphée",

    "Sisyphe",

    "Pandore",

    "Atlas"
]);

const setMovies = new Set([
    "Le Seigneur des Anneaux",

    "Harry Potter",

    "Star Wars",

    "Avatar",

    "Titanic",

    "Inception",

    "Interstellar",

    "Matrix",

    "Gladiator",

    "Jurassic Park",

    "La Ligne verte",

    "Les Évadés",

    "Forrest Gump",

    "Pulp Fiction",

    "Le Parrain",

    "Le Parrain 2",

    "Le Parrain 3",

    "Les Affranchis",

    "Shutter Island",

    "Se7en",

    "Fight Club",

    "The Dark Knight",

    "The Dark Knight Rises",

    "Batman Begins",

    "Joker",

    "Deadpool",

    "Avengers: Endgame",

    "Avengers: Infinity War",

    "Iron Man",

    "Iron Man 2",

    "Iron Man 3",

    "Captain America: Civil War",

    "Captain Marvel",

    "Thor",

    "Thor: Ragnarok",

    "Spider-Man: No Way Home",

    "Spider-Man: Far From Home",

    "Black Panther",

    "Doctor Strange",

    "Les Gardiens de la Galaxie",

    "Ant-Man",

    "X-Men",

    "Logan",

    "Dune",

    "Game of Thrones",

    "Breaking Bad",

    "The Walking Dead",

    "Stranger Things",

    "Peaky Blinders",

    "Vikings",

    "The Witcher",

    "House of the Dragon",

    "The Mandalorian",

    "Obi-Wan Kenobi",

    "Andor",

    "Westworld",

    "True Detective",

    "Dexter",

    "Sons of Anarchy",

    "Sherlock",

    "Lupin",

    "Squid Game",

    "La Casa de Papel",

    "Elite",

    "13 Reasons Why",

    "Euphoria",

    "The Crown",

    "Downton Abbey",

    "Friends",

    "How I Met Your Mother",

    "The Big Bang Theory",

    "Malcolm",

    "Scrubs",

    "Parks and Recreation",

    "Brooklyn Nine-Nine",

    "The Office",

    "Sex Education",

    "Lucifer",

    "Supernatural",

    "Buffy contre les vampires",

    "Charmed",

    "Smallville",

    "Arrow",

    "The Flash",

    "Supergirl",

    "Gotham",

    "Riverdale",

    "Teen Wolf",

    "Mercredi",

    "Umbrella Academy",

    "Sense8",

    "Orange Is the New Black",

    "Prison Break",

    "Lost",

    "Desperate Housewives",

    "Grey's Anatomy",

    "Dr House",

    "Urgences",

    "NCIS",

    "Esprits Criminels",

    "Les Experts",

    "Hawaii 5-0",

    "Columbo",

    "Inspecteur Barnaby",

    "Kaamelott",

    "Un gars, une fille",

    "Caméra Café",

    "Plus belle la vie",

    "Demain nous appartient",

    "Ici tout commence",

    "Les Simpson",

    "South Park",

    "Rick et Morty",

    "Futurama",

    "Dragon Ball Z",

    "Dragon Ball Super",

    "One Piece",

    "Naruto",

    "Boruto",

    "Demon Slayer",

    "Attack on Titan",

    "My Hero Academia",

    "Hunter x Hunter",

    "Death Note",

    "Fullmetal Alchemist",

    "Bleach",

    "Black Clover",

    "Fairy Tail",

    "Sword Art Online",

    "Tokyo Revengers",

    "Les Aristochats",

    "Le Roi Lion",

    "Aladdin",

    "La Belle et la Bête",

    "La Petite Sirène",

    "Mulan",

    "Pocahontas",

    "Blanche-Neige",

    "Cendrillon",

    "La Reine des Neiges",

    "Ratatouille",

    "Toy Story",

    "Monstres & Cie",

    "Cars",

    "Là-haut",

    "Les Indestructibles",

    "Wall-E",

    "Coco",

    "Vice-versa",

    "Encanto",

    "Moana",

    "Zootopie",

    "Shrek",

    "Shrek 2",

    "Shrek 3",

    "Madagascar",

    "Kung Fu Panda",

    "L'Âge de Glace",

    "Rio",

    "Happy Feet",

    "Le Monde de Nemo",

    "Le Monde de Dory",

    "Pirates des Caraïbes",

    "Les Animaux Fantastiques",

    "Paddington",

    "Stuart Little",

    "Jumanji",

    "Zombieland",

    "Twilight",

    "Hunger Games",

    "Divergente",

    "Le Labyrinthe",

    "The Revenant",

    "The Wolf of Wall Street",

    "Bird Box",

    "A Quiet Place",

    "Les Dents de la mer",

    "Jurassic World",

    "King Kong",

    "Godzilla",

    "Pacific Rim",

    "Transformers",

    "Fast and Furious",

    "Mission Impossible",

    "James Bond: Skyfall",

    "James Bond: Casino Royale",

    "James Bond: Spectre",

    "Rocky",

    "Creed",

    "Rambo",

    "John Wick",

    "The Expendables",

    "300",

    "Troy",

    "Gladiator",

    "Braveheart",

    "Le Dernier Samouraï",

    "La Passion du Christ",

    "Les Dix Commandements",

    "Noé",

    "Exodus: Gods and Kings",

    "Seul au monde",

    "Philadelphia",

    "Rain Man",

    "Le Silence des agneaux",

    "Hannibal",

    "La Haine",

    "Intouchables",

    "Le Fabuleux Destin d'Amélie Poulain",

    "Bienvenue chez les Ch'tis",

    "Astérix et Obélix : Mission Cléopâtre",

    "Les Bronzés font du ski",

    "Le Père Noël est une ordure",

    "La Grande Vadrouille",

    "Les Tontons flingueurs",

    "Le Dîner de cons",

    "OSS 117",

    "Les Visiteurs",

    "Taxi",

    "Taken",

    "Lucy",

    "Le Transporteur",

    "Banlieue 13",

    "District 9",

    "Elysium",

    "Tenet",

    "Gravity",

    "Seul sur Mars",

    "Le Jour d'après",

    "2012",

    "Independence Day",

    "Armageddon",

    "Deep Impact",

    "Snowpiercer",

    "Parasite",

    "Oldboy",

    "Memories of Murder",

    "The Host",

    "Train to Busan",

    "Peninsula",

    "Your Name",

    "Le Château ambulant",

    "Mon voisin Totoro",

    "Princesse Mononoké",

    "Le Voyage de Chihiro",

    "Nausicaä de la vallée du vent",

    "Akira",

    "Ghost in the Shell",

    "Perfect Blue",

    "Paprika",

    "Belle",

    "Les Enfants du temps",

    "La Traversée du temps",

    "Erased",

    "Steins;Gate",

    "Psycho-Pass",

    "Cowboy Bebop",

    "Samurai Champloo",

    "One Punch Man",

    "Trigun",

    "Evangelion",

    "Sword of the Stranger",

    "Black Swan",

    "Whiplash",

    "Le Prestige",

    "There Will Be Blood",

    "No Country for Old Men",

    "Gran Torino",

    "Million Dollar Baby",

    "American Beauty",

    "The Social Network",

    "Les Nouveaux Héros",

    "Soul",

    "Inside Man",

    "Spotlight",

    "Argo",

    "La La Land",

    "Moonlight",

    "Django Unchained",

    "The Hateful Eight",

    "Reservoir Dogs",

    "Inglourious Basterds",

    "Everything Everywhere All at Once",

    "Top Gun",

    "Top Gun: Maverick",

    "La Mule",

    "Clint Eastwood: Impitoyable",

    "The Grand Budapest Hotel",

    "Isle of Dogs",

    "Fantastic Mr. Fox",

    "Moonrise Kingdom",

    "Tenacious D et le Médiator du Destin",

    "Scott Pilgrim",

    "Baby Driver",

    "Drive",

    "Prisoners",

    "Nightcrawler",

    "The Place Beyond the Pines",

    "The Lighthouse",

    "Midsommar",

    "Hérédité",

    "It Follows",

    "The Witch",

    "L'Homme Invisible",

    "Barbarian",

    "Smile",

    "Get Out",

    "Us",

    "Nope",

    "The Babadook",

    "Ari Aster: Beau Is Afraid",

    "Les Minions",

    "Moi, Moche et Méchant",

    "Moi, Moche et Méchant 2",

    "Les Croods",

    "Le Voyage d'Arlo",

    "En Avant",

    "Lightyear",

    "Strange World",

    "Les Trolls",

    "Kung Fu Panda 2",

    "Kung Fu Panda 3",

    "Abominable",

    "Shaun le mouton : le film",

    "Le Petit Prince",

    "Kubo et l'Armure magique",

    "Hôtel Transylvanie",

    "Hôtel Transylvanie 2",

    "Hôtel Transylvanie 3",

    "Lego Batman : Le Film",

    "La Grande Aventure Lego",

    "La Grande Aventure Lego 2",

    "Chantez !",

    "Chantez ! 2",

    "Angry Birds : Le Film",

    "Angry Birds 2",

    "Paddington 2",

    "Le Grinch",

    "Pierre Lapin",

    "Pierre Lapin 2",

    "Alvin et les Chipmunks",

    "Alvin et les Chipmunks 2",

    "Scooby !",

    "Tom et Jerry : Le Film",

    "Les Schtroumpfs",

    "Les Schtroumpfs et le Village perdu",

    "Les Schtroumpfs : Le Film",

    "Playmobil : Le Film",

    "Détective Pikachu",

    "Sonic, le film",

    "Sonic 2 : Le film",

    "Mario Bros : Le film",

    "Space Jam",

    "Space Jam : Nouvelle ère",

    "Ready Player One",

    "Tron",

    "Tron : L'Héritage",

    "The Social Dilemma",

    "13th",

    "American Factory",

    "Making a Murderer",

    "Wild Wild Country",

    "Don't F**k with Cats",

    "The Keepers",

    "Unsolved Mysteries",

    "Explained",

    "The Last Dance",

    "The Queen's Gambit",

    "Inventing Anna",

    "The Dropout",

    "WeCrashed",

    "Super Pumped",

    "Silicon Valley",

    "The Morning Show",

    "Big Little Lies",

    "Sharp Objects",

    "The Undoing",

    "Mare of Easttown",

    "Perry Mason",

    "True Blood",

    "Carnivàle",

    "Rome",

    "Boardwalk Empire",

    "The Sopranos",

    "Band of Brothers",

    "The Pacific",

    "Fargo",

    "Banshee",

    "Justified",

    "Longmire",

    "Hell on Wheels",

    "Yellowstone",

    "1883",

    "1923",

    "Suits",

    "The Mentalist",

    "Bones",

    "Elementary",

    "Castle",

    "Lie to Me",

    "The Good Doctor",

    "New Amsterdam",

    "Chicago Fire",

    "Chicago Med",

    "Chicago PD"
]);

const setChildren = new Set([
    "chat",

    "chien",

    "oiseau",

    "poisson",

    "hamster",

    "lapin",

    "cheval",

    "éléphant",

    "girafe",

    "zèbre",

    "poule",

    "canard",

    "vache",

    "mouton",

    "cochon",

    "âne",

    "souris",

    "écureuil",

    "renard",

    "loup",

    "dauphin",

    "requin",

    "baleine",

    "papillon",

    "abeille",

    "araignée",

    "serpent",

    "tigre",

    "lion",

    "kangourou",

    "koala",

    "panda",

    "raton laveur",

    "coccinelle",

    "papillon",

    "colibri",

    "éléphant",

    "bison",

    "poussin",

    "cerf",

    "chevreuil",

    "paon",

    "perroquet",

    "cavalier",

    "vachette",

    "singe",

    "zèbre",

    "souris",

    "grizzly",

    "marmotte",

    "poney",

    "arbre",

    "fleur",

    "plante",

    "forêt",

    "champ",

    "jardin",

    "pelouse",

    "herbe",

    "lierre",

    "buisson",

    "sable",

    "montagne",

    "lac",

    "rivière",

    "mer",

    "océan",

    "plage",

    "vallée",

    "ciel",

    "nuage",

    "soleil",

    "lune",

    "étoile",

    "arc-en-ciel",

    "pluie",

    "vent",

    "neige",

    "orages",

    "tempête",

    "tornado",

    "volcan",

    "château",

    "maison",

    "garage",

    "école",

    "église",

    "bibliothèque",

    "magasin",

    "parc",

    "terrain de jeu",

    "salle de jeux",

    "salle de bain",

    "cuisine",

    "salon",

    "chambre",

    "bureau",

    "porte",

    "fenêtre",

    "tapis",

    "canapé",

    "chaise",

    "table",

    "lit",

    "armoire",

    "meuble",

    "lampe",

    "radio",

    "télévision",

    "ordinateur",

    "téléphone",

    "smartphone",

    "tablette",

    "vêtement",

    "chaussures",

    "veste",

    "pantalon",

    "chemise",

    "jupe",

    "robe",

    "t-shirt",

    "chapeau",

    "gants",

    "écharpe",

    "pull",

    "pantalon",

    "pantoufles",

    "pyjama",

    "doudou",

    "peluche",

    "poupée",

    "jouet",

    "balle",

    "cubes",

    "construction",

    "lego",

    "voiture",

    "camion",

    "avion",

    "bateau",

    "train",

    "vélo",

    "trotinette",

    "planche à roulettes",

    "skateboard",

    "moto",

    "télécommande",

    "biberon",

    "couche",

    "sac à dos",

    "cartable",

    "trousse",

    "stylo",

    "crayon",

    "gomme",

    "feuille",

    "cahier",

    "livre",

    "cahier de coloriage",

    "peinture",

    "pinceau",

    "dessin",

    "crayon de couleur",

    "pastel",

    "feutre",

    "colle",

    "scotch",

    "ciseaux",

    "papier",

    "boîte",

    "panier",

    "sac",

    "valise",

    "carnet",

    "agenda",

    "note",

    "post-it",

    "ruban",

    "enveloppe",

    "carte",

    "ballon",

    "raquette",

    "batte",

    "crosse",

    "panier",

    "cerf-volant",

    "corde",

    "pelle",

    "seau",

    "moulin à vent",

    "jouet en bois",

    "marionnette",

    "masque",

    "costume",

    "chapeau de sorcière",

    "candy",

    "gâteau",

    "bonbon",

    "chocolat",

    "candy cane",

    "glace",

    "gâteau au chocolat",

    "cookies",

    "muffin",

    "crêpes",

    "panini",

    "hamburger",

    "pizza",

    "frites",

    "salade",

    "pâtes",

    "spaghetti",

    "riz",

    "soupe",

    "sandwich",

    "quiche",

    "poulet",

    "steak",

    "poisson",

    "crevettes",

    "salmon",

    "moules",

    "fromage",

    "yaourt",

    "lait",

    "eau",

    "jus",

    "limonade",

    "café",

    "thé",

    "chocolat chaud",

    "soda",

    "milkshake",

    "fraise",

    "banane",

    "pomme",

    "orange",

    "raisin",

    "kiwi",

    "mangue",

    "melon",

    "pastèque",

    "cerise",

    "ananas",

    "poire",

    "abricot",

    "prune",

    "pêche",

    "mure",

    "framboise",

    "myrtille",

    "cassis",

    "rhubarbe",

    "carotte",

    "haricot",

    "tomate",

    "poivron",

    "courgette",

    "brocoli",

    "chou",

    "aubergine",

    "laitue",

    "épinard",

    "petit pois",

    "oignon",

    "ail",

    "navet",

    "betterave",

    "pommes de terre",

    "champignon",

    "salade",

    "ciboulette",

    "menthe",

    "basilic",

    "thym",

    "romarin",

    "persil",

    "coriandre",

    "safran",

    "citron",

    "lime",

    "orange",

    "pamplemousse",

    "tangerine",

    "poulet rôti",

    "quiche",

    "biscuit",

    "fougasse",

    "croissant",

    "baguette",

    "pain de mie",

    "pain complet",

    "pain de campagne",

    "céréales",

    "granola",

    "muesli",

    "barre granola",

    "gâteau sec",

    "bonbon",

    "sucette",

    "chocolat",

    "gaufre",

    "tartine",

    "sirop",

    "confiture",

    "miel",

    "caramel",

    "pâte à tartiner",

    "chocolat au lait",

    "biscuit",

    "café au lait",

    "thé glacé",

    "smoothie",

    "café frappé",

    "sirop de menthe",

    "glace à la vanille",

    "glace au chocolat",

    "glace à la fraise",

    "glace au caramel",

    "glace au kiwi",

    "glace au citron",

    "glace au café",

    "glace au thé vert",

    "cookie",

    "gâteau au yaourt",

    "compote",

    "crème brûlée",

    "pouding",

    "flan",

    "tarte",

    "tartelette",

    "gâteau marbré",

    "pain d'épices",

    "pâtisserie",

    "gâteau au fromage",

    "tiramisu",

    "crêpes sucrées",

    "crêpes salées",

    "pâté",

    "galette",

    "saucisson",

    "steak haché",

    "sauté de porc",

    "bouillabaisse",

    "boudin noir",

    "boudin blanc",

    "paella",

    "cassoulet",

    "blanquette de veau",

    "riz pilaf",

    "riz basmati",

    "salade de pâtes",

    "tarte flambée",

    "croquettes",

    "gratin",

    "casserole",

    "soupe à l'oignon",

    "pot au feu",

    "boulettes",

    "carbonara",

    "gratin dauphinois",

    "tartiflette",

    "poulet à la moutarde",

    "croissant au beurre",

    "pains au chocolat",

    "panettone",

    "pain de Noël",

    "madeleines",

    "financiers",

    "canard",

    "foie gras",

    "terrine",

    "quiche lorraine",

    "pâtisserie",

    "macaron",

    "churros",

    "profiteroles",

    "gâteau de Noël",

    "brioches",

    "soupe de légumes",

    "potage",

    "soupe au pistou",

    "bisque de homard"
]);

const setBrands = new Set([
    "Nike",

    "Adidas",

    "Puma",

    "Reebok",

    "Under Armour",

    "Levi's",

    "H&M",

    "Zara",

    "Chanel",

    "Gucci",

    "Louis Vuitton",

    "Prada",

    "Dior",

    "Burberry",

    "Ralph Lauren",

    "Calvin Klein",

    "Tommy Hilfiger",

    "Vans",

    "Converse",

    "Abercrombie & Fitch",

    "Hollister",

    "The North Face",

    "Patagonia",

    "Columbia",

    "Lacoste",

    "Chloé",

    "Hermès",

    "Tiffany & Co.",

    "Cartier",

    "Rolex",

    "Ray-Ban",

    "Oakley",

    "Fendi",

    "Balenciaga",

    "Bvlgari",

    "Armani",

    "Saint Laurent",

    "Swarovski",

    "Miu Miu",

    "Michael Kors",

    "Kate Spade",

    "Marc Jacobs",

    "Coach",

    "Jimmy Choo",

    "Manolo Blahnik",

    "Ugg",

    "Crocs",

    "Dr. Martens",

    "Timberland",

    "Skechers",

    "Converse",

    "Revlon",

    "Maybelline",

    "L'Oréal",

    "Estée Lauder",

    "Lancôme",

    "Clinique",

    "Chanel",

    "MAC Cosmetics",

    "Bobbi Brown",

    "Nars",

    "Yves Saint Laurent",

    "Givenchy",

    "Giorgio Armani",

    "Shiseido",

    "Neutrogena",

    "Olay",

    "Dove",

    "Nivea",

    "Vichy",

    "Eucerin",

    "Clarins",

    "Elizabeth Arden",

    "Tatcha",

    "La Mer",

    "Fenty Beauty",

    "Urban Decay",

    "Too Faced",

    "Benefit Cosmetics",

    "Anastasia Beverly Hills",

    "It Cosmetics",

    "Lush",

    "Sephora",

    "Ulta Beauty",

    "Amazon",

    "eBay",

    "Alibaba",

    "Walmart",

    "Target",

    "Carrefour",

    "Costco",

    "Best Buy",

    "Ikea",

    "Lidl",

    "Trader Joe's",

    "Whole Foods",

    "Home Depot",

    "Lowes",

    "Macy's",

    "Nordstrom",

    "Kohl's",

    "Sears",

    "JCPenney",

    "Gap",

    "Old Navy",

    "Banana Republic",

    "Express",

    "Uniqlo",

    "Mango",

    "Forever 21",

    "Pacsun",

    "American Eagle",

    "Aeropostale",

    "J.Crew",

    "Ann Taylor",

    "Saks Fifth Avenue",

    "Neiman Marcus",

    "Bergdorf Goodman",

    "Tory Burch",

    "Michael Kors",

    "Coach",

    "Kate Spade",

    "Vera Wang",

    "Dior",

    "Yves Saint Laurent",

    "Versace",

    "Valentino",

    "Dolce & Gabbana",

    "Chloé",

    "Bvlgari",

    "Burberry",

    "Givenchy",

    "Fendi",

    "Balenciaga",

    "Alexander McQueen",

    "Prada",

    "Gucci",

    "Louis Vuitton",

    "Hermès",

    "Cartier",

    "Ray-Ban",

    "Oakley",

    "Polaroid",

    "Maui Jim",

    "Smith Optics",

    "Bose",

    "Sony",

    "Apple",

    "Samsung",

    "LG",

    "Panasonic",

    "Dell",

    "HP",

    "Microsoft",

    "Lenovo",

    "Acer",

    "Asus",

    "Alienware",

    "Razer",

    "Logitech",

    "Corsair",

    "Turtle Beach",

    "Beats by Dre",

    "JBL",

    "Harman Kardon",

    "Sennheiser",

    "Audio-Technica",

    "Philips",

    "Sharp",

    "Vizio",

    "TCL",

    "Hisense",

    "Google",

    "Amazon",

    "Spotify",

    "Netflix",

    "Disney+",

    "Hulu",

    "Apple TV",

    "YouTube",

    "TikTok",

    "Snapchat",

    "Instagram",

    "Facebook",

    "Twitter",

    "WhatsApp",

    "Skype",

    "Zoom",

    "Slack",

    "Dropbox",

    "Airbnb",

    "Uber",

    "Lyft",

    "DoorDash",

    "Postmates",

    "Grubhub",

    "Sephora",

    "Ulta Beauty",

    "Neutrogena",

    "Nivea",

    "Dove",

    "Olay",

    "Vichy",

    "Eucerin",

    "Clarins",

    "La Roche-Posay",

    "Burt's Bees",

    "Drunk Elephant",

    "The Body Shop",

    "Lush",

    "Jo Malone",

    "Kiehl's",

    "Tatcha",

    "Fresh",

    "Glossier",

    "Fenty Beauty",

    "Urban Decay",

    "Too Faced",

    "Anastasia Beverly Hills",

    "Benefit Cosmetics",

    "MAC Cosmetics",

    "Nars",

    "Shiseido",

    "Estee Lauder",

    "L'Oréal",

    "Maybelline",

    "Revlon",

    "Rimmel",

    "Sally Hansen",

    "Essie",

    "OPI",

    "Zoya",

    "Chanel",

    "Bvlgari",

    "Rolex",

    "Omega",

    "Patek Philippe",

    "Audemars Piguet",

    "Tag Heuer",

    "Cartier",

    "Seiko",

    "Casio",

    "Fossil",

    "Timex",

    "Citizen",

    "Bulova",

    "Tissot",

    "Montblanc",

    "Michael Kors",

    "Coach",

    "Marc Jacobs",

    "Tommy Hilfiger",

    "Calvin Klein",

    "DKNY",

    "Armani",

    "Diesel",

    "Pepe Jeans",

    "Wrangler",

    "Levi's",

    "Wrangler",

    "Wrangler",

    "True Religion",

    "Dockers",

    "Hugo Boss",

    "Geox",

    "Mizuno",

    "Salomon",

    "Columbia",

    "North Face",

    "Patagonia",

    "Reebok",

    "Nike",

    "Adidas",

    "New Balance",

    "Skechers",

    "Puma",

    "Under Armour",

    "Asics",

    "Saucony",

    "Brooks",

    "Hoka",

    "Vans",

    "Converse",

    "Toms",

    "Dr. Martens",

    "Timberland",

    "Clarks",

    "Birkenstock",

    "Ugg",

    "Crocs",

    "Sorel",

    "Hunter",

    "Lacoste",

    "Fila",

    "Superga",

    "Keds",

    "Skechers",

    "Vibram",

    "Keen",

    "Teva",

    "Columbia Sportswear",

    "North Face",

    "Patagonia",

    "Arc'teryx",

    "Mountain Hardwear",

    "Marmot",

    "Outdoor Research",

    "Helly Hansen",

    "Ralph Lauren",

    "Calvin Klein",

    "Tommy Hilfiger",

    "Vera Wang",

    "Oscar de la Renta",

    "Michael Kors",

    "Kate Spade",

    "Chanel",

    "Gucci",

    "Louis Vuitton",

    "Prada",

    "Fendi",

    "Dolce & Gabbana",

    "Armani",

    "Saint Laurent",

    "Bvlgari",

    "Tiffany & Co.",

    "Cartier",

    "Rolex",

    "Ray-Ban",

    "Oakley",

    "Maui Jim",

    "Polaroid",

    "Bose",

    "Sony",

    "Beats by Dre",

    "JBL",

    "Sennheiser",

    "Logitech",

    "Razer",

    "Corsair",

    "Alienware",

    "Microsoft",

    "Apple",

    "Samsung",

    "Google",

    "Amazon",

    "Tesla",

    "BMW",

    "Audi",

    "Mercedes-Benz",

    "Porsche",

    "Chevrolet",

    "Ford",

    "Toyota",

    "Honda",

    "Nissan",

    "Hyundai",

    "Kia",

    "Volkswagen",

    "Peugeot",

    "Renault",

    "Citroën",

    "Fiat",

    "Subaru",

    "Chrysler",

    "Dodge",

    "Jeep",

    "Ram",

    "Mitsubishi",

    "Land Rover",

    "Jaguar",

    "Lexus",

    "Infiniti",

    "Mazda",

    "Acura",

    "Buick",

    "Lincoln",

    "Cadillac",

    "GMC",

    "Chrysler",

    "Tesla",

    "Ferrari",

    "Lamborghini",

    "McLaren",

    "Bugatti",

    "Aston Martin",

    "Rolls-Royce",

    "Bentley",

    "Maybach",

    "Pagani",

    "Koenigsegg",

    "Lotus",

    "Rimac",

    "Tesla",

    "Maserati",

    "Alfa Romeo",

    "Aston Martin",

    "Peugeot",

    "BMW",

    "Nissan",

    "Chevrolet"
]);

const setAnimaux = new Set([
    'chat', 'chien', 'cheval', 'vache', 'mouton', 'chèvre', 'cochon', 'lapin', 'poule', 'dinde',
    'canard', 'oie', 'dindon', 'souris', 'rat', 'hamster', 'cochon d\'Inde', 'gerbille', 'furet', 'chinchilla',
    'écureuil', 'hérisson', 'taupe', 'castor', 'renard', 'loup', 'ours', 'tigre', 'lion', 'léopard',
    'guépard', 'éléphant', 'girafe', 'rhinocéros', 'hippopotame', 'zèbre', 'gorille', 'chimpanzé', 'orang-outan', 'gibbon',
    'babouin', 'mandrill', 'singe', 'koala', 'kangourou', 'wallaby', 'wombat', 'ornithorynque', 'serpent', 'crocodile',
    'alligator', 'lézard', 'iguane', 'caméléon', 'tortue', 'grenouille', 'crapaud', 'salamandre', 'triton', 'axolotl',
    'poisson', 'saumon', 'thon', 'carpe', 'truite', 'sardine', 'hareng', 'maquereau', 'sole', 'morue',
    'requin', 'raie', 'dauphin', 'baleine', 'orque', 'phoque', 'otarie', 'manchot', 'pingouin', 'méduse',
    'pieuvre', 'calmar', 'crevette', 'homard', 'crabe', 'étoile de mer', 'hippocampe', 'abeille', 'guêpe', 'papillon',
    'mouche', 'moustique', 'fourmi', 'araignée', 'coccinelle', 'criquet', 'cigale', 'ver de terre', 'chenille', 'libellule'
  ]);

const setMetiers = new Set([
  'enseignant', 'professeur', 'instituteur', 'ingénieur', 'médecin', 'infirmier', 'pharmacien', 'dentiste', 'vétérinaire', 'avocat',
  'juriste', 'juge', 'policier', 'gendarme', 'pompier', 'cuisinier', 'boulanger', 'pâtissier', 'boucher', 'charcutier',
  'poissonnier', 'épicier', 'serveur', 'barman', 'réceptionniste', 'coiffeur', 'esthéticienne', 'maquilleur', 'styliste', 'couturier',
  'journaliste', 'rédacteur', 'traducteur', 'interprète', 'photographe', 'vidéaste', 'cinéaste', 'réalisateur', 'comédien', 'acteur',
  'actrice', 'musicien', 'chanteur', 'danseur', 'chorégraphe', 'chef d\'orchestre', 'DJ', 'pilote', 'hôtesse de l\'air', 'steward',
  'chauffeur de taxi', 'chauffeur de bus', 'chauffeur de camion', 'conducteur de train', 'marin', 'capitaine', 'pêcheur', 'agriculteur', 'éleveur', 'jardinier',
  'paysagiste', 'architecte', 'urbaniste', 'chef de projet', 'manager', 'directeur', 'PDG', 'entrepreneur', 'commerçant', 'vendeur',
  'acheteur', 'consultant', 'comptable', 'expert-comptable', 'banquier', 'assureur', 'courtier', 'analyste financier', 'cadre', 'ostéopathe',
  'kinésithérapeute', 'psychologue', 'psychiatre', 'coach', 'formateur', 'conseiller', 'notaire', 'huissier', 'auxiliaire de vie', 'éducateur',
  'ergothérapeute', 'diététicien', 'nutritionniste', 'opticien', 'orthophoniste', 'orthoptiste', 'géologue', 'astronome', 'biologiste', 'chercheur'
]);

const setObjets = new Set([
  'chaise', 'table', 'canapé', 'lit', 'armoire', 'commode', 'étagère', 'bureau', 'fauteuil', 'tabouret',
  'lampadaire', 'lampe de chevet', 'lustre', 'abat-jour', 'miroir', 'porte', 'fenêtre', 'rideau', 'tapis', 'coussin',
  'oreiller', 'couverture', 'drap', 'matelas', 'couette', 'édredon', 'table de chevet', 'stylo', 'crayon', 'gomme',
  'taille-crayon', 'règle', 'ciseaux', 'agrafeuse', 'agrafe', 'trombone', 'colle', 'ruban adhésif', 'élastique', 'papier',
  'enveloppe', 'timbre', 'carnet', 'cahier', 'classeur', 'chemise', 'dossier', 'surligneur', 'marque-page', 'carte de visite',
  'imprimante', 'scanner', 'photocopieuse', 'ordinateur', 'ordinateur portable', 'écran', 'clavier', 'souris', 'casque', 'écouteurs',
  'haut-parleur', 'microphone', 'webcam', 'téléphone fixe', 'smartphone', 'tablette', 'chargeur', 'câble USB', 'adaptateur', 'batterie externe',
  'clé USB', 'disque dur', 'imprimante multifonction', 'projecteur', 'tableau blanc', 'craie', 'marqueur', 'effaceur', 'porte-documents', 'corbeille',
  'boîte aux lettres', 'four', 'cuisinière', 'plaque de cuisson', 'micro-ondes', 'réfrigérateur', 'congélateur', 'lave-vaisselle', 'évier', 'robinet',
  'casserole', 'poêle', 'plat', 'assiette', 'bol', 'verre', 'tasse', 'mug', 'cuillère', 'fourchette'
]);

const setPays = new Set([
  'France', 'Allemagne', 'Espagne', 'Italie', 'Royaume-Uni', 'Portugal', 'Belgique', 'Pays-Bas', 'Suisse', 'Autriche',
  'Grèce', 'Irlande', 'Suède', 'Norvège', 'Finlande', 'Danemark', 'Pologne', 'République tchèque', 'Slovaquie', 'Hongrie',
  'Roumanie', 'Bulgarie', 'Serbie', 'Croatie', 'Bosnie-Herzégovine', 'Slovénie', 'Macédoine du Nord', 'Albanie', 'Monténégro', 'Kosovo',
  'Estonie', 'Lettonie', 'Lituanie', 'Biélorussie', 'Ukraine', 'Russie', 'Turquie', 'Géorgie', 'Arménie', 'Azerbaïdjan',
  'États-Unis', 'Canada', 'Mexique', 'Guatemala', 'Honduras', 'Salvador', 'Nicaragua', 'Costa Rica', 'Panama', 'Cuba',
  'République dominicaine', 'Haïti', 'Jamaïque', 'Trinité-et-Tobago', 'Bahamas', 'Barbade', 'Brésil', 'Argentine', 'Chili', 'Colombie',
  'Venezuela', 'Pérou', 'Équateur', 'Bolivie', 'Paraguay', 'Uruguay', 'Guyana', 'Suriname', 'Afrique du Sud', 'Nigeria',
  'Égypte', 'Kenya', 'Tanzanie', 'Algérie', 'Maroc', 'Tunisie', 'Libye', 'Mauritanie', 'Mali', 'Niger',
  'Tchad', 'Soudan', 'Éthiopie', 'Somalie', 'Ouganda', 'Rwanda', 'Burundi', 'République démocratique du Congo', 'Angola', 'Mozambique',
  'Madagascar', 'Zimbabwe', 'Zambie', 'Botswana', 'Namibie', 'Malawi', 'Ghana', 'Côte d\'Ivoire', 'Sénégal', 'Cameroun'
])

const sePersonnagesFictifs = new Set([
  // Astérix et Obélix
  'Astérix', 'Obélix', 'Idéfix', 'Panoramix', 'Ordralfabétix', 'Assurancetourix', 'Cétautomatix', 'Abraracourcix', 'Agecanonix', 'Bonemine',
  'Goudurix', 'Iélosubmarine', 'Dépétimale', 'Habituérix', 'Pirouette', 'Gluten', 'Grossebaffe', 'Latinus', 'Gracchus', 'Macarix',
  // Tintin
  'Tintin', 'Milou', 'Capitaine Haddock', 'Professeur Tournesol', 'Dupond', 'Dupont', 'Bianca Castafiore', 'Nestor', 'Alloingt', 'Sakadion',
  'Rastapopoulos', 'Général Alcazar', 'Chiquito', 'Bab El Ehr', 'Tom', 'Millie', 'Angel', 'Corvisart', 'Calys', 'Sanders-Hardiman',
  // Lucky Luke
  'Lucky Luke', 'Jolly Jumper', 'Billy the Kid', 'Calamity Jane', 'Rantanplan', 'Butch Cassidy', 'Sundance Kid', 'Pat Poker', 'Joe Dalton', 'William Dalton',
  'Jack Dalton', 'Averell Dalton', 'Calamity Jane', 'Phantom', 'Baron du Glaive', 'Ramsès', 'Le Major Barker', 'Belle Starr', 'Prospector', 'Patty Blue',
  // Harry Potter
  'Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore', 'Severus Rogue', 'Voldemort', 'Drago Malefoy', 'Hagrid', 'Sirius Black', 'Remus Lupin',
  'Bellatrix Lestrange', 'Neville Londubat', 'Luna Lovegood', 'Ginny Weasley', 'Molly Weasley', 'Arthur Weasley', 'Dobby', 'Hedwige', 'Minerva McGonagall', 'Cedric Diggory',
  'Cho Chang', 'Nymphadora Tonks', 'Kingsley Shacklebolt', 'Dolores Ombrage', 'Peter Pettigrew', 'Gilderoy Lockhart', 'Lucius Malefoy', 'Fleur Delacour', 'Rubeus Hagrid', 'Cedric Diggory',
  // Star Wars
  'Luke Skywalker', 'Leia Organa', 'Han Solo', 'Darth Vader', 'Yoda', 'Chewbacca', 'Obi-Wan Kenobi', 'R2-D2', 'C-3PO', 'Padmé Amidala',
  'Anakin Skywalker', 'Rey', 'Finn', 'Poe Dameron', 'Kylo Ren', 'Kylo Ren', 'General Leia', 'Mace Windu', 'Qui-Gon Jinn', 'Boba Fett',
  'Jango Fett', 'Lando Calrissian', 'Jar Jar Binks', 'Supreme Leader Snoke', 'Count Dooku', 'Asajj Ventress', 'Ahsoka Tano', 'BB-8', 'Captain Phasma', 'Director Krennic',
  // Disney
  'Mickey Mouse', 'Donald Duck', 'Minnie Mouse', 'Daisy Duck', 'Goofy', 'Pluto', 'Blanche-Neige', 'Cendrillon', 'Aurora', 'Ariel',
  'Belle', 'Jasmine', 'Pocahontas', 'Mulan', 'Tiana', 'Rapunzel', 'Merida', 'Elsa', 'Anna', 'Moana',
  'Aladdin', 'Jafar', 'Ursula', 'Maléfique', 'Cruella', 'Gaston', 'Capitaine Crochet', 'Peter Pan', 'Winnie l’Ourson', 'Tigrou',
  // Marvel
  'Iron Man', 'Tony Stark', 'Captain America', 'Steve Rogers', 'Thor', 'Hulk', 'Bruce Banner', 'Black Widow', 'Natasha Romanoff', 'Hawkeye',
  'Clint Barton', 'Spider-Man', 'Peter Parker', 'Doctor Strange', 'Stephen Strange', 'Black Panther', 'T’Challa', 'Scarlet Witch', 'Wanda Maximoff', 'Vision',
  'Ant-Man', 'Scott Lang', 'Wasp', 'Hope van Dyne', 'Guardians of the Galaxy', 'Star-Lord', 'Gamora', 'Drax', 'Rocket', 'Groot',
  // DC
  'Superman', 'Clark Kent', 'Lois Lane', 'Batman', 'Bruce Wayne', 'Robin', 'Joker', 'Harley Quinn', 'Wonder Woman', 'Diana Prince',
  'Aquaman', 'Arthur Curry', 'Green Lantern', 'Hal Jordan', 'The Flash', 'Barry Allen', 'Lex Luthor', 'Catwoman', 'Penguin', 'Riddler',
  // Le Seigneur des anneaux
  'Frodon Sacquet', 'Sam Gamegie', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli', 'Boromir', 'Merry', 'Pippin', 'Saroumane',
  'Sauron', 'Galadriel', 'Elrond', 'Bilbon Sacquet', 'Gollum', 'Théoden', 'Eowyn', 'Faramir', 'Treebeard', 'Denethor',
  // Sherlock Holmes
  'Sherlock Holmes', 'Dr. Watson', 'Professeur Moriarty', 'Irene Adler', 'Inspector Lestrade', 'Mrs Hudson', 'Mycroft Holmes', 'Sebastian Moran', 'Mary Morstan', 'Inspector Gregson',
  // Game of Thrones
  'Jon Snow', 'Daenerys Targaryen', 'Tyrion Lannister', 'Cersei Lannister', 'Jaime Lannister', 'Arya Stark', 'Sansa Stark', 'Bran Stark', 'Ned Stark', 'Robert Baratheon',
  'Joffrey Baratheon', 'Stannis Baratheon', 'Melisandre', 'Brienne de Torth', 'Sandor Clegane', 'Gregor Clegane', 'Petyr Baelish', 'Varys', 'Gendry', 'Samwell Tarly',
  // Manga / Anime
  'Naruto', 'Sasuke', 'Sakura Haruno', 'Kakashi Hatake', 'Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Chopper',
  'Goku', 'Vegeta', 'Chi-Chi', 'Bulma', 'Piccolo', 'Krillin', 'Sailor Moon', 'Usagi Tsukino', 'Mamoru Chiba', 'Inuyasha',
  // Jeux vidéo
  'Mario', 'Luigi', 'Princess Peach', 'Bowser', 'Link', 'Zelda', 'Ganondorf', 'Samus Aran', 'Pikachu', 'Mewtwo',
  'Solid Snake', 'Master Chief', 'Lara Croft', 'Kratos', 'Ellie', 'Joel', 'Geralt de Riv', 'Cloud Strife', 'Sephiroth', 'Atmosphere',
  // Mythologie
  'Zeus', 'Héra', 'Poséidon', 'Hadès', 'Athéna', 'Apollon', 'Artémis', 'Arès', 'Dionysos', 'Héphaïstos',
  'Odin', 'Thor', 'Loki', 'Freya', 'Tyr', 'Heimdall', 'Frigg', 'Baldr', 'Njörd', 'Skadi',
  // Séries TV cultes
  'Walter White', 'Jesse Pinkman', 'Tyrion Lannister', 'Rick Grimes', 'Sherlock (BBC)', 'Doctor Who', 'Eleven', 'Tony Soprano', 'Don Draper', 'Buffy Summers',
  // Roman classique
  'Don Quichotte', 'Sancho Panza', 'Madame Bovary', 'Phèdre', 'Raskolnikov', 'Anna Karénine', 'Heathcliff', 'Catherine Earnshaw', 'Emma Bovary', 'Julien Sorel',
  // Ajouts divers pour atteindre 500
]);

const setIslam = new Set([
  "Muhammad",
  "ʿĪsā",
  "Mūsā",
  "Ibrāhīm",
  "Nūḥ",
  "Dāwūd",
  "Sulaymān",
  "Hārūn",
  "Idrīs",
  "Shuʿayb",
  "Yaḥyā",
  "Yaʿqūb",
  "Isḥāq",
  "Ismāʿīl",
  "Lūṭ",
  "Ādam",
  "Zakarīyā",
  "Yūsuf",
  "Hūd",
  "Ṣāliḥ",
  "Dhū al-Kifl",
  "Ilyās",
  "al-Yasaʿ",
  "Jibrīl",
  "Mīkāʾīl",
  "Isrāfīl",
  "ʿAzrāʾīl",
  "Munkar",
  "Nakīr",
  "Raqīb",
  "ʿAtīd",
  "Mālik",
  "Riḍwān",
  "Abū Bakr",
  "ʿUmar ibn al-Khaṭṭāb",
  "ʿUthmān ibn ʿAffān",
  "ʿAlī ibn Abī Ṭālib",
  "Khālid ibn al-Walīd",
  "Salmān al-Fārisī",
  "Bilāl ibn Rabāḥ",
  "Abū Hurayrah",
  "Ibn ʿAbbās",
  "Ibn Masʿūd",
  "Ṭalḥah ibn ʿUbayd Allāh",
  "Zubayr ibn al-'Awwām",
  "Saʿd ibn Abī Waqqāṣ",
  "Abū ʿUbaydah ibn al-Jarrāḥ",
  "ʿAmmār ibn Yāsir",
  "Muʿādh ibn Jabal",
  "Hudhayfah ibn al-Yamān",
  "Jābir ibn ʿAbd Allāh",
  "Anas ibn Mālik",
  "Abū Dharr al-Ghifārī",
  "Mālik ibn Anas",
  "Abū Ḥanīfah",
  "Aḥmad ibn Ḥanbal",
  "Al-Shāfiʿī",
  "Ibn Taymiyyah",
  "Ibn al-Qayyim",
  "Al-Nawawī",
  "Al-Bukhārī",
  "Muslim ibn al-Ḥajjāj",
  "Al-Tirmidhī",
  "Ibn Mājah",
  "Al-Nasāʾī",
  "Al-Dhahabī",
  "Ibn Kathīr",
  "Al-Ṭabarī",
  "Al-Shawkānī",
  "Al-Suyūṭī",
  "Al-Qurṭubī",
  "Al-Ghazālī",
  "Ibn ʿAbd al-Barr",
  "Hijrah",
  "Badr",
  "Uḥud",
  "Khandaq",
  "Ḥudaybiyah",
  "Ḥunayn",
  "Fath Makkah",
  "Tabūk",
  "Khaybar",
  "Israʾ wa al-Miʿrāj",
  "Bayʿat al-ʿAqabah",
  "Ḥajj al-Wadāʿ",
  "Yaum al-Qiyāmah",
  "Ghazwat al-Muraysīʿ",
  "Ghazwat Banī Qurayẓah",
  "Qurʾān",
  "Tawrah",
  "Injīl",
  "Zabūr",
  "Ṣaḥīḥ al-Bukhārī",
  "Ṣaḥīḥ Muslim",
  "Sunan Abī Dāwūd",
  "Sunan al-Tirmidhī",
  "Sunan al-Nasāʾī",
  "Sunan Ibn Mājah",
  "Al-Muwaṭṭaʾ",
  "Riyāḍ al-Ṣāliḥīn",
  "Bulūgh al-Marām",
  "Sharḥ al-ʿAqīdah al-Ṭaḥāwiyyah",
  "Uṣūl al-Thalāthah",
  "Kitāb al-Tawḥīd",
  "Tafsīr al-Jalālayn",
  "Al-Kashshāf",
  "Tafsīr al-Qurṭubī",
  "Zad al-Maʿād",
  "Makkah",
  "Madīnah",
  "Masjid al-Ḥarām",
  "Masjid al-Nabawī",
  "Masjid al-Aqṣā",
  "Ghar Ḥirāʾ",
  "Ghar Thawr",
  "ʿArafāt",
  "Mina",
  "Muzdalifah",
  "Badr",
  "Uḥud",
  "Qubāʾ",
  "Baqīʿ",
  "Rawḍah al-Muṭahharah",
  "Kaʿbah",
  "Miḥrāb",
  "Minbar",
  "Jilbāb",
  "ʿImāmah",
  "Siwāk",
  "Ṣafā",
  "Marwah",
  "Zamzam",
  "ʿAṣā",
  "Ankabūt",
  "Naqah",
  "Dabbah",
  "Jannah al-Maʿwā",
  "Salsabīl",
  "Anṣār",
  "Muhājirūn",
  "Ahl al-Bayt",
  "Aṣḥāb al-Kahf",
  "Ummah",
  "Ahl al-Kitāb",
  "Fuqahāʾ",
  "Mujāhidīn",
  "Ṣūfiyyah",
  "Khulafāʾ al-Rāshidūn",
  "Tawḥīd",
  "Shirk",
  "Ṣalāh",
  "Zakāh",
  "Ṣawm",
  "Ḥajj",
  "Sīrah",
  "Sunnah",
  "Ḥadīth",
  "ʿAqīdah",
  "Taqwā",
  "Jannah",
  "Jahannam",
  "Duʿāʾ",
  "Dhikr",
  "Barakah",
  "Sabr",
  "Ikhlāṣ",
  "Tawbah",
  "Niyyah",
  "Yahya ibn ma'in",
  "Salih Al'Otaymin",
  "Salih Al Fawzan",
  "Abdel 'Aziz Ibn Baz",
  "Muhammad Nassir Dine Al Albani",
  "Muqbil ibn Hadi al-Wadi'i",
  "Taqi-ud-Din al-Hilali",
  "Mohamed Ali Ferkous",
  "Umar ibn ʿAbd al-ʿAzīz",
])

const setMixedWord = new Set([...setChildren, ...setMovies, ...setPersons, ...setWords, setBrands, ...setAnimaux, ...setMetiers, ...setObjets, ...setPays, ...sePersonnagesFictifs]);

const persons = [...setPersons];
const movies = [...setMovies];
const children = [...setChildren];
const brands = [...setBrands];
const words = [...setMixedWord];
const animaux = [...setAnimaux];
const objets = [...setObjets];
const metiers = [...setMetiers];
const pays = [...setPays];
const personnagesFictifs = [...sePersonnagesFictifs];
const islam = [...setIslam]