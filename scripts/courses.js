// Web and Computer Programming certificate courses.
// Update completed to reflect your actual course history.

const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        completed: false
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: false
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: false
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: false
    },
    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        completed: false
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: false
    }
];

const courseList = document.querySelector("#course-list");
const totalCredits = document.querySelector("#total-credits");
const courseCount = document.querySelector("#course-count");

const filterButtons = document.querySelectorAll(".filter-button");

function displayCourses(filter = "all") {
    let filteredCourses;

    if (filter === "all") {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(
            (course) => course.subject === filter
        );
    }

    // Clear the previous list.
    courseList.replaceChildren();

    // Generate the course cards dynamically.
    filteredCourses.forEach((course) => {
        const article = document.createElement("article");
        article.classList.add("course-card");

        article.classList.add(
            course.completed ? "completed" : "not-completed"
        );

        const heading = document.createElement("h3");
        heading.textContent = `${course.subject} ${course.number}`;

        const title = document.createElement("p");
        title.textContent = course.title;

        const credits = document.createElement("p");
        credits.textContent =
            `${course.credits} ${course.credits === 1 ? "credit" : "credits"}`;

        const status = document.createElement("span");
        status.classList.add("completion-status");

        status.textContent = course.completed
            ? "✓ Completed"
            : "Not Completed";

        article.append(heading, title, credits, status);
        courseList.appendChild(article);
    });

    // Display the number of courses shown.
    courseCount.textContent =
        `${filteredCourses.length} courses displayed`;

    // Calculate credits for the currently displayed courses.
    const creditsDisplayed = filteredCourses.reduce(
        (total, course) => total + course.credits,
        0
    );

    totalCredits.textContent = creditsDisplayed;

    // Update the selected filter button and its accessibility state.
    filterButtons.forEach((button) => {
        const isSelected = button.dataset.filter === filter;

        button.classList.toggle("selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
    });
}

// Add click event listeners to the filter buttons.
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayCourses(button.dataset.filter);
    });
});

// Display all courses when the page loads.
displayCourses();