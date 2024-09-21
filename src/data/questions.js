const questions = [
    {
        id: 1,
        title: "A wizard offers to turn your palace into cheese. What do you do?",
        options: [
            {
                text: "Accept the cheese palace. Who doesn't love cheese?",
                reqStatus: { happiness: 70 },
                consequences: { happiness: +15, food: +50, wealth: -300 },
            },
            {
                text: "Politely decline. Cheese palaces aren't structurally sound.",
                reqStatus: {},
                consequences: { happiness: -20 },
            },
            {
                text: "Challenge the wizard to a duel for his hat.",
                reqStatus: { people: 20 },
                consequences: { people: -10, happiness: +10, wealth: -50 },
            },
        ],
    },
    {
        id: 2,
        title: "A goose steals your crown and refuses to return it. What now?",
        options: [
            {
                text: "Negotiate with the goose using breadcrumbs as leverage.",
                reqStatus: { food: 20 },
                consequences: { food: -20, happiness: +10 },
            },
            {
                text: "Send your knights to chase the goose around the castle.",
                reqStatus: { people: 10 },
                consequences: { people: -10, happiness: -15 },
            },
            {
                text: "Declare the goose the new king and go on vacation.",
                reqStatus: {},
                consequences: { happiness: +15, people: -20 },
            },
        ],
    },
    {
        id: 3,
        title: "An ancient scroll says dancing will bring prosperity. What's your move?",
        options: [
            {
                text: "Host a royal dance-off in the ballroom.",
                reqStatus: { happiness: 60 },
                consequences: { happiness: +10, wealth: -100, people: +5 },
            },
            {
                text: "Refuse. Dancing is for peasants.",
                reqStatus: {},
                consequences: { happiness: -20, relation: "worse" },
            },
            {
                text: "Dance in the streets with the people, but only in socks.",
                reqStatus: { people: 20 },
                consequences: { happiness: +15, people: +5, wealth: -50 },
            },
        ],
    },
    {
        id: 4,
        title: "A merchant offers you a 'magic' rock for a small fortune. What do you do?",
        options: [
            {
                text: "Buy the rock and display it in the royal hall.",
                reqStatus: { wealth: 700 },
                consequences: {
                    wealth: -700,
                    happiness: +5,
                    relation: "slightly_better",
                },
            },
            {
                text: "Throw the rock in the royal lake.",
                reqStatus: {},
                consequences: { happiness: -10, wealth: -20, people: -10 },
            },
            {
                text: "Convince the merchant that the rock is cursed and make him pay you.",
                reqStatus: { relation: "good" },
                consequences: { wealth: +100, relation: "worse" },
            },
        ],
    },
    {
        id: 5,
        title: "Your royal chef suggests replacing all meals with cake. What's the plan?",
        options: [
            {
                text: "Let them eat cake!",
                reqStatus: { food: 150 },
                consequences: { food: -150, happiness: +10 },
            },
            {
                text: "Ban all cake and serve only vegetables.",
                reqStatus: {},
                consequences: { happiness: -30, people: -20 },
            },
            {
                text: "Replace the cake with a surprise...more cake!",
                reqStatus: { wealth: 100 },
                consequences: { wealth: -100, happiness: +15 },
            },
        ],
    },
    {
        id: 6,
        title: "A talking squirrel demands to be your royal advisor. What do you say?",
        options: [
            {
                text: "Appoint the squirrel immediately. Wise creatures, squirrels.",
                reqStatus: {},
                consequences: { happiness: +10, people: -15 },
            },
            {
                text: "Send the squirrel away and deny it ever happened.",
                reqStatus: {},
                consequences: { happiness: -20, people: -5 },
            },
            {
                text: "Challenge the squirrel to a chess match to prove its wisdom.",
                reqStatus: { happiness: 50 },
                consequences: { happiness: +5, relation: "slightly_better" },
            },
        ],
    },
    {
        id: 7,
        title: "A bard offers to sing songs about your glory, but they're terrible. What do you do?",
        options: [
            {
                text: "Let him sing. It's the thought that counts.",
                reqStatus: { happiness: 70 },
                consequences: { happiness: +5, people: -20 },
            },
            {
                text: "Politely ask him to stop before your ears fall off.",
                reqStatus: {},
                consequences: { happiness: -10, relation: "slightly_worse" },
            },
            {
                text: "Challenge the bard to a rap battle.",
                reqStatus: { people: 30 },
                consequences: { happiness: +15, people: +5 },
            },
        ],
    },
    {
        id: 8,
        title: "A meteor is headed toward the kingdom! What's your royal response?",
        options: [
            {
                text: "Host a meteor-watching party with snacks.",
                reqStatus: { food: 100 },
                consequences: { food: -100, happiness: +10 },
            },
            {
                text: "Build a giant shield out of cheese to protect the kingdom.",
                reqStatus: { wealth: 300 },
                consequences: {
                    wealth: -300,
                    happiness: +5,
                    relation: "slightly_better",
                },
            },
            {
                text: "Do nothing. Maybe it'll just miss.",
                reqStatus: {},
                consequences: { happiness: -15, people: -15 },
            },
        ],
    },
    {
        id: 9,
        title: "Your horse demands a raise in carrots for its hard work. How do you respond?",
        options: [
            {
                text: "Give the horse all the carrots it wants.",
                reqStatus: { food: 40 },
                consequences: { food: -40, happiness: +5 },
            },
            {
                text: "Tell the horse to negotiate with the squirrels.",
                reqStatus: { happiness: 50 },
                consequences: { happiness: +5, people: -10 },
            },
            {
                text: "Replace the horse with a unicorn. Problem solved.",
                reqStatus: { wealth: 200 },
                consequences: { wealth: -200, happiness: +15 },
            },
        ],
    },
    {
        id: 10,
        title: "A pigeon claims to be your long-lost cousin. What do you do?",
        options: [
            {
                text: "Welcome the pigeon into the royal family.",
                reqStatus: {},
                consequences: { happiness: +10, people: -10 },
            },
            {
                text: "Send the pigeon on a royal quest.",
                reqStatus: {},
                consequences: { people: -10, happiness: +5 },
            },
            {
                text: "Accuse the pigeon of treason.",
                reqStatus: { relation: "good" },
                consequences: { relation: "worse", happiness: -15 },
            },
        ],
    },
    {
        id: 11,
        title: "A dragon offers to be your personal chauffeur. How do you respond?",
        options: [
            {
                text: "Accept the offer. Dragons make great transportation!",
                reqStatus: { wealth: 200 },
                consequences: { wealth: -200, happiness: +15, people: +5 },
            },
            {
                text: "Decline politely. You prefer your current carriage.",
                reqStatus: {},
                consequences: { happiness: -10, relation: "worse" },
            },
            {
                text: "Suggest a trial period with fire safety measures.",
                reqStatus: { people: 25 },
                consequences: { people: -10, happiness: +10, wealth: -100 },
            },
        ],
    },
    {
        id: 12,
        title: "Your court jester suggests replacing all weapons with rubber chickens. What's your decision?",
        options: [
            {
                text: "Implement the change immediately. Peace through laughter!",
                reqStatus: { happiness: 80 },
                consequences: { happiness: +20, people: -20, wealth: -200 },
            },
            {
                text: "Reject the idea and send the jester to sensitivity training.",
                reqStatus: {},
                consequences: { happiness: -25, relation: "much_worse" },
            },
            {
                text: "Compromise by having Rubber Chicken Tuesdays.",
                reqStatus: { people: 30 },
                consequences: { happiness: +15, people: -5, wealth: -50 },
            },
        ],
    },
    {
        id: 13,
        title: "A group of mimes offers to handle all your diplomatic negotiations. What do you say?",
        options: [
            {
                text: "Hire them immediately. Silent diplomacy is the future!",
                reqStatus: { wealth: 250 },
                consequences: {
                    wealth: -250,
                    happiness: +10,
                    relation: "slightly_better",
                },
            },
            {
                text: "Decline. You prefer your diplomats to speak.",
                reqStatus: {},
                consequences: { happiness: -15, people: -10 },
            },
            {
                text: "Suggest a mime-diplomat collaboration program.",
                reqStatus: { people: 35 },
                consequences: { people: +5, happiness: +10, wealth: -100 },
            },
        ],
    },
    {
        id: 14,
        title: "Your royal gardener accidentally grows a beanstalk to the clouds. What's your next move?",
        options: [
            {
                text: "Climb the beanstalk to explore the kingdom in the clouds.",
                reqStatus: { happiness: 90 },
                consequences: { happiness: +15, wealth: +50, people: -20 },
            },
            {
                text: "Cut down the beanstalk. It's a safety hazard!",
                reqStatus: {},
                consequences: { happiness: -30, relation: "much_worse" },
            },
            {
                text: "Turn it into a tourist attraction with guided tours.",
                reqStatus: { people: 40 },
                consequences: { people: +10, happiness: +10, wealth: -100 },
            },
        ],
    },
    {
        id: 15,
        title: "A time traveler from the future offers you a smartphone. What do you do?",
        options: [
            {
                text: "Accept it and introduce 'Ye Olde Social Media' to the kingdom.",
                reqStatus: { wealth: 400 },
                consequences: { wealth: -400, happiness: +20, people: +10 },
            },
            {
                text: "Refuse it. The kingdom isn't ready for such technology.",
                reqStatus: {},
                consequences: { happiness: -20, relation: "much_worse" },
            },
            {
                text: "Take it, but use it only for royal selfies.",
                reqStatus: { happiness: 70 },
                consequences: { happiness: +15, people: -10, wealth: -100 },
            },
        ],
    },
    {
        id: 16,
        title: "Your royal mathematician claims he's invented a new number between 3 and 4. How do you react?",
        options: [
            {
                text: "Declare it the official royal number and mandate its use.",
                reqStatus: { people: 50 },
                consequences: {
                    people: -30,
                    happiness: +10,
                    relation: "much_worse",
                },
            },
            {
                text: "Dismiss the claim and send him back to counting treasury coins.",
                reqStatus: {},
                consequences: { happiness: -15, wealth: +10 },
            },
            {
                text: "Fund further research into this groundbreaking discovery.",
                reqStatus: { wealth: 300 },
                consequences: {
                    wealth: -300,
                    happiness: +5,
                    relation: "slightly_better",
                },
            },
        ],
    },
    {
        id: 17,
        title: "A group of cats demands representation in the royal court. What's your stance?",
        options: [
            {
                text: "Grant their request. Cats make excellent judges!",
                reqStatus: { happiness: 100 },
                consequences: {
                    happiness: +15,
                    people: -25,
                    relation: "slightly_better",
                },
            },
            {
                text: "Reject their demand. The kingdom is not ready for feline leadership.",
                reqStatus: {},
                consequences: { happiness: -30, relation: "much_worse" },
            },
            {
                text: "Compromise by appointing a royal 'Meowselor'.",
                reqStatus: { people: 45 },
                consequences: { people: +5, happiness: +10, wealth: -60 },
            },
        ],
    },
    {
        id: 18,
        title: "Your court wizard accidentally turns all the kingdom's water into lemonade. What's your solution?",
        options: [
            {
                text: "Embrace it! Declare a national lemonade festival.",
                reqStatus: { food: 200 },
                consequences: { food: -200, happiness: +20, people: +10 },
            },
            {
                text: "Demand he fix it immediately or face the royal squirt gun.",
                reqStatus: {},
                consequences: { happiness: -20, relation: "much_worse" },
            },
            {
                text: "Export the lemonade and use the profits to buy water from neighboring kingdoms.",
                reqStatus: { wealth: 350 },
                consequences: {
                    wealth: +50,
                    happiness: +10,
                    relation: "slightly_better",
                },
            },
        ],
    },
    {
        id: 19,
        title: "A group of sentient clouds wants to form a floating city above your kingdom. How do you proceed?",
        options: [
            {
                text: "Approve the plan. Sky's the limit for urban development!",
                reqStatus: { people: 60 },
                consequences: { people: +10, happiness: +15, wealth: -200 },
            },
            {
                text: "Reject the proposal. Your kingdom stays firmly on the ground.",
                reqStatus: {},
                consequences: { happiness: -25, relation: "much_worse" },
            },
            {
                text: "Negotiate for shared airspace and establish a cloud embassy.",
                reqStatus: { relation: "very_good" },
                consequences: {
                    relation: "slightly_better",
                    happiness: +15,
                    wealth: -100,
                },
            },
        ],
    },
    {
        id: 20,
        title: "A group of talking squirrels has taken over the royal kitchen. What do you do?",
        options: [
            {
                text: "Negotiate a food-sharing agreement with the squirrels.",
                reqStatus: { food: 50 },
                consequences: {
                    food: -50,
                    happiness: +10,
                    relations: "better",
                }, // Squirrels increase kingdom happiness
            },
            {
                text: "Set traps to capture the squirrels.",
                reqStatus: { people: 10 },
                consequences: { people: -10, happiness: -20, food: +30 }, // Loss of people, gain some food
            },
            {
                text: "Promote the squirrels to royal chefs.",
                reqStatus: {},
                consequences: { food: -30, happiness: +30 }, // Big happiness boost, lose food
            },
        ],
    },
    {
        id: 21,
        title: "A mysterious old man offers you a single enchanted potato. What do you do?",
        options: [
            {
                text: "Accept the potato and plant it.",
                reqStatus: {},
                consequences: { food: +200, wealth: -50 }, // Big food gain, slight wealth loss
            },
            {
                text: "Throw it into the royal compost pile.",
                reqStatus: {},
                consequences: { food: -10, happiness: -10 }, // Negligible but still bad
            },
            {
                text: "Turn the potato into a magical stew and invite the neighboring king for dinner.",
                reqStatus: { relations: "medium" },
                consequences: {
                    relations: "better",
                    happiness: +10,
                    wealth: -100,
                }, // Diplomatic boost, wealth loss
            },
        ],
    },
    {
        id: 22,
        title: "A bard offers to compose a ballad about your greatness. What do you do?",
        options: [
            {
                text: "Pay him handsomely and commission the ballad.",
                reqStatus: { wealth: 200 },
                consequences: { wealth: -200, happiness: +20 }, // Big happiness boost, but costly
            },
            {
                text: "Refuse, saying you prefer to remain mysterious.",
                reqStatus: {},
                consequences: { happiness: -10 }, // Small happiness loss
            },
            {
                text: "Challenge him to a rap battle instead.",
                reqStatus: { people: 10 },
                consequences: { happiness: +30, people: -10 }, // Big happiness boost, small people loss
            },
        ],
    },
    {
        id: 23,
        title: "The royal cat has been elected mayor of a neighboring kingdom. What do you do?",
        options: [
            {
                text: "Send a congratulatory gift of 50 loaves of bread.",
                reqStatus: { food: 50 },
                consequences: { food: -50, relations: "better" }, // Diplomatic boost
            },
            {
                text: "Laugh it off and send no gift.",
                reqStatus: {},
                consequences: { relations: "worse", happiness: -5 }, // Small happiness loss
            },
            {
                text: "Challenge the cat to a duel for control of the kingdom.",
                reqStatus: { people: 20 },
                consequences: {
                    people: -20,
                    wealth: +100,
                    relations: "really bad",
                }, // Huge diplomatic hit, wealth gain
            },
        ],
    },
    {
        id: 24,
        title: "A chef presents you with a soup made of gemstones. How do you respond?",
        options: [
            {
                text: "Compliment the chef and pretend to enjoy the soup.",
                reqStatus: {},
                consequences: { happiness: +5, wealth: -50 }, // Slight happiness gain, slight wealth loss
            },
            {
                text: "Tell the chef to stick to real ingredients.",
                reqStatus: {},
                consequences: { happiness: -10 }, // Small happiness loss
            },
            {
                text: "Sell the soup to another kingdom as a rare delicacy.",
                reqStatus: { relations: "medium" },
                consequences: { wealth: +200, relations: "worse" }, // Wealth boost, relations suffer
            },
        ],
    },
    {
        id: 25,
        title: "A magical plant grows in your garden overnight. It glows in the dark. What do you do?",
        options: [
            {
                text: "Sell it to a curious scholar.",
                reqStatus: { wealth: 100 },
                consequences: { wealth: +200, relations: "better" }, // Big wealth gain, relations improve
            },
            {
                text: "Eat it to see what happens.",
                reqStatus: {},
                consequences: { happiness: +50, people: -20 }, // Happiness increase, lose some people in the chaos
            },
            {
                text: "Ignore it. Plants are boring.",
                reqStatus: {},
                consequences: { happiness: -10 }, // Small happiness loss
            },
        ],
    },
    {
        id: 26,
        title: "A talking horse offers to join your council. What’s your decision?",
        options: [
            {
                text: "Allow the horse to join. It could bring unique wisdom.",
                reqStatus: { people: 20 },
                consequences: { happiness: +30, people: -20 }, // Big happiness gain, lose people
            },
            {
                text: "Decline, stating that horses are for riding, not advising.",
                reqStatus: {},
                consequences: { happiness: -20 }, // Big happiness drop
            },
            {
                text: "Send the horse as a gift to a neighboring king.",
                reqStatus: { relations: "medium" },
                consequences: { relations: "better", wealth: +100 }, // Relations improve, wealth gain
            },
        ],
    },
    {
        id: 27,
        title: "A pirate ship appears off the coast. What’s your plan?",
        options: [
            {
                text: "Send a diplomat to negotiate a trade deal.",
                reqStatus: { wealth: 300 },
                consequences: { wealth: -300, relations: "better" }, // Diplomatic boost but big cost
            },
            {
                text: "Order your navy to attack the pirates.",
                reqStatus: { people: 50 },
                consequences: { people: -50, wealth: +500, relations: "worse" }, // Big people loss, wealth gain, bad relations
            },
            {
                text: "Offer the pirates a royal pardon in exchange for loyalty.",
                reqStatus: { relations: "medium" },
                consequences: {
                    relations: "better",
                    wealth: -100,
                    people: +30,
                }, // Diplomatic gain, wealth loss, people boost
            },
        ],
    },
    {
        id: 28,
        title: "A scientist offers to build a flying machine for the kingdom. What do you decide?",
        options: [
            {
                text: "Fund the project and hope for success.",
                reqStatus: { wealth: 500 },
                consequences: {
                    wealth: -500,
                    happiness: +20,
                    relations: "better",
                }, // Big wealth loss, slight happiness gain
            },
            {
                text: "Reject the offer. Who needs flying anyway?",
                reqStatus: {},
                consequences: { happiness: -15, wealth: +100 }, // Happiness loss, wealth gain
            },
            {
                text: "Send the scientist to a rival kingdom as a gift.",
                reqStatus: { relations: "medium" },
                consequences: { relations: "better", wealth: +200 }, // Relations boost, wealth gain
            },
        ],
    },
    {
        id: 29,
        title: "Your jester invents a new game called 'Spoon Jousting.' It’s becoming wildly popular. What’s your move?",
        options: [
            {
                text: "Encourage the game and host a national tournament.",
                reqStatus: { wealth: 300 },
                consequences: { wealth: -300, happiness: +50 }, // Big happiness gain, wealth loss
            },
            {
                text: "Ban the game, claiming it distracts people from their duties.",
                reqStatus: { people: 10 },
                consequences: { happiness: -30, people: +10 }, // Big happiness loss
            },
            {
                text: "Invite neighboring kingdoms to a Spoon Jousting competition.",
                reqStatus: { relations: "medium" },
                consequences: {
                    relations: "better",
                    wealth: -100,
                    happiness: +20,
                }, // Relations boost, wealth loss, happiness gain
            },
        ],
    },
];

export default questions;
