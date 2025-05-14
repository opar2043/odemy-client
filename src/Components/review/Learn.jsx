import React from "react";

const Learn = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Blog Section */}
      <section className="blog-post max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Learn About Odemy</h1>
        <p className="text-lg text-gray-700 mb-6">
          Odemy is a modern Learning Management System (LMS) designed to make
          online education more accessible, interactive, and engaging. The
          platform allows educators and students to connect in a seamless way,
          offering a range of features for content delivery, student engagement,
          and progress tracking. Whether you are an instructor looking to share
          your knowledge or a student looking to expand your skills, Odemy aims
          to provide a comprehensive, easy-to-use platform.
        </p>

        {/* Image or screenshot */}
        <div className="mb-6">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Odemy LMS Screenshot"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">Key Features of Odemy</h2>
        <ul className="list-disc pl-5 mb-6">
          <li className="text-lg text-gray-700">Interactive course content</li>
          <li className="text-lg text-gray-700">Student progress tracking</li>
          <li className="text-lg text-gray-700">Real-time feedback and grading</li>
          <li className="text-lg text-gray-700">Seamless instructor-student communication</li>
          <li className="text-lg text-gray-700">Mobile-friendly interface</li>
        </ul>

        <p className="text-lg text-gray-700 mb-6">
          With the integration of Clerk for authentication, Odemy ensures that
          user accounts are securely managed, and users can easily access their
          courses, assignments, and progress. As the platform evolves, it will
          include even more tools to enhance the learning experience.
        </p>

        <h3 className="text-xl font-semibold mb-4">What Sets Odemy Apart?</h3>
        <p className="text-lg text-gray-700 mb-6">
          Odemy stands out by focusing on user experience and ease of use. With
          an intuitive interface, both instructors and students can focus on what
          truly matters: learning and teaching. Unlike other LMS platforms, Odemy
          emphasizes an interactive approach to education, making it easier for
          students to engage with content and stay motivated.
        </p>
      </section>
    </div>
  );
};

export default Learn;
