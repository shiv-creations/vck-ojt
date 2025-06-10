// src/pages/Admissions.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admissions = () => {
    const [animateAdmissionsHeading, setAnimateAdmissionsHeading] = useState(false);

    useEffect(() => {
        setAnimateAdmissionsHeading(true);
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-content">
        <div className="info-card">
            <h2 className={`page-main-heading ${animateAdmissionsHeading ? 'animate-on-load' : ''}`}>
            Admissions at Vivekanand College
            </h2>
            <p className="justified-text-paragraph">
            Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.
            </p>
            <p className="justified-text-paragraph">
            Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.
            </p>
        </div>

        <div className="info-card">
            <h3 className="section-heading-with-line">Eligibility Criteria for Undergraduate Programs</h3>
            <table>
            <thead>
                <tr>
                <th>Program</th>
                <th>Minimum Qualification</th>
                <th>Required Subjects</th>
                <th>Minimum Marks (%)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>B.Sc. Computer Science</td>
                <td>10+2 (or equivalent)</td>
                <td>Physics, Chemistry, Maths</td>
                <td>50%</td>
                </tr>
                <tr>
                <td>B.Com. Accounting & Finance</td>
                <td>10+2 (or equivalent)</td>
                <td>Commerce Stream</td>
                <td>45%</td>
                </tr>
                <tr>
                <td>B.A. English Literature</td>
                <td>10+2 (or equivalent)</td>
                <td>Any Stream</td>
                <td>40%</td>
                </tr>
            </tbody>
            </table>
        </div>

        <div className="info-card">
            <h3 className="section-heading-with-line">Application Process</h3>
            <ol>
            <li><strong>Online Application:</strong> Fill out the application form available on our portal.</li>
            <li><strong>Document Submission:</strong> Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
            <li><strong>Entrance Exam (if applicable):</strong> Appear for the college's entrance examination.</li>
            <li><strong>Merit List & Interview:</strong> Check the merit list and attend the interview if shortlisted.</li>
            <li><strong>Fee Payment:</strong> Complete the admission by paying the required fees.</li>
            </ol>
        </div>

        <div className="info-card">
            <p className="centered-text-paragraph">
            For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our{' '}
            <Link to="/courses" className="nav-link-text">Courses page</Link>{' '}or{' '}
            <Link to="/contact" className="nav-link-text">Contact us</Link> directly.
            </p>
        </div>
        </div>
    );
    };

export default Admissions;
