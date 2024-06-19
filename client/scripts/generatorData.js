// Contains the data for the generator.

const colors = [
    "Aquamarine", "Azure", "Beige", "Black", "Blue", 
    "Bronze", "Brown", "Burgundy", "Cyan", "Gold", 
    "Gray", "Green", "Indigo", "Ivory", "Lavender", 
    "Lime", "Magenta", "Maroon", "Mauve", "Navy", 
    "Olive", "Orange", "Pink", "Plum", "Purple", 
    "Red", "Rose", "Ruby", "Rust", "Silver", 
    "Tan", "Teal", "Turquoise", "Vermilion", "Violet", 
    "White", "Yellow", "Almond", "Amber", "Amethyst", 
    "Apricot", "Auburn", "Avocado", "BabyBlue", "Banana", 
    "Berry", "Bistre", "Blush", "Candy", "Carmine", 
    "Celeste", "Cerise", "Cherry", "Chestnut", "Citrine", 
    "Claret", "Cobalt", "Coffee", "Copper", "Cream", 
    "Crimson", "Denim", "Ebony", "Emerald", "Erin", 
    "Flax", "Ginger", "Honey", "Jade", "Jasper", 
    "Jet", "Jungle", "Lemon", "Lilac", "Linen", 
    "Mahogany", "Mint", "Moccasin", "Mulberry", "Navajo", 
    "Ochre", "Onyx", "Peach", "Pear", "Periwinkle", 
    "Pine", "Pumpkin", "Saffron", "Sapphire", "Scarlet", 
    "Seashell", "Sepia", "Sky", "Snow", "Tangerine", 
    "Thistle", "Tomato", "Wheat"
];

const shapes = [
    "Circular", "Curved", "Cylindrical", "Diamond", "Elliptical", 
    "Hexagonal", "Oval", "Pentagonal", "Polygonal", "Rectangular", 
    "Round", "Spherical", "Square", "Symmetrical", "Tetrahedral", 
    "Trapezoidal", "Triangular", "Conical", "Spiral", "Angular", 
    "Cubical", "Geodesic", "Irregular", "Oblique", "Octagonal", 
    "Parabolic", "Pyriform", "Rhomboid", "Scalene", "Sectorial", 
    "Semicircular", "Spherical", "Squarish", "Tetragonal", 
    "Toroidal", "Tubular", "Wavy", "Zigzag", "Acute", 
    "Blunt", "Compound", "Crescent", "Decagonal", "Trihedral", 
    "Diagonal", "Fusiform", "Globular", "Helical", 
    "Linear", "Lozenge", "Multilateral", "Nonagon", "Octahedral", 
    "Orbicular", "Ovoid", "Quadratic", "Quadrilateral", "Rhomboidal", 
    "Spheroidal", "Tangential", "Teardrop", "Trapezoid", "Turbinate", 
    "Twisted", "Undulating", "Deltoid", 
    "Discoid", "Dodecagon", "Globoid", 
    "Monolithic", "Octagonal", 
    "Parallelogram", "Pentagon", "Polygonal", 
    "Quadrangular", "Rectangular", "Semi-circular", 
    "Trapezium", "Trapezoidal"
];


const textures = [
    "Smooth", "Rough", "Soft", "Hard", "Fuzzy", 
    "Slippery", "Grainy", "Velvety", "Bumpy", "Slick", 
    "Silky", "Coarse", "Prickly", "Satin", "Polished", 
    "Matte", "Glossy", "Leathery", "Pebbled", "Chalky", 
    "Brittle", "Rubbery", "Woven", "Knitted", "Wrinkled", 
    "Crinkly", "Porous", "Embossed", "Etched", "Engraved", 
    "Perforated", "Patterned", "Textured", "Lacy", "Mesh", 
    "Fine", "Course", "Cracked", "Peeling", "Scaly", 
    "Sparkling", "Shiny", "Dull", "Matted", "Gritty", 
    "Thick", "Thin", "Transparent", "Opaque", "Translucent", 
    "Granular", "Sandpapery", "Feathery", "Suede", "Corduroy", 
    "Woolen", "Knotted", "Twisted", "Layered", "Thready", 
    "Spongy", "Fluffy", "Crumbly", "Powdery", "Felt", 
    "Ribbed", "Hairy", "Chiseled", "Fibrous", "Raspy", 
    "Veined", "Satin", "Silk", "Cotton", "Linen", 
    "Waxy", "Rubber", "Plastic", "Metallic", "Wooden", 
    "Velvet", "Satin", "Canvas", "Parchment", "Varnished", 
    "Coated", "Glazed", "Clay", "Ceramic", "Brick", 
    "Concrete", "Marble", "Stone", "Glass", "Porcelain", 
    "Tile", "Asphalt", "Leather"
];

const sizes = [
    "Tiny", "Small", "Miniature", "Petite", "Compact", 
    "Mini", "Little", "Micro", "Minute", "Diminutive", 
    "Slight", "Wee", "Pint-sized", "Lilliputian", "Nano", 
    "Short", "Tall", "Big", "Large", "Huge", 
    "Giant", "Enormous", "Gigantic", "Massive", "Colossal", 
    "Immense", "Vast", "Mammoth", "Monumental", "Titanic", 
    "Jumbo", "Mighty", "Grand", "Stout", "Bulky", 
    "Chunky", "Beefy", "Substantial", "Whopping", "Sizable", 
    "Roomy", "Spacious", "Ample", "Generous", "Capacious", 
    "Wide", "Narrow", "Broad", "Slim", "Thick", 
    "Thin", "Lean", "Skinny", "Brawny", "Lanky", 
    "Muscular", "Slender", "Athletic", "Robust", "Sturdy", 
    "Compact", "Miniature", "Petite", "Portable", 
    "Midsize", "Moderate", "Larger", "Largest", "Midsize", 
    "Greatest", "Cozy", "Commodious", "Amply", "Fit", 
    "Fashion", "Gothic", " Classical"
]
const emotions = [
    "Happy", "Sad", "Angry", "Excited", "Nervous", 
    "Calm", "Frustrated", "Joyful", "Anxious", "Relaxed", 
    "Confident", "Surprised", "Hopeful", "Proud", "Grateful", 
    "Content", "Peaceful", "Eager", "Enthusiastic", "Lonely", 
    "Loved", "Rejected", "Hurt", "Guilty", "Embarrassed", 
    "Awkward", "Shy", "Jealous", "Bored", "Curious", 
    "Impatient", "Insecure", "Inquisitive", "Determined", "Inspired", 
    "Motivated", "Overwhelmed", "Stressed", "Overjoyed", "Overwhelmed", 
    "Disappointed", "Regretful", "Remorseful", "Satisfied", "Silly", 
    "Hopeless", "Desperate", "Grumpy", "Ecstatic", "Optimistic", 
    "Pessimistic", "Fulfilled", "Doubtful", "Vulnerable", "Defensive", 
    "Powerless", "Strong", "Fearful", "Courageous", "Impulsive", 
    "Cautious", "Resilient", "Resentful", "Appreciative", "Reflective", 
    "Amused", "Provocative", "Skeptical", "Caring", "Compassionate", 
    "Grieving", "Disgusted", "Excitable", "Impressed", "Responsible", 
    "Indifferent", "Sarcastic", "Suspicious", "Receptive", "Giddy", 
    "Restless", "Alarmed", "Daring", "Doubtful", "Bitter", 
    "Suspicious", "Worried", "Enraged", "Hateful", "Fulfilled"
];

const tastes = [
    "Sweet", "Sour", "Bitter", "Salty", "Spicy", 
    "Savory", "Tangy", "Zesty", "Mild", "Rich", 
    "Sharp", "Refreshing", "Tart", "Pungent", "Peppery", 
    "Succulent", "Tasty", "Juicy", "Fiery", "Cool", 
    "Creamy", "Buttery", "Aromatic", "Smoky", "Earthy", 
    "Fruity", "Citrusy", "Flavorful", "Balanced", "Distinct", 
    "Delicious", "Nutty", "Robust", "Mellow", "Velvety", 
    "Tender", "Tantalizing", "Palatable", "Exquisite", "Mouthwatering", 
    "Sensational", "Wholesome", "Zingy", "Bland", "Acidic", 
    "Sizzling", "Sugary", "Umami", "Bite-sized", "Bittersweet", 
    "Crunchy", "Flaky", "Gooey", "Hearty", "Luscious", 
    "Mild", "Peppery", "Sapid", "Silky", "Smokey", 
    "Smooth", "Sourish", "Spicy", "Subtle", "Sugared", 
    "Sweetish", "Syrupy", "Tangy", "Tantalizing", "Tartish", 
    "Tasteful", "Teeny", "Toothsome", "Vapid", "Velvety", 
    "Wholesome", "Winy", "Yummy", "Zappy", "Zingy", 
    "Zesty"
];

const sounds = [
    "Loud", "Soft", "Quiet", "Noisy", "Melodic", 
    "Harsh", "Gentle", "Harmonious", "Dissonant", "Crisp", 
    "Clear", "Muffled", "Echoing", "Rhythmic", "Faint", 
    "Booming", "Hushed", "Shrill", "Thunderous", "Whispering", 
    "Screeching", "Clanging", "Piercing", "Buzzing", "Creaking", 
    "Humming", "Roaring", "Soothing", "Clattering", "Jingling", 
    "Rustling", "Crackling", "Splashing", "Sizzling", "Popping", 
    "Gurgling", "Rumbling", "Wailing", "Chirping", "Squeaking", 
    "Growling", "Hissing", "Droning", "Thumping", "Swishing", 
    "Fluttering", "Tinkling", "Babbling", "Rasping", "Wheezing", 
    "Bellowing", "Galloping", "Tolling", "Chiming", "Sloshing", 
    "Rattling", "Gushing", "Clapping", "Whooshing", "Pattering", 
    "Spluttering", "Snapping", "Squawking", "Trilling", "Warbling", 
    "Rasping", "Yelping", "Giggling", "Croaking", "Crowing", 
    "Squalling", "Yowling", "Screaming", "Cackling", "Murmuring", 
    "Spluttering", "Snoring", "Whistling", "Cooing", "Chattering", 
    "Thudding", "Clucking", "Drumming", "Beeping", "Hooting", 
    "Thwacking", "Thudding", "Knocking", "Purring", "Yammering", 
    "Zipping", "Snorting", "Scratching", "Splashing"
];

const temperatures = [
    "Hot", "Cold", "Warm", "Cool", "Chilly", 
    "Freezing", "Scorching", "Frigid", "Icy", "Balmy", 
    "Mild", "Blistering", "Brisk", "Breezy", "Sweltering", 
    "Searing", "Sultry", "Nippy", "Pleasant", "Frosty", 
    "Tepid", "Numbing", "Steamy", "Muggy", "Polar", 
    "Torrid", "Boiling", "Frosty", "Stifling", "Bracing", 
    "Gelid", "Hypothermic", "Lukewarm", "Unbearable", "Intense", 
    "Piping", "Crisp", "Shivery", "Fervent", "Wintry", 
    "Invigorating", "Refreshing", "Toasty", "Chilled", "Subzero", 
    "Arctic", "Subfreezing", "Fluctuating", "Damp", "Roasting", 
    "Cooling", "Moderate", "Burning", "Blazing", "Below-freezing", 
    "Icy-cold", "Tropical", "Comfortable", "Heated", "Melted", 
    "Glacial", "Overheated", "Overcast", "Calm", "Shaded", 
    "Sunny", "Humid", "Dry", "Chill", "Warm", 
    "Chilly", "Cold", "Freeze", "Frozen", "Frosty", 
    "Ice", "Numb", "Arctic", "Bite", "Shiver", 
    "Breeze", "Warmth", "Bitter", "Thaw", "Overheat", 
    "Tropics", "Subzero", "Furnace", "Sizzled"
];

const speeds = [
    "Fast", "Slow", "Quick", "Swift", "Rapid", 
    "Brisk", "Lively", "Speedy", "Zippy", "Nimble", 
    "Hasty", "Snappy", "Fleet", "Spirited", "Vigorous", 
    "Prompt", "Immediate", "Expeditious", "Hurried", "Accelerated", 
    "Blistering", "Breakneck", "Express", "Frenetic", "Fleet-footed", 
    "Flying", "Racing", "Agile", "Whizzing", "Slick", 
    "Efficient", "Direct", "Dynamic", "Energetic", "Active", 
    "Bursting", "Continuous", "Cruising", "Driven", "Ebullient", 
    "Effortless", "Elastic", "Elevated", "Expeditive", "Expressive", 
    "Flexible", "Frantic", "High-speed", "Immediate", "Instantaneous", 
    "Instantspeed", "Instant", "Intense", "Lightning", "Manic", 
    "Onrush", "Quasi", "Rocket", "Sonic", "Speedster", 
    "Speedwell", "Speedy", "Super", "Unhurried", "Velocity", 
    "Vigorous", "Whirlwind", "Zealous", "Afoot", "Apt", 
    "Barefaced", "Best", "Blithe", "Cursory", "Drive", 
    "Fleeting", "Flit", "Fresh", "Glib", "Headlong", 
    "Hotfoot", "Inhale", "Mild", "Nippy", "Occasional", 
    "Onrush", "Quasi", "Rocket", "Sonic", "Speedster", 
    "Speedwell", "Speedy", "Super", "Unhurried"
];

const qualities = [
    "Good", "Bad", "Great", "Excellent", "Wonderful", 
    "Fantastic", "Superb", "Amazing", "Incredible", "Outstanding", 
    "Awesome", "Terrific", "Fabulous", "Brilliant", "Marvelous", 
    "Magnificent", "Exceptional", "Remarkable", "Extraordinary", "Impressive", 
    "Stunning", "Phenomenal", "Splendid", "Perfect", "Flawless", 
    "Impeccable", "Superior", "Exquisite", "Elegant", "Glorious", 
    "Majestic", "Grand", "Beautiful", "Lovely", "Charming", 
    "Delightful", "Alluring", "Enchanting", "Captivating", "Appealing", 
    "Mesmerizing", "Enticing", "Radiant", "Vibrant", "Gorgeous", 
    "Breathtaking", "Divine", "Heavenly", "Spectacular", "Fascinating", 
    "Delicious", "Delectable", "Luscious", "Scrumptious", "Tasty", 
    "Yummy", "Mouthwatering", "Appetizing", "Savory", "Flavorful", 
    "Nutritious", "Healthy", "Wholesome", "Refreshing", "Satisfying", 
    "Filling", "Nourishing", "Balanced", "Fulfilling", "Invigorating", 
    "Revitalizing", "Rejuvenating", "Restorative", "Beneficial", "Restful", 
    "Peaceful", "Tranquil", "Serene", "Calming", "Soothing", 
    "Relaxing", "Comforting", "Uplifting", "Inspiring", "Motivating", 
    "Encouraging", "Empowering", "Supportive", "Reassuring", "Affirming", 
    "Confident", "Assured", "Reliable", "Trustworthy", "Dependable", 
    "Steadfast", "Resilient", "Persistent", "Determined", "Courageous", 
    "Adventurous", "Bold", "Fearless", "Resourceful", "Innovative"
];

const weatherTypes = [
    "Sunny", "Cloudy", "Rainy", "Stormy", "Windy", 
    "Foggy", "Snowy", "Hazy", "Misty", "Showery", 
    "Drizzly", "Thunderous", "Overcast", "Blustery", "Gusty", 
    "Thundery", "Tempestuous", "Hurricane", "Tornado", "Cyclonic", 
    "Typhoon", "Monsoon", "Damp", "Dry", "Humid", 
    "Muggy", "Sultry", "Chilly", "Cold", "Warm", 
    "Hot", "Freezing", "Scorching", "Breezy", "Balmy", 
    "Bracing", "Gloomy", "Dreary", "Bright", "Clear", 
    "Sunlit", "Dazzling", "Rays", "Frosty", "Nippy", 
    "Glistening", "Inclement", "Mild", "Precipitating", "Bleak", 
    "Calm", "Sleet", "Slushy", "Frosty", "Sweltering", 
    "Torrential", "Vernal", "Wintry", "Seasonal", "Torrential", 
    "Vernal", "Wintry", "Spring", "Summer", "Autumn", 
    "Winter", "Dry", "Wet", "Waterlogged", "Cold", 
    "Cool", "Hot", "Pleasant", "Unpleasant", "Clear", 
    "Cloudy", "Overcast", "Foggy", "Humid", "Dry", 
    "Windy", "Breezy", "Stormy", "Rainy", "Showery", 
    "Showers", "Snowy", "Snowing", "Sleeting", "Sleety", 
    "Blowing", "Blizzardy", "Blustery", "Drifting", "Thundering"
];


const instruments = [
    "Piano", "Guitar", "Violin", "Cello", "Flute", 
    "Trumpet", "Saxophone", "Clarinet", "Drums", "Harp", 
    "Accordion", "Banjo", "Bass", "Organ", "Oboe", 
    "Trombone", "Viola", "Bassoon", "Sitar", "Ukulele", 
    "Didgeridoo", "Harmonica", "Mandolin", "Tabla", "Djembe", 
    "Tuba", "Xylophone", "Marimba", "Theremin", "Cajon", 
    "Cymbals", "Kalimba", "Balalaika", "Bodhran", "Bouzouki", 
    "Charango", "Concertina", "Dulcimer", "Harpsichord", "Lute", 
    "Lyre", "Melodica", "Nyckelharpa", "Psaltery", "Sarangi", 
    "Shakuhachi", "Sitar", "Tambourine", "Zither"
];

const fruits = [
    "Apple", "Banana", "Orange", "Pear", "Grape", 
    "Strawberry", "Blueberry", "Raspberry", "Blackberry", "Cherry", 
    "Pineapple", "Watermelon", "Kiwi", "Mango", "Peach", 
    "Plum", "Apricot", "Pomegranate", "Cantaloupe", "Honeydew", 
    "Grapefruit", "Lemon", "Lime", "Coconut", "Avocado", 
    "Fig", "Date", "Guava", "Papaya", "Passionfruit", 
    "Lychee", "Dragonfruit", "Persimmon", "Cranberry", "Tangerine", 
    "Kumquat", "Rambutan", "Jackfruit", "Starfruit", "Mulberry", 
    "Nectarine", "Quince", "Clementine", "Plantain", "Prickly pear", 
    "Gooseberry", "Elderberry", "Miracle fruit", "Açaí", "Durian", 
    "Feijoa", "Jujube", "Lingonberry", "Mangosteen", "Noni", 
    "Pawpaw", "Salak", "Soursop", "Ugli fruit", "Yuzu", 
    "Ackee", "Barbados cherry", "Breadfruit", "Bilberry", "Cherimoya", 
    "Cupuaçu", "Damson", "Gac", "Jabuticaba", "Longan", 
    "Feijoa", "Mulberry", "Pitaya", "Rowan", "Sapodilla", 
    "Sapote", "Tamarillo", "Tamarind", "Ugni", "Yangmei", 
    "Atemoya", "Bael", "Carissa", "Ginkgo", "Kei apple", 
    "Monstera deliciosa", "Pepino", "Rambutan", "Surinam cherry", "Wampee", 
    "Yangmei"
];

const animals = [
    "Dog", "Cat", "Bird", "Fish", "Lion", 
    "Tiger", "Elephant", "Monkey", "Giraffe", "Horse", 
    "Bear", "Wolf", "Fox", "Rabbit", "Mouse", 
    "Deer", "Kangaroo", "Zebra", "Penguin", "Dolphin", 
    "Whale", "Shark", "Snake", "Crocodile", "Frog", 
    "Turtle", "Eagle", "Owl", "Parrot", "Squirrel", 
    "Bat", "Gorilla", "Panda", "Koala", "Polar bear", 
    "Otter", "Seal", "Walrus", "Hippo", "Rhino", 
    "Buffalo", "Cheetah", "Leopard", "Panther", "Jaguar", 
    "Coyote", "Hedgehog", "Lynx", "Moose", "Raccoon", 
    "Antelope", "Camel", "Llama", "Alpaca", "Dingo", 
    "Emu", "Kookaburra", "Platypus", "Wombat", "Dromedary", 
    "Bison", "Armadillo", "Chimpanzee", "Orangutan", "Sloth", 
    "Meerkat", "Mongoose", "Hyena", "Porcupine", "Vulture", 
    "Condor", "Ostrich", "Cassowary", "Tapir", "Boar", 
    "Iguana", "Komodo dragon", "Gecko", "Chameleon", "Toad", 
    "Salamander", "Axolotl", "Cobra", "Kingfisher", "Stingray", 
    "Bee", "Butterfly", "Ladybug", "Ant", "Crab", 
    "Octopus", "Squid", "Starfish", "Jellyfish", "Cuttlefish"
];

const fantasyCreatures = [
    "Dragon", "Phoenix", "Griffin", "Unicorn", "Mermaid", 
    "Centaur", "Fairy", "Goblin", "Orc", "Troll", 
    "Sphinx", "Yeti", "Werewolf", "Banshee", "Pegasus", 
    "Minotaur", "Cyclops", "Hydra", "Kraken", "Siren", 
    "Chimera", "Basilisk", "Gargoyle", "Imp", "Satyr", 
    "Leprechaun", "Dryad", "Wraith", "Genie", "Nymph", 
    "Salamander", "Gremlin", "Lich", "Golem", "Hobgoblin", 
    "Jinn", "Kelpie", "Manticore", "Ogre", "Pixie", 
    "Roc", "Selkie", "Shapeshifter", "Sprite", "Treant", 
    "Valkyrie", "Wendigo", "Will-o'-wisp", "Wyvern", "Faun", 
    "Hippogriff", "Incubus", "Naga", "Oni", "Quetzalcoatl", 
    "Rakshasa", "Sasquatch", "Tanuki", "Tengu", "Vodyanoy", 
    "Wraith", "Xorn", "Yaksha", "Zaratan", "Amphisbaena", 
    "Bunyip", "Cockatrice", "Ettin", "Fomorian", "Gorgon", 
    "Hyppocampus", "Jabberwock", "Kappa", "Lamia", "Mandragora", 
    "Nuckelavee", "Peryton", "Qilin", "Ziz"
];

const vegetables = [
    "Carrot", "Broccoli", "Lettuce", "Spinach", "Cabbage", 
    "Tomato", "Potato", "Onion", "Garlic", "Pepper", 
    "Cucumber", "Zucchini", "Eggplant", "Radish", "Celery", 
    "Asparagus", "Artichoke", "Mushroom", "Pumpkin", "Squash", 
    "Bean", "Pea", "Lentil", "Chickpea", "Beet", 
    "Turnip", "Rutabaga", "Kale", "Collard", "Swiss chard", 
    "Bok choy", "Fennel", "Okra", "Endive", "Radicchio", 
    "Scallion", "Leek", "Brussels sprout", "Cauliflower", "Pea",
    "Corn", "Cilantro", "Arugula", "Watercress", "Chard",
    "Dandelion greens", "Mustard greens", "Turnip greens", "Kohlrabi", "Broccoli",
    "Lettuce", "Spinach", "Cabbage", "Tomato", "Potato",
    "Onion", "Garlic", "Pepper", "Cucumber", "Zucchini",
    "Eggplant", "Radish", "Celery", "Asparagus", "Artichoke",
    "Mushroom", "Pumpkin", "Squash", "Bean", "Pea",
    "Lentil", "Chickpea", "Beet", "Turnip", "Rutabaga",
    "Kale", "Collard", "Swiss chard", "Bok choy", "Fennel",
    "Okra", "Endive", "Radicchio", "Scallion", "Leek",
    "Brussels sprout", "Cauliflower", "Corn", "Cilantro", "Arugula",
    "Watercress", "Chard", "Dandelion greens", "Mustard greens", "Turnip greens",
    "Kohlrabi", "Daikon", "Yuca", "Jicama", "Lotus root",
    "Sweet potato", "Yam", "Cassava", "Taro", "Jerusalem artichoke"
];

const rpgClasses = [
    "Warrior", "Mage", "Rogue", "Paladin", "Barbarian", 
    "Ranger", "Cleric", "Druid", "Monk", "Bard", 
    "Sorcerer", "Wizard", "Fighter", "Thief", "Assassin", 
    "Berserker", "Knight", "Shaman", "Necromancer", "Summoner", 
    "Alchemist", "Swashbuckler", "Gunfighter", "Mystic", "Enchanter", 
    "Spellblade", "Battlemage", "Scout", "Witch", "Inquisitor", 
    "Brawler", "Archer", "Trickster", "Pirate", "Artificer", 
    "Beastmaster", "Oracle", "Conjurer", "Marksman", "Warlock", 
    "Sage", "Pugilist", "Blademaster", "Chronomancer", "Geomancer", 
    "Healer", "Illusionist", "Shadow", "Sniper", "Brute", 
    "Sellsword", "Arcanist", "Bounty hunter", "Duelist", "Executioner", 
    "Jester", "Marauder", "Puppeteer", "Reaper", "Runemaster", 
    "Savant", "Sorceress", "Summoner", "Tactician", "Templar", 
    "Warmage", "Warden", "Witchdoctor", "Zealot", "Dragoon", 
    "Mystic", "Arcane", "Dark knight", "Fencer", "Berserker", 
    "Skald", "Artisan", "Stalker", "Ninja", "Assassin", 
    "Scribe", "Oracle", "Runekeeper", "Marksman", "Spellsword", 
    "Illusionist", "Scout", "Tinkerer", "Champion", "Guardian"
];

const fantasyRaces = [
    "Elf", "Dwarf", "Orc", "Goblin", "Halfling", 
    "Gnome", "Dragonborn", "Tiefling", "Half-elf", "Half-orc", 
    "Human", "Fairy", "Centaur", "Lizardfolk", "Aasimar", 
    "Tabaxi", "Kenku", "Goliath", "Genasi", "Firbolg", 
    "Triton", "Yuan-ti", "Kobold", "Satyr", "Minotaur", 
    "Aarakocra", "Warforged", "Changeling", "Shifter", "Kalashtar", 
    "Gith", "Tortle", "Grung", "Gnoll", "Kuo-toa", 
    "Bullywug", "Sahuagin", "Merfolk", "Vedalken", "Simic hybrid", 
    "Vampire", "Werewolf", "Revenant", "Gargoyle", "Troll", 
    "Giant", "Dryad", "Naga", "Sprite", "Faun", 
    "Satyr", "Gorgon", "Hag", "Lycanthrope", "Undead", 
    "Doppelganger", "Gnoll", "Shade", "Rakshasa", "Duergar", 
    "Svirfneblin", "Githzerai", "Thri-kreen", "Quaggoth", "Blink dog", 
    "Banshee", "Specter", "Wight", "Ghost", "Mummy", 
    "Sphinx", "Cyclops", "Chimera", "Hydra", "Beholder", 
    "Mind flayer", "Otyugh", "Aboleth", "Behir", "Displacer beast", 
    "Rust monster", "Gelatinous cube", "Basilisk", "Umber hulk", "Cloaker", 
    "Intellect devourer", "Yuan-ti", "Gibbering mouther", "Bulette", "Remorhaz", 
    "Kraken", "Tarrasque", "Gnoll", "Shade", "Rakshasa"
];

const occupations = [
    "Teacher", "Doctor", "Engineer", "Lawyer", "Artist", 
    "Nurse", "Chef", "Writer", "Musician", "Police", 
    "Firefighter", "Actor", "Carpenter", "Plumber", "Electrician", 
    "Mechanic", "Designer", "Programmer", "Scientist", "Veterinarian", 
    "Entrepreneur", "Manager", "Accountant", "Pilot", "Soldier", 
    "Architect", "Librarian", "Psychologist", "Dentist", "Farmer", 
    "Waiter", "Waitress", "Barista", "Tailor", "Barber", 
    "Journalist", "Photographer", "Policeman", "Singer", "Painter", 
    "Baker", "Butcher", "Fisherman", "Gardener", "Athlete", 
    "Coach", "Driver", "Secretary", "Banker", "Cashier", 
    "Chef", "Cook", "Dancer", "Economist", "Editor", 
    "Interpreter", "Judge", "Lecturer", "Miner", "Optician", 
    "Paralegal", "Pharmacist", "Physicist", "Professor", "Researcher", 
    "Salesperson", "Social worker", "Surgeon", "Technician", "Therapist", 
    "Translator", "Truck driver", "Veterinarian", "Writer", "Zookeeper", 
    "Acrobat", "Actuary", "Advisor", "Agent", "Ambassador", 
    "Analyst", "Animator", "Appraiser", "Arborist", "Astronomer", 
    "Attendant", "Author", "Biologist", "Broker", "Caretaker", 
    "Cartographer", "Chemist", "Clerk", "Coach", "Consultant"
];

const vehicles = {
    //Contains vehicles like "car".
}
const sports = {
    //Contains sports like "soccer".
}
const tools = {
    //Contains tools like "hammer".
}
const beverages = {
    //Contains beverages like "coffee".
}
const clothingItems = {
    //Contains clothing items like "jeans".
}
const bodyParts = {
    //Contains various body parts like "arm".
}
const flowers = {
    //Contains flowers like "rose".
}
const desserts = {
    //Contains desserts like "cake".
}