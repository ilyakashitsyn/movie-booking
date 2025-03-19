'strict mode';

const theater = document.querySelector('.theater');
const seats = document.querySelectorAll('.row .seat:not(.seat--occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// Convert from string to number
let ticketPrice = +movieSelect.value;

// Update total and count
const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.seat--selected');
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;

  updateSelectedCount();
});

// Seat click event -> we choose the seat places
theater.addEventListener('click', e => {
  e.preventDefault();

  // Select only .seat and do not select if .seat + .seat--occupied
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('seat--occupied')
  ) {
    e.target.classList.toggle('seat--selected');

    updateSelectedCount();
  }
});
