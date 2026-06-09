"use strict";
console.log("Script is alive!");
const pages = document.getElementById("pages-summary");
if (pages === null) {
    throw new Error("IDK Bro you deleted the details element why u do dat;");
}
else {
    pages.addEventListener('mouseenter', () => {
        pages.open = true;
        console.log("Entered");
    });
    pages.addEventListener('mouseleave', (event) => {
        console.log("Left element:", event.target);
        console.log("Related target:", event.relatedTarget);
        pages.open = false;
    });
}
//# sourceMappingURL=index.js.map