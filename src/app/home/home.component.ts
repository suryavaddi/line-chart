import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  data: any;
  options: any;
  pointBackgroundColors: any[] = [];
  pointRadius:  any[] = [];

  constructor() {
    this.data = {
      labels: [
        "9:30am",
        "",
        "",
        "10:30am",
        "",
        "",
        "11:30am",
        "",
        "",
        "12:30pm",
        "",
        "",
        "1:30pm",
        "",
        "",
        "2:30pm",
        "",
        "",
        "3.30pm"
      ],
      datasets: [
        {
          label: "Time vs Data",
          data: [
            0.11,
            -0.12,
            0.19,
            -0.22,
            -0.36,
            0.22,
            -0.09,
            -0.22,
            0.22,
            -0.1,
            -0.15,
            -0.25,
            0.267,
            0.36,
            -0.1398,
            0.023,
            0.122,
            -0.15,
            0.0
          ],
          fill: false,
          borderColor: "#b3b300",
          pointBackgroundColor: this.pointBackgroundColors,
          pointRadius:this.pointRadius
        }
      ]
    };

    this.data.datasets[0].data.forEach(data => {
      if (data > 0.1) {
        this.pointBackgroundColors.push("#ffcc00");
        this.pointRadius.push(10);
      } 
      else if(data < -0.1) {
        this.pointBackgroundColors.push("#ffcc00");
        this.pointRadius.push(10);
      } 
      else {
        this.pointBackgroundColors.push("#b3b300");
        this.pointRadius.push(1);
      }
    });
  }

  ngOnInit() {}
}
