import { Component } from '@angular/core';
import { AlertComponent } from "../alert/alert.component";
import { SmoothedLineChartComponent } from "../smoothed-line-chart/smoothed-line-chart.component";
import { OrganisationStatsComponent } from "../organisation-stats/organisation-stats.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AlertComponent, SmoothedLineChartComponent, OrganisationStatsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
