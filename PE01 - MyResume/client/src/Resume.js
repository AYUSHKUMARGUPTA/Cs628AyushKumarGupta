import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <header className="header">
                <h1>Ayush Kumar Gupta</h1>
                <p>Seattle, WA, 98121 | (425)-531-1549 | guptaayushkumar@cityuniversity.edu</p>
            </header>
            <section className="section">
                <h2>Education</h2>
                <div className="education">
                    <h3>Master of Science in Computer Science</h3>
                    <p>City University of Seattle, WA USA | Sep 2024</p>
                    <p>GPA: 4.0/4.0</p>
                    <h3>Post Graduation Diploma in Data Science</h3>
                    <p>International Institute of Information Technology, KA India | Jan 2022</p>
                    <p>GPA: 3.68/4.0</p>
                    <h3>Bachelor of Engineering in Information Science</h3>
                    <p>Bangalore Institute of Technology, KA India | Aug 2014</p>
                    <p>CGPA: 7.0/10.0</p>
                </div>
            </section>
            <section className="section">
                <h2>Technical Skills</h2>
                <div className="tech-skill">
                    <ul>
                        <li>Languages: JavaScript(ES6+), TypeScript, SQL, Python, HTML5, CSS3, GraphQL</li>
                        <li>Databases: MySQL, PostgreSQL, OracleDB, MongoDB, Apache Casandra</li>
                        <li>Tools & Framework: Agile Development, Scrum, JIRA, GIT</li>
                        <li>Web Technologies: AWS, Azure, React, Angular, D3.js, jQuery, Bootstrap, Kendo UI, Material UI, Infragistics UI, Apollo, MS Fluent UI, PNP JS, FusionAuth, NPM, Gulp, Jasmine, Karma, PrimeNG</li>
                        <li>Data Science: NumPy, Pandas, Exploratory Data Analysis, Data Visualization</li>
                    </ul>
                </div>
            </section>
            <section className="section">
                <h2>Work Experience</h2>
                <div className="work-experience">
                    <h3>Senior Product Developer</h3>
                    <p>Epicor Software, KA India | Jan 2024 - Sep 2024</p>
                    <p>
                        <ul>
                            <li>Enhanced and scaled Bistrack ERP software for building supplies, focusing on Inventory & Warehouse Management,
                                Mobility, and E-Commerce, driving improvements in system performance.</li>
                            <li>Created and rolled out SmartView, a fully customized Business Intelligence Module allowing operators to track, view
                                and modify individual entries, orders and products based on user preference, significantly enhancing flexibility and user
                                experience.</li>
                            <li>Built and deployed a global grid component using Epicor Design System, optimizing grid features and minimizing code
                                duplication across the platform.</li>
                            <li>Directed the transition of legacy Windows desktop applications to web-based solutions, integrating multi-tab functionality
                                to improve user navigation and usability.</li>
                            <li>Tech: Angular 14/15, IIS, Docker</li>
                        </ul>
                    </p>

                    <h3>Senior Cloud Web Developer</h3>
                    <p>Symphony Ai, KA India | Oct 2021 - Dec 2023</p>
                    <p>
                        <ul>
                            <li>Developed the front-end architecture for MOM 360, a cloud and on-premises MES/MOM platform, achieving a 70%
                                increase in operational efficiency by implementing multi-plant views and real-time monitoring.</li>
                            <li>Formulated advanced front-end solutions for client IT teams, enabling effective enterprise asset management and digital
                                manufacturing, thereby improving decision-making and oversight.</li>
                            <li>Enhanced code quality, achieving 65% coverage, while overseeing deployment and authentication processes to ensure
                                seamless integration across cloud and on-prem environments.</li>
                            <li>Introduced comprehensive monitoring systems to maintain consistent system performance, providing actionable insights
                                for real-time optimization and troubleshooting.</li>
                            <li>Recognition: Honored with the ”Above & Beyond” award by the CEO for outstanding contributions across multiple
                                high-impact projects.</li>
                            <li>Tech: Angular 14/15, Docker, Fusion Auth, Nginx, PrimeNG, Infragistics UI, GraphQL, Prometheus, Grafana, and Kibana</li>
                        </ul>
                    </p>

                    <h3>FrontEnd Engineer</h3>
                    <p>Appiness Interactive Ltd, KA India | Apr 2021 - Oct 2021</p>
                    <p>
                        <ul>
                            <li>Led the development of an advanced meeting management platform and image processing solution, improving UX and
                                functionality, and increasing user engagement by 20%.</li>
                            <li>Built two essential modules enabling users to extract, crop, and edit images to create advertisements, cutting content
                                creation time by 45%.</li>
                            <li>Refined content-sharing workflows by designing intuitive, user-friendly templates, leading to a 30% rise in platform-wide
                                image sharing.</li>
                            <li>Tech: Angular 8, Material UI, and D3.js</li>
                        </ul>
                    </p>

                    <h3>SharePoint Developer/Tax Analyst</h3>
                    <p>Ernst & Young GDS LLP, KA India | Oct 2018 - Apr 2021</p>
                    <p>
                        <ul>
                            <li>Designed and implemented scalable web solutions for AIG Insurance, employing reusable modules and lazy loading
                                techniques, reducing load times by 75% and enhancing user experience.</li>
                            <li>Optimized tax filing workflows within the MDG Portal by integrating Power BI reports and Single Sign-On (SSO),
                                reducing login-related issues by 85% and improving data accessibility.</li>
                            <li>Devised a comprehensive solution to manage entity appointments, ownership, and shares, serving 130 clients within a year,
                                improving governance accuracy and efficiency.</li>
                            <li>Simplified compensation and hike calculation processes for the EY Talent Team by developing a custom portal, cutting
                                manual effort by 40% and expediting Senior Leadership Team (SLT) recommendation workflows.</li>
                            <li>Tech: React, Angular 8, Kendo UI, .Net API, MS Power BI, MS Power Apps, MS Power Virtual Agent, MS SharePoint</li>
                        </ul>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Resume;