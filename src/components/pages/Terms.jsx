// src/components/pages/Terms.jsx
import React from "react";

const Terms = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Terms & Conditions
      </h1>

      <div className="space-y-5 text-gray-600 text-sm leading-relaxed">

        <p>
          By using IndoTask, you agree to comply with and be bound by these
          Terms and Conditions. If you do not agree, please do not use the
          platform.
        </p>

        <div>
          <h2 className="font-semibold text-gray-900 mb-1">
            Use of the Platform
          </h2>
          <p>
            IndoTask is intended for task management, verification, and
            reporting purposes only. Users are responsible for all activities
            performed under their accounts.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-1">
            Data & Verification
          </h2>
          <p>
            Uploaded images and task data are used solely for verification
            and reporting. IndoTask does not claim ownership of your data.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-1">
            Account Responsibility
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            login credentials and ensuring authorized use only.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-1">
            Changes to Terms
          </h2>
          <p>
            IndoTask reserves the right to update these terms at any time.
            Continued use of the platform indicates acceptance of updates.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Terms;
