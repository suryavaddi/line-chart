import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  data: any;
  options: any;
  liveData: any;
  pointBackgroundColors: any[] = [];
  pointRadius: any[] = [];
  livePointBackgroundColors: any[] = [];
  livePointRadius: any[] = [];

  xData: any[] = [];
  yData: any[] = [];
  unlimited: any = 1;
  @ViewChild("chart") chart: ElementRef<HTMLInputElement>;

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
          pointRadius: this.pointRadius
        }
      ]
    };

    this.liveData = {
      labels: this.xData,
      datasets: [
        {
          label: "Time vs Data",
          data: this.yData,
          fill: false,
          borderColor: "#b3b300",
          pointBackgroundColor: this.livePointBackgroundColors,
          pointRadius: this.pointRadius
        }
      ]
    };

    this.data.datasets[0].data.forEach(data => {
      if (data > 0.1) {
        this.pointBackgroundColors.push("#ffcc00");
        this.pointRadius.push(10);
      } else if (data < -0.1) {
        this.pointBackgroundColors.push("#ffcc00");
        this.pointRadius.push(10);
      } else {
        this.pointBackgroundColors.push("#b3b300");
        this.pointRadius.push(1);
      }
    });

    /* this.liveData.datasets[0].data.forEach(data => {
      if (data > 5) {
        this.livePointBackgroundColors.push("red");
        this.livePointRadius.push(10);
      }  else {
        this.livePointBackgroundColors.push("green");
        this.livePointRadius.push(1);
      }
    }); */
  }

  ngOnInit() {
    this.generateChart();
  }

  generateChart() {
    console.log("chart generating");
    for (let i = 0; i < this.unlimited; i++) {
      console.log("for loop");
      var x = new Date().getMilliseconds()/100;
      var y = Math.floor(Math.random() * 10);
      if (this.xData.length >= 20) {
        this.xData.shift();
      }
      if (this.yData.length >= 20) {
        this.yData.shift();
      }
      if (this.livePointBackgroundColors.length >= 20) {
        this.livePointBackgroundColors.shift();
      }
      if (this.livePointRadius.length >= 20) {
        this.livePointRadius.shift();
      }
      if (y >5) {
        this.livePointBackgroundColors.push("yellow");
        this.livePointRadius.push(10);
      }  else {
        this.livePointBackgroundColors.push("red");
        this.livePointRadius.push(1);
      }

      this.xData.push(x);
      this.yData.push(y);
      
      console.log(this.xData);
      console.log(this.yData);
     // this.liveData.refresh();
      /* this.xData = xData;
      this.yData = yData; */
      (<any>this.chart).refresh()
    }
    setTimeout(() => {
      this.unlimited++;

      this.generateChart();
    }, 2000);
  }
}
