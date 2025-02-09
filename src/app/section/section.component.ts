import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  data = [
    {
      client: 'الشركة الألمانية للإبادة',
      appointmentDate: '01/12/2024',
      cancelDate: '-',
      responsible: 'عبدالرحيم إسماعيل ناصف',
      localMinutes: 7654,
      internationalMinutes: 122,
      amount: '61890 ج.م',
      imageUrl: 'assets/company-logo.png' // ضع الصورة في مجلد assets
    },
    {
      client: 'الشركة الألمانية للإبادة',
      appointmentDate: '01/12/2024',
      cancelDate: '01/12/2024',
      responsible: 'عبدالرحيم إسماعيل ناصف',
      localMinutes: 7654,
      internationalMinutes: 122,
      amount: '61890 ج.م',
      imageUrl: 'assets/company-logo.png' // ضع الصورة في مجلد assets
    },
    {
      client: 'الشركة الألمانية للإبادة',
      appointmentDate: '01/12/2024',
      cancelDate: '01/12/2024',
      responsible: 'عبدالرحيم إسماعيل ناصف',
      localMinutes: 7654,
      internationalMinutes: 122,
      amount: '61890 ج.م',
      imageUrl: 'assets/company-logo.png' // ضع الصورة في مجلد assets
    },
    {
      client: 'الشركة الألمانية للإبادة',
      appointmentDate: '01/12/2024',
      cancelDate: '01/12/2024',
      responsible: 'عبدالرحيم إسماعيل ناصف',
      localMinutes: 7654,
      internationalMinutes: 122,
      amount: '61890 ج.م',
      imageUrl: 'assets/company-logo.png' // ضع الصورة في مجلد assets
    },
  
  ];
}
