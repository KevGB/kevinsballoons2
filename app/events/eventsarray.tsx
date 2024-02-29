const eventData = [
  {
    type: "Birthday",
    headerImage: "../../public/birthday-header.jpg",
    headline: "Make Any Birthday One to Remember!",
    body: "From toddlers to grandparents, everyone loves balloons! We offer age-appropriate entertainment and beautiful decorations to make your birthday party unforgettable. Guests will go home with a special balloon creation, leaving them with a lasting memory of the celebration.",
    galleryImage: "../../public/birthday-gallery.jpg",
    recommendedServices: [
      "Balloon Twisting",
      "Party Favors",
      "Balloon Columns",
    ],
  },
  {
    type: "Wedding",
    headerImage: "../../public/wedding-header.jpg",
    headline: "Add Elegance and Fun to Your Big Day",
    body: "Balloons are the perfect touch for any wedding, adding a touch of elegance or a dash of festivity. We can create a stunning Balloon Arch for the bride and groom, decorate with beautiful Balloon Garlands, and keep the kids entertained with Balloon Twisting, ensuring a memorable wedding reception or rehearsal dinner.",
    galleryImage: "../../public/wedding-gallery.jpg",
    recommendedServices: [
      "Balloon Arch",
      "Balloon Garlands",
      "Balloon Twisting",
    ],
  },

  {
    type: "Corporate Event",
    headerImage: "../../public/corporate-event-header.jpg",
    headline:
      "Boost Employee Morale and Create Lasting Memories with Fun Balloon Activities",
    body: "Reward your employees and create a fun and engaging atmosphere at your next corporate event, whether it's a bring-your-kid-to-work day, company picnic, or holiday party. Our balloon services can help: \n* Increase Team Spirit: Enhance your company culture with Balloon Columns in your brand colors, showcasing your unique identity. \n* Create a Fun & Interactive Experience: Engage your team with a talented Balloon Twister, who can create unique and exciting balloon sculptures on the spot. \n* Leave a Lasting Impression: Impress everyone with a stunning Balloon Centerpiece featuring your company logo, adding a touch of creativity and cheer to the event.",
    galleryImage: "../../public/corporate-event-gallery.jpg",
    recommendedServices: [
      "Balloon Columns",
      "Balloon Twister",
      "Balloon Centerpiece",
    ],
  },
  {
    type: "Sporting Event",
    headerImage: "../../public/sporting-event-header.jpg",
    headline:
      "Show Your Team Spirit and Pump Up the Crowd with Vibrant Balloon Decor",
    body: "Rally your team to victory and create a vibrant and exciting atmosphere at your next sporting event with our captivating balloon decorations: \n* Display Team Pride: Support your team in style with Balloon Columns adorned in their official colors, generating a sea of team spirit. \n* Enhance the Viewing Experience: Frame your TV or designated viewing area with a Balloon Garland, adding a touch of festive flair to the event. \n* Engage Young Fans: Entertain and delight young supporters with a skilled Balloon Twister, who can create fun and exciting balloon sculptures throughout the game.",
    galleryImage: "../../public/sporting-event-gallery.jpg",
    recommendedServices: [
      "Balloon Columns",
      "Balloon Garland",
      "Balloon Twister",
    ],
  },
  {
    type: "Municipal Event",
    headerImage: "../../public/municipal-event-header.jpg",
    headline:
      "Bring Your Community Together with Eco-Friendly Balloon Decorations",
    body: "Liven up your next municipal event, whether it's a family day at the park, a vibrant parade, or a city holiday celebration, with our eco-friendly and visually stunning balloon decorations: \n* Celebrate Sustainability: Utilize our biodegradable and non-toxic latex balloons, which decompose naturally, demonstrating your commitment to environmental responsibility. \n* Create a Welcoming Atmosphere: Greet event attendees with a welcoming Balloon Arch, marking the entrance and setting a festive tone for the celebration. \n* Highlight Local Landmarks: Draw attention to landmarks and key areas with decorative Balloon Garlands, adding a touch of flair and enhancing the visual appeal of your event.",
    galleryImage: "../../public/municipal-event-gallery.jpg",
    recommendedServices: [
      "Balloon Arch",
      "Balloon Garlands",
      "Balloon Twister",
    ],
  },
  {
    type: "Festival",
    headerImage: "../../public/festival-header.jpg",
    headline:
      "Create Wow-Moments and Attract Attendees with Captivating Balloon Decor",
    body: "Whether you're hosting a music festival, film festival, dance party, pride celebration, Oktoberfest, food festival, or any other event, our balloon decorations can transform your space and delight attendees of all ages: \n* Enchant Your Audience: Impress everyone with a skilled **Balloon Twister**, who can create stunning and unique balloon creations on the spot. \n* Welcome Enthusiastic Guests: Greet attendees with a grand **Balloon Arch**, marking the entrance and setting a festive tone for the celebration. \n* Guide Your Guests: Utilize colorful **Balloon Columns** to highlight important areas and guide attendees to booths, stages, and other key locations.",
    galleryImage: "../../public/festival-gallery.jpg",
    recommendedServices: ["Balloon Twister", "Balloon Arch", "Balloon Columns"],
  },
  {
    type: "School Event",
    headerImage: "../../public/school-event-header.jpg",
    headline:
      "Make School Events Unforgettable with Fun and Educational Balloon Activities",
    body: "Add excitement and learning to your next school event, whether it's a carnival, fundraiser, or classroom activity, with our engaging balloon services: \n* Captivate Young Minds: Engage students with a talented **Balloon Twister**, who can create fun and educational balloon sculptures, sparking their imagination and learning. \n* Show School Spirit: Decorate your event space with **Balloon Arches** in your school colors, fostering a sense of community and pride. \n* Highlight Important Areas: Utilize **Balloon Columns** in your school colors to mark important areas like registration booths, food stands, or activity zones.",
    galleryImage: "../../public/school-event-gallery.jpg",
    recommendedServices: ["Balloon Twister", "Balloon Arch", "Balloon Columns"],
  },
  {
    type: "Summer Camp",
    headerImage: "../../public/summer-camp-header.jpg",
    headline:
      "Keep Campers Entertained and Engaged with Creative Balloon Activities",
    body: "Give your camp counselors a break and keep kids entertained with our exciting and engaging balloon activities: \n* Spark Creativity: Impress campers with a skilled **Balloon Twister**, who can create unique and personalized balloon creations, fostering their creativity and imagination. \n* Celebrate the End of Camp: Mark the end of a fantastic camp session with a grand **Balloon Arch** at the entrance, leaving lasting memories for the campers. \n* Create a Festive Atmosphere: Decorate your camp space with vibrant **Balloon Columns** in your camp's colors, adding a touch of cheer and excitement.",
    galleryImage: "../../public/summer-camp-gallery.jpg",
    recommendedServices: ["Balloon Twister", "Balloon Arch", "Balloon Columns"],
  },
  {
    type: "Mall Event",
    headerImage: "../../public/mall-event-header.jpg",
    headline:
      "Attract Families and Excite Kids with Fun-Filled Balloon Activities",
    body: "Liven up your mall and engage families with our captivating balloon decorations: \n* Attract Shoppers: Impress and entertain kids with a talented **Balloon Twister**, who can create fun and unique balloon creations, keeping them engaged while parents shop. \n* Enhance Ambiance: Decorate the mall with elegant **Balloon Garlands** cascading down columns or walls, adding a festive and visually appealing touch. \n* Capture Memories: Offer a **Photo Backdrop** for families to capture their memorable moments at your mall, creating a shareable experience and promoting your brand. \n* Create a Showstopper: Install a grand **Balloon Centerpiece** that draws crowds and captures the attention of local media, generating buzz about your mall.",
    galleryImage: "../../public/mall-event-gallery.jpg",
    recommendedServices: [
      "Balloon Twister",
      "Balloon Garlands",
      "Photo Backdrop",
      "Monumental Balloon Centerpiece",
    ],
  },
  {
    type: "Holiday Party",
    headerImage: "../../public/holiday-party-header.jpg",
    headline: "Bring the Holiday Spirit to Life with Festive Balloon Decor",
    body: "Add joy and cheer to your next holiday party with our festive balloon decorations, regardless of the occasion (4th of July, Memorial Day, Chinese New Year, Diwali, Christmas, New Year, Easter, Thanksgiving, Halloween, Superbowl, etc.): \n* Set the Mood: Enhance your event space with a beautiful **Balloon Garland** in the holiday theme, creating a festive and inviting atmosphere. \n* Entertain Your Guests: Engage and entertain your guests with a skilled **Balloon Twister**, who can create unique and holiday-themed balloon creations right before their eyes, adding a touch of fun and excitement. \n* Capture the Spirit: Offer a themed **Balloon Centerpiece**, like a Santa on a sleigh for Christmas or a Menorah and dreidel for Hanukkah, creating a focal point and embodying the holiday spirit.",
    galleryImage: "../../public/holiday-party-gallery.jpg",
    recommendedServices: [
      "Balloon Garland",
      "Balloon Twister",
      "Balloon Centerpiece",
    ],
  },
  {
    type: "Grand Opening",
    headerImage: "../../public/grand-opening-header.jpg",
    headline:
      "Make a Grand Impression and Attract Customers with Eye-Catching Balloon Decor",
    body: "Generate excitement and attract customers to your grand opening with our eye-catching balloon decorations: \n* Welcome Customers: Create a grand entrance with a **Balloon Arch** or **Balloon Columns**, framing the doorway and welcoming potential customers. \n* Capture Attention: Offer a **Photo Backdrop** or **Balloon Ring** for Instagram photos, encouraging social media buzz and word-of-mouth marketing. \n* Entertain While They Wait: Engage and delight people while they wait with a talented **Balloon Twister**, adding a festive vibe and showcasing your brand personality. \n* Generate Buzz: Install a grand **Balloon Garland** gracing the facade of your business, drawing crowds and capturing the attention of local media and potential customers.",
    galleryImage: "../../public/grand-opening-gallery.jpg",
    recommendedServices: [
      "Balloon Arch",
      "Balloon Columns",
      "Photo Backdrop",
      "Balloon Twister",
      "Grand Balloon Garland",
    ],
  },

  {
    type: "Block Party",
    headerImage: "../../public/block-party-header.jpg",
    headline:
      "Make Your Block Party the Talk of the Town with Dazzling Balloon Decor",
    body: "Elevate your block party and bring your neighborhood together with our exceptional balloon services: \n* Create Excitement for All Ages:  Entertain and amaze kids (and adults!) with a talented **Balloon Twister**, sparking laughter and creating amazing memories. \n* Span the Celebration: Decorate your block with a vibrant **Balloon Arch**, spanning the entire street and setting a festive and welcoming atmosphere. \n* Add a Touch of Cheer: Highlight tables and areas with colorful **Balloon Columns**, adding a touch of cheer and celebratory ambiance.",
    galleryImage: "../../public/block-party-gallery.jpg",
    recommendedServices: [
      "Balloon Twisting",
      "Balloon Arch",
      "Balloon Columns",
    ],
  },
  {
    type: "Baby Shower",
    headerImage: "../../public/baby-shower-header.jpg",
    headline: "Celebrate the New Arrival with Dreamy Balloon Decorations",
    body: "Make your baby shower unforgettable with our soft and whimsical balloon decorations: \n* Enhance the Ambiance:  Create a beautiful backdrop with elegant **Balloon Garlands** in pastel colors or your chosen theme, adding a touch of elegance and wonder. \n* Delight Mom and Guests: Accentuate gift tables and other key areas with **Balloon Garnishes**, adding a touch of playful charm to the celebration. \n* Entertain the Kids: Keep older children engaged and entertained with a talented **Balloon Twister**, who can create fun and exciting balloon creations for everyone to enjoy.",
    galleryImage: "../../public/baby-shower-gallery.jpg",
    recommendedServices: [
      "Balloon Garlands",
      "Balloon Garnishes",
      "Balloon Twisting",
    ],
  },
  {
    type: "Country Club Event",
    headerImage: "../../public/country-club-header.jpg",
    headline: "Elevate Your Country Club Event with Refined Balloon Elegance",
    body: "Add sophistication and charm to your country club event, whether it's a family celebration, holiday party, or any other special occasion, with our elegant balloon decorations: \n* Delight Young Guests:  Entertain children with a talented **Balloon Twister**, who can create delightful and age-appropriate balloon creations, allowing adults to relax and enjoy. \n* Create Timeless Elegance: Decorate the setting with exquisite **Balloon Garlands** in colors that complement your country club's ambiance, adding a touch of grace and sophistication. \n* Mark the Celebration:  Welcome members and guests with a grand **Balloon Arch**, setting the stage for a memorable and luxurious event.",
    galleryImage: "../../public/country-club-gallery.jpg",
    recommendedServices: [
      "Balloon Twister",
      "Balloon Garlands",
      "Balloon Arch",
    ],
  },
  {
    type: "Film Set",
    headerImage: "../../public/film-set-header.jpg",
    headline:
      "Add Depth and Visual Intrigue to Your Film Set with Versatile Balloon Decor",
    body: "Enhance your film set and create dynamic scenes with our versatile balloon decorations: \n* Frame Your Subjects: Utilize **Balloon Garlands** to frame doorways, staircases, or other architectural features, adding depth and compositional interest to your shots. \n* Create a Festive Atmosphere: Decorate a party scene with fun and colorful balloon elements, adding vibrancy and energy to the shot. \n* Entertain Cast and Crew: Hire a skilled **Balloon Twister**, who can create unique and dynamic balloon sculptures, adding a touch of improvisation and delight between takes.",
    galleryImage: "../../public/film-set-gallery.jpg",
    recommendedServices: ["Balloon Garland", "Balloon Twister"],
  },
  {
    type: "Graduation Party",
    headerImage: "../../public/graduation-party-header.jpg",
    headline:
      "Celebrate Your Graduate's Success with Unforgettable Balloon Decor",
    body: "Celebrate your graduate's hard work and dedication with a special party they'll always remember: \n* Honor Their Accomplishments:  Welcome guests and frame your graduate with a celebratory **Balloon Arch**, showcasing their achievements and adding a touch of triumph.  \n* Showcase School Pride: Decorate your event space with vibrant **Balloon Garlands** in your graduate's school colors, highlighting their journey and fostering a sense of pride. \n* Capture Lasting Memories: Offer a **Photo Backdrop** featuring balloons and props for guests to capture fun and celebratory photos.",
    galleryImage: "../../public/graduation-party-gallery.jpg",
    recommendedServices: ["Balloon Arch", "Balloon Garlands", "Photo Backdrop"],
  },

  {
    type: "Bachelorette Party",
    headerImage: "../../public/bachelorette-header.jpg",
    headline: "Unforgettable Fun for Your Bachelorette Party",
    body: "We can create a fun and memorable atmosphere for your bachelorette party with unique balloon creations. Our balloon artist can make anything you desire, and we offer photo backdrops for capturing the moment. Let's combine the fun of balloons with an unforgettable experience!",
    galleryImage: "../../public/bachelorette-gallery.jpg",
    recommendedServices: [
      "Balloon Twisting",
      "Balloon Columns",
      "Photo Backdrop",
    ],
  },
];

export default eventData;

// // Create a javascript array for the following events, giving each event a "type" (use the name of the event), "headerImage" (use '../../public/xxxxx.jpg' as a placeholder), "headline" (generate a fun headline targeted at event planners), "body" (generate 3-5 sentences about each event type, followed by 3 bullet points about what services we recommend; I will give some details for what to write next to each event I list below), and "galleryImage".
// Here is the list:
// Birthday (most popular. we do birthdays for all ages, and from 1-100 everyone loves balloons. Make your birthday memorable, and let your guests go home with a special balloon. We recommend Balloon Twisting, Party Favors, Balloon Columns);

// Wedding (Balloons are a perfect addition to any wedding, adding a touch of elegance or a dash of festivities. We recommend a Balloon Arch for the Bride and Groom, Balloon Garlands, and Balloon Twisting which is perfect for the reception or rehearsal dinner to keep kids from getting too bored. );

// Corporate Event (bring kid to work day, company picnic, office holiday parties. Reward your employees! We recommend Balloon Columns in the brand colors, Balloon Centerpiece of the Company's logo in Balloons, and Balloon Twisting to show your employees what a fun company they work for);

// Sporting Event (support the team! We recommend Balloon Columns in the Team Colors, Balloon Garland to frame the TV, and a Balloon Centerpiece of your favorite Player or Mascot);

// Municipal Event (Family day at the Park, a Parade, or a city Holiday party, Balloons will bring your municipal event to life. All our balloons are biodegradable and non-toxic latex, which degrades at the same rate as an oak leaf! We recommend a Balloon Twister who can make anything people want right on the spot, Balloon Arch to welcome people to the event, or Balloon Garlands to highlight city landmarks);

// Festival (Want to host the best Music festival, film festival, dance, Pride, Oktoberfest, tantra, or Food Festival? We recommend a Balloon Twister to wow and delight your attendees of all ages, Balloon Arch to welcome people to your festival, and Balloon Columns to mark important places for your festival goers, like info booths.);

// School Event (School carnival, Fundraisers, Classroom Events. Parents, teachers and especially the kids love when we come to school events! We recommend a Balloon Twister to wow your students with on-demand balloon creations, Balloon Arch in your school colors, Balloon Columns in your school colors);

// Summer Camp (end of camp celebration, weekly events, theme days. Summer Camps love us! Let the counselors have a break, and let us entertain the kids for a while. We recommend a Balloon Twister to engage the kids and give them something special to take home, Balloon Arch for a grand entrance, and balloon column in the Camp's colors);

// Mall Event (Family events. Get kids excited about coming to your mall. The parents will be grateful you have someone there to excite and entertain their kids, so they can continue shopping. We recommend Balloon Twister to stun your mall-goers and delight the kids, Balloon Garlands to grace the columns escalators or walls, an Photo Backdrop to give people a place to strike a pose and post for all their friends to see they were at your mall, or a Monumental Balloon Centerpiece that will draw crowds and capture the attention of the local newspaper);

// Holiday Event (4th of july, memorial day, chinese new year, diwali, christmas, new year, easter, thanksgiving, halloween, superbowl, etc. We recommend a Balloon Garland in the holiday theme to elevate your event space, A Balloon Twister to entertain your guests and create holiday themed balloon creations right before your eyes, a Balloon Column Christmas Tree with presents, a Balloon Centerpiece of Santa on a sleigh, Ganesha, a Menorah and dreidel, etc);

// Grand Opening (Make sure the public notices your grand opening or store event. Balloons are a great way to draw in passerbys which is great for places with high foot traffic, but the real benefit comes from giving people something to photograph themselves with and post to their social media accounts, alerting all their local friends and family that your business has the trust of their friend. Its a small investment that can really pay off. We recommend Balloon Arch or Columns to frame the doorway and welcome people in, a Photo Backdrop or Balloon Ring for Instagram photos,  Balloon Twister to delight and entertain people while they wait, giving your business a festive vibe, or a grand Balloon Garland gracing the facade of your business, that will stun the public.);

// Country Club Events (For family events, Holiday events, or [Gemini, figure out what kind of celebrations country clubs have and write copy about why they want balloons at those celebrations]. We recommend A Balloon Twister to delight and dazzle the kids and keep them entertained so the parents can relax, elegant Balloon Garlands to grace the country club like clouds, a Balloon Arch to welcome your esteemed members.);

// Block parties (Make your block party exceptional by inviting one of the world’s best balloon artists. You’ll be the talk of the block when Kevin shows up. We recommend Balloon Twisting to wow the neighbors and delight their kids, Balloon Arch to span the entire road, Balloon Columns to give a festive vibe);

// Baby shower (Your dreams are coming true, and what better way to decorate your venue than with dreamy, cloud-like Balloon decor? We recommend Balloon Garlands to frame the gift table, Balloon Garnishes for each table and to punctuate the event space, and a Balloon Twister to Entertain your family and friends’ kids);

// Graduation Party (Way to go grad! Youre so proud and you want to Celebrate your graduate with an all out party. We recommend A Balloon Arch to frame your Grad for photos theyll cherish the rest of their lives, Balloon Garlands in the School Colors, Photo Backdrop for photos they’ll chare all over Social Media);

// Film Set (You need a party scene for your film, and you want something that will add depth, color, and texture to your shot. Balloon decor is exactly what youre looking for. Use it to frame a subject, or add a compositional element. Balloon decor is versatile, so it can easily be moved to accommodate different angles. We recommend Balloon Garland as the most versatile balloon decor, that can grace a staircase for a grand entrance, frame a doorway, or even drape down the side of a building. Hiring a Balloon Twister can also add a lot to the festive vibe of a shot, and Kevin is a trained actor and improv teacher as well. Photo Backdrop to frame your subjects against a colorful and uniquely textured background.);

// Bachelorette Party (Yes, Kevin can make ANYTHING you want, ladies. And if you ask nicely, he can even do it without clothes. We recommend Balloon Twisting to combine the fun of balloon twisting with the sexiness of a male stripper, Balloon Columns for the ladies that like them EXTRA big, Photo backdrop for your gals to take photos they can post to Social Media because they probably wont remember in the morning.
// //
