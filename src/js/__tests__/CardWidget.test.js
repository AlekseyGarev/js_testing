/**
 * @jest-environment jsdom
 */
import { CardWidget } from '../CardWidget.js';

describe('CardWidget DOM interaction', () => {
  let container;
  let widget;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="widget-container">
        <ul class="card-types">
          <li><div class="card-icon visa" data-system="visa"></div></li>
          <li><div class="card-icon mastercard" data-system="mastercard"></div></li>
        </ul>
        <form id="validator-form">
          <input type="text" id="card-number">
          <button type="submit">Click to Validate</button>
        </form>
      </div>
    `;
    container = document.querySelector('#widget-container');
    widget = new CardWidget(container);
    widget.init();
  });

  test('should add "active" class to icon on input', () => {
    const input = document.querySelector('#card-number');
    const visaIcon = document.querySelector('.card-icon.visa');

    input.value = '4111';
    input.dispatchEvent(new Event('input'));

    expect(visaIcon.classList.contains('active')).toBe(true);
  });

  test('should add "valid" class to input on successful validation', () => {
    const form = document.querySelector('#validator-form');
    const input = document.querySelector('#card-number');

    input.value = '79927398713';
    form.dispatchEvent(new Event('submit'));

    expect(input.classList.contains('valid')).toBe(true);
  });
});