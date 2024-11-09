import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Serie } from '../Serie';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
showDetails(_t15: Serie) {
throw new Error('Method not implemented.');
}
  series: Serie[] = [];
  averageSeasons: number = 0;
  selectedSerie: Serie | null = null; // Agregado para almacenar la serie seleccionada

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data: Serie[]) => {
      this.series = data;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons(): void {
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.averageSeasons = totalSeasons / this.series.length;
  }

  // Método para seleccionar una serie al hacer clic
  onSelectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }
}
