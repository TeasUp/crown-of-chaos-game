const questions = [
    {
        id: 1,
        title: "A wizard offers to turn your palace into cheese. What do you do?",
        options: [
            {
                text: "Accept the cheese palace. Who doesn't love cheese?",
                reqStatus: { happiness: 50 },
                consequences: { happiness: +30, food: +100, wealth: -200 },
            },
            {
                text: "Politely decline. Cheese palaces aren't structurally sound.",
                reqStatus: {},
                consequences: { happiness: -10 },
            },
            {
                text: "Challenge the wizard to a duel for his hat.",
                reqStatus: { people: 10 },
                consequences: { people: -5, happiness: +20, wealth: +50 },
            },
        ],
    },
    {
        id: 2,
        title: "A goose steals your crown and refuses to return it. What now?",
        options: [
            {
                text: "Negotiate with the goose using breadcrumbs as leverage.",
                reqStatus: { food: 10 },
                consequences: { food: -10, happiness: +15 },
            },
            {
                text: "Send your knights to chase the goose around the castle.",
                reqStatus: { people: 5 },
                consequences: { people: -5, happiness: -5 },
            },
            {
                text: "Declare the goose the new king and go on vacation.",
                reqStatus: {},
                consequences: { happiness: +30, people: -10 },
            },
        ],
    },
    {
        id: 3,
        title: "An ancient scroll says dancing will bring prosperity. What's your move?",
        options: [
            {
                text: "Host a royal dance-off in the ballroom.",
                reqStatus: { happiness: 40 },
                consequences: { happiness: +20, wealth: -50, people: +10 },
            },
            {
                text: "Refuse. Dancing is for peasants.",
                reqStatus: {},
                consequences: { happiness: -10, relation: "bad" },
            },
            {
                text: "Dance in the streets with the people, but only in socks.",
                reqStatus: { people: 10 },
                consequences: { happiness: +30, people: +5, wealth: -20 },
            },
        ],
    },
    {
        id: 4,
        title: "A merchant offers you a 'magic' rock for a small fortune. What do you do?",
        options: [
            {
                text: "Buy the rock and display it in the royal hall.",
                reqStatus: { wealth: 500 },
                consequences: {
                    wealth: -500,
                    happiness: +10,
                    relation: "better",
                },
            },
            {
                text: "Throw the rock in the royal lake.",
                reqStatus: {},
                consequences: { happiness: +5, wealth: -10, people: -5 },
            },
            {
                text: "Convince the merchant that the rock is cursed and make him pay you.",
                reqStatus: { relation: "medium" },
                consequences: { wealth: +200, relation: "bad" },
            },
        ],
    },
    {
        id: 5,
        title: "Your royal chef suggests replacing all meals with cake. What's the plan?",
        options: [
            {
                text: "Let them eat cake!",
                reqStatus: { food: 100 },
                consequences: { food: -100, happiness: +20 },
            },
            {
                text: "Ban all cake and serve only vegetables.",
                reqStatus: {},
                consequences: { happiness: -20, people: -10 },
            },
            {
                text: "Replace the cake with a surprise...more cake!",
                reqStatus: { wealth: 50 },
                consequences: { wealth: -50, happiness: +30 },
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
                consequences: { happiness: +20, people: -5 },
            },
            {
                text: "Send the squirrel away and deny it ever happened.",
                reqStatus: {},
                consequences: { happiness: -10, people: -2 },
            },
            {
                text: "Challenge the squirrel to a chess match to prove its wisdom.",
                reqStatus: { happiness: 30 },
                consequences: { happiness: +10, relation: "good" },
            },
        ],
    },
    {
        id: 7,
        title: "A bard offers to sing songs about your glory, but they're terrible. What do you do?",
        options: [
            {
                text: "Let him sing. It's the thought that counts.",
                reqStatus: { happiness: 50 },
                consequences: { happiness: +10, people: -10 },
            },
            {
                text: "Politely ask him to stop before your ears fall off.",
                reqStatus: {},
                consequences: { happiness: +5, relation: "better" },
            },
            {
                text: "Challenge the bard to a rap battle.",
                reqStatus: { people: 20 },
                consequences: { happiness: +25, people: +10 },
            },
        ],
    },
    {
        id: 8,
        title: "A meteor is headed toward the kingdom! What's your royal response?",
        options: [
            {
                text: "Host a meteor-watching party with snacks.",
                reqStatus: { food: 50 },
                consequences: { food: -50, happiness: +20 },
            },
            {
                text: "Build a giant shield out of cheese to protect the kingdom.",
                reqStatus: { wealth: 200 },
                consequences: {
                    wealth: -200,
                    happiness: +10,
                    relation: "better",
                },
            },
            {
                text: "Do nothing. Maybe it'll just miss.",
                reqStatus: {},
                consequences: { happiness: -5, people: -5 },
            },
        ],
    },
    {
        id: 9,
        title: "Your horse demands a raise in carrots for its hard work. How do you respond?",
        options: [
            {
                text: "Give the horse all the carrots it wants.",
                reqStatus: { food: 20 },
                consequences: { food: -20, happiness: +10 },
            },
            {
                text: "Tell the horse to negotiate with the squirrels.",
                reqStatus: { happiness: 30 },
                consequences: { happiness: +10, people: +5 },
            },
            {
                text: "Replace the horse with a unicorn. Problem solved.",
                reqStatus: { wealth: 100 },
                consequences: { wealth: -100, happiness: +25 },
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
                consequences: { happiness: +20, people: +5 },
            },
            {
                text: "Send the pigeon on a royal quest.",
                reqStatus: {},
                consequences: { people: -5, happiness: +10 },
            },
            {
                text: "Accuse the pigeon of treason.",
                reqStatus: { relation: "medium" },
                consequences: { relation: "bad", happiness: -5 },
            },
        ],
    },
    {
        id: 11,
        title: "A dragon offers to be your personal chauffeur. How do you respond?",
        options: [
            {
                text: "Accept the offer. Dragons make great transportation!",
                reqStatus: { wealth: 100 },
                consequences: { wealth: -100, happiness: +30, people: +10 },
            },
            {
                text: "Decline politely. You prefer your current carriage.",
                reqStatus: {},
                consequences: { happiness: -5, relation: "bad" },
            },
            {
                text: "Suggest a trial period with fire safety measures.",
                reqStatus: { people: 15 },
                consequences: { people: -5, happiness: +15, wealth: -50 },
            },
        ],
    },
    {
        id: 12,
        title: "Your court jester suggests replacing all weapons with rubber chickens. What's your decision?",
        options: [
            {
                text: "Implement the change immediately. Peace through laughter!",
                reqStatus: { happiness: 60 },
                consequences: { happiness: +40, people: -10, wealth: -100 },
            },
            {
                text: "Reject the idea and send the jester to sensitivity training.",
                reqStatus: {},
                consequences: { happiness: -15, relation: "worse" },
            },
            {
                text: "Compromise by having Rubber Chicken Tuesdays.",
                reqStatus: { people: 20 },
                consequences: { happiness: +25, people: +5, wealth: -20 },
            },
        ],
    },
    {
        id: 13,
        title: "A group of mimes offers to handle all your diplomatic negotiations. What do you say?",
        options: [
            {
                text: "Hire them immediately. Silent diplomacy is the future!",
                reqStatus: { wealth: 150 },
                consequences: {
                    wealth: -150,
                    happiness: +20,
                    relation: "better",
                },
            },
            {
                text: "Decline. You prefer your diplomats to speak.",
                reqStatus: {},
                consequences: { happiness: -5, people: -5 },
            },
            {
                text: "Suggest a mime-diplomat collaboration program.",
                reqStatus: { people: 25 },
                consequences: { people: +10, happiness: +15, wealth: -50 },
            },
        ],
    },
    {
        id: 14,
        title: "Your royal gardener accidentally grows a beanstalk to the clouds. What's your next move?",
        options: [
            {
                text: "Climb the beanstalk to explore the kingdom in the clouds.",
                reqStatus: { happiness: 70 },
                consequences: { happiness: +30, wealth: +100, people: -10 },
            },
            {
                text: "Cut down the beanstalk. It's a safety hazard!",
                reqStatus: {},
                consequences: { happiness: -20, relation: "worse" },
            },
            {
                text: "Turn it into a tourist attraction with guided tours.",
                reqStatus: { people: 30 },
                consequences: { people: +15, happiness: +20, wealth: +50 },
            },
        ],
    },
    {
        id: 15,
        title: "A time traveler from the future offers you a smartphone. What do you do?",
        options: [
            {
                text: "Accept it and introduce 'Ye Olde Social Media' to the kingdom.",
                reqStatus: { wealth: 300 },
                consequences: { wealth: -300, happiness: +40, people: +20 },
            },
            {
                text: "Refuse it. The kingdom isn't ready for such technology.",
                reqStatus: {},
                consequences: { happiness: -10, relation: "worse" },
            },
            {
                text: "Take it, but use it only for royal selfies.",
                reqStatus: { happiness: 50 },
                consequences: { happiness: +25, people: +5, wealth: -50 },
            },
        ],
    },
    {
        id: 16,
        title: "Your royal mathematician claims he's invented a new number between 3 and 4. How do you react?",
        options: [
            {
                text: "Declare it the official royal number and mandate its use.",
                reqStatus: { people: 40 },
                consequences: {
                    people: -20,
                    happiness: +15,
                    relation: "worse",
                },
            },
            {
                text: "Dismiss the claim and send him back to counting treasury coins.",
                reqStatus: {},
                consequences: { happiness: -5, wealth: +20 },
            },
            {
                text: "Fund further research into this groundbreaking discovery.",
                reqStatus: { wealth: 200 },
                consequences: {
                    wealth: -200,
                    happiness: +10,
                    relation: "better",
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
                reqStatus: { happiness: 80 },
                consequences: {
                    happiness: +30,
                    people: -15,
                    relation: "better",
                },
            },
            {
                text: "Reject their demand. The kingdom is not ready for feline leadership.",
                reqStatus: {},
                consequences: { happiness: -20, relation: "worse" },
            },
            {
                text: "Compromise by appointing a royal 'Meowselor'.",
                reqStatus: { people: 35 },
                consequences: { people: +10, happiness: +20, wealth: -30 },
            },
        ],
    },
    {
        id: 18,
        title: "Your court wizard accidentally turns all the kingdom's water into lemonade. What's your solution?",
        options: [
            {
                text: "Embrace it! Declare a national lemonade festival.",
                reqStatus: { food: 150 },
                consequences: { food: -150, happiness: +40, people: +15 },
            },
            {
                text: "Demand he fix it immediately or face the royal squirt gun.",
                reqStatus: {},
                consequences: { happiness: -10, relation: "worse" },
            },
            {
                text: "Export the lemonade and use the profits to buy water from neighboring kingdoms.",
                reqStatus: { wealth: 250 },
                consequences: {
                    wealth: +100,
                    happiness: +20,
                    relation: "better",
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
                reqStatus: { people: 50 },
                consequences: { people: +20, happiness: +30, wealth: -100 },
            },
            {
                text: "Reject the proposal. Your kingdom stays firmly on the ground.",
                reqStatus: {},
                consequences: { happiness: -15, relation: "worse" },
            },
            {
                text: "Negotiate for shared airspace and establish a cloud embassy.",
                reqStatus: { relation: "good" },
                consequences: {
                    relation: "better",
                    happiness: +25,
                    wealth: +50,
                },
            },
        ],
    },
    {
        id: 20,
        title: "Your royal portrait painter insists on painting you as a potato. What's your royal decree?",
        options: [
            {
                text: "Allow it. Embrace your inner spud!",
                reqStatus: { happiness: 90 },
                consequences: {
                    happiness: +35,
                    people: +10,
                    relation: "better",
                },
            },
            {
                text: "Refuse and demand a traditional portrait.",
                reqStatus: {},
                consequences: { happiness: -10, relation: "worse" },
            },
            {
                text: "Compromise with a half-human, half-potato portrait.",
                reqStatus: { wealth: 100 },
                consequences: { wealth: -100, happiness: +20, people: +5 },
            },
        ],
    },
];

export default questions;