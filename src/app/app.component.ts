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
  title = 'A little letter for you';

  birthdayPhoto: Photo = {
    image: '/image_assets/birthday-celebration.jpg',
    alt: 'A joyful celebration filled with colorful birthday balloons',
    caption: 'Here’s to celebrating you, today and always.'
  };

  sections: LetterSection[] = [
    {
      title: 'You are wonderful!',
      moments: [
        {
          paragraph: 'There is something special about the way you make ordinary days feel brighter. Your kindness, your laugh, and all the little things that make you you never go unnoticed. You have a way of making people feel at ease just by being yourself, and that is a rare and lovely gift.',
          photo: {
            image: '/image_assets/morning-light.jpg',
            alt: 'Warm morning light spilling across a peaceful landscape',
            caption: 'The kind of light you bring into a room.'
          }
        },
        {
          paragraph: 'I hope you get to see yourself the way the people who love you see you: thoughtful, extraordinary, and so easy to be grateful for. The care you put into the smallest things matters more than you know, and the world is gentler and more beautiful with you in it.',
          photo: {
            image: '/image_assets/flowers.jpg',
            alt: 'A soft bouquet of colorful flowers',
            caption: 'A little reminder of all the lovely things.'
          }
        },
        {
          paragraph: 'There is so much to admire in the way you keep growing, dreaming, and showing up for the people around you. I hope this next year brings you new reasons to smile, quiet moments to recharge, and plenty of reminders of just how wonderful you are.',
          photo: {
            image: '/image_assets/green-hills.jpg',
            alt: 'A scenic path winding through green hills',
            caption: 'Here’s to all the beautiful places ahead.'
          }
        }
      ]
    },
    {
      title: 'You are Loved!',
      moments: [
        {
          paragraph: 'On the big days and the quiet ones, on the days you feel on top of the world and the days you need a little extra reassurance: you are loved through all of it. You never have to earn that love or be anything other than exactly who you are.',
          photo: {
            image: '/image_assets/shared-moment.jpg',
            alt: 'Two people sharing a warm, close moment',
            caption: 'Love lives in the moments we share.'
          }
        },
        {
          paragraph: 'You have a way of making people feel welcome and cared for. It shows in every thoughtful check-in, every laugh that lasts a little too long, and every time you make space for someone else. I hope this little page gives some of that warmth right back to you.',
          photo: {
            image: '/image_assets/friends-laughing.jpg',
            alt: 'Friends laughing together outdoors',
            caption: 'In every laugh, every check-in, every hug.'
          }
        },
        {
          paragraph: 'Whether we are together or apart, there are people who are always in your corner, wishing you well and carrying you in their hearts. On every sort of day, let this be your reminder: you are cherished, you are important, and you are never alone.',
          photo: {
            image: '/image_assets/sunset.jpg',
            alt: 'A peaceful sunset glowing over the horizon',
            caption: 'A love that stays, whatever the day brings.'
          }
        }
      ]
    },
    {
      title: 'I will always love you!',
      moments: [
        {
          paragraph: 'No matter where life takes us, I will always be cheering you on. I will keep showing up, saving you a seat, and finding new reasons to be proud of the person you are. You can count on me to celebrate your wins and stay close through the harder chapters, too.',
          photo: {
            image: '/image_assets/beach.jpg',
            alt: 'Gentle waves rolling onto a sunlit beach',
            caption: 'For every new adventure still to come.'
          }
        },
        {
          paragraph: 'I will always be grateful for the memories we have made and excited for the ones still ahead. There will be new places to see, familiar stories to retell, and all those ordinary little moments that somehow become our favorites.',
          photo: {
            image: '/image_assets/mountain-lake.jpg',
            alt: 'A quiet lake surrounded by mountains',
            caption: 'For all the peaceful little in-between moments.'
          }
        },
        {
          paragraph: 'So today, make a wish, have another slice, and remember: this is one birthday, but you deserve to feel celebrated every day. Wherever the next year leads, I hope you feel loved in every season. I will always love you.',
          photo: {
            image: '/image_assets/misty-mountains.jpg',
            alt: 'Sunrise rising over a misty mountain valley',
            caption: 'And for all the bright mornings still ahead.'
          }
        }
      ]
    }
  ];
}
