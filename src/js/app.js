import '../css/style.css';
import { CardWidget } from './CardWidget.js';

const container = document.querySelector('#widget-container');
const widget = new CardWidget(container);
widget.init();