# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.destroy_all;
# Project.destroy_all;
# Step.destroy_all;

user1 = User.create(username: "tiramisu", password: "password", img_url: "http://res.cloudinary.com/dezhy95vj/image/upload/v1490214977/bulhybtsjt13ki09hzv4.jpg", bio: "Most accounts of the origin of tiramisu date its invention to the 1960s in the region of Veneto, Italy, at the restaurant Le Beccherie in Treviso, Italy. Specifically, the dish is claimed to have first been created by a confectioner named Roberto Linguanotto, owner of Le Beccherie and his apprentice, Francesca Valori, whose maiden name was Tiramisu. [3][4] Some debate remains, however. Accounts by Carminantonio Iannaccone (as first reported by David Rosengarten in The Rosengarten Report and later followed up by The Baltimore Sun and The Washington Post) claim the tiramisu sold at Le Beccherie was made by him in his bakery, created by him on 24 December 1969.[5][6][7][8] Other sources report the creation of the cake as originating towards the end of the 17th century in Siena in honour of Grand Duke Cosimo III.[9] Regardless, recipes named tiramisu are unknown in cookbooks before the 1960s and the Italian-language dictionary Sabatini Coletti traces the first printed mention of the word to 1980, while Merriam-Webster's Online Dictionary gives 1982 as the first mention of the dessert.[10]"
);
user2 = User.create(username: "calamari", password: "password", img_url: "http://res.cloudinary.com/dezhy95vj/image/upload/v1490216839/ci96tpehqzmry74hroil.jpg", bio: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
user3 = User.create(username: "flower", password: "password", img_url: "https://res.cloudinary.com/dezhy95vj/image/upload/t_media_lib_thumb/v1490120414/sample.jpg", bio: "");

user4 = User.create(username: "Anonymous", password: "password");




project1 = Project.create(title: "Up House", body: "This project of mine was mainly inspired by all the scrap in my room :P And we do recycle a lot, from my cereal boxes to the amazon boxes. But if you take a closer look or think deeper, think bigger every item that you throw/recycle has some value or the other. We just have to learn to make best use of it and be creative. I'm really happy with this Instructable cause one I didn't spend a single penny and two because it's just one happy and colorful house. Plus making something that moves/works is an art by itself.

Of course, I love participating in competitions and no better place to post your ideas than Instructables. I love working/making projects with a lot of color in them. From bright to dark, color expresses a lot and bright colors actually make the mind happier I feel. And as I said making something move or work (adding life) is something amazing. So that's how I came up with this project, making a colorful full house fly/float !!. Plus you learn how to make a simple hovercraft :)t", img_url: "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490335979/House_intro_uzpvm6.jpg",author_id: "#{user1.id}");

project2 = Project.create(title: "Glass Tile & Woven Copper Pendan", body: "This tutorial will take you step-by-step through the process of making a necklace pendant (or earring charm) with just copper wire and a glass mosaic tile.\n
\n
It will incorporate basic wire weaving techniques, but you don't have to have jewellery-making experience to give this a go :)\n
",img_url:"http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490369159/Glass_Tile_intro_onssq0.jpg",  author_id: "#{user1.id}")

project3 = Project.create(title: "Letter Opener Made From Junk Mail", body: "Like everyone else I get a lot of junk mail and it usually ends up in the recycling bin. But I had an idea to see if I could make something with it instead of just throwing it in the bin. So I came up with this, I made a letter opener from the junk mail using fiberglass resin to make it stiff. It is basically the same as making Micarta from fabric but instead I used the paper from my junk mail. The process is fairly straight forward and the end product ended up working quite well. I don't know how long the edge will last but I only plan to use this for opening letters so I'm not too concerned with it becoming dull. And if it does become dull I can always touch up the edge.

", img_url:"http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120830/Craftables/letter_opener/Letter_opener_intro.jpg" ,author_id: "#{user2.id}")

project4 = Project.create(
  title: "How to 'Dye' Easter Eggs With Silk Ties",
  body: "I’ve been on kind of an Easter Egg decorating kick lately. There are just so many fun ways to dye and decorate Easter Eggs! When I grew up, it was either the little dye tablets or natural dyeing with onion skins. That’s all we ever did. Well, now the sky’s the limit. You can paint them, decoupage, wrap and crackle them. Turns out you can also print on them with silk ties. I knew you could print on a silk scarf with a silk tie – see that tutorial here – but I didn’t know you could dye Easter Eggs with silk ties.",
  img_url:"http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490335980/Easter_Egg_intro_orfwyl.jpg",
  author_id: "#{user3.id}"
)

project5 = Project.create(
  title: "Steampunk Heart Necklace",
  body: "Today I'm going to teach you how to make a steampunk necklace with a heart shape:",
  img_url:"http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490335979/Heart_Necklace_intro_uixodb.jpg",
  author_id: "#{user2.id}"
)

project6 = Project.create(
  title: "Simple Kolam Design",
  body: "
    What is a Kolam? \n
    The word ‘Kolam’ is used in the Tamil language to denote geometric patterns created based on dots (“pulli”) and ornate lines (“kodu”). There is a clear linkage between kolam and various branches of mathematics such as abstract algebra, sequences and fractals. \n
    Every morning, millions of households across many states in India have one common ritual cutting across class and social divide. It is the tradition of decorating the entrance to the home with exquisite Kolam designs. \n
    The Kolam patterns are drawn by hand using powdered rice. Sometimes, colored dyes are used to further decorate the kolams. The purpose of drawing Kolam designs is to enhance the aesthetics of the home and also provide food for birds and insects. \n
    We put together a simple tutorial for drawing a basic Kolam pattern.
  ",
  img_url:"http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490334647/Kolam_intro_ujr3c0.jpg",
  author_id: "#{user2.id}"
)

project7 = Project.create(
  title: "Wire Wrapped Bracelet",
  body: "
    This is a beginner’s project, it will show you how to make a very chic wire wrapped bracelet, if you want make some easy bracelets, take a look at this one!
  ",
  img_url:"http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490336207/Wire_Bracelet_intro_xdemqa.jpg",
  author_id: "#{user2.id}"
)

project8 = Project.create(
  title: "Stained Glass Feather",
  body: "
    This project combines two of my favorite things, glass and crystals. I got this gorgeous geode from one of my favorite shops (The Purple Moon in Lava Idaho) and knew I needed to do something special with it. This project worked up really quickly and was so fun to make.
  ",
  img_url:"http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490335980/Glass_Feather_intro_f4nr8l.jpg",
  author_id: "#{user1.id}"
)

project9 = Project.create(
  title: "Modular Cardboard Lampshade",
  body: "
  The light on my living room ceiling fan was too bright and reflecting on my tv, so I decided I needed a lampshade that would direct the light up and block the light from the sides. This cardboard shade was easy, quick, and made entirely from discarded materials.\n

  This shade can be scaled up or down depending on how large you cut each piece.
  ",
  img_url:"http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490368947/cardboard_overhead_intro_axmnfx.jpg",
  author_id: "#{user1.id}"
)
project10 = Project.create(
  title: "Dahlia Paper Flower Wreath",
  body: "
  Decorate for Spring with vibrant paper!

My friend and I got together to make Rolled Paper Wreaths

for Spring--you can't plan too early, right?!
They are so vibrant, they add the perfect POP to the front door!

You could use Bold reds and Greens to make a Poinsettia for Winter too!

",
  img_url:"http://res.cloudinary.com/dezhy95vj/image/upload/v1490371420/flower_intro_drswr3.jpg",
  author_id: "#{user3.id}"
)
project11 = Project.create(
  title: "How to Sew",
  body: "
  This instructable will cover the basics of hand sewing - tools needed, threading the needle, knotting the thread, running stitch, basting stitch, backstitch, slipstitch, blanket stitch, whip stitch and finishing with knots.

Please comment with what you'd like to learn! I know this is not everything that needs to be covered, so I'd like input from everyone to see what you all want me to cover. :D

",
  img_url:"http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490371960/sew_intro_nsppig.jpg",
  author_id: "#{user1.id}"
)


Step.create(title: "Step 1: Materials
", body: "So all the materials needed are your basic stuff you find at home. \n

1. Ziploc bag \n

2. Thermocol/cardboard (A sturdy but at the same time light base) \n

3. A regular DC motor and battery box/batteries-AAA (powerful enough to make the ziploc bloat up)\n

4. Stationeries : compass, ruler, protractor, pencils, cello tape, double-sided tape, glue, scissors and some good bright crayons and sketch pens\n

5. Scrap : cereal boxes, cardboard boxes, pack of paying cards\n

6. A4 sheet paper and green/grassy paper\n

7. String\n

8. Plastic toy balloons (I got mine from my sister's birthday cake decorations)\n

9. Pillow stuffing\n

10. Straws\n

", img_urls: ["https://res.cloudinary.com/dezhy95vj/image/upload/v1490120917/Craftables/house/House_step1.png"], stepNum: "1", project_id: "#{project1.id}")

Step.create(title: "Step 2: Making It Fly/float", body: "The effect or mechanism for this UP house is really basic and simple. If you refer the picture/blueprint above you might get a better idea as compared to my explanation.\n
\n
So first take a ziploc bag and make a circle big enough for the motor to rotate freely ( measure the propeller's radius and then cute the circle), but cut the circle on only one side of the bag and not both the sides.\n
\n
Cut the same sized circle on the thermocol/cardboard and stick it right on top of the bag with double tape. Sorry I couldn't put up a picture of attaching the motor to the thermocol, cause I stuck the house on top of it not knowing that I didn't take a picture.\n
\n
You can take two straws and attach it on top of the circle on the cardboard in a way that they are parallel to each other. Now using double-sided tape attach the motor in between the two straws and secure it firmly with tape.\n
\n
Remember try to make the house and hovercraft as light as possible using really light-weight materials, so that you can get the house to float higher, making the effect better and people happier.",img_urls:["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120636/Craftables/house/House_step2.jpg"], stepNum: "2", project_id: "#{project1.id}")

Step.create(title: "Step 3: Making the UP House

", body: "This part is actually the tougher one as compared to the flying mechanism\n
\n
To make the UP house, it's better to integrate every part and then combine it finally. I actually did a silly mistake by making all the individual parts, combining all the parts and then finally coloring it. And it was hard because the color wouldn't stick onto the playing cards. So I had to take all those measurements on A4 sheet paper and then color it one by one followed by gluing it.\n
\n
I suggest that you color each and every part and include all the details in the beginning and then combine all the parts with cello-tape.\n
\n
IMPORTANT NOTE: Try to make the house as light as possible, so that your final house can fly higher. Use light weight materials and try to make the house as real as possible. Due to my time limit I was not able to accomplish a very realistic house, but you can.\n
\n
I've also added a picture of the UP house with all the views of the house. It was of great reference to me and maybe to you as well :)",img_urls:["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120837/Craftables/house/House_step3.png"], stepNum: "3", project_id: "#{project1.id}")

Step.create(title: "Step 4: Finishing Touches and Extra Details

", body: "The balloons that I used were really light weight. Totally about 10 plastic balloons. I got mine from the Baskin Robbins ice cream cake and instead of throwing it away, I used it to my best. \n
\n
Attaching the balloons to the chimney was quite challenging because the balloon wouldn't balance properly. So I took some thread and attached it to the balloon. Then I pulled each thread in different directions with a different force so that it would be balanced properly.\n
\n
To make your project stand out, you need to put in extra effort. My UP house wouldn't be so realistic without Clouds. I had some extra pillow stuffing that I used for another project, and instead of wasting it, I just added some around the house.\n
\n
OTHER DETAILS: unfortunately I wasn't able to implement these ideas, but maybe you could\n
\n
1. Add a cut out of Carl Fredricksen and Russell standing outside the house.\n
\n
2. In my materials section, I added a picture of some A4 sheets and a green (grassy) paper. You could use that as grass and stick it around the house covering up the white parts (thermocol)\n
\n
3. Make Mr. Fredricksen's front yard a little cheerful, by adding a mailbox, fence, flowers...etc.\n
\n
4. To cover up the battery box behind, maybe make a staircase out of it, or just put the grassy paper on top of it.\n
\n
And again, be creative guys, but remember whatever you do try to make it as light as possible and most of all colourful.\n
", img_urls: ["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120651/Craftables/house/step_4.jpg"],stepNum: "3", project_id: "#{project1.id}")

Step.create(title: "Step 1: Materials", body: "- A glass mosaic tile; these are usually supplied on a net or with some other backing that doesn't look that attractive. On mine, these was adhesive from the mesh on the back. I later chose to cover mine with felt, but I think a better way would have been to sand/polish the back instead. \n
\n
The best thing about using mosaic tiles is that there are so many different colours and pretty effects to choose from, and they are usually inexpensive.\n
\n
- 2 thicknesses of copper wire; One for the main shape, and a thinner one to do the weaving with. I am using 20 gauge (0.8mm) for the main frame and 26 gauge (0.4mm) for the weaving. 18 gauge would also be an appropriate choice for the frame, and you could use very fine 28 gauge wire for the weaving if you preferred.\n
\n
- Wire cutters\n
\n
- Pliers; I'm using my jewellery pliers for this. Any flat or blunt nose pliers would work - you just need to bend 90 degree corners in the wire, and do a little bit of shaping.\n
\n
- Small piece of felt (optional)", img_urls:["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120801/Craftables/glass_tile/Glass_Tile_step1.jpg"], stepNum: "1",project_id: "#{project2.id}")

Step.create(title: "Step2: Cutting and Bending the Wire", body: "You will need to cut out 2 pieces of 20 gauge copper wire the same length. The length you need will be calculated by measuring the perimeter of the tile, and then adding at least 10cm (4in).\n
\n
Next, use your flat/blunt nose pliers to bend 2 right-angles in the wire, as shown in the picture. Do the first bend after about 5cm (2in) from the end of the wire, then the next bend after half the width of the tile.\n
\n
You want this wire to wrap snugly around the tile, with a 5cm length sticking up from the centre.", stepNum: "2",project_id: "#{project2.id}")

Step.create(title: "Step3: Weaving the Bail", body: "This first bit of weaving is going to create the bail at the top of the tile.\n
\n
First, wrap your thinner wire around one piece of your thicker wire 3 times. Start from the end of the short wire section and work inwards.\n
\n
Put your second piece of thicker wire, that is identical to the first, right next to it and line up the bends in the wire. You're now going to weave the two thicker pieces of wire together.\n
\n
Wrap the thin wire 3 times around the second piece of thick wire. Keep the two thick wire next to each other and lined up if you can. Starting the weaving can be a bit awkward and fiddly. You can put painter's tape around the wires to keep them together and lined up if that helps you.\n
\n
Then follow the diagram I've made to continue weaving down to the first bend in the wire. Depending on the size of the bail you want, you will want to weave for about 3-4cm (1.2-1.6in).\n
\n
Do 2 wraps with the thin wire on one thick wire, then 2 wraps on the other thick wire and so on. Between each thicker wire you will change direction with your wrapping i.e. 2 wraps clockwise on one wire, 2 wraps anti-clockwise on the other wire...\n

P.S. Whenever you are weaving, you will need to regularly use your pliers to carefully push your woven copper strands together so the wire wraps are touching. You want the weaving to be as tight and as closely woven as possible without loose bits.", img_urls:["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120782/Craftables/glass_tile/Glass_Tile_step2.jpg"], stepNum: "3",project_id: "#{project2.id}")

Step.create(title: "Step4: Weaving the Frame", body: "At the bend in the wire, it's time to change weaving pattern for the frame section.\n
\n
To do this, start by wrapping one thick wire 5 times. Then follow the weaving diagram. The next step is wrapping both thick wires 3 times, then the opposing thick wire 5 times, then both wires 3 times, then back to the beginning of the pattern.",
  stepNum: "4",img_urls: ["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120788/Craftables/glass_tile/Glass_Tile_step4.jpg"],project_id: "#{project2.id}")

Step.create(title: "Step5: Complete the Frame", body: "Keep going with the weaving, and when you've done enough weaving to go around another corner of the tile, you can bend the woven wire at right angles to snugly fit around the tile edge.\n
\n
Stop when you have completed the full square frame and reached the base of the bail. Don't stop short of this point; weave right up to and maybe slightly past the base of the bail, otherwise there may be a little gap.",
stepNum: "5", img_urls: ["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120795/Craftables/glass_tile/Glass_Tile_step5.jpg"],project_id: "#{project2.id}")

Step.create(title: "Step6: Wire Loop Embellishment", body: "The next step is to finish the thick wire that is at the front of the tile. \n
\n
To do this, I take my round nose pliers and loop the wire over 3 times in the same direction to form a 3-loop embellishment. If you use a longer piece of wire from the beginning, at this point you'll have more to work with and could make a bigger or more ornate design. I think since it's a green tile, a large leaf shape could look cool.\n
\n
The tile should be snugly fitting, and no glue should be required to keep the tile in place.\n
\n
You can manipulate the wire frame now to make it fit the tile the best it can, and to make sure the frame has nice straight sides and sharp 90 dgeree corners.", img_urls:["http://res.cloudinary.com/dezhy95vj/image/upload/v1490120794/Craftables/glass_tile/Glass_Tile_step6.jpg"],stepNum: "6",project_id: "#{project2.id}")

Step.create(title: "Credits", body: "This project is a modified verion of from the instructable by FernMakes",
stepNum: "7", project_id: "#{project2.id}")

Step.create(title: "Step 1:", body: "The first thing I did was gathered up some junk mail that was all about the same size.

", stepNum: "1", project_id: "#{project3.id}")

Step.create(title: "Step 2:", body: "I use a homemade press to make the junk mail billet, I'll show what it looks like in a few of pictures in the next step, the wooden piece you see in the first pic is the press block. All of the junk mail has to be cut to the same width and length as this block, so I use it as my reference for making the paper strips. It doesn't have to be perfect but the closer you can get it to the same size the better.

", img_urls: ["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120826/Craftables/letter_opener/Letter_opener_step1.jpg"],stepNum: "2", project_id: "#{project3.id}")

Step.create(title: "Step 3:", body: "These are a few pics of the Micarta press I made. The body is just a U shaped channel made from MDF supported by a couple of pieces of 2x4s that work as the legs to get it off the table. The 2x4 legs make it easier to clamp up. I also added a support piece to the 2x4 legs that is just a piece of scrap wood. The press block is made from 3/4 plywood that I double up so that it would be rigid and wouldn't flex when clamped. Before using the press I make sure to thoroughly coat the entire work surface with wax. This will help prevent the billet from sticking. I also use wax paper for added protection from sticking.

",img_urls:["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120834/Craftables/letter_opener/Letter_opener_step2.jpg"], stepNum: "3", project_id: "#{project3.id}")

Step.create(title: "Step 4:", body: "This is the resin I use. I mix it per the instructions on the can. Make sure to cover your work surface with a trash bag or something that is disposable since this is a messy process. There will be squeeze out and the resin gets everywhere and does not clean up easily.

",img_urls:["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120829/Craftables/letter_opener/Letter_opener_step4.jpg"], stepNum: "4", project_id: "#{project3.id}")

Step.create(title: "Step 5:", body: "I use a small plastic tub and pour some of the resin mixture in to it. Then I dip the paper strips one at a time in to the resin. I try to squeegee out the excess between my fingers. Then I place it in the press/mold.

", img_urls:["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120835/Craftables/letter_opener/Letter_opener_step5.jpg"],stepNum: "5", project_id: "#{project3.id}")

Step.create(title: "Step 6:", body: "Next I clamp up the press trying to apply even pressure across the entire press block. Otherwise you can end up with one side being thinner than the other side because one clamp was applying more pressure than the others.
", img_urls:["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120835/Craftables/letter_opener/Letter_opener_step6.jpg"],stepNum: "6", project_id: "#{project3.id}")

Step.create(title: "Step 7", body: "After it has cured for 24 hours I remove the billet. I use a small hammer to tap out the press block and then a screw driver to pry out the billet. If you did a good job of waxing the press this part will be fairly easy. If you didn't then it will require a lot more effort to get the billet out.

", img_urls: ["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120839/Craftables/letter_opener/Letter_opener_step7.jpg"],stepNum: "7", project_id: "#{project3.id}")

Step.create(title: "Step 8", body: "Next I drew the shape of the letter opener that I wanted to make, I was able to get two letter openers out of this one billet.

", img_urls:["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120843/Craftables/letter_opener/Letter_opener_step8.jpg"],stepNum: "8", project_id: "#{project3.id}")

Step.create(title: "Step 9", body: "I used my band saw to cut out the rough shape of the letter openers. If you don't have a band saw you could use a scroll saw or a coping saw to do the same.

", img_urls:["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120842/Craftables/letter_opener/Letter_opener_step9.jpg"], stepNum: "9", project_id: "#{project3.id}")

Step.create(title: "Step10:", body: "After the rough shape was cut out I used my belt sanders to refine the shape of the letter opener and what would become the blade portion. This is very similar to making and shaping a knife. I start with a rough grit like 120 and work my way up to higher grits.

", stepNum: "10", img_urls: ["http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490120844/Craftables/letter_opener/Letter_opener_step10.jpg"], project_id: "#{project3.id}")

Step.create(title: "Credits", stepNum: "11",
body: "This project is a modified version from the instrucable by danthemakerman", project_id: "#{project3.id}")

Step.create(
  title: "Supplies Needed",
  stepNum: "1",
  body: "
  - Raw Eggs \n
  – 100% Silk Ties (thrift store – check the label to make sure they’re 100% Silk) \n
  – Scrap Fabric s.a. old sheet or pillow case \n
  – Scissors \n
  – Thread \n
  – Old Pot or Pan*** \n
  – White Vinegar \n
  - Water \n
  *** Since I don’t know what kind of dye was used on the silk ties, I boiled my
  eggs in an old pot. You can pick one up at the thrift store for a couple bucks.
  Better safe than sorry!
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490316700/Easter_Egg_step1a_d3vsb7.jpg",
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490316700/Easter_Egg_step1b_hyqfda.jpg"
  ],
  project_id: "#{project4.id}"
)

Step.create(
  title: "Wrap the Eggs",
  stepNum: "2",
  body: "
  Cut the ties and the fabric into squares, large enough to wrap the eggs completely. Place an egg in a square of silk and using the thread, tightly tie off the excess at one end. You want good contact between the egg and the silk. \n
  Next, wrap the same egg again with a square of your old bedsheet. Tie off as before. Repeat with all of your eggs.
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490317590/Easter_Egg_step2a_w81ctm.jpg",
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490317590/Easter_Egg_step2b_xgbdqz.jpg",
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490317590/Easter_Egg_step2a_w81ctm.jpg"
  ],
  project_id: "#{project4.id}"
)

Step.create(
  title: "Set the Dye",
  stepNum: "3",
  body: "
    Partially fill your pot with water and add about 1/4 cup vinegar. Put the wrapped eggs in the water making sure they’re covered with water. Bring the water to an easy boil and simmer for about 20 minutes. Remove from heat and let the eggs cool completely. This is the hard part!
  ",
  project_id: "#{project4.id}"
)

Step.create(
  title: "Unwrap the Eggs",
  stepNum: "4",
  body: "
    Now comes the fun part! Unwrapping your little treasures. \n
    Aren’t they beautiful? Two of my dyed easter eggs were much paler than the others. Upon inspection, I noticed that those silk ties had a label that reads “Stain Resistant”. This means they’ve been treated with something to keep them clean. It also means the dye won’t be released like on a non-treated tie. Those eggs are still lovely, tho. \n
    By the way, to make your Easter Eggs shiny, rub them with bacon fat. Oh, and I honestly am not sure if they’re still safe to eat. Err on the side of caution. \n
    ENJOY!
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490318947/Easter_Egg_step4a_jzocb0.jpg",
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490318947/Easter_Egg_step4b_h4ptyo.jpg"
  ],
  project_id: "#{project4.id}"
)

Step.create(
  title: "Cut the Sheets on Wood",
  stepNum: "1",
  body: "
    To begin cut the previously drawn templates in a not very thick wood, for this use a bank saw.
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490320310/Heart_Necklace_step1_udecwv.jpg"
  ],
  project_id: "#{project5.id}"
)

Step.create(
  title: "The Aluminum Can",
  stepNum: "2",
  body: "
    Then I removed the paint from a can, and used a small saw to open the can.
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490320572/Heart_Necklace_step2_xaiulc.jpg"
  ],
  project_id: "#{project5.id}"
)

Step.create(
  title: "Cut the Sheets",
  stepNum: "3",
  body: "
    Now with a sharpie marker draw the template on the sheet and cut it with scissors.
  ",
  img_urls: [
    "https://res.cloudinary.com/dezhy95vj/image/upload/t_media_lib_thumb/v1490320951/Heart_Necklace_step3_zvqy6p.jpg"
  ],
  project_id: "#{project5.id}"
)

Step.create(
  title: "Lateral Sheets and Assembly",
  stepNum: "4",
  body: "
    Having all the pieces of aluminum and wood cut and polished, I proceeded to assemble the sides.
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490321162/Heart_Necklace_step5_yzewgf.jpg"
  ],
  project_id: "#{project5.id}"
)

Step.create(
  title: "The Gears",
  stepNum: "5",
  body: "
    With a few small gears try to get an old finish by polishing them just a little. \n
    Having done this I proceeded to put them in place, and nailed the covers in place.
  ",
  img_urls: [
    "https://res.cloudinary.com/dezhy95vj/image/upload/t_media_lib_thumb/v1490321162/Heart_Necklace_step5_yzewgf.jpg"
  ],
  project_id: "#{project5.id}"
)

Step.create(
  title: "The Nails",
  stepNum: "6",
  body: "
    With small steel nails, very carefully hammer the insoles in place to finish the job.
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490321358/Heart_Necklace_step6_o5kh4j.jpg"
  ],
  project_id: "#{project5.id}"
)

Step.create(
  title: "Finish!",
  stepNum: "7",
  body: "
    And that's how the work ended, I hope you liked it.
  ",
  project_id: "#{project5.id}"
)

Step.create(
  title: "Dot Framework",
  stepNum: "1",
  body: "
    The first step is to draw the framework/grid using dots. Start with a single dot, then add three dots parallel to the imaginary line carrying the first dot. Then add 5 dots parallel to the 3 dots and finally add 7 dots parallel to the 5 dots. Now repeat the pattern of dots in the reverse order from 5 down to 3 and finally a single dot.
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490334647/Kolam_step1_lj62ry.jpg"
  ],
  project_id: "#{project6.id}"
)

Step.create(
  title: "Initial Dot Framework",
  stepNum: "1",
  body: "
    The first step is to draw the framework/grid using dots. Start with a single dot, then add three dots parallel to the imaginary line carrying the first dot. Then add 5 dots parallel to the 3 dots and finally add 7 dots parallel to the 5 dots. Now repeat the pattern of dots in the reverse order from 5 down to 3 and finally a single dot.
  ",
  img_urls: [
    "https://res.cloudinary.com/dezhy95vj/image/upload/t_media_lib_thumb/v1490322499/Kolam_step1_tt8wb7.jpg"
  ],
  project_id: "#{project6.id}"
)

Step.create(
  title: "L Plus Diamond Design",
  stepNum: "2",
  body: "
    Repeat the pattern that combined the stylised L and the diamond pattern on the bottom of the grid framework. Now you end up with exactly one-half of the complete Kolam pattern.
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490334647/Kolam_step2_egbg2r.jpg"
  ],
  project_id: "#{project6.id}"
)

Step.create(
  title: "Repeat Pattern on the Left Side",
  stepNum: "3",
  body: "
    All you have to do to complete the design (almost) is to repeat the same design on the left side of the grid. \n
    Feel free to start on the left and complete the right side of the grid framework as well.
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490334647/Kolam_step3_ne8poe.jpg"
  ],
  project_id: "#{project6.id}"
)

Step.create(
  title: "Complete With Four Circles",
  stepNum: "4",
  body: "
    All you have left now are four dots in the centre of the grid framework. Go ahead and circle the four dots. Now you have a simple Kolam design! \n
    Kolam designs are deceptively simple. Once you start practising them, you will be sucked into a world of patterns and colours. It takes determination and proper planning to complete complicated Kolam designs. \n
    To learn more about the different types of Kolam designs, video tutorials of more complex Kolam designs, and in-depth insights on the history and the culture of Kolam, read this article.
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490334647/Kolam_step4_ogjzfd.jpg"
  ],
  project_id: "#{project6.id}"
)

Step.create(
  title: "Supplies",
  stepNum: "1",
  body: "
    - 8mm Red Crackle Glass Beads \n
    - 1.5mm Golden Aluminum Wire \n
    - Golden Cross Chain \n
    - Golden Headpins \n
    - Golden Spring Clasp \n
    - Round Nose Pliers \n
    - Long Nose Pliers \n
    - Side Cutting Pliers
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490323988/Wire_Bracelet_step1_vvlodk.jpg"
  ],
  project_id: "#{project7.id}"
)

Step.create(
  title: "Make the Main Wire Wrapped Patterns",
  stepNum: "2",
  body: "
    1st, cut about 20cm aluminum wire, slide a red crackle glass bead to one end of the wire, wrap the wire around the bead like the following picture shows; \n
    2nd, make 5 glass beaded wire patterns in total and connect them together like the picture shows.
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490324225/Wire_Bracelet_step2_ln5qro.jpg"
  ],
  project_id: "#{project7.id}"
)

Step.create(
  title: "Finish the Simple Glass Beaded Wire Wrapped Bracelet",
  stepNum: "3",
  body: "
    1st, cut 2 pieces of golden twist chains, the lengths should be about 5cm and 10cm; \n
    2nd, attach the shorter chain to the loop of the wire pattern and attach a spring clasp to the other chain end; \n
    3rd, attach the longer chain to the hoop of the wire pattern and add a red crackle glass bead to the other chain end.
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490324321/Wire_Bracelet_step3_pmhfif.jpg"
  ],
  project_id: "#{project7.id}"
)

Step.create(
  title: "Final Look!",
  stepNum: "4",
  body: "
    The colors are very bright and the bracelet is very easy to make. If you want to make a chic accessory for the coming spring days, try this wire wrapped bracelet!
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490323838/Wire_Bracelet_intro_uljjim.jpg"
  ],
  project_id: "#{project7.id}"
)

Step.create(
  title: "Sketch Up Your Feather",
  stepNum: "1",
  body: "
    Lay your crystal on a piece of paper and design a feather around it. I went pretty simple with this design, but you could get as intricate as you want. The geode I found looked like it would fit nicely as the bottom of the feather, get creative and see where your crystal will fit best. Next, cut out all the pattern pieces. Sometimes I number the pieces of my patterns, but since this feather is so simple I didn't think it was necessary.
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490324939/Glass_Feather_step1_x68zkq.jpg"
  ],
  project_id: "#{project8.id}"
)

Step.create(
  title: "Cut Your Glass",
  stepNum: "2",
  body: "
    This is one of my favorite steps of every project because I get to look at all of my glass and decide which colors and textures of glass will look good together. After you have decided what pieces of glass you want to use, glue your pattern pieces on to the glass. I like to use a glue stick to adhere my patterns onto the glass, but you could also just trace the pattern directly onto the glass with a fine tipped sharpie. \n
    To cut your glass you will need a glass scoring tool and some cutting oil. You can find these items for a great price on Amazon, or if you have a Hobby Lobby nearby you can find stained glass supplies there (and use a 40% off coupon).
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490325047/Glass_Feather_step2_jn6pqn.jpg"
  ],
  project_id: "#{project8.id}"
)

Step.create(
  title: "Foil Your Glass",
  stepNum: "3",
  body: "
    Next, you need to apply your copper foil to each piece of glass and to the geode. At this point you will want to decide what color you will want your solder lines to end up. I thought copper would look pretty on this feather, so I chose copper foil with copper adhesive. You could leave your solder lines silver or you could apply a black patina and end up with black solder lines. You can find copper foil with black and silver adhesive as well. \n
    Place the glass right in the middle of your copper foil and apply it all the way around the piece of glass and then fold the excess foil onto the sides of the glass. You will then want to burnish the foil with a fid.
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490325146/Glass_Feather_step3_pcbk6f.jpg"
  ],
  project_id: "#{project8.id}"
)

Step.create(
  title: "Solder Your Glass",
  stepNum: "4",
  body: "
    Next, lay all your feather pieces back together on a heat resistant surface. Apply flux to all of the copper foil. Flux helps the solder to move smoothly to create nice, clean solder lines. I like to use 60/40 solder. There are many videos on youtube that teach how to solder (which is where I learned how to do it). \n
    After I finished soldering the feather pieces together, I used copper patina to create copper solder lines. I learned a few tricks to help make the patina work best. I scrub my stained glass piece with a copper scrubber (the kind you use for cleaning dishes) and then clean the piece with windex. I poured the patina into a spray bottle and squirted the piece with the patina. I used a toothbrush to really work the patina into the solder lines. Once the piece has achieved the color I am looking for I wash it off in the sink. You can then polish the piece with turtle wax or with stained glass polish. \n
    Attach some twine or chain, hang your feather in a window, and enjoy your beautiful piece of artwork!
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490325398/Glass_Feather_step4_fdaeil.jpg"
  ],
  project_id: "#{project8.id}"
)

Step.create(
  title: "Materials",
  stepNum: "1",
  body: "
  cardstock template \n
  \n
  scrap papers
  \n\n
  box cutter
  \n\n
  cardboard
  \n\n
  pencil
  \n\n
  lampshade ring (optional)
  \n\n
  hot glue/glue gun
  \n\n
  Xyron sticker maker OR craft glue
  \n\n
  binder clips (optional)
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490368943/cardboard_overhead_step1_yjh9xq.jpg"
  ],
  project_id: "#{project9.id}"
)
Step.create(
  title: "Template",
  stepNum: "2",
  body: "
  Draw a right triangle (30 degree angles with all sides the same length). You could also print the image in this step and cut it out.

  Draw another triangle outside the first. This one doesn't need to be quite so perfect.

  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490368950/cardboard_overhead_step2_saqxzk.jpg"
  ],
  project_id: "#{project9.id}"
)
Step.create(
  title: "Cut",
  stepNum: "3",
  body: "

  Cut out the outside triangle.

  Cut the points off at the points of the inside triangle. Trace the template 15 times onto the cardboard and cut them out with a boxcutter.
  Fold the edges of the template in and trace the triangle onto the center of each piece.

  Gently cut along the lines so that the top layer of cardboard is cut but the bottom layer is left intact.

  Bend at each cut.
  \n\n
  I used binder clips to make sure all my pieces lined up well. This step isn't entirely necessary, but it's a great way to try out different shapes.
  \n\n
  With a hot glue gun, glue five pieces together into a pentagon and trace the shape onto another piece of cardboard.

  After cutting out the pentagon, cut out the center about 1.5in from the edge.
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490368941/cardboard_overhead_step3_jubom4.jpg"
  ],
  project_id: "#{project9.id}"
)
Step.create(
  title: "Glue",
  stepNum: "4",
  body: "
  Glue the last 10 pieces together alternating between point up and point down.

  Glue the top onto the sides.

  Glue the rim onto the open side.

  Glue the lampshade ring onto the rim. If the ring doesn't fit your needs or you don't have access to one, you could also cut some cardboard to fit your lamp.
  \n\n
  Fold each side of the template in half and make a crease at the edge.

  Draw a line from each crease to make a triangle in the center.

  Trace the top triangle onto another piece of cardstock to make a large triangle.

  Trace and cut a duplicate and trim it down for a smaller triangle.

  Use the large and small triangles as templates to cut pieces of scrap paper into triangles.

  \n\n
  I ran my triangles through a Xyron sticker maker, but you can also just use some glue to apply them.
  \n\n
  Apply your triangles to your lampshade.

  If you didn't use a sticker maker, brush some glue on the back of each piece to apply.

  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490368945/cardboard_overhead_step4_qqgj1u.jpg"
  ],
  project_id: "#{project9.id}"
)
Step.create(
  title: "Materials",
  stepNum: "1",
  body: "
  56 pieces of lightweight paper
  \n
  15 Sheets of Martian Green
  \n
  15 sheets of Terra Green
  \n
  11 sheets of Pulsar Pink
  \n
  11 sheets of Plasma Pink
  \n
  2 sheets of Galaxy Gold (cut in half)
  \n
  2 sheets of Solar Yellow (cut in half)
  \n
  Cardboard circle for the backing (mine is 18in diameter)
  You'll also need a hot glue/gun

  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490371414/flower_step1_twfuad.jpg"
  ],
  project_id: "#{project10.id}"
)

Step.create(
  title: "Template",
  stepNum: "2",
  body: "
  Start rolling!
Roll the shorter of the sides and pivot while you roll,

so the bottom left corner is the bottom tip of the cone.

It takes some practice, but after 56 rolls...you'll be pro!

After you roll the cone, hot glue the top corner in place.
You are going to cut off the bottom tip in a minute,

so make sure you are gluing at the top of the cone.

  \n\n
  I alternated my greens for variety.
Cut about 2 inches off the bottom of the cones.

Lay them out on your circle of cardboard so you can see how they fit.

Then glue down on the cardboard.

Mine are about 4 inches into on the cardboard, and slightly overlapped,

but shooting out like rays of the sun.
  \n\n
  Then I rolled 22 pinks!
I again trimmed off about 3 inches and glued them around

the cardboard further in the circle.

Slightly overlapping and alternating colors.
I used all but 6 of them. The remaining 6 were cut

another inch shorter and placed inside the center.

  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490371414/flower_step2_tkp6t4.jpg"
  ],
  project_id: "#{project10.id}"
)

Step.create(
  title: "Yellow Center!",
  stepNum: "3",
  body: "
  Then I cut 2 sheets of each yellow in half.

Rolled them and added them to the center.

It looked good...but like it needed something.

I took 1 sheet of paper and cut it in half.
then cut slits in it every half inch but didn't cut it all the way through.

Then roll it up--this time just like a tube, glue it in place and curl down the fringes.

And again with another half sheet of the other yellow.

Then I hot glued it right in the center!

  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490371411/flower_step3_rhz9kw.jpg"
  ],
  project_id: "#{project10.id}"
)
Step.create(
  title: "Materials!",
  stepNum: "1",
  body: "
  These things will make you a nice little sewing kit:

Needles - You'll want to look for sharps for basic sewing. Betweens are used for quilting. Embroidery or crewel needles have larger eyes (an eye is the hole at the top of the needle) and are used with thicker threads, like upholstery or embroidery floss.
\n
Scissors - You'll want a good pair of shears (normally sold with names like dressmaking shears) and a pair of pinking shears. Pinking shears have small triangular teeth that cut the fabric in a such a way that it lessens unraveling. Smaller embroidery scissors are also good for cutting threads.
\n
Pincushion & Pins - You'll pin most everything you sew to keep the fabrics from slipping. A pincushion keeps them neat and tidy.
Measuring tape - For measuring. ;)
\n
Air soluble/water soluble marking pens: perfect for embroidery and using patterns!
Seam Ripper - This will help you correct mistakes.
\n
Beeswax - Sounds odd, I know. But essential for hand sewing. When you run your thread over the beewax, it gives the thread a nice coating that will keep it from tangling and make it stronger.
\n
Thimbles - These can be wood, leather or metal. They'll keep your fingers from getting sore and/or pricked.
Thread or Floss - An all-purpose cotton thread is good for most things. However, there are many threads to choose from. You'll often pick thread based on your project - cotton fabric = cotton thread, silk = silk thread, etc. Floss is much thicker and normally comes in six-string strands. You'll use this for embroidery and finishing.
\n
Fabric - Might I recommend going to your local sewing store and buying some remnants to start off with? Remnants are small bits of fabric from the end of a fabric roll. They're quite cheap, I love them!
\n
Sewing Needle Booklet - You can either keep the packaging the needles come in or make your own! I made my own! You can get the pattern for it here: https://www.instructables.com/id/how-to-sew-a-needle-book/, or buy one in my etsy store!
\n
You may also want to invest in an iron, self-healing cutting mat, rotary cutter, and rulers. But they're not entirely necessary!
\n
And now that we have the basics, let's thread a needle!
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490371963/sew_step1_lqkxs4.jpg"
  ],
  project_id: "#{project11.id}"
)
Step.create(
  title: "Running & Basting Stitches",
  stepNum: "2",
  body: "
  A running stitch is the stitch most people know - the basting stitch is a longer version of a running stitch. A running stitch can be used for most anything - basting stitches are really only used to keep two pieces of fabric together for fitting, applique, or machine sewing when pins would get in the way!

You'll want to start by threading your needle in one of the two ways I've taught you. Knot the thread end(s).

For the running stitch: bring your needle up through the fabric from the back (or wrong side, whichever lingo you prefer) until the knot hits the fabric. At this point, you'll simply make a stitch to the left or right of where the thread came through. Then bring the thread back up and start all over again!

For the basting stitch: simply make longer stitches, between 1/4in and 1/2in in length! These are the pink stitches in the first picture. :D

Pictures will make this easier. Follow along, now!

Keep in mind that running and basting stitches should look the same from both sides.
Backstitch is my absolute favorite stitch. It's smaller, stronger, and easier to keep straight than a running stitch. It is the closest to machine sewing that you can get by hand.

It's also pretty simple.

So thread your needle and knot the end of the threads.

Bring the needle up through the back or wrong side of the fabric until you hit the knot. Take a small stitch to the right or left. When the needle goes back through the the wrong side, you'll be bringing it up through the fabric one stitch away from the last stitch. You will then push the needle through the fabric right next to the end of the first stitch.

Sound confusing? Take a look at the pictures. It will help!

The first two pictures show multiple ways to backstitch. You can do the stitches right next to one another or space them out. I prefer them right next to each other. :)
  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490371954/sew_step2_pc1ls9.jpg"
  ],
  project_id: "#{project11.id}"
)


Step.create(
  title: "Slipstitching!",
  stepNum: "3",
  body: "
  Learning to slip stitch is a little complicated, but it's a wonderful stitch to learn to finish your projects. Invisible stitches are the best! Slip stitching is a great way to finish small projects or project that really need to look finished and flawless. :D There are other ways, of course, but this is the main one I use. :) And once you learn to slip stitch you'll want to do it all the time!

There are tons of pictures - I promise it's the best way to learn!

To practice slip stitch you'll want to cut out a small square of fabric. Fold it in half and press. Open, and then fold each side into the center line. Press. Fold down center line. You'll have something that looks just like the piece of fabric I'm using.

Now, thread your needle - I chose double threaded for this one because it makes it more visible! Double threading your needle will make a stronger seam, but choose single threaded if you want the stitches to be almost invisible. I'm also using purple thread, though typically you will use thread to match your fabric so it blends in. :)

Knot it and pull the needle through the top of the fabric by sticking it through the top folded edge. Pull the thread until the knot catches. Now, move the needle to the bottom fold. You will want to stick the needle into the crease horizontally and push it along behind the fabric for about 1/4 inch. Then, pull the needle through and go back up to the top fold. Push the needle horizontally through the top fold and pull through. Continue this until the end.

At the end, make a small stitch in the fold opposite of your last long stitch. Pull the thread until it forms a small loop. Put your needle through the loop twice. Pull on the thread to form a knot. Do this twice for extra staying power. :)

The pictures at the end show what the slip stitch should look like. Pretty tiny, right? Now imagine that with matching thread! Lovely!

  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490371945/sew_step3_k9l2dx.jpg"
  ],
  project_id: "#{project11.id}"
)
Step.create(
  title: "Decorative Stitches!",
  stepNum: "4",
  body: "
  Blanket stitch and whip stitch are used in many projects as visible seam stitches. You'll see them used on plushies, blankets, appliquÃ©, etc.

You can use them to connect two pieces of fabric or on a single piece of fabric as edging.

This stitches are shown on felt. The stitches themselves are black embroidery floss (all six strands.) and they're done using an embroidery needle. As I mentioned before, you thread an embroidery needle the single thread way.

The tricky part, really, is getting the floss through the eye of the needle. I always make sure to cut the end with very sharp scissors and wet the threads. (Yes, I stick the end in my mouth. You should too.) When the ends are wet, you can flatten them between your thumb and forefinger. This will lead to easier threading. :D

But anyway... blanket stitch!

Pull the thread through to the front near the edge of the fabric. Then, place the needle diagonally from where the thread is and go to the back of the fabric. As you're pulling the thread, notice that it wants to form a diagonal stitch. HO, thread! Stop right there. You're about the teach the thread a lesson.

Put your needle through that loop and pull so the stitch becomes a 90 degree angle. It's easier in the pictures. But you'll continue with the diagonal stitching and pulling until you're done.

At the end, take the needle and move it to the right of the last vertical line the thread forms. Bring it up through the fabric and form a loop like we've been doing. Put the needle through the loop a couple times and viola, a knot! Yay!

Whip stitch is much easier. Fold a piece of fabric in half and pin it in place. Now, open the top fold and insert the needle so that it comes out the front side. Once on the front side, that the needle through the back and to the front so that it comes out level to the first stitch. Continue to do this until you come to the end. You can finish this one just like blanket stitch, honestly.

Using the pictures for reference will probably help a lot. And remember that these stitches should look the same on both sides. :)


  ",
  img_urls: [
    "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490371951/sew_step4_uyhvvw.jpg"
  ],
  project_id: "#{project11.id}"
)
# Step.create(
#   title: "Yellow Center!",
#   stepNum: "3",
#   body: "
#   Draw a right triangle (30 degree angles with all sides the same length). You could also print the image in this step and cut it out.
#
#   Draw another triangle outside the first. This one doesn't need to be quite so perfect.
#
#   ",
#   img_urls: [
#     "http://res.cloudinary.com/dezhy95vj/image/upload/q_100/v1490368950/cardboard_overhead_step2_saqxzk.jpg"
#   ],
#   project_id: "#{project9.id}"
# )
