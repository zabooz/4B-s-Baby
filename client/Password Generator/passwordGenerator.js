export function generatePassword(options, length) {
    let password = "";
    const symbols = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'",.<>?/~`.split('');
    const dogBreeds =[
        "affenpinscher", "afghan hound", "airedale terrier", "akita", "alaskan malamute", "american bulldog", 
        "american pit bull terrier", "american staffordshire terrier", "australian cattle dog", "australian shepherd", 
        "australian terrier", "basenji", "basset hound", "beagle", "bearded collie", "beauceron", "bedlington terrier", 
        "belgian malinois", "belgian sheepdog", "belgian tervuren", "bernese mountain dog", "bichon frise", "black and tan coonhound", 
        "black russian terrier", "bloodhound", "border collie", "border terrier", "borzoi", "boston terrier", "bouvier des flandres", 
        "boxer", "briard", "brittany", "brussels griffon", "bull terrier", "bulldog", "bullmastiff", "cairn terrier", 
        "canaan dog", "cane corso", "cardigan welsh corgi", "cavalier king charles spaniel", "chesapeake bay retriever", 
        "chihuahua", "chinese crested", "chinese shar-pei", "chow chow", "clumber spaniel", "cocker spaniel", "collie", 
        "curly-coated retriever", "dachshund", "dalmatian", "dandie dinmont terrier", "doberman pinscher", "dogue de bordeaux", 
        "english cocker spaniel", "english foxhound", "english setter", "english springer spaniel", "english toy spaniel", 
        "entlebucher mountain dog", "field spaniel", "finnish spitz", "flat-coated retriever", "french bulldog", "german pinscher", 
        "german shepherd dog", "german shorthaired pointer", "german wirehaired pointer", "giant schnauzer", "glen of imaal terrier", 
        "golden retriever", "gordon setter", "great dane", "great pyrenees", "greater swiss mountain dog", "greyhound", 
        "havanese", "ibizan hound", "icelandic sheepdog", "irish red and white setter", "irish setter", "irish terrier", 
        "irish water spaniel", "irish wolfhound", "italian greyhound", "jack russell terrier", "japanese chin", "keeshond", 
        "kerry blue terrier", "komondor", "kuvasz", "labrador retriever", "lakeland terrier", "leonberger", "lhasa apso", 
        "lowchen", "maltese", "manchester terrier", "mastiff", "miniature bull terrier", "miniature pinscher", "miniature schnauzer", 
        "neapolitan mastiff", "newfoundland", "norfolk terrier", "norwegian buhund", "norwegian elkhound", "norwegian lundehund", 
        "norwich terrier", "nova scotia duck tolling retriever", "old english sheepdog", "otterhound", "papillon", "parson russell terrier", 
        "pekingese", "pembroke welsh corgi", "petit basset griffon vendeen", "pharaoh hound", "plott", "pointer", "polish lowland sheepdog", 
        "pomeranian", "poodle", "portuguese water dog", "pug", "puli", "rhodesian ridgeback", "rottweiler", "saint bernard", 
        "saluki", "samoyed", "schipperke", "scottish deerhound", "scottish terrier", "sealyham terrier", "shetland sheepdog", 
        "shiba inu", "shih tzu", "siberian husky", "silky terrier", "skye terrier", "sloughi", "soft-coated wheaten terrier", 
        "spanish water dog", "spinone italiano", "staffordshire bull terrier", "standard schnauzer", "sussex spaniel", "swedish vallhund", 
        "tibetan mastiff", "tibetan spaniel", "tibetan terrier", "toy fox terrier", "treeing walker coonhound", "vizsla", "weimaraner", 
        "welsh springer spaniel", "welsh terrier", "west highland white terrier", "whippet", "wire fox terrier", "wirehaired pointing griffon", 
        "xoloitzcuintli", "yorkshire terrier"
    ];

    const colors = [
        "red", "orange", "yellow", "green", "blue", "indigo", "violet", "black", "white", "gray", 
        "brown", "pink", "purple", "cyan", "magenta", "lime", "maroon", "navy", "olive", "teal", 
        "turquoise", "beige", "salmon", "coral", "gold", "silver", "bronze", "amber", "aquamarine", 
        "azure", "chartreuse", "crimson", "fuchsia", "khaki", "lavender", "plum", "sienna", "tan", 
        "peach", "mint", "chocolate", "rose", "burgundy", "ivory", "periwinkle", "charcoal", "scarlet", 
        "emerald", "jade", "amethyst", "sapphire", "ruby", "topaz", "cobalt", "eggshell", "apricot", 
        "blush", "brick", "cherry", "coffee", "denim", "flax", "forest", "grape", "honey", "lemon", 
        "moss", "mulberry", "orchid", "pearl", "pine", "raspberry", "rust", "sand", "seafoam", "sepia", 
        "sky", "slate", "snow", "strawberry", "tangerine", "wine", "wisteria", "aqua", "coral", "goldenrod", 
        "lavender blush", "light cyan", "light goldenrod yellow", "light gray", "light pink", "light salmon", 
        "light sea green", "light sky blue", "light slate gray", "light steel blue", "light yellow", "lime green", 
        "linen", "medium aquamarine", "medium blue", "medium orchid", "medium purple", "medium sea green", 
        "medium slate blue", "medium spring green", "medium turquoise", "medium violet red", "midnight blue", 
        "mint cream", "misty rose", "moccasin", "navajo white", "old lace", "olive drab", "orange red", "orchid", 
        "pale goldenrod", "pale green", "pale turquoise", "pale violet red", "papaya whip", "peach puff", "powder blue", 
        "rebecca purple", "rosy brown", "royal blue", "saddle brown", "sandy brown", "sea green", "sky blue", "slate blue", 
        "spring green", "steel blue", "thistle", "tomato", "wheat", "yellow green"
    ];
    const stripperNames = [
        "Amber", "Angel", "Athena", "Aurora", "Bambi", "Bella", "Brooklyn", "Carmen", "Chanel", "Crystal", 
        "Desiree", "Diamond", "Eden", "Electra", "Faith", "Foxy", "Giselle", "Grace", "Harper", "Heaven", 
        "Holly", "Isis", "Ivy", "Jade", "Jasmine", "Karma", "Lexi", "Lily", "Mia", "Misty", 
        "Natalia", "Nova", "Olivia", "Pearl", "Phoenix", "Quinn", "Raven", "Ruby", "Scarlett", "Sapphire", 
        "Serena", "Stella", "Tiffany", "Trinity", "Venus", "Violet", "Zara", "Alexa", "Anastasia", "Aria", 
        "Ariel", "Ava", "Bianca", "Blaze", "Candy", "Celeste", "Cinnamon", "Dahlia", "Daisy", "Dakota", 
        "Destiny", "Diva", "Dream", "Ember", "Eva", "Fantasia", "Gigi", "Heather", "Honey", 
        "Iris", "Isla", "Jewel", "Kiki", "Kimber", "Kylie", "Lola", "Magenta", "Marilyn", "Monroe", 
        "Morgan", "Nina", "Paris", "Peaches", "Penny", "Piper", "Raine", "Roxy", "Sasha", "Skye", 
        "Summer", "Sunshine", "Trixie", "Valentina", "Valerie", "Vanessa", "Veronica", "Willow", "Zelda",
        "Adriana", "Belle", "Carolina", "Cherry", "Coco", "Diva", "Echo", "Foxy", "Genesis", 
        "Havana", "Infinity", "Journey", "Karma", "Luna", "Mystery", "Nirvana", "Passion", "Raven",
        "Savannah", "Temptress", "Unity", "Vixen", "Whisper", "Xena", "Yasmine", "Zephyr",
        "Ambrosia", "Blossom", "Buttercup", "Catalina", "Cleopatra", "Duchess", "Enigma", "Fleur", "Galaxy",
        "Halo", "Jubilee", "Kitty", "Lavender", "Majesty", "Nectar", "Opal", "Pandora", "Queenie", "Rouge",
        "Serenity", "Tulip", "Utopia", "Velvet", "Wildflower", "Xanadu", "Yara", "Zinnia"
    ];
    const candys = [
        "Almond Joy", "Baby Ruth", "Butterfinger", "Candy Corn", "Caramel Apple Pop", "Chewy Lemonhead", "Crunch", "Dove Chocolate", "Gobstopper", "Gummy Bears", 
        "Hershey's Kisses", "Hot Tamales", "Jawbreaker", "Jelly Belly", "Kit Kat", "Laffy Taffy", "M&M's", "Milky Way", "Nerds", "Oh Henry!", 
        "Peanut M&M's", "Pixy Stix", "Red Hots", "Reese's Peanut Butter Cups", "Skittles", "Smarties", "Snickers", "Sour Patch Kids", "Starburst", "Swedish Fish", 
        "Tootsie Pop", "Twix", "Warheads", "Werther's Original", "Whoppers", "York Peppermint Pattie", "Zagnut", "100 Grand", "3 Musketeers", "Airheads", 
        "Atomic Fireball", "Bit-O-Honey", "Boston Baked Beans", "Candy Buttons", "Candy Necklace", "Charleston Chew", "Chick-O-Stick", "Clark Bar", "Dots", 
        "Everlasting Gobstopper", "Fruit Stripe Gum", "Fun Dip", "Goo Goo Cluster", "Good & Plenty", "Heath Bar", "Hubba Bubba", "Jelly Belly", "Jujubes", 
        "Kinder Bueno", "Lemonheads", "Lifesavers", "Mallo Cup", "Mary Jane", "Milk Duds", "Mr. Goodbar", "Nik-L-Nip", "Now and Later", "PayDay", 
        "Pez", "Pop Rocks", "Raisinets", "Ring Pop", "Root Beer Barrels", "Sixlets", "Sky Bar", "Slo Poke", "Smarties", "Sour Punch Straws", 
        "Sugar Babies", "Sugar Daddy", "Sweetarts", "Teaberry Gum", "Toffee Crisp", "Turkish Delight", "Twizzlers", "Valomilk", "Vanilla Charleston Chew", 
        "Violet Crumble", "Whatchamacallit", "Zero Bar", "Zotz", "Big Hunk", "Bit-O-Honey", "Candy Cigarettes", "Chiclets", "Cow Tales", "Cry Baby", 
        "Gold Mine Gum", "Gummi Rings", "Ice Cubes", "Jolly Rancher", "Nerds Rope", "Necco Wafers", "Push Pops", "Red Vines", "Rock Candy", 
        "Sky Bar", "Slap Stix", "Slo Poke", "Sno-Caps", "Sour Patch Xploderz", "Sour Power Belts", "Sour Punch Bites", "Spree", "Teaberry", 
        "Terry's Chocolate Orange", "Tootsie Roll", "Violet Crumble", "Wax Lips", "Wacky Wafers", "Whistle Pops", "Yogos", "Zotz", "Whatchamacallit", 
        "Wacky Taffy", "Watermelon Slice", "Atomic Fireballs", "Bottle Caps", "Candy Cigarettes", "Candy Sticks", "Candy Watches", "Caramel Apple Pops", 
        "Cherry Clan", "Chewy Spree", "Chiclets", "Chunky", "Cow Tales", "Cry Baby Tears", "Dubble Bubble", "Dum Dums", "Fizzies", "Fizzers", 
        "Fun Dip", "Gobstoppers", "Gold Mine Gum", "Gummi Bears", "Gummi Worms", "Heide", "Hot Tamales", "Jelly Belly", "Jolly Ranchers", 
        "Jordan Almonds", "Juicy Fruit", "Lemonheads", "Lik-M-Aid", "Lollipops", "Mamba", "Mary Janes", "Mike and Ike", "Milk Duds", "Nerds", 
        "Now and Later", "Nik-L-Nips", "Pixy Stix", "Pop Rocks", "Ring Pop", "Rolo", "Runts", "Sixlets", "Slo Poke", "Smarties", 
        "Sour Patch Kids", "Spree", "Sugar Babies", "Sugar Daddy", "Swedish Fish", "Sweethearts", "Tic Tac", "Tootsie Rolls", "Tootsie Pops", 
        "Turkish Taffy", "Twizzlers", "Warheads", "Wax Lips", "Whoppers", "York Peppermint Pattie", "Zagnut", "Zours"
    ];
        
    

    // Create a Uint32Array to hold the random values
    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);

    for (let i = 0; i < length; i++) {
        // Use the random value to select a symbol
        const randomIndex = randomValues[i] % symbols.length;
        password += symbols[randomIndex];
    }

    console.log(password);
    return password;
}

// Example usage
const options = "dog";
const length = 5;
generatePassword(options, length);
