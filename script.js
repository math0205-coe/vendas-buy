// script.js

// Function to load and display courses dynamically
function loadCourses() {
    const courses = [
        { id: 1, name: 'Mathematics 101' },
        { id: 2, name: 'Physics 201' },
        { id: 3, name: 'Chemistry 301' }
    ];

    const courseContainer = document.getElementById('courseContainer');
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.innerText = course.name;
        courseContainer.appendChild(courseElement);
    });
}

// Call the function to load courses on page load
window.onload = loadCourses;