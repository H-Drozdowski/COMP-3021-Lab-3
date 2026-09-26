var registry = [];

fetch("data/handles.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        registry = data;
    });

/**
 * Reads the ?user= URL parameter and displays a welcome message if present.
 *
 * Called once on page load. If the URL contains a user parameter (e.g.
 * ?user=capn_static), the value is inserted into the welcome element.
 */
function loadWelcome() {
    var params = new URLSearchParams(location.search);
    var operatorName = params.get("user") || "";
    if (operatorName.length > 0) {
        document.getElementById("welcome").innerHTML =
            "Connected as: " + operatorName;
    }
}

/**
 * Reads the ?ref= URL parameter and configures the portal return link.
 *
 * Called once on page load. If a ref value is present, makes the link
 * visible with the text "Return to portal". Sets the href to the ref value
 * if it contains the string "http", otherwise sets it to "#".
 */
function loadRefLink() {
    var params = new URLSearchParams(location.search);
    var ref = params.get("ref") || "";
    if (ref.length === 0) {
        return;
    }

    var link = document.getElementById("ref-link");
    link.textContent = "Return to portal";
    link.style.display = "inline";

    if (ref.indexOf("http") !== -1) {
        link.href = ref;
    } else {
        link.href = "#";
    }
}

/**
 * Encodes < and > characters as HTML entities.
 *
 * @param {string} input - The string to encode.
 * @returns {string} The input with < replaced by &lt; and > replaced by &gt;.
 */
function sanitise(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Reads the search input, filters the registry, and renders the results.
 *
 * If the input is empty or whitespace only, all result elements are cleared
 * and the function returns early. Otherwise, the registry is filtered to
 * find entries whose handle or speciality contains the search term, and
 * the matching entries are rendered into the results section.
 */
function runSearch() {
    var term = document.getElementById("search-input").value;

    if (term.trim().length === 0) {
        document.getElementById("search-summary").textContent = "";
        document.getElementById("results-heading").textContent = "";
        document.getElementById("result-count").textContent = "";
        document.getElementById("results-body").textContent = "";
        return;
    }

    var matches = registry.filter(function (entry) {
        return (
            entry.handle.toLowerCase().indexOf(term.toLowerCase()) !== -1 ||
            entry.speciality.toLowerCase().indexOf(term.toLowerCase()) !== -1
        );
    });

    document.getElementById("search-summary").textContent =
        "Query: " + term + " | Records checked: " + registry.length;

    var safe = sanitise(term);
    document.getElementById("results-heading").innerHTML =
        "Results for: " + term;

    document.getElementById("result-count").textContent =
        matches.length + " record(s) found.";

    if (matches.length === 0) {
        document.getElementById("results-body").textContent =
            "No matching handles in registry.";
    } else {
        var resultsHtml = "";
        matches.forEach(function (entry) {
            resultsHtml +=
                '<div class="result-row">' +
                '<span class="handle">' +
                entry.handle +
                "</span>" +
                '<span class="region">' +
                entry.region +
                "</span>" +
                '<span class="joined">' +
                entry.joined +
                "</span>" +
                '<span class="speciality">' +
                entry.speciality +
                "</span>" +
                "</div>";
        });
        document.getElementById("results-body").innerHTML = resultsHtml;
    }
}

window.addEventListener("load", function () {
    loadWelcome();
    loadRefLink();
});

document.getElementById("search-btn").addEventListener("click", runSearch);

document
    .getElementById("search-input")
    .addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            runSearch();
        }
    });
