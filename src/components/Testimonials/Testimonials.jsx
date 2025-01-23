import { useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [Testimonials, setTestimonials] = useState([
    {
      testifier: "Janice CEO",
      testimonial: [
        "I enjoy surrounding myself with well minded people and meeting Cee and his team enabled me to excel even further within myself and my company.",
        "The beauty of this all was the humbleness and the experience of each chosen member of the team.",
        "My mindset at the time was very low and I wasn't in a good place within a short time they got the cogs working creating a revamped and retuned me.. thank you 🙏🏽",
      ],
    },
    {
      testifier: "Trevor Pro footballer",
      testimonial: [
        "It was an honour working with VIP LIFE COACH they gave me back my mojo when I was thinking my life was in ruins and the livelihood I dreamed of, about to fall down the drain.",
        "A life coach is not for the faint hearted but the way they took over and changed me was priceless, since then I have recommended them to so many others in my industry.",
      ],
    },
    {
      testifier: "Yogi APP DEVELOPER",
      testimonial: [
        "Being a millionaire at a very young age has an effect that can make you believe the world is yours, lots of money, great life and the best of everything.",
        "I created something which went from zero to a hundred in no time leaving me with a massive pay check set for life.",
        "That's when the problem started, I lost control and lost myself but what do I do hiring Cee and his team meant two things change and become you again or lose yourself and your health without trying.",
        "Simple answer I chose the first and within a short time I was spreading my wings.",
      ],
    },
    {
      testifier: "Sarah Jane",
      testimonial: [
        "Business business business is all it has ever been for us so when it hits a wall what do you do ?",
        "I stumbled upon a life coach whilst on holiday suffering from burn out a few lattes later and I hired someone to take my business by the reins and show me what needed to be done.",
        "It was faith, courage and determination that showed me there is more to being a know it all and learning from an outsider who reads you better than you read yourself.",
        "God bless you and everything you do Cee",
      ],
    },
    {
      testifier: "Xabi Entrepreneur",
      testimonial: [
        "It's about fucking time you got this part of you in place and all I can say is you smashed it the work you do and the team you have amazing.",
        "Good luck with everything you do and the many people whose life you have changed.",
      ],
    },
    {
      testifier: "Mei Chen",
      testimonial: [
        "Meeting you was like an omen at the airport delayed flight distressed and you offered me a hot chocolate and I screamed hot chocolate. I need a whiskey.",
        "Then you started explaining how it would calm me down, little did I know that bossy me had just met my match when it came to having the loudest voice on the phone.",
        "How you didn't tell me where to stick it god know I am glad to have you a call away.",
      ],
    },
    {
      testifier: "James Walter Oil",
      testimonial: [
        "When life gives you lemons how do you pick yourself up call in VIP LIFE COACH.",
        "My boss told me about you and I literally summoned you and asked for help !",
        "You came saw and conquered my battle like something out of the norm asking, what seemed to me like a mountain but a mole.",
        "Lol I never forget that expression James your making it seem worse than it is, a billion dollars and you sat calmly telling me it's no big deal.",
        "Brilliant",
      ],
    },
    {
      testifier: "Steve (Actor)",
      testimonial: [
        "I have personally known Cee for ten years and going from would be to full on actor has taught me that life evolves around changes.",
        "These changes we should embrace and work with towards bring in out the best in an individual.",
        "Cee took me aside and told me Steve wake up mate this is reality not a bubble your living in the rest is history.",
      ],
    },
    {
      testifier: "Premiership Manager",
      testimonial: [
        "The shift in my attitude was possibly the best change in my life not only did the results show but also my personal life transformed itself like a flower.",
        "I can only say it was better than anything money could have paid for as you changed me and my strategic strategy overnight.",
      ],
    },
    {
      testifier: "Rachel G",
      testimonial: [
        "I work at the forefront of many marketing projects that have changed the game for so many leading brands that I can not begin to say what this man does is unbelievable.",
        "Taking the roof off and stripping it down to the foundations is how it all started and brick by brick we began a process lengthy, time consuming but most importantly finding the solution to my problem.",
      ],
    },
    {
      testifier: "Tim Grewal",
      testimonial: [
        "All you do is win do you ever lose ?",
        "A team player and a manager who I am proud to honour as a good friend who changes peoples lives daily. Thanks",
      ],
    },
    {
      testifier: "Unberto Fernandez",
      testimonial: [
        "My friend you came when I was down and crying losing my father you told me your story and shared the time with me to fix my emotions when I asked you how much you said this is irrelevant the important thing is you are ok.",
        "It was your love that changed me and saved me and made me who I am today.",
      ],
    },
    {
      testifier: "Chu Nimalrajah",
      testimonial: [
        "Thank you thank you how can I say it anymore everything that you have done with your words and work along with the team you put together to help me find myself and the love of my life.",
        "I am a happy man married with two beautiful children and the wife that I can’t stop loving all because of you.",
      ],
    },
    {
      testifier: "Charlotte music artist",
      testimonial: [
        "Cee is family simple you can shout and scream at him all day and he will still be there doing what he does best and thats being there for you.",
        "He’s a human bouncing ball that keeps coming back till you get it.",
      ],
    },
    {
      testifier: "Renowned DJ",
      testimonial: [
        "The humbleness reinvented me and gave me a lease of life that help me step up my game in this forever changing industry.",
        "Working with someone who will guide you, look at your mistakes analysing each one with you till you see them and recognise is a job itself.",
        "The next part is repairing them, that’s art itself.",
      ],
    },
    {
      testifier: "Clementine Commodities",
      testimonial: [
        "The city life made me blow up in weight then I started hating myself and the way I looked drugs and alcohol was my only way out but it was destroying me.",
        "One night on my way home I overheard a conversation that made me ask could you help me, the reply was if you want help then we can.",
        "Within days they had me working with a PT and rebuilding my life I am now sober for over two years and running my first marathon.",
      ],
    },
    {
      testifier: "Lesley Explorer",
      testimonial: [
        "Loneliness and lack of motivation almost made me go mad so much so I ended up divorcing my wife which and losing my matrimonial home.",
        "Not knowing what to do I was advised to see a psychiatrist but before that my friends invited me to a dinner where by chance I met a client of VIP Life Coach who discussed what he was going through.",
        "A few phone calls later and I signed up for sessions which I have made me a stronger and happier individual than ever.",
      ],
    },
    {
      testifier: "Rani Foil Manufacturers",
      testimonial: [
        "Mental health and depression hand in hand can kill anyone, but finding someone who understands you and makes you feel good with yourself is something else.",
        "Saving someone’s life isn’t just a compliment but a priceless moment.",
        "I can thank you all enough for what you have done.",
      ],
    },
    {
      testifier: "Wolfgang Garter (Sports Agent)",
      testimonial: [
        "The world of sport and fighting for that big deal can leave you deflated or on a high.",
        "When the deal weren’t happening the depression kicked in like a withdrawal symptoms what was the way out ?",
        "My client introduced me to Cee and his team took me under their wing every time I wanted to fly they taught me about patience and humbleness.",
        "They taught me privilege and what it meant and what life meant and how treasured it is once I learnt this I became someone else’s.",
        "A new me was born living his best life in the best possible way being humble and grateful.",
      ],
    },
    {
      testifier: "Benson Reed Venture Capitalist",
      testimonial: [
        "VIPLIFECOACH did it for me as they supported me and helped me revolutionise everything about me I can’t thank them enough, from being there from the word go till I said thank you.",
        "A service that follows you like a shadow but most importantly gets you results you want.",
      ],
    },
    {
      testifier: "Simone Medics",
      testimonial: [
        "The world of tennis is not easy and inspiring my youngest can be quite hard with prospects of turning pro soon and an accolade of interest from some investors we needed to keep our feet on the ground and still be stronger than ever.",
        "The team delivered a program that changed the game for us opening not just one avenue but many more in preparation for the future thank you guys and gals.",
      ],
    },
    {
      testifier: "Singer and songwriter",
      testimonial: [
        "If you guys where writing music you would be pop stars for a long time coming, inspiring you have all being, eye opening never ending but most important showing me the meaning of life regardless of who i am and how much money I have.",
        "As you said a Lesson taught is a lesson learnt.",
      ],
    },
  ]);

  return (
    <main>
      <h1 className="global-css-page-title">Testimonials</h1>
      <section className="testimonials">
        {Testimonials.map((testimonial, index, array) => {
          return (
            <div className="individual-testimonial" key={index}>
              <h2 className="individual-testifier-name">
                {/* {index + 1}.*/} {testimonial.testifier}
              </h2>
              {testimonial.testimonial.map((testimonial_part, index) => {
                return (
                  <p className="individual-testimonial-details" key={index}>
                    {testimonial_part}
                  </p>
                );
              })}
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Testimonials;
