document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("id");

    if (!projectId) {
        document.getElementById("project-content").innerHTML = "<h1>Project Not Found</h1>";
        console.error("No project ID found in URL");
        return;
    }

    const projectFile = `projects/${projectId}.md`; // Ensure correct path

    console.log("Fetching:", projectFile); // Debugging

    fetch(projectFile)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Markdown file not found: ${projectFile}`);
            }
            return response.text();
        })
        .then(markdown => {
            document.getElementById("project-content").innerHTML = marked.parse(markdown);
            console.log("Markdown Loaded Successfully");
        })
        .catch(error => {
            document.getElementById("project-content").innerHTML = `<h1>Error Loading Project</h1><p>${error.message}</p>`;
            console.error("Error Fetching Markdown:", error);
        });
});
