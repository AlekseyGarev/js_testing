export function validateLuhn(cardNumber) {
    const value = String(cardNumber).replace(/\s+/g, '');
    
    if (!value) return false;
  
    let sum = 0;
    const digits = value.split('').map(Number);
    const isEven = (digits.length % 2 === 0);
  
    for (let i = 0; i < digits.length; i++) {
      let digit = digits[i];
      if ((i % 2 === 0) === isEven) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
    }
    return sum % 10 === 0;
  }
  
  export function getCardSystem(cardNumber) {
    const value = String(cardNumber).replace(/\s+/g, '');
    

    if (/^4/.test(value)) return 'visa';
    
    if (/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[0-1]|2720)/.test(value)) return 'mastercard';
    
    if (/^3[47]/.test(value)) return 'amex';
    
    if (/^(6011|622|64|65)/.test(value)) return 'discover';
    
    if (/^35(2[89]|[3-8][0-9])/.test(value)) return 'jcb';
    
    if (/^(30[0-5]|36|38)/.test(value)) return 'diners';
    
    if (/^220[0-4]/.test(value)) return 'mir';
  
    return null;
  }