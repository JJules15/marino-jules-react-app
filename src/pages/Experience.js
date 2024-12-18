import React from "react";
import "../styles.css";

const Experience = () => {
    return (
        <div className="experience">
            <h2>Experience</h2>
            <div>
                <h3>Marketing Operations Manager</h3>
                <p>PTC (Arena Solutions, a PTC Company)|Boston, MA 2022 - Present</p>
                <ul>
                    <li>Led technical design and integration of several marekting technologies and data enrichment
                        tools
                    </li>
                    <li>Developed new SLA process to synchronize sales and marketing teams, resulting in a 40%
                        improvement in lead response time
                    </li>
                    <li>Developed new lead scoring model which increased delivery of qualified leads, achieving an 80%
                        conversion rate.
                    </li>
                </ul>
            </div>
            <div>
                <h3>Marketing Operations Analyst</h3>
                <p>The Depository Trust & Clearing Corporation (DTCC)|Boston, MA 2019 - 2022</p>
                <ul>
                    <li>Directed the creation, design and strategic planning of chatbot initiative, including evaluation
                        several different vendor evaluations
                    </li>
                    <li>Coordinated the onboarding of social media management platform, working with our other 3 team
                        members to incorporate technology and engagement data into our marketing tech stack
                    </li>
                    <li>Coordinated with prodict marketing team to plan and coordinate campaigns as well as track
                        success metrics across channels
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;