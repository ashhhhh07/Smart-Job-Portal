const apiUrl = "http://localhost:8080/api/jobs";

document.getElementById("jobForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const job = {
    title: title.value,
    company: company.value,
    location: location.value,
    skills: skills.value,
    type: type.value
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(job)
  });

  if (response.ok) {
    alert("✅ Job Added Successfully!");
    loadJobs();
    e.target.reset();
  } else {
    alert("❌ Error adding job. Please try again.");
  }
});

async function loadJobs() {
  const res = await fetch(apiUrl);
  const jobs = await res.json();
  const jobList = document.getElementById("jobList");

  if (jobs.length === 0) {
    jobList.innerHTML = `<p style='text-align:center;color:#777;'>No job listings available yet.</p>`;
    return;
  }

  jobList.innerHTML = jobs.map(job => `
    <div class="job-card">
      <h3>${job.title}</h3>
      <p><b>Company:</b> ${job.company}</p>
      <p><b>Location:</b> ${job.location}</p>
      <p><b>Skills:</b> ${job.skills}</p>
      <p><b>Type:</b> ${job.type}</p>
      <button onclick="deleteJob(${job.id})">Delete</button>
    </div>
  `).join('');
}

async function deleteJob(id) {
  if (!confirm("Are you sure you want to delete this job?")) return;
  await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  loadJobs();
}

loadJobs();
