document.getElementById('showProjectsBtn').addEventListener('click', function() {
    var projectsDiv = document.getElementById('projects');
    
    if (projectsDiv.style.display === 'none' || projectsDiv.style.display === '') {
        projectsDiv.style.display = 'block';
    } else {
        projectsDiv.style.display = 'none';
    }
});
