import { Component, inject } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgIf, NgClass],
  template: `
    <div class="toast" 
         *ngIf="toast.visible()" 
         [ngClass]="toast.type()">
      {{ toast.message() }}
    </div>
  `,
  styles: [`
    .toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 12px 18px;
      border-radius: 6px;
      font-size: 14px;
      color: white;
      animation: fadeInOut 2.5s ease;
      z-index: 9999;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }

    .success {
      background: #28a745;
    }

    .warning {
      background: #d9534f;
    }

    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateY(20px); }
      10% { opacity: 1; transform: translateY(0); }
      90% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(20px); }
    }
  `]
})
export class ToastComponent {
  toast = inject(ToastService);
}
