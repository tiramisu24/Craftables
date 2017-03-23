# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(username: "tiramisu", password: "password", img_url: "http://res.cloudinary.com/dezhy95vj/image/upload/v1490214977/bulhybtsjt13ki09hzv4.jpg", bio: "");
user2 = User.create(username: "calamari", password: "password", img_url: "http://res.cloudinary.com/dezhy95vj/image/upload/v1490216839/ci96tpehqzmry74hroil.jpg", bio: "");


project1 = Project.create(title: "Up House", body: "This project of mine was mainly inspired by all the scrap in my room :P And we do recycle a lot, from my cereal boxes to the amazon boxes. But if you take a closer look or think deeper, think bigger every item that you throw/recycle has some value or the other. We just have to learn to make best use of it and be creative. I'm really happy with this Instructable cause one I didn't spend a single penny and two because it's just one happy and colorful house. Plus making something that moves/works is an art by itself.

Of course, I love participating in competitions and no better place to post your ideas than Instructables. I love working/making projects with a lot of color in them. From bright to dark, color expresses a lot and bright colors actually make the mind happier I feel. And as I said making something move or work (adding life) is something amazing. So that's how I came up with this project, making a colorful full house fly/float !!. Plus you learn how to make a simple hovercraft :)t", img_url: "http://res.cloudinary.com/dezhy95vj/image/upload/v1490120647/Craftables/house/intro.jpg",author_id: "#{user1.id}");

project2 = Project.create(title: "Glass Tile & Woven Copper Pendan", body: "This tutorial will take you step-by-step through the process of making a necklace pendant (or earring charm) with just copper wire and a glass mosaic tile.\n
\n
It will incorporate basic wire weaving techniques, but you don't have to have jewellery-making experience to give this a go :)\n
",img_url:"http://res.cloudinary.com/dezhy95vj/image/upload/v1490120788/Craftables/glass_tile/Glass_Tile_intro.jpg",  author_id: "#{user1.id}")

project3 = Project.create(title: "Letter Opener Made From Junk Mail", body: "Like everyone else I get a lot of junk mail and it usually ends up in the recycling bin. But I had an idea to see if I could make something with it instead of just throwing it in the bin. So I came up with this, I made a letter opener from the junk mail using fiberglass resin to make it stiff. It is basically the same as making Micarta from fabric but instead I used the paper from my junk mail. The process is fairly straight forward and the end product ended up working quite well. I don't know how long the edge will last but I only plan to use this for opening letters so I'm not too concerned with it becoming dull. And if it does become dull I can always touch up the edge.

", img_url:"http://res.cloudinary.com/dezhy95vj/image/upload/v1490120830/Craftables/letter_opener/Letter_opener_intro.jpg" ,author_id: "#{user2.id}")


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
