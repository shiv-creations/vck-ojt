import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    const [animateHeading, setAnimateHeading] = useState(false);

    useEffect(() => {
        setAnimateHeading(true);
    }, []);

    return (
        <div className="page-content">
            <div className="courses-scroll-container"> {/* Scrollable Container */}

                <div className="info-card">
                    <h2 className={`page-main-heading ${animateHeading ? 'animate-on-load' : ''}`}>
                        Our Academic Programs
                    </h2>
                    <p>
                        Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs
                        designed to equip students with the knowledge and skills demanded by today's dynamic global
                        landscape. Our curriculum is regularly updated to reflect industry trends and academic
                        advancements.
                    </p>
                </div>

                <div className="info-card">
                    <h2 className="section-heading-with-line">Discover Campus Life</h2>
                    <div className="video-responsive">
                        <video controls autoPlay>
                            <source src="/Videos/Video1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '10px' }}>
                        Get a glimpse of the vibrant academic and social life at Vivekanand College.
                    </p>
                </div>

                <div className="info-card">
                    <h3 className="section-heading-with-line">Undergraduate Programs (UG)</h3>
                    <ul>
                        <li><strong>Bachelor of Science (B.Sc.)</strong>
                            <ul>
                                <li>Computer Science (3 years)</li>
                                <li>Information Technology (3 years)</li>
                                <li>Biotechnology (3 years)</li>
                            </ul>
                        </li>
                        <li><strong>Bachelor of Commerce (B.Com)</strong>
                            <ul>
                                <li>Accounting & Finance (3 years)</li>
                                <li>Banking & Insurance (3 years)</li>
                            </ul>
                        </li>
                        <li><strong>Bachelor of Arts (B.A.)</strong>
                            <ul>
                                <li>English Literature (3 years)</li>
                                <li>Psychology (3 years)</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="info-card">
                    <h3 className="section-heading-with-line">Postgraduate Programs (PG)</h3>
                    <ul>
                        <li><strong>Master of Science (M.Sc)</strong>
                            <ul>
                                <li>Computer Science (2 years)</li>
                                <li>Information Technology (2 years)</li>
                            </ul>
                        </li>
                        <li><strong>Master of Commerce (M.Com)</strong> (2 years)</li>
                        <li><strong>Master of Arts (M.A.)</strong> (2 years)</li>
                    </ul>
                </div>

                <div className="info-card">
                    <h3 className="section-heading-with-line">Program Details & Fee Structure (Annual)</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Program Type</th>
                                <th>Course Name</th>
                                <th>Duration</th>
                                <th>Annual Fee (INR)</th>
                                <th>Eligibility</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>UG</td>
                                <td>B.Sc. Computer Science</td>
                                <td>3 Years</td>
                                <td>₹ 85,000</td>
                                <td>10+2 with PCM (50%)</td>
                            </tr>
                            <tr>
                                <td>UG</td>
                                <td>B.Com. Accounting & Finance</td>
                                <td>3 Years</td>
                                <td>₹ 70,000</td>
                                <td>10+2 Commerce (45%)</td>
                            </tr>
                            <tr>
                                <td>PG</td>
                                <td>M.Sc. Information Technology</td>
                                <td>2 Years</td>
                                <td>₹ 95,000</td>
                                <td>B.Sc. IT/CS (50%)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="info-card">
                    <h3 className="section-heading-with-line">Specialized & Vocational Courses</h3>
                    <p>
                        In addition to traditional degree programs, we offer various certificate and diploma courses
                        in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development,
                        providing specialized training for career enhancement.
                    </p>
                    <p>Have questions about a specific course?</p>
                    <Link to="/contact" className="inquire-button">Inquire About Courses</Link>
                </div>

            </div> {/* End of Scrollable Container */}
        </div>
    );
};

export default Courses;
