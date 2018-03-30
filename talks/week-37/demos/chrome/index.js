import { addButton } from './button.js';

const shareButton = addButton('Share');

shareButton.addEventListener('click', event => {
  event.preventDefault();

  if (navigator.share) {
    navigator.share({
      title: 'WOW.',
      text: 'Much share',
      url: window.location.href,
    }).then(() => {
      shareButton.textContent = 'shared!';
    });
  }
});

const paymentButton = addButton('Pay for things');

paymentButton.addEventListener('click', event => {
  event.preventDefault();

  if (window.PaymentRequest) {
    const request = new window.PaymentRequest([{
      supportedMethods: ['basic-card'],
    }], {
      total: {
        label: 'Total',
        amount: {
          currency: 'USD',
          value: 0,
        },
      },
    });

    request.show()
      .then(data => {
        console.log('data', data);
      })
      .catch(err => {
        console.log('err', err);
      });
  }
});
