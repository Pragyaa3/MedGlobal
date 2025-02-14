// Array with country data (static data for now)
const countryData = [
    { name: "Russia", population: "145.9M", capital: "Moscow", language: "Russian" },
    { name: "Uzbekistan", population: "34.5M", capital: "Tashkent", language: "Uzbek" },
    { name: "Kazakhstan", population: "18.8M", capital: "Astana", language: "Kazakh, Russian" },
    { name: "Philippines", population: "113.9M", capital: "Manila", language: "Filipino, English" },
    { name: "Georgia", population: "3.7M", capital: "Tbilisi", language: "Georgian" },
    { name: "Kyrgyzstan", population: "6.5M", capital: "Bishkek", language: "Kyrgyz, Russian" },
    { name: "Egypt", population: "104.1M", capital: "Cairo", language: "Arabic" }
];

// Function to create table rows dynamically
function createTableRows() {
    const tableBody = document.querySelector("#countryTable tbody");
    
    countryData.forEach(country => {
        const row = document.createElement("tr");
        
        // Create cells for each data point
        Object.values(country).forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        
        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Call function to populate the table
createTableRows();
