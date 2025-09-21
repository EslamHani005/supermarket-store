import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

@Component({
  selector: 'app-home', 
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [RouterLink],
})
export class Home implements AfterViewInit {
  message = 'Home Component is working!';
  private player: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // ممكن تستخدم console فقط للمتصفح
    if (isPlatformBrowser(this.platformId)) {
      console.log('HomeComponent loaded in browser');
      console.log('Message:', this.message);
    } else {
      console.log('HomeComponent loaded on server');
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // نتأكد إن الـ DOM جاهزة
      this.loadYouTubeAPI().then(() => {
        this.initPlayer();
      });
    }
  }

  private loadYouTubeAPI(): Promise<void> {
    return new Promise((resolve) => {
      // لو الـ YT موجود وعامل API جاهز
      if (window.YT && typeof window.YT.Player === 'function') {
        resolve();
      } else {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.onload = () => {
          // قد لا يعني إنه Player جاهز بالضبط، لكن لـ API
          // YouTube API بيطلب استدعاء onYouTubeIframeAPIReady
        };
        document.body.appendChild(tag);

        // تهيئة resolve عند تفعيل الـ callback
        window.onYouTubeIframeAPIReady = () => {
          resolve();
        };
      }
    });
  }

  private initPlayer(): void {
    if (isPlatformBrowser(this.platformId) && window.YT) {
      this.player = new window.YT.Player('youtube-player', {
        videoId: 'lChKl4RHnOE',
        playerVars: {
          autoplay: 1,
          controls: 0,
          start: 120,
          end: 300,
          mute: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: (event: any) => {
            event.target.setPlaybackRate(1.5);
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(120);
            }
          },
        },
      });
    }
  }
}