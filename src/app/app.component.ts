import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Photo = {
  image: string;
  alt: string;
  caption: string;
};

type LetterSection = {
  title: string;
  moments: {
    paragraph: string;
    photo: Photo;
  }[];
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'To you, the love of my life.';

  birthdayPhoto: Photo = {
    image: '/image_assets/FirstPhoto.jpg', // Get our first photo
    alt: 'Our first photo!',
    caption: "A glimpse of where it all began for our journey."
  };

  sections: LetterSection[] = [
    {
      title: 'You are wonderful!',
      moments: [
        {
          paragraph: "From the very beginning, you have always been amazing, talented, and full of surprises. Your bubbly personality has always made people around you feel safe, comfortable and you never even noticed. And what first caught me? Your amazing wonderful, warm, charming smile. You said it yourself, your mom would always tell you to smile beautifully because its part of your charm. 'Til now, seeing you smile, whether that's on stage or when we walk around the mall, or when you laugh so hard it makes you cry, that smile, makes me believe that you never lost that charm. From then, until now, your beautiful charm, your wonderful personality, makes me fall in love the same way it did all those years ago.",
          photo: {
            image: '/image_assets/VolunteerFiesta.jpg',
            alt: 'Warm morning light spilling across a peaceful landscape',
            caption: 'Bubbly and jolly as always!'
          }
        },
        {
          paragraph: 'Your grit and strength inspires me. Especially being side by side with you these past 2 years, seeing what you have been going through, I know that I am loving such a strong woman, who is founded on God. It is a blessing to know, love, and care for a woman like you. Your faith in God is a reminder to me that truly, trusting Him is the first step to seeing something through.',
          photo: {
            image: '/image_assets/ENC2025.jpg',
            alt: 'A soft bouquet of colorful flowers',
            caption: "You answered God's call, we get to do it together"
          }
        },
        {
          paragraph: "There is so much to admire in the way you keep growing, dreaming, and showing up for the people around you, even when I know you are so tired that you want to stay home and do nothing. But you keep pushing through, and you keep following God's leading for you. Your grit, that keeps you going, and your willingness to keep answering God's call is what I prayed for. Maybe, back then I didn't know what that really meant, or what that entailed in reality, but seeing what it means now, makes this answered prayer even more meaningful. Truly, God has made a wonderful woman, and it shows, not just in our relationship, but even in the lives that you make an impact on every single day.",
          photo: {
            image: '/image_assets/FullyBookedCandid.jpg',
            alt: 'A scenic path winding through green hills',
            caption: 'Candid Shot, thanks Ery'
          }
        }
      ]
    },
    {
      title: 'My Beautiful Princess',
      moments: [
        {
          paragraph: "I have always told you that it doesn't matter what others say, you will always be the most beautiful woman in my eyes. That's because from the outside, all the way to your very core, you reflect the beautiful work of God. You may not see it, but your caring nature is what has kept me going, and your push for me to go to Go Con was what led to me hearing God tell me directly that my thesis will be finished because He wills it. If that is not beauty reflected from within, I don't know what is.",
          photo: {
            image: '/image_assets/Conquest2.jpg',
            alt: 'Two people sharing a warm, close moment',
            caption: 'Nighttime Quiet after Conquest Day 2'
          }
        },
        {
          paragraph: "One thing that I never really talk about but do mention from time to time is the warmth of your hands. Your hands are always so comfy soft, and that adds to the beauty of who you are. Your hands have done plenty, and have cared for many, because whatever your hands are found doing, there is excellence, elegance, care and effort. Holding your beautiful hands whenever we walk is a blessing onto itself, because I know I am holding the hands of someone who understands good work, and work that pleases God. The warmth they carry is not only a sign of hard work, but also of tender care. Every time you pinch my cheeks, or pat my head, I feel the tender care that you always do your best to make me feel, especially in times that I am dealing with a whole lot in my life.",
          photo: {
            image: '/image_assets/HoldingHands.jpg',
            alt: 'Friends laughing together outdoors',
            caption: 'A snap of why I love holding your hand'
          }
        }
      ]
    },
    {
      title: 'I will always love you!',
      moments: [
        {
          paragraph: "No matter what we go through, no matter what life throws at us, I will always be here for you, because love doesn't diminish just because of problems, arguments, or misunderstandings. I know I said it so many times, and I know I still have a long way to go, but I hope that even with the small things you can still see that I do care, and that my love for you never changes. We have been through so much over the years, and the fact that we both choose to stay is a testament of how faithful God is in our relationship. That is why I know God is not anywhere near done with our story.",
          photo: {
            image: '/image_assets/RecentDateCandid.jpg',
            alt: 'Gentle waves rolling onto a sunlit beach',
            caption: 'Candid again! Thanks Ery'
          }
        },
        {
          paragraph: "I will always be grateful for the memories we have made and excited for the ones still ahead. There will be new places to see, familiar stories to retell, and all those ordinary little moments that somehow become our favorites. And sometimes we don't even have to look for big dates, or planned trips to make memories. Sometimes it just needs a little mishap in the house, or a funny joke, or just an inside joke between the two of us. There is so much more to our story, and our relationship that we have yet to explore, even if it has felt in the past that we have nothing to talk about. I am so sure it just needs a little more exploration of each other's worlds, and the willingness to really go for it.",
          photo: {
            image: '/image_assets/Conquest1.jpg',
            alt: 'A quiet lake surrounded by mountains',
            caption: 'We commit to serve God, together!'
          }
        },
        {
          paragraph: "Today is your special day, and God gave it to you so you can remember all of the good things He has done for you. So I continue to pray that He will reveal more of Himself to you through our relationship. My gift to you may feel alot like a me thing, but I have always wanted to gift you something like this, a special effort you could say, because it takes a certain nerdiness to pull off something like this. May this day be a day of joy, laughter, memories, and joy, because you deserve all of that, and more, not because of what you have done for others, but because God has promised us a life that can be lived to the fullest, by His grace, and because of His love. Each and everyday, I continue to pray that I get the chance to reflect that love to you in our relationship. I love you always, and it will never change, because you are the love of my life. Happy, happy birthday my love.",
          photo: {
            image: '/image_assets/CutieBaby.jpg',
            alt: 'Sunrise rising over a misty mountain valley',
            caption: 'The Cutest Baby everrrr'
          }
        }
      ]
    }
  ];
}
