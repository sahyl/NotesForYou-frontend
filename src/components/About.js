import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About NotesForYou</h2>
      <div className="accordion" id="aboutAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="overviewHeading">
            <button
              className="accordion-button fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#overviewCollapse"
              aria-expanded="true"
              aria-controls="overviewCollapse"
            >
              Overview
            </button>
          </h2>
          <div
            id="overviewCollapse"
            className="accordion-collapse collapse show"
            aria-labelledby="overviewHeading"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              Notes For You is a feature-rich note-taking website designed to provide users with a seamless experience for creating, managing, and organizing their notes. Whether it's jotting down thoughts, making to-do lists, or saving important information, Notes For You has you covered.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="featuresHeading">
            <button
              className="accordion-button fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#featuresCollapse"
              aria-expanded="false"
              aria-controls="featuresCollapse"
            >
              Key Features
            </button>
          </h2>
          <div
            id="featuresCollapse"
            className="accordion-collapse collapse"
            aria-labelledby="featuresHeading"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Secure Authentication: Users can create accounts and log in securely to access their notes.</li>
                <li>CRUD Operations: Create, read, update, and delete notes effortlessly.</li>
                <li>Customizable Notes: Each note includes a title, description, and tag for effective categorization.</li>
                <li>Responsive Design: Enjoy a seamless experience on various devices.</li>
                {/* Add more features as needed */}
              </ul>
            </div>
          </div>
        </div>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default About;
