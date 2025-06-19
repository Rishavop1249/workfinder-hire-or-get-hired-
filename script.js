let jobs = [
  { title: "Web Developer", company: "Tech Co", location: "Remote", type: "Full-time" },
  { title: "Graphic Designer", company: "DesignHub", location: "New York", type: "Part-time" },
  { title: "Data Entry Clerk", company: "OfficePro", location: "London", type: "Freelance" }
];

const jobListings = document.getElementById("job-listings");

function displayJobs(filter = "") {
  jobListings.innerHTML = "";

  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(job => {
    const jobEl = document.createElement("div");
    jobEl.className = "job";
    jobEl.innerHTML = `
      <h2>${job.title}</h2>
      <p><strong>${job.company}</strong></p>
      <p>${job.location} — ${job.type}</p>
    `;
    jobListings.appendChild(jobEl);
  });
}

document.getElementById("search").addEventListener("input", e => {
  displayJobs(e.target.value);
});

document.getElementById("job-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const newJob = {
    title: document.getElementById("title").value,
    company: document.getElementById("company").value,
    location: document.getElementById("location").value,
    type: document.getElementById("type").value
  };

  jobs.push(newJob);
  displayJobs();

  this.reset();
});

displayJobs();
