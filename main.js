M.FormSelect.init(document.querySelectorAll('select'));

document.getElementById('submit').addEventListener('click', function() {
    if (document.getElementById('survey-form').checkValidity()) {
        document.getElementById('submit').classList.add('disabled');
        document.getElementById('submit').innerHTML = "Thanks!";
        document.getElementById('thanks').style.maxHeight = "1000px";
        setTimeout(function() {
            document.getElementById('thanks').style.height = "700px";
            particlesJS("particles-js", particlesJSON);
        }, 500)
    }
});

document.getElementById('another').addEventListener('click', function() {
    document.getElementById('kittenImage').src='http://placekitten.com/' + (Math.floor(Math.random() * 8) + 2) + Math.floor(Math.random() * 10) + '0/' + 4 + Math.floor(Math.random() * 10) + '0';
});

let particlesJSON = {
    "particles": {
        "number": {
          "value": 5,
          "density": {
            "enable": true,
            "value_area": 50 // Lower = More Particles
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.5,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 200,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
    },
    "retina_detect": true
}

particlesJS("particles-js", particlesJSON);