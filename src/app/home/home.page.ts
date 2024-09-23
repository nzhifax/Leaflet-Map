import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() {}
  ngOnInit() {}

  ionViewDidEnter() {
    this.map = L.map('map').setView([-7.77771447063709, 110.39020388465696], 13);

    // Basemaps
    var basemap1 = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );
    var basemap2 = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          'Tiles &copy; Esri | <a href="DIVSIGUGM" target="_blank">DIVSIG UGM</a>',
      }
    );
    var basemap3 = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          'Tiles &copy; Esri | <a href="Lathan WebGIS" target="_blank">DIVSIG UGM</a>',
      }
    );
    var basemap4 = L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      }
    );

    basemap4.addTo(this.map);
    var baseMaps = {
      "OpenStreetMap": basemap1,
      "Esri World Street": basemap2,
      "Esri Imagery": basemap3,
      "Stadia Dark Mode": basemap4,
    };

    L.control.layers(baseMaps).addTo(this.map);

    // Menambahkan marker kustom
    var customIcon = L.icon({
      iconUrl: 'assets/icon/loc.png',
      iconSize: [50, 30],
    });

    // Mengatur marker dengan ikon kustom
    var marker = L.marker([-7.77771447063709, 110.39020388465696], { icon: customIcon }).addTo(this.map);
  }
}
