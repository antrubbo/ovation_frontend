// const count = 5

const users = [
    {   
        id: 1,
        name: "Ekene",
        email: "ekene@gmail.com",
        picture: "https://miro.medium.com/max/3150/1*aoZai5bRkjOVB0XST5DrTA.jpeg"
    },
    {
        id: 2,
        name: "Anthony",
        email: "anthony.rubbo@gmail.com",
        picture: "https://images.squarespace-cdn.com/content/v1/5a4f9f16ccc5c5504456e2a7/1562716418172-E7CY3CI5N151B6GSPLK0/ke17ZwdGBToddI8pDm48kPjjuPFa0G8ug6tTgAyzZM97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0r9YoV8ytu8SWDj21Bt3yU95gDueuvxTE97yqKtmyLaG0xMWyUiQHfzKXGxgPgNvsw/07022019_AnthonyRubbo_131.jpg?format=750w"
    }
]

// Name: string, description: string, genre: string, pastPerformances: [ "Links"]

const artists = [
    {
        id: 1,
        name: "Phoebe Bridgers"
        description: "alt-pop, folk-rock, singer-songwriter",
        genre: "Alt-Pop",
        pastPerformances:[
            { title: "Kyoto", url: "https://www.youtube.com/watch?v=nLFh1MHCUXc"},
            { title: "ICU", url: "https://www.youtube.com/watch?v=xprOOPOht8I"},
            { title: "I Know The End", url: "https://www.youtube.com/watch?v=H9KYQ_tnTtc"}
        ]
    }, 
    {
        id: 2,
        name: "Kid Cudi", 
        description: "Best artist ever",
        genre: "Psychedelia", 
        pastPerformances: [
            {title: "Tequila shots", url: "https://www.youtube.com/watch?v=lZcRSy0sk5w"},
            {title: "Heaven on Earth", url: "https://www.youtube.com/watch?v=H2ijRKurtw4"}
        ]
    }, 
    {
        id: 3,
        name: "Led Zeppelin",
        description: "Best band ever",
        genre: "Rock",
        pastPerformances: [
            {title: "The Ocean", url: "https://www.youtube.com/watch?v=mqgyD_yTWCU"},
            {title: "Black Dog", url: "https://www.youtube.com/watch?v=6tlSx0jkuLM"}
        ]
    }
    
]

const events = [
    {
        id: 1,
        name: "greatest event ever",
        description: "Love Love",
        date: "March 22nd, 2021",
        time: "9 PM", 
        artist_id: 1
    }, 
    {   id: 2,
        name: "greatest event ever",
        description: "Love Love",
        date: "March 21nd, 2021",
        time: "9 PM",
        artist_id: 1
    },
    {   id: 3,
        name: "greatest event ever",
        description: "Love Love",
        date: "March 21nd, 2021",
        time: "9 PM",
        artist_id: 2
    },
    {   id: 4,
        name: " event ever",
        description: "Love Love",
        date: "March 20nd, 2021",
        time: "10 PM",
        artist_id: 3
    },
    {   id: 5,
        name: " event ever",
        description: "Loved it",
        date: "March 20nd, 2021",
        time: "10 PM",
        artist_id: 3
    }
]

// user id, event id, amount: int

const tickets = [
    {
        id: 1,
        amount: 15,
        user_id: 1, 
        event_id: 4
    },
    {
        id: 2,
        amount: 30,
        user_id: 2, 
        event_id: 1
    },
    {
        id: 3,
        amount: 50,
        user_id: 2, 
        event_id: 3
    },
    {
        id: 4,
        amount: 35,
        user_id: 1, 
        event_id: 2
    }
]

 