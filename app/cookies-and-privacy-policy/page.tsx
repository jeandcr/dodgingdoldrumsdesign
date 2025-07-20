import Link from "next/link";
import styles from "./cookies.module.css";

export default function Privacy() {
  return (
    <article className="container p-2 text-lg sm:text-md">
      <div className="flex flex-col gap-4 my-4 text-lg">
        <h1 className={styles.h1}>Cookies and privacy policy</h1>
        <p>
          Thank you for visiting our website and considering our consultancy
          services offered by Dodging Doldrums Design, CVR DK44055147. We
          respect your privacy, and this Privacy Policy outlines how we collect,
          use, and protect your information.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <h2 className={styles.h2}>1. Information we collect</h2>
          <h3 className={styles.h3}>1.1 Cookies</h3>
          <p>
            ​ We use cookies to improve your browsing experience on our website.
            Cookies are small text files that are stored on your device when you
            visit our site. These cookies do not contain personal information
            and are used for analytical and statistical purposes to enhance the
            functionality of our website.
          </p>
          <h3 className={styles.h3}>1.2 Voluntary information</h3>
          <p>
            When you contact us via email, telephone, or LinkedIn, we may
            collect personal information voluntarily provided by you. This
            information may include your full name, and email address, phone
            number, and any other details you choose to share with us during the
            communication. However, in most cases your full name and company
            email and phone number is sufficient.
          </p>
        </div>
        <div>
          <h2 className={styles.h2}>2. How we use your Information</h2>
          <h3 className={styles.h3}>2.1 Cookies</h3>
          <p>
            The information collected through cookies is used to understand how
            visitors use our website, which helps us improve its content,
            functionality, and user experience. None of this data is personally
            identifiable.
          </p>
          ​<h3 className={styles.h3}>2.2 Voluntary information</h3>
          <p>
            The personal information you provide when contacting us is used
            solely for communication and providing our consultancy services. We
            do not sell or share this information with third parties without
            your consent, except as required by law and for technical website
            support, which requires intervention from the supplier (read more
            below in &quot;Data security&quot;).
          </p>
        </div>
        <div>
          <h2 className={styles.h2}>3. Data security</h2>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction. While
            we strive to protect your personal information, please be aware that
            no data transmission over the internet is completely secure, and we
            cannot guarantee the security of information shared online.
          </p>
          {/* ​<h3 className={styles.h3}>3.1 CMS-system</h3>
          <p>
            This website has been created using the services of Wix.com Ltd.
            (https://www.wix.com/). Therefore, it may be necessary to involve
            Wix employees as third parties for technical issues on this website
            that we cannot resolve on our own. In such cases, they will handle
            personal data with complete confidentiality and will not disclose it
            to third parties without full consent.
          </p>
          ​
          <p>
            Wix upholds high security standards, holding multiple ISO
            certifications, and maintains constant monitoring to provide the
            utmost security for their users. Learn more here:
            https://support.wix.com/en/article/wix-security-measures-overview
          </p> */}
        </div>
        <div>
          <h2 className={styles.h2}>4. Your choices and contact</h2>
          <p>You have the right to:</p>
          <ul className="ml-6 sm:ml-4 list-disc list-inside">
            <li className="list-item">
              Access and update the personal information you provide to us.
            </li>
            <li className="list-item">
              Request the deletion of your personal information.
            </li>
            <li className="list-item">
              Opt-out of receiving marketing communications from us.
            </li>
          </ul>
          <p>
            If you have any questions, concerns, or requests regarding your
            privacy or this Privacy Policy, please contact us at<span> </span>
            <Link
              className={styles.link}
              href="mailto:hnc@dodgingdoldrumsdesign.com"
            >
              hnc@dodgingdoldrumsdesign.com
            </Link>
            .
          </p>
        </div>
        <div>
          <h2 className={styles.h2}>5. Changes to this privacy policy</h2>
          <p>
            We reserve the right to update or modify this privacy policy at any
            time. Any changes will be effective immediately upon posting on our
            website. Please check this page periodically to review the latest
            version of our privacy policy.
          </p>
          <p>
            By using our website and services, you acknowledge and agree to the
            terms outlined in this privacy policy.
          </p>
        </div>
        <p>
          <b>Last updated:</b> September 2023
        </p>
      </div>
    </article>
  );
}
