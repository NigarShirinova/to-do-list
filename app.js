const btn = document.querySelector(".add");
const list = document.querySelector("ul");
const input = document.querySelector("input");
const remove = document.querySelector(".remove-all");

// Custom function to create and show alerts
function showCustomAlert(message, bgColor = 'red', duration = 3000) {
    const alert = document.createElement("div");
    alert.innerText = message;
    alert.style.backgroundColor = bgColor;
    alert.style.color = "white";
    alert.style.padding = "10px";
    alert.style.marginTop = "10px";
    alert.style.textAlign = "center";
    alert.style.fontWeight = "bold";
    alert.style.position = "fixed";
    alert.style.top = "10px";
    alert.style.left = "50%";
    alert.style.transform = "translateX(-50%)";
    alert.style.zIndex = "1000";

    document.body.appendChild(alert);

    setTimeout(() => {
        alert.style.display = "none";
    }, duration);
}

// Add button event listener
btn.addEventListener("click", () => {
    if (input.value.trim() == "") {
        showCustomAlert("Input cannot be empty!", "orange");
    } else {
        const li = document.createElement("li");
        li.style.listStyle = "none";
        li.style.display = "block";

        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.justifyContent = "space-around";
        container.style.alignItems = "center";
        container.style.margin = "30px";

        const text = document.createElement("span");
        text.innerText = input.value;
        text.style.color = "black";
        text.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
        text.style.fontSize = "40px";
        text.style.marginLeft = "30px";  
        text.style.width = "70%";
        text.style.border = "1px solid black";
        text.style.borderRadius = "5px";
        text.style.backgroundColor = "#D6E0FF";
        text.style.fontWeight = "10%";
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "✔️";
        deleteButton.style.color = "green";
        deleteButton.style.backgroundColor = "black";
        deleteButton.style.fontSize = "30px";
        deleteButton.style.marginRight = "30px"; 
        deleteButton.style.borderRadius = "50%";

        remove.style.display = "inline";

        // Delete button event listener
        deleteButton.addEventListener("click", () => {
            text.style.textDecorationLine = "line-through";
            text.style.textDecorationColor = "green";
            text.style.textDecorationThickness = "5px";

            // Custom delete confirmation
            showCustomAlert("Item deleted", "red", 3000);

            deleteButton.remove(); // Remove the delete button
        });
        
        // Remove all button event listener
        remove.addEventListener("click", () => {
            if (confirm("Are you sure for deleting all items?")) {
                list.innerHTML = ""; // Clear the list
                remove.style.display = "none"; // Hide the remove button
                showCustomAlert("All items deleted", "red",3000);
            }
        });

        // Custom add confirmation
        showCustomAlert("Item added successfully", "green", 3000);
        
        // Append elements
        container.appendChild(text);
        container.appendChild(deleteButton);
        li.appendChild(container);
        list.appendChild(li);
    }

    input.value = ""; // Clear input field
});
