// get colors json array, parse data, add colors to li and append to color list element
fetch('colors.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('network response error');
        }
        return response.json(); // parse json data
    })
    .then(data => {
        // access json data
        const colors = data
        console.log(colors)

        var colorList = document.getElementById('colorList')

        colors.forEach(element => {
            var color = document.createElement('li');
            var image = document.createElement('img');
            var colorName = document.createElement('p');
            var colorBtn = document.createElement('button');
            colorBtn.setAttribute('name', 'colorNode')

            image.src = element.imageUrl;
            colorName.innerHTML = element.name;

            colorBtn.appendChild(image);
            colorBtn.appendChild(colorName);
            colorList.append(colorBtn);
        });
    })
    .then(colorNodes => {
        colorNodes = document.getElementsByName('colorNode')
        console.log(colorNodes)
        colorNodes.forEach(node => {
            var currentPal = document.getElementById('currentPalette');
            const clone = node.cloneNode(true);

            node.addEventListener('click', cloneColors)
            function cloneColors() {
                currentPal.appendChild(clone);
            }
            clone.addEventListener('click', killClone)
            function killClone() {
                currentPal.removeChild(clone);
            }
        })
    }
    )
    .catch(error => {
        console.error('error fetching JSON:', error)
    });

// dark mode
var darkBtn = document.getElementById('darkBtn');
function darkMode() {
    console.log('button clicked')
    document.body.classList.toggle('dark')
    var darkBtn = document.getElementById('darkBtn')
}

// toggle font
var fontBtn = document.getElementById('fontBtn')
function toggleFont() {
    console.log('button clicked')
    document.body.classList.toggle('serif')
}