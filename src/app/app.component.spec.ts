import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a personal letter title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('A little letter for you');
  });

  it('should render the four requested sections and their photos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const headings = Array.from(compiled.querySelectorAll('h2'))
      .map((heading) => heading.textContent?.trim());
    expect(headings).toEqual([
      'Happy Birthday!',
      'You are wonderful!',
      'You are Loved!',
      'I will always love you!'
    ]);
    expect(compiled.querySelector('.featured-photo img')).not.toBeNull();
    expect(compiled.querySelectorAll('.letter-section .photo img').length).toBe(9);
  });
});
