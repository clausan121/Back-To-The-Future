const mongoose           = require('mongoose');
mongoose.connect('mongodb://localhost/express-back-to-future')
const Movie            = require('../models/movies');

const movies = [
  {
    title: "Back To The Future",
    description: "Contemporary high schooler Marty McFly (Michael J. Fox) doesn't have the most pleasant of lives. Browbeaten by his principal at school, Marty must also endure the acrimonious relationship between his nerdy father (Crispin Glover) and his lovely mother (Lea Thompson), who in turn suffer the bullying of middle-aged jerk Biff (Thomas F. Wilson), Marty's dad's supervisor. The one balm in Marty's life is his friendship with eccentric scientist Doc (Christopher Lloyd), who at present is working on a time machine. Accidentally zapped back into the 1950s, Marty inadvertently interferes with the budding romance of his now-teenaged parents. Our hero must now reunite his parents-to-be, lest he cease to exist in the 1980s. It won't be easy, especially with the loutish Biff, now also a teenager, complicating matters. Beyond its dazzling special effects, the best element of Back to the Future is the performance of Michael J. Fox, who finds himself in the quagmire of surviving the white-bread 1950s with a hip 1980s mindset. Back to the Future cemented the box-office bankability of both Fox and the film's director, Robert Zemeckis, who went on to helm two equally exhilarating sequels",
    director:"Robert Zemeckis",
    runtime:"116 minutes",
    releasedate:"Jul 3, 1985",
    actors: "Michael J. Fox, Christopher Lloyd, Crispin Glover, Claudia Wells",
    rating: "96%",
    poster:"https://mholloway63.files.wordpress.com/2015/07/2014-08-06-backtothefuture.jpg"
  },
  {
    title: "Back To The Future II",
    description: "Things have barely settled from the excitement and resolve of the original Back to the Future, when in pops that crazy inventor Dr. Emmett Brown (Christopher Lloyd) with news that in order to prevent a series of events that could ruin the McFly name for posterity, Marty McFly (Michael J. Fox ) and his girlfriend are whisked into the future to the year 2015, where Marty must tangle with a teen rogue named Griff, who's obviously the descendant of Biff, the first Future film's bully. Marty foils Griff and his group when he jumps on an air-foil skateboard that flies him through town at rakish speeds with the loser bullies beaten again. Marty gets a money-making brainstorm before hopping in the time-traveling DeLorean, and he purchases a sports almanac. He figures that back in 1985 he'll be able to place sure-fire bets using the published sports scores of the games that are yet to happen. Unfortunately for Marty, Dr. Brown disapproves of his betting scheme -- he feels too much messing with time is very dangerous -- and he tosses the almanac. A hidden Biff overhears the discussion about the almanac, sees it get tossed out, and grabs it. Thus begins a time-traveling swirl to make the head spin. Biff swipes the DeLorean, heads back to 1955, and with the help of the unerring almanac, bets his way to power. The now-altered Biff world has turned into a nightmarish scene with Biff the mogul, residing in a Vegas-styled pleasure palace and running everything. It's all our hero Marty can do to pull the pieces together this time, as he must jump between three generations of intertwined time travel. The end of Back to the Future, Part 2 introduces its sequel as the zany professor has already time-dashed away to the Wild West of the late 1800s and invites Marty into a new adventure.",
    director:"Robert Zemeckis",
    runtime:"109 minutes",
    releasedate:"Jan 1, 1989",
    actors: "Michael J. Fox, Christopher Lloyd, Crispin Glover, Claudia Wells",
    rating: "64%",
    poster:"https://www.movieposter.com/posters/archive/main/15/MPW-7684"
  },
  {
    title: "Back To The Future III ",
    description: "The final installment in the Back to the Future trilogy picks up where the second film left off, but it casts off the dizzying time travel of the first two films for mostly routine comedy set in the Old West. Marty McFly (Michael J. Fox) receives a 70-year-old letter from his inventor friend, Doc Brown (Christopher Lloyd), who tells Marty that he has retreated a century in time to live out a relatively quiet life in the Old West. Doc Brown reveals that he hid his DeLorean car/time machine in an abandoned mine outside town, and when Marty does some research and discovers that the Doc died shortly after writing the letter, he decides to find the car, travel back in time, and warn the Doc about his demise. Meanwhile, the Doc, who has fallen in love with a local woman (Mary Steenburgen), realizes he can't hide in the past from the problems he has caused to the time flow in the previous two adventures. He reluctantly decides to return to the present with Marty, but first, they have to find a way to get the DeLorean up to time-travel velocity with a broken fuel line and no gasoline.",
    director:"Robert Zemeckis",
    runtime:"119 minutes",
    releasedate:"May 25, 1990",
    actors: "Michael J. Fox, Christopher Lloyd, Crispin Glover, Claudia Wells",
    rating: "74%",
    poster:"https://www.movieposter.com/posters/archive/main/65/MPW-32792"
  },

]

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});