import React from 'react';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy for Anaxus.tech</h1>
      <p className="last-updated">Last Updated: 11/8/24</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Anaxus.tech! We value your privacy and are committed to
          protecting the personal information you share with us. This Privacy
          Policy explains how we collect, use, and safeguard your information
          when you visit our website and use our services.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of personal information:</p>
        <ul>
          <li>
            <strong>Account Information:</strong> When you create an account or
            log in, we collect your email address and other information provided
            during registration.
          </li>
          <li>
            <strong>Booking Information:</strong> When you book an appointment,
            we collect details such as your name, email, phone number, and
            service preferences.
          </li>
          <li>
            <strong>Third-Party Login Information:</strong> If you log in using
            Google, Azure, or Facebook, we may access your email address and
            other profile information shared by these platforms for
            authentication purposes.
          </li>
          <li>
            <strong>Technical Information:</strong> We may collect information
            like your IP address, browser type, and usage data for analytics and
            security purposes.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li>Account Management: To create and manage your account and authenticate your identity.</li>
          <li>Service Fulfillment: To process and manage your appointments.</li>
          <li>Communication: To send booking confirmations, updates, or respond to inquiries.</li>
          <li>Security: To detect and prevent fraudulent activities.</li>
          <li>Analytics: To improve our website and services.</li>
        </ul>
      </section>

      <section>
        <h2>4. Login with Third-Party Providers</h2>
        <p>
          If you choose to log in using a third-party provider (e.g., Google,
          Azure, or Facebook), we may collect the following information:
        </p>
        <ul>
          <li>Google Login: Your email address and name from your Google account.</li>
          <li>Azure Login: Your email address, name, and other profile details provided by Azure.</li>
          <li>
            Facebook Login: Your email address, name, and profile picture as shared by Facebook.
          </li>
        </ul>
        <p>
          Note: These third-party providers may collect additional information.
          We recommend reviewing their privacy policies to understand how they
          handle your data:
        </p>
        <ul>
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer">
              Azure Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer">
              Facebook Privacy Policy
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Sharing Your Information</h2>
        <p>We do not sell or rent your personal information. However, we may share your information in the following circumstances:</p>
        <ul>
          <li>Service Providers: With third-party providers like EmailJS or Supabase to deliver services (e.g., email notifications, data storage).</li>
          <li>Login Providers: Information shared with Google, Azure, and Facebook for authentication purposes.</li>
          <li>Legal Obligations: If required by law, to comply with legal obligations or respond to lawful requests from public authorities.</li>
        </ul>
      </section>

      <section>
        <h2>6. Cookies and Tracking</h2>
        <p>
          We use cookies to enhance your experience on our website. Cookies may
          be used to:
        </p>
        <ul>
          <li>Remember your login session.</li>
          <li>Track website performance and analytics.</li>
        </ul>
        <p>
          You can disable cookies in your browser settings, but this may affect
          the functionality of our website.
        </p>
      </section>

      <section>
        <h2>7. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your
          information. However, no method of transmission over the internet is
          100% secure. While we strive to protect your data, we cannot guarantee
          its absolute security.
        </p>
      </section>

      <section>
        <h2>8. Your Rights</h2>
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li>Access and Update: You can access and update your personal information through your account.</li>
          <li>Data Deletion: You can request the deletion of your personal information.</li>
          <li>Withdraw Consent: You can withdraw your consent for data processing at any time.</li>
          <li>Opt-Out: You can opt out of non-essential data collection like analytics cookies.</li>
        </ul>
        <p>To exercise your rights, contact us at [Insert Contact Email].</p>
      </section>

      <section>
        <h2>9. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices of these sites and encourage you
          to read their privacy policies.
        </p>
      </section>

      <section>
        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated
          policy will be posted on this page with a "Last Updated" date.
        </p>
      </section>

      <section>
        <h2>11. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul>
          <li>Email: support@anaxus.tech</li>
          <li>Website: <a href="https://anaxus.tech">https://anaxus.tech</a></li>
        </ul>
      </section>
    </div>
  );
}