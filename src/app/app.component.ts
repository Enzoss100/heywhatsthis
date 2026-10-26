import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type MemoryEntry = {
  title: string;
  date: string;
  location: string;
  image: string;
  note: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Memory Gallery';

  memories: MemoryEntry[] = [
    {
      title: 'Sunrise Roadtrip',
      date: 'May 2024',
      location: 'Big Sur, California',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      note: 'Early fog, warm coffee, and a road that felt like it was still waking up.'
    },
    {
      title: 'Weekend Picnic',
      date: 'June 2024',
      location: 'Lake Eola',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80',
      note: 'A little sunlight, a little laughter, and a blanket that turned into a whole story.'
    },
    {
      title: 'City Lights',
      date: 'August 2024',
      location: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
      note: 'Neon reflections, midnight trains, and the kind of night you keep replaying.'
    },
    {
      title: 'Golden Hour',
      date: 'September 2024',
      location: 'Seaside Town',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
      note: 'Salt in the air, sand between our toes, and a sky turning every shade of gold.'
    }
  ];
}
