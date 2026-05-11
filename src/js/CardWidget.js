import { validateLuhn, getCardSystem } from './validator.js';

export class CardWidget {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.form = this.container.querySelector('#validator-form');
    this.input = this.container.querySelector('#card-number');
    this.icons = Array.from(this.container.querySelectorAll('.card-icon'));
  
    if (!this.form) {
      console.error('Форма не найдена!');
      return;
    }
  
    this.input.addEventListener('input', () => {
      const system = getCardSystem(this.input.value);
      this.setActiveIcon(system);
    });
  
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = this.input.value;
      const isValid = validateLuhn(value);
      
      this.input.classList.toggle('valid', isValid);
      this.input.classList.toggle('invalid', !isValid);
    });
  }

  setActiveIcon(system) {
    this.icons.forEach(el => {
      if (el.dataset.system === system) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
}