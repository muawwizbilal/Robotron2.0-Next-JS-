import { Title, TitleSm } from "@/components/common/Title";
import { useState } from "react";

const Register = () => {
    const [submitting, setSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(false);
    const [institute, setInstitute] = useState('');
    const [category, setCategory] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [teamname, setTeamname] = useState('');
    const [member, setMember] = useState('');
    const [institutename, setInstituteName] = useState('');

    const handleInstituteChange = (event) => {
        const selectedInstitute = event.target.value;
        setInstitute(selectedInstitute);
        setCategory('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);

        try {
            const selectedRobotCategory = robotCategories[institute][0];
            const formData = {
                teamname,
                phone,
                email,
                institute,
                category, 
                member,
                institutename
            };

            const rawResponse = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const content = await rawResponse.json();
            alert("Form Submitted Successfully",content.data.tableRange);

            event.target.reset();
            setCategory('');    
            setInstitute('');
            setPhone('');
            setEmail('');
            setTeamname('');
            setMember('');
            setInstituteName('');
            setSubmissionError(false);
        } catch (error) {
            setSubmissionError(true);
        }

        setSubmitting(false);
    };

    const robotCategories = {
        school: ['Line Following (Modular/Indigenous)', 'Theme Mission Modular','Maze Solving','Robo Sumo','Robo War','Game Of Drones','Speed Coding Scratch','Speed Coding Python'],
        university: ['Line Following (Indigenous)', 'Line Following Mission (Indigenous)','Maze Solving','Robo Sumo','Robo War','Game Of Drones','Speed Coding Python'],
    };

    return (
        <section className="contact bg-top">
            <div className="container">
                <div className="heading-title">
                    <br />
                    <Title
                        title="Register Yourself For The Competition!"
                        className="title-bg"
                    />
                </div>
                <div className="content py flex1">
                    <div className="left w-20"></div>
                    <div className="right w-70">
                        <TitleSm title="Please Fill In The Details" />
                        <p className="desc-p"> </p>

                        <form onSubmit={handleSubmit}>
                            <div className="inputs">
                                <span>Select Your Institute: </span>
                                <br />
                                <select
                                    value={institute}
                                    onChange={handleInstituteChange}
                                    className="options"
                                    required
                                >
                                    <option value="">Choose an option</option>
                                    <option value="school">School/College</option>
                                    <option value="university">University</option>
                                </select>
                            </div>

                            {institute && (
                                <div className="inputs">
                                    <span>Select Your Category: </span>
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="options"
                                        required
                                    >
                                        <option value="">Choose an option</option>
                                        {robotCategories[institute].map((cat) => (
                                            <option key={cat} value={cat}>
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            <div className="grid-2">
                                <div className="inputs">
                                    <span>Team Name</span>
                                    <input
                                        type="text"
                                        name="name"
                                        value={teamname}
                                        onChange={(e) => setTeamname(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="inputs">
                                    <span>Contact</span>
                                    <input
                                        type="number"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="inputs">
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="inputs">
                                <span>Member Names: <span style={{ color: 'red' }}>(Please Add Comma After Each Member Name)</span></span>
                                <input
                                    type="text"
                                    name="member"
                                    value={member}
                                    onChange={(e) => setMember(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="inputs">
                                <span>Institute Name</span>
                                <input
                                    type="text"
                                    name="institutename"
                                    value={institutename}
                                    onChange={(e) => setInstituteName(e.target.value)}
                                    required
                                />
                            </div>
                            
                            {submissionError && (
                                <div className="error-message">
                                    Submission failed. Please try again.
                                </div>
                            )}

                            <button
                                className="button-primary"
                                type="submit"
                                disabled={submitting}
                            >
                                {submitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
