import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var mapboxgl: any;

const lat = 13.677873;
const lon = -89.287427;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {

    mapboxgl.accessToken = 'pk.eyJ1Ijoic3R1ZGVudDAxIiwiYSI6ImNrZzFjZzYxMjAyNncyenA0aDFpbjhvZzEifQ.0lSa_va43L469TNR9z5MTg';

    const map = new mapboxgl.Map({
        style: 'mapbox://styles/mapbox/light-v9',
        center: [lon, lat],
        zoom: 15.5,
        pitch: 45,
        bearing: -17.6,
        container: 'map'
      });

      map.on('load', () => {

        map.resize();

        // Marker
        new mapboxgl.Marker()
          .setLngLat([ lon, lat ])
          .addTo(map);



        // Insert the layer beneath any symbol layer.
        const layers = map.getStyle().layers;

        let labelLayerId;
          for (let i = 0; i < layers.length; i ++) {
          if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
          }
        }

        map.addLayer({
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
          'fill-extrusion-color': '#aaa',

          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          'fill-extrusion-height': [
          'interpolate', ['linear'], ['zoom'],
          15, 0,
          15.05, ['get', 'height']
          ],
          'fill-extrusion-base': [
          'interpolate', ['linear'], ['zoom'],
          15, 0,
          15.05, ['get', 'min_height']
          ],
          'fill-extrusion-opacity': .6
          }
          }, labelLayerId);
        });


  }
  
  }

