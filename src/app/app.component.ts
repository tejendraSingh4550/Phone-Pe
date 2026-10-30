import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Activity = { name: string; detail: string; amount: string; time: string; icon: string; tone: string; positive: boolean; category: string };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  activeTab = 'Home';
  activeFilter = 'All';
  search = '';
  balanceVisible = true;
  modalAction = '';
  toast = '';

  readonly navigation = [
    { label: 'Home', icon: '⌂' }, { label: 'Rewards', icon: '✧' },
    { label: 'History', icon: '◷' }, { label: 'Profile', icon: '◎' }
  ];
  readonly actions = [
    { title: 'To mobile number', sub: 'Pay any UPI ID', icon: '↗', tone: 'lavender' },
    { title: 'To bank account', sub: 'NEFT, IMPS & more', icon: '▤', tone: 'peach' },
    { title: 'Scan any QR', sub: 'Pay at a store', icon: '▦', tone: 'mint' },
    { title: 'Self transfer', sub: 'Between your accounts', icon: '⇄', tone: 'blue' }
  ];
  readonly transactions: Activity[] = [
    { name: 'Aarav Sharma', detail: 'UPI •••• 4821 · Today, 10:42 AM', amount: '− ₹850', time: '10:42 AM', icon: 'AS', tone: 'purple', positive: false, category: 'Sent' },
    { name: 'Swiggy', detail: 'UPI payment · Today, 9:18 AM', amount: '− ₹426', time: '9:18 AM', icon: 'S', tone: 'orange', positive: false, category: 'Shopping' },
    { name: 'Salary credited', detail: 'HDFC Bank · Yesterday', amount: '+ ₹48,500', time: 'Yesterday', icon: '₹', tone: 'green', positive: true, category: 'Received' },
    { name: 'Maya Verma', detail: 'UPI •••• 0916 · Yesterday', amount: '+ ₹1,200', time: 'Yesterday', icon: 'MV', tone: 'pink', positive: true, category: 'Received' },
    { name: 'Jio Prepaid', detail: 'Mobile recharge · 24 Oct', amount: '− ₹299', time: '24 Oct', icon: 'J', tone: 'blue', positive: false, category: 'Bills' }
  ];

  get filteredTransactions(): Activity[] {
    const query = this.search.trim().toLowerCase();
    return this.transactions.filter((item) =>
      (this.activeFilter === 'All' || item.category === this.activeFilter) &&
      (!query || item.name.toLowerCase().includes(query) || item.detail.toLowerCase().includes(query))
    );
  }

  selectTab(tab: string): void { this.activeTab = tab; }
  openAction(action: string): void { this.modalAction = action; }
  closeModal(): void { this.modalAction = ''; }
  showToast(message: string): void {
    this.toast = message;
    window.setTimeout(() => this.toast = '', 2600);
  }
  confirmDemo(): void {
    const action = this.modalAction;
    this.modalAction = '';
    this.showToast(`${action} is ready to connect in this demo.`);
  }
}
