export const posts = [
  {
    id: 123,
    community: {
      title: "3amjokes",
      photo: "communities/3amjokes.png",
      link: "/community/3amjokes",
    },
    user: "DiscoDvck",
    date: "15 days ago",
    title: "What do you call a country where everyone loves to sleep?",
    text: "a hiber-nation",
    upvotes: 546,
    comments: [
      {
        user: "obi_jay-sus",
        date: "15 days ago",
        text: "New Zzz-land",
        upvotes: 102,
        replies: [
          {
            user: "Hand-Driven",
            date: "15 days ago",
            text: "So that's why I'm always tired.",
            upvotes: 40,
          },
        ],
      },
    ],
  },
  {
    id: 124,
    community: "explainlikeimfive",
    user: "DiscoDvck",
    date: "13 hr. ago",
    title:
      "Why do TVs not require graphics cards the same way that computers do?",
    text: "Let's use Balders Gate as an example... the majority of the really “graphic” intensive parts of the game are the cut scenes and not the actual game. So why would it need a substantial GPU? Isn't it just playing back a prerecorded video much like a TV would? Or am I thinking of this wrong?",
    upvotes: 647,
    comments: [
      {
        user: "obi_jay-sus",
        date: "11 hr. ago",
        text: 'Software like a video game tells the GPU "hey, draw this picture for me" which let\'s the GPU draw (render) whatever the image is.\nFor a TV, the software (or hardware) takes a picture that has already been drawn and says "hey, hold this picture up for me", and the TV displays the image.\nDrawing the picture takes a lot longer than holding up to display.',
        upvotes: 52,
        replies: [
          {
            user: "Hand-Driven",
            date: "10 hr. ago",
            text: "this is the best ELI5",
            upvotes: 30,
          },
        ],
      },
    ],
  },
];
