import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  message = signal<string | null>(null);
  type = signal<'success' | 'warning'>('success');
  visible = signal(false);

  show(msg: string, type: 'success' | 'warning' = 'success') {
    this.message.set(msg);
    this.type.set(type);
    this.visible.set(true);

    setTimeout(() => {
      this.visible.set(false);
    }, 2500);
  }
}
