var Product = require("../models/product")

var mongoose = require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/codertask', {
    useMongoClient: true
});
// mongoose.connect(process.env.MONGO_DB_URI, { useMongoClient: true })

var products = [
  new Product({
    imagePath: "https://images-submarino.b2w.io/produtos/01/00/sku/10633/1/10633182_1GG.jpg",
    title: "Game Pes 2016 - Ps4",
    description:
      "Together with all the new features included in Pes 2016, the Football Series will feature the Dynamic Weather System for the first time. This new implementation will not only graphically improve the effects of time in the game, but will also affect the gameplay itself, playing an important role in the redesign of the Master League mode and in offline games. In addition to this new feature, the game features a new camera mode, New Celebration Features. Title: Pes 16 Platform: Ps4 Production company: Konami Characteristics: Genre: Sport Age group: Free Players: 1-4 Offline / 2-22 Online Language Game: Audio In Portuguese-Br With Narration by Mauro Beting And Silvio Luis Language Manual: Portuguese Sac: 4003-7669 For Capitals and Metropolitan Regions 0800-880-7669 Other Locations. Not all features are available for all gaming platforms.",
    price: 269
  }),
  new Product({
    imagePath: "https://images-submarino.b2w.io/produtos/01/00/item/21014/3/21014382_1SZ.jpg",
    title: "Game Tom Clancys Ghost Recon Wildlands Ps4",
    description:
      "We are all used to the huge amount of 3 person games that exist in the virtual world. Because of this, a game that has a differential draws much more attention. Tom Clancys Ghost Recon Wildlands brings much more than one or the other. The Game Brings a Totally New Experience That Will Change Your Way of Watching Shooting Games.",
    price: 209
  }),
  new Product({
    imagePath: "https://images-submarino.b2w.io/produtos/01/00/item/127373/6/127373656SZ.jpg",
    title: "Game Lego Star Wars: The Force Awakens - PS4",
    description:
      "LEGO® Star Wars: The Force Awakens marks the incredible return of the number 1 LEGO video game series and takes fans into the new Star Wars adventure in an unprecedented way. Players can relive the epic action of cinema success in a way that only LEGO can offer, with the whole storyline of Star Wars: The Force Awakens retold from the clever and fun perspective of LEGO. The game will also feature exclusive content that will take players on adventures between Star Wars: Episode VI: Return of the Jedi and Star Wars: The Force Awakens, offering a new take on the recent film and its characters.",
    price: 169
  }),
  new Product({
    imagePath: "https://images-submarino.b2w.io/produtos/01/00/item/122163/8/122163887SZ.jpg",
    title: "Game Mortal Kombat X - PS4",
    description:
      "Mortal Kombat X is the next chapter in the long-awaited, legendary and acclaimed fighting game franchise from NetherRealm Studios, marking the debut of the iconic series in the new generation. The game combines cinematic presentation with unprecedented gameplay, offering the most brutal combat experience of all time, bringing a completely new connected experience that throws players into a persistent online competition, in which every fight counts in the global battle for supremacy.",
    price: 79
  }),
  new Product({
    imagePath: "https://images-submarino.b2w.io/produtos/01/00/item/124776/7/124776759_1GG.jpg",
    title: "Game - Uncharted 4: A Thief's End - PS4",
    description:
      "Every treasure has its price Several years after his last adventure, retired treasure hunter Nathan Drake is forced to return to the world of thieves. Now with his personal life at stake, Drake embarks on a journey around the world in search of a historic conspiracy behind a famous pirate treasure.",
    price: 108
  }),
  new Product({
    imagePath: "https://images-submarino.b2w.io/produtos/01/00/item/126036/2/126036287SZ.jpg",
    title: "Game - The Witcher 3: Wild Hunt - PS4",
    description:
      "The Witcher 3: Wild Hunt is a role-playing game in a wide, dynamic, non-linear and dark fantasy world based on a story driven by the character himself, the player's choices and strategic combat. The third chapter of this award-winning saga enhances all aspects of the series, with a more fluid combat system, new Witcher Senses and Monster Hunting, improved alchemy, magic signals, skill systems and many other innovations.",
    price: 99
  })
]

var done = 0
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++
    if (done === products.length) {
      exit()
    }
  })
}

function exit() {
  mongoose.disconnect()
}
