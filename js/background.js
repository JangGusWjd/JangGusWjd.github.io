const images = [
  "image1.jpg",
  "image2.jpeg",
  "image3.jpg",
  "image4.jpg",
  "image6.jpg",
  "image7.jpg",
];

const chImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('img/${chImage}')`;
