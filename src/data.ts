import { commander } from "./app/shared/model/commander";

export const commanders: commander[] = [
    {
        id: "1",
        name: "Ob Nixilis, Captive Kingpin",
        color: ["black", "red"],
        type: ["creature"],
        description: "Flying, Trample\nWhenever one or more opponents each lose exactly 1 life, put a +1/+1 counter on Ob Nixilis, Captive Kingpin. Exile the top card of your library. Until your next end step, you may play that card.",
        favorite: true,
        imageUrl: "http://cards.scryfall.io/large/front/8/4/840a442f-a220-408f-b670-0c73e2ffa704.jpg"
    },
    {
        id: "2",
        name: "Satoru Umezawa",
        color: ["blue", "black"],
        type: ["creature"],
        description: "Whenever you activate a ninjutsu ability, look at the top three cards of your library. Put one of them into your hand and the rest on the bottom of your library in any order. This ability triggers only once each turn.\nEach creature card in your hand has ninjutsu 2UB",
        favorite: false,
        imageUrl: "http://cards.scryfall.io/large/front/f/7/f7112729-908e-430d-8e0e-eb71a9043309.jpg"
    },
    {
        id: "3",
        name: "Galazeth Prismari",
        color: ["blue", "red"],
        type: ["creature"],
        description: "Flying\nWhen Galazeth Prismari enters the battlefield, create a Treasure token.\nArtifacts you control have Tap: : Add one mana of any color. Spend this mana only to cast an instant or sorcery spell.",
        favorite: true,
        imageUrl: "http://cards.scryfall.io/large/front/2/6/265b9185-9033-4e57-a312-adcc91903aec.jpg"
    },
    {
        id: "4",
        name: "Vojo, Jaws of the Conclave",
        color: ["red", "green", "white"],
        type: ["creature"],
        description: "Vigilance, Trample, Ward 3\nWhenever Voja, Jaws of the Conclave attacks, put X +1/+1 counters on each creature you control, where X is the number of Elves you control. Draw a card for each Wolf you control.",
        favorite: false,
        imageUrl: "https://cards.scryfall.io/large/front/b/f/bfa1bd2f-25bd-4fbd-877b-cef00ab7f92f.jpg"
    },
    {
        id: "5",
        name: "Kaalia of the Vast",
        color: ["red", "white", "black"],
        type: ["creature"],
        description: "Flying\nWhenever Kaalia of the Vast attacks an opponent, you may put an Angel, Demon, or Dragon creature card from your hand onto the battlefield tapped and attacking that opponent.",
        favorite: true,
        imageUrl: "https://cards.scryfall.io/large/front/9/3/93f6631f-f3a6-4d3c-8618-4b4ab4e82483.jpg"
    },
    {
        id: "6",
        name: "Chatterfang, Squirrel General",
        color: ["green"],
        type: ["creature"],
        description: "Forestwalk (This creature can’t be blocked as long as defending player controls a Forest.)  If one or more tokens would be created under your control, those tokens plus that many 1/1 green Squirrel creature tokens are created instead.  {B}, Sacrifice X Squirrels: Target creature gets +X/-X until end of turn.",
        favorite: false,
        imageUrl: "https://cards.scryfall.io/large/front/1/7/1785cf85-1ac0-4246-9b89-1a8221a8e1b2.jpg"
    }
];