// Load courses from dados.json and display them with Kiwify links

fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    const coursesContainer = document.getElementById('courses');
    data.courses.forEach(course => {
      const courseElement = document.createElement('div');
      courseElement.innerHTML = `
        <h2>${course.title}</h2>
        <a href='${course.kiwify_link}' target='_blank'>View on Kiwify</a>
      `;
      coursesContainer.appendChild(courseElement);
    });
  })
  .catch(error => console.error('Error loading courses:', error));