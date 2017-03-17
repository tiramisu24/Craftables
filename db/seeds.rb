# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user1 = User.create(username: "tiramisu", password: "password");

Project.destroy_all
project1 = Project.create(title: "How to Make Pop-up Card: Opera House-Sydney", body: "Materials required:

A thick Paper
Hobby knife
Glue
An ball/gel Pen
A ruler
A printer (not necessary)
You will need a lot of patience for Making this Masterpiece (About 2 hours)

Either Trace the templates or Just print it out", author_id: "#{user1.id}");

project2 = Project.create(title: "Glass Tile & Woven Copper Pendan", body: "This tutorial will take you step-by-step through the process of making a necklace pendant (or earring charm) with just copper wire and a glass mosaic tile.

It will incorporate basic wire weaving techniques, but you don't have to have jewellery-making experience to give this a go :)

You will need:

- A glass mosaic tile; these are usually supplied on a net or with some other backing that doesn't look that attractive. On mine, these was adhesive from the mesh on the back. I later chose to cover mine with felt, but I think a better way would have been to sand/polish the back instead.

The best thing about using mosaic tiles is that there are so many different colours and pretty effects to choose from, and they are usually inexpensive.

- 2 thicknesses of copper wire; One for the main shape, and a thinner one to do the weaving with. I am using 20 gauge (0.8mm) for the main frame and 26 gauge (0.4mm) for the weaving. 18 gauge would also be an appropriate choice for the frame, and you could use very fine 28 gauge wire for the weaving if you preferred.

- Wire cutters

- Pliers; I'm using my jewellery pliers for this. Any flat or blunt nose pliers would work - you just need to bend 90 degree corners in the wire, and do a little bit of shaping.

- Small piece of felt (optional)",  author_id: "#{user1.id}")

Step.destroy_all
Step.create(title: "Step 1: Let's Make the Shells First

", body: "Shells must be Curvy and Shaped to get a good look

", stepNum: "1", project_id: "#{project1.id}")

Step.create(title: "Step 2: Construct the Base

", body: "Assembling the base would be quite harder than the next step

Loads of patience is required for this step", project_id: "#{project1.id}")

Step.create(title: "Step 3: Let's Lay the Foundation

", body: "This Step is very easy

But a lot of precision will be required", project_id: "#{project1.id}")

Step.create(title: "Step 4: Finished!

", body: "Now you can stick it to a thick card
", project_id: "#{project1.id}")
