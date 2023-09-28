import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/data'; // Ganti dengan lokasi berkas data yang sesuai

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  employee: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.employee = Employees.find((e) => e.id === Number(id));

    if (!this.employee) {
      this.router.navigate(['/employee-list']);
    }
  }
}
