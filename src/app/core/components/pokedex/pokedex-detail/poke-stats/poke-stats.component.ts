import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { PokemonService } from 'src/app/core/services/pokemon.service';


@Component({
  selector: 'app-poke-stats',
  templateUrl: './poke-stats.component.html',
  styleUrls: ['./poke-stats.component.css']
})
export class PokeStatsComponent implements OnInit {
  @Input() selectedID: string | undefined;
  statsArray: number[] = [];
  @ViewChild(BaseChartDirective)
  chart!: BaseChartDirective;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
 
  }

  ngAfterContentInit(){
   this.renderChart();
  }

  ngOnChanges(){
    this.renderChart();
  }

  renderChart(){
    setTimeout(() => {
      this.statsArray = this.pokemonService.getStatArray(this.selectedID!);
      this.chart!.chart!.data.datasets[0].data = this.statsArray;
      this.chart!.chart!.data.labels =  [ 'HitPoints: '+ this.statsArray[0], 
                            'Attack: '+ this.statsArray[1], 
                            'Defense: '+ this.statsArray[2], 
                            'Speed: '+ this.statsArray[3],
                            'Sp.Attack: '+ this.statsArray[4], 
                            'Sp.Defense: '+ this.statsArray[5]];
     let totalStat = this.statsArray.reduce(function (accumVariable, curValue) {
        return accumVariable + curValue
      }, 0);
      this.chart!.chart!.options.plugins!.title!.text = 'Poke Stats Total: '+ totalStat;
      this.chart!.chart!.update();
  }, 10);
  }

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      z:{
        display: false,
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 170
      },
      r: {
        ticks:{
          display:false
        },
        max:120,
        min:0,
        beginAtZero:true,
        pointLabels:{
            color: 'rgb(54, 162, 235)',
            font: {
              size: 14
          }
        },
        grid: {
          color:'rgba(54, 162, 235, 1)'
        }
      }
    },
    elements: {
      line: {
        borderWidth: 0,
        borderColor: 'rgb(0, 0, 0)'
      }
    },
    plugins: {
    legend: {
      display:false
     },
     title: {
       display: true,
       text: 'Poke Stats',
       color:'rgb(255,255,255)'
     },
    }
  };
  public statLabels: string[] = [ 'HitPoints: '+ this.statsArray[0], 
                                'Attack: '+ this.statsArray[1], 
                                'Defense: '+ this.statsArray[2], 
                                'Speed: '+ this.statsArray[3],
                                'Sp.Attack: '+ this.statsArray[4], 
                                'Sp.Defense: '+ this.statsArray[5]];

  public statChartData: ChartData = {
    labels: this.statLabels,
    datasets: [
      { 
      data: this.statsArray, label: 'Base Stats',fill: true,
      backgroundColor: 'rgba(54, 162, 235, .8)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
      }
    ]
  };
  

  public chartType: ChartType = 'radar';

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    
  }

}
