console.log('%c ---------------Task 7---------------', 'background-color: yellow; font-weight: bold; color:red');

const citiesByCountry = {
    germany: ['München', 'Berlin', 'Frankfurt'],
    usa: ['Chicago', 'New York', 'Los Angeles'],
    ukraine: ['Sevastopol', 'Kyiv', 'Donetsk'],
}

const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('cities');
const result = document.getElementById('result');

function newSitySelect() {
    const selectedCountry = countrySelect.value;
    const cities = citiesByCountry[selectedCountry];
    citySelect.innerHTML = '';

    for (let city of cities) {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    }

    showOutput();
}

countrySelect.addEventListener('change', newSitySelect);
citySelect.addEventListener('change', showOutput);

function showOutput() {
    result.textContent = '';
    result.textContent = `${countrySelect.options[countrySelect.selectedIndex].text}, ${citySelect.options[citySelect.selectedIndex].text}`;
}
