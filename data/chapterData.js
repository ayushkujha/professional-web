/**
 * ============================================================================
 * CENTRALIZED CHAPTER CONFIGURATION (data/chapterData.js)
 * ============================================================================
 * ACM Student Chapter — Vidya Jyothi Institute of Technology (Autonomous)
 * Department of Computer Science & Engineering (AI & ML), Aziz Nagar, Hyderabad
 *
 * Student Web Team Note:
 * Update notices, event reports, committee members, SIG schedules, and gallery
 * photos in this single configuration file without modifying page layout HTML.
 */

window.CHAPTER_DATA = {
    metadata: {
        chapterName: "VJIT ACM Student Chapter",
        department: "Department of Computer Science & Engineering (AI & ML)",
        institution: "Vidya Jyothi Institute of Technology (Autonomous)",
        affiliation: "JNTUH Autonomous Institution, Aziz Nagar, Hyderabad",
        address: "Vidya Jyothi Institute of Technology, Aziz Nagar, C.B. Post, Hyderabad – 500075, Telangana, India",
        academicYear: "2026–2027",
        officialEmails: ["acm@vjit.ac.in", "secretary@acmvjit.com"],
        domain: "acmvjit.com"
    },

    heroShowcasePhotos: [
        {
            url: "https://res.cloudinary.com/dlz7901m4/image/upload/v1780600879/WhatsApp_Image_2026-06-05_at_00.37.57_qbqzp0.jpg",
            caption: "ACM VJIT Faculty Coordinators and Student Office Bearers"
        },
        {
            url: "https://res.cloudinary.com/dlz7901m4/image/upload/v1781545171/WhatsApp_Image_2026-06-15_at_23.07.33_gzctqn.jpg",
            caption: "LAUNCHPAD 2026 Inauguration at VJIT Main Auditorium"
        },
        {
            url: "https://res.cloudinary.com/dlz7901m4/image/upload/v1780770579/WhatsApp_Image_2026-06-06_at_23.44.47_oobj1g.jpg",
            caption: "ACM VJIT Core Student Team (Department of CSE - AI & ML)"
        }
    ],

    quickStats: [
        {
            label: "Chartered Body",
            value: "ACM India",
            subtext: "Dept. of CSE (AI & ML), VJIT"
        },
        {
            label: "Active Members",
            value: "180+",
            subtext: "Enrolled Student Members"
        },
        {
            label: "Events Conducted",
            value: "24+",
            subtext: "Contests, Workshops & Lectures"
        },
        {
            label: "Special Interest Groups",
            value: "03",
            subtext: "AI/ML, Algorithms & Full-Stack"
        }
    ],

    notices: [
        {
            id: "notice-codestorm-2026",
            circularNo: "VJIT/CSE-AIML/ACM/2026-27/09",
            badge: "NEW",
            isUrgent: true,
            date: "Nov 18, 2026",
            title: "CodeStorm 2026: Final 3-Round HackerRank Results & Merit Certificates",
            summary: "Verified leaderboard for Round 1 (Debugging), Round 2 (Algorithmic Coding), and Round 3 (Finale) is published.",
            fullText: "All participants of CodeStorm 2026 (3-Round Competitive Programming & Debugging Contest conducted on HackerRank and CSE Block-C Labs) are informed that the final proctored leaderboard has been verified by the ACM Faculty Coordinators.\n\n• Round 1 (Aptitude & Code Debugging): 320+ participants.\n• Round 2 (Data Structures & Algorithms on HackerRank): 110 qualifiers.\n• Round 3 (Proctored Lab Finale): Top 40 finalists.\n\nCertificates of Merit and Participation are available in the Event Report archive.",
            linkedEventId: "codestorm-2026"
        },
        {
            id: "notice-membership-2026",
            circularNo: "VJIT/CSE-AIML/ACM/2026-27/08",
            badge: "REGISTRATION OPEN",
            isUrgent: false,
            date: "Nov 05, 2026",
            title: "Annual ACM Student Chapter Membership & SIG Enrollment (2026–27)",
            summary: "Onboarding open for B.Tech I–IV Year students across CSE (AI & ML), CSE, DS, and IT.",
            fullText: "The VJIT ACM Student Chapter invites applications for student membership and Special Interest Group (SIG) enrollment for the Academic Year 2026–2027.\n\nMembers participate in weekly study sessions in SIG-AI & Machine Learning, SIG-Competitive Programming, and SIG-Full Stack & Cloud Systems. Students may register online using their 10-character VJIT Roll Number and official @vjit.ac.in email address.",
            actionType: "membership"
        },
        {
            id: "notice-aiweb-2026",
            circularNo: "VJIT/CSE-AIML/ACM/2026-27/06",
            badge: "ARCHIVE",
            isUrgent: false,
            date: "Aug 22, 2026",
            title: "Workshop Report: AI-Powered Web Development (with IIIC-VJIT)",
            summary: "Proceedings of the full-day workshop conducted with GWD Global Pvt Ltd at C-Block Seminar Hall.",
            fullText: "The Department of CSE (AI & ML) ACM Student Chapter, in association with the Industry-Institute Interaction Cell (IIIC-VJIT), conducted a full-day workshop on 'AI-Powered Web Development' on August 22, 2026 at the C-Block Seminar Hall.\n\nResource Persons:\n1. Mr. Mohd Abdul Rahman Pasha — Chairman & CEO, GWD Global Pvt Ltd\n2. Mr. Mohammed Abdul Mudabbir — MD, COO & CMO, GWD Global Pvt Ltd",
            linkedEventId: "ai-webdev-2026"
        },
        {
            id: "notice-launchpad-2026",
            circularNo: "VJIT/CSE-AIML/ACM/2026-27/02",
            badge: "ARCHIVE",
            isUrgent: false,
            date: "Apr 08, 2026",
            title: "LAUNCHPAD 2026: Chapter Inauguration, Orientation & Freshmen Ideathon",
            summary: "Inaugural orientation at VJIT Main Auditorium with 200+ student attendees and 40+ ideathon teams.",
            fullText: "LAUNCHPAD 2026 marked the formal inauguration and orientation of the VJIT ACM Student Chapter for the 2026–27 session at the Main Auditorium. Over 200 students across 40+ teams participated in the introductory Freshmen Ideathon. Team Alpha secured 1st Place and Team Innovators received Runner-Up honors.",
            linkedEventId: "launchpad-2026"
        }
    ],

    events: [
        {
            id: "codestorm-2026",
            academicYear: "2026-27",
            category: "Coding Contests",
            isFlagship: true,
            docId: "ACM-VJIT-ER-2026-04",
            auditCode: "NAAC-CR3.2 / NBA-PO2",
            title: "CodeStorm 2026: 3-Round Competitive Programming & Debugging Contest",
            date: "November 14–16, 2026",
            venue: "CSE Computer Labs (Block-C) & HackerRank",
            resourcePerson: "ACM VJIT Technical Evaluation Panel & Faculty Sponsors",
            participants: "320+ Students (B.Tech I–IV Year)",
            facultyCoordinators: "Dr. Sayed Nazeer Ahmed, Mr. K. Srinivasa Rao, Dr. I. S. Hephzi Punithavathi",
            studentCoordinators: "K. Ajay Nayak, V. Nithin, Ayush Kumar Jha, Mohammed Mohiuddin",
            status: "Archived",
            featuredOnHome: true,
            bannerImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
            summary: "CodeStorm 2026 is the annual three-round collegiate competitive programming and code debugging tournament organized by the VJIT ACM Student Chapter. Hosted on HackerRank across proctored department laboratories, the contest evaluated algorithmic complexity, defect localization, and data structure implementation.",
            highlights: [
                "Round 1 (Screening — Aptitude & Debugging): 320+ students competed in a 60-minute timed test identifying logical and boundary defects.",
                "Round 2 (Intermediate Algorithmic Coding on HackerRank): 110 qualifiers solved 5 problem statements covering trees, hashing, and greedy algorithms.",
                "Round 3 (Proctored Grand Finale): 3-hour coding contest for the Top 40 finalists focusing on Dynamic Programming and Graph Theory.",
                "Merit certificates and chapter citations were awarded to the top 3 performers and best freshman entrant."
            ],
            gallery: [
                {
                    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
                    caption: "CodeStorm 2026 finalists during the HackerRank round"
                },
                {
                    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
                    caption: "Proctored debugging round in Block-C Computer Labs"
                },
                {
                    url: "https://res.cloudinary.com/dlz7901m4/image/upload/v1780770579/WhatsApp_Image_2026-06-06_at_23.44.47_oobj1g.jpg",
                    caption: "ACM VJIT Student Organizing Committee"
                }
            ]
        },
        {
            id: "launchpad-2026",
            academicYear: "2026-27",
            category: "Flagship",
            isFlagship: true,
            docId: "ACM-VJIT-ER-2026-01",
            auditCode: "NAAC-CR5.1 / NBA-PO9",
            title: "LAUNCHPAD 2026: Chapter Inauguration, Orientation & Freshmen Ideathon",
            date: "April 08, 2026",
            venue: "VJIT Main Auditorium, Aziz Nagar",
            resourcePerson: "Dr. A. Srujana (Principal, VJIT) & Dr. Sayed Nazeer Ahmed (HoD, CSE-AI&ML)",
            participants: "200+ Students (40+ Ideathon Teams)",
            facultyCoordinators: "Mr. K. Srinivasa Rao & Dr. I. S. Hephzi Punithavathi",
            studentCoordinators: "K. Ajay Nayak, V. Nithin, Ayush Kumar Jha, P. Jaswanth",
            status: "Archived",
            featuredOnHome: true,
            bannerImage: "https://res.cloudinary.com/dlz7901m4/image/upload/v1781545171/WhatsApp_Image_2026-06-15_at_23.07.33_gzctqn.jpg",
            summary: "LAUNCHPAD 2026 formally inaugurated the academic calendar of the VJIT ACM Student Chapter. Conducted at the Main Auditorium, the program introduced incoming undergraduate students to the ACM Digital Library, Special Interest Group tracks, and research opportunities, followed by a one-day Freshmen Ideathon.",
            highlights: [
                "Inaugural addresses by Principal Dr. A. Srujana and HoD Dr. Sayed Nazeer Ahmed.",
                "Formal investiture of the 2026–27 Student Executive Committee and SIG leads.",
                "Freshmen Ideathon: 40+ student teams pitched technical proposals addressing campus and civic problem statements.",
                "Awards: 1st Place awarded to Team Alpha; Runner-Up awarded to Team Innovators."
            ],
            gallery: [
                {
                    url: "https://res.cloudinary.com/dlz7901m4/image/upload/v1781545171/WhatsApp_Image_2026-06-15_at_23.07.33_gzctqn.jpg",
                    caption: "LAUNCHPAD 2026 Inauguration at VJIT Main Auditorium"
                },
                {
                    url: "https://res.cloudinary.com/dlz7901m4/image/upload/v1780600879/WhatsApp_Image_2026-06-05_at_00.37.57_qbqzp0.jpg",
                    caption: "Faculty Coordinators and Office Bearers at LAUNCHPAD 2026"
                },
                {
                    url: "https://acmvjit.vercel.app/images/acm-launchpad.png",
                    caption: "Ideathon student presentations"
                }
            ]
        },
        {
            id: "ai-webdev-2026",
            academicYear: "2026-27",
            category: "Workshops",
            isFlagship: false,
            docId: "ACM-VJIT-ER-2026-02",
            auditCode: "NAAC-CR3.3 / IIIC-VJIT",
            title: "One-Day Workshop on AI-Powered Web Development (with IIIC-VJIT)",
            date: "August 22, 2026",
            venue: "C-Block Seminar Hall, VJIT",
            resourcePerson: "Mr. Mohd Abdul Rahman Pasha (CEO, GWD Global Pvt Ltd) & Mr. Mohammed Abdul Mudabbir (COO, GWD Global Pvt Ltd)",
            participants: "165+ B.Tech CSE (AI & ML) Students",
            facultyCoordinators: "Dr. Sayed Nazeer Ahmed, Mr. K. Srinivasa Rao, Dr. I. S. Hephzi Punithavathi",
            studentCoordinators: "K. Ajay Nayak, V. Nithin, P. Jaswanth, N. Hema Sathvika",
            status: "Archived",
            featuredOnHome: true,
            bannerImage: "https://res.cloudinary.com/alzutw6c/image/upload/v1787239897/Department_of_CSE_AI_ML__20260816_192744_0000.jpg.jpg",
            summary: "Organized jointly by the Department of CSE (AI & ML) ACM Student Chapter and the Industry-Institute Interaction Cell (IIIC-VJIT), this full-day workshop trained students in modern web architecture, AI-assisted development workflows, Git version control, and cloud deployment.",
            highlights: [
                "Sessions led by industry practitioners from GWD Global Pvt Ltd covering component architecture and interactive web applications.",
                "Hands-on laboratory modules on Git/GitHub workflows and production deployment on Vercel.",
                "Participating teams deployed working web applications by the conclusion of the session."
            ],
            gallery: [
                {
                    url: "https://res.cloudinary.com/alzutw6c/image/upload/v1787239897/Department_of_CSE_AI_ML__20260816_192744_0000.jpg.jpg",
                    caption: "Official Workshop Circular — AI-Powered Web Development"
                },
                {
                    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
                    caption: "Workshop hands-on session in C-Block Seminar Hall"
                }
            ]
        },
        {
            id: "esp-lecture-2026",
            academicYear: "2026-27",
            category: "Guest Lectures",
            isFlagship: false,
            docId: "ACM-VJIT-ER-2026-03",
            auditCode: "NAAC-CR3.1 / ACM-ESP",
            title: "Guest Lecture on Scalable Distributed Systems & Cloud Architecture",
            date: "September 19, 2026",
            venue: "CSE Seminar Hall, Block-C, VJIT",
            resourcePerson: "Senior Distributed Systems Architect & ACM India Speaker",
            participants: "140+ Pre-Final & Final Year Students",
            facultyCoordinators: "Mr. K. Srinivasa Rao & Dr. I. S. Hephzi Punithavathi",
            studentCoordinators: "Ayush Kumar Jha & M. Karthik",
            status: "Archived",
            featuredOnHome: false,
            bannerImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
            summary: "An academic lecture connecting undergraduate operating systems and computer networking coursework with distributed cloud architectures, fault tolerance, and consensus protocols.",
            highlights: [
                "Analysis of replication, consistency trade-offs, and distributed consensus (Raft/Paxos).",
                "Case studies on microservice observability and container orchestration.",
                "Interactive Q&A on systems engineering careers and graduate research."
            ],
            gallery: [
                {
                    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
                    caption: "Seminar session at Block-C Seminar Hall"
                }
            ]
        },
        {
            id: "sigai-bootcamp-2025",
            academicYear: "2025-26",
            category: "Workshops",
            isFlagship: false,
            docId: "ACM-VJIT-ER-2025-05",
            auditCode: "NAAC-CR3.2 / SIG-AI",
            title: "Foundations of Machine Learning & ACM Research Paper Reading Workshop",
            date: "February 14, 2026 (AY 2025–26)",
            venue: "AI & ML Computing Center, VJIT",
            resourcePerson: "Dr. Sayed Nazeer Ahmed (HoD, CSE-AI&ML) & SIG-AI Mentors",
            participants: "115 Student Members",
            facultyCoordinators: "Dr. Sayed Nazeer Ahmed & Dr. I. S. Hephzi Punithavathi",
            studentCoordinators: "Ayush Kumar Jha & N. Hema Sathvika",
            status: "Archived",
            featuredOnHome: false,
            bannerImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
            summary: "Conducted during the 2025–26 academic year by SIG-AI, this workshop trained students in Python scientific computing, PyTorch fundamentals, and structured methodologies for reading peer-reviewed papers from the ACM Digital Library.",
            highlights: [
                "Hands-on implementation of supervised learning and neural network training loops in PyTorch.",
                "Instruction on conducting literature reviews using the ACM Digital Library.",
                "Formation of undergraduate project cohorts for departmental symposia."
            ],
            gallery: [
                {
                    url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
                    caption: "SIG-AI Workshop at the AI & ML Computing Center"
                }
            ]
        },
        {
            id: "icpc-bughunt-2025",
            academicYear: "2025-26",
            category: "Coding Contests",
            isFlagship: false,
            docId: "ACM-VJIT-ER-2025-03",
            auditCode: "NAAC-CR5.3 / SIG-CP",
            title: "BugHunt & Algorithmic Logic Sprint (ICPC Preparatory Contest)",
            date: "November 22, 2025 (AY 2025–26)",
            venue: "Department Programming Labs 2 & 3, VJIT",
            resourcePerson: "ACM VJIT Competitive Programming SIG Panel",
            participants: "180 Students (90 Two-Member Teams)",
            facultyCoordinators: "Mr. K. Srinivasa Rao",
            studentCoordinators: "K. Ajay Nayak & V. Nithin",
            status: "Archived",
            featuredOnHome: false,
            bannerImage: "https://images.unsplash.com/photo-1558402529-d2638a7023e9?w=800&q=80",
            summary: "A pair-programming algorithmic contest modeled on ACM-ICPC regional standards. Teams solved six algorithmic problems and a C++/Python code debugging set under timed penalty scoring.",
            highlights: [
                "Problem sets covering number theory, binary search, shortest paths, and dynamic programming.",
                "Post-contest editorial session led by senior SIG coordinators."
            ],
            gallery: [
                {
                    url: "https://images.unsplash.com/photo-1558402529-d2638a7023e9?w=800&q=80",
                    caption: "Student teams during the Algorithmic Logic Sprint"
                }
            ]
        },
        {
            id: "research-ethics-lecture-2025",
            academicYear: "2025-26",
            category: "Guest Lectures",
            isFlagship: false,
            docId: "ACM-VJIT-ER-2025-01",
            auditCode: "NAAC-CR3.1 / ACM-ETHICS",
            title: "Invited Lecture on Computing Ethics, Responsible AI & Technical Writing",
            date: "September 10, 2025 (AY 2025–26)",
            venue: "VJIT Seminar Hall",
            resourcePerson: "Dr. A. Padmaja (Dean, Accreditation & Rankings, VJIT)",
            participants: "150+ Final & Pre-Final Year Students",
            facultyCoordinators: "Dr. Sayed Nazeer Ahmed & Mr. K. Srinivasa Rao",
            studentCoordinators: "Uthkota Mohitha & Tejaswini",
            status: "Archived",
            featuredOnHome: false,
            bannerImage: "https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?w=800&q=80",
            summary: "An academic seminar introducing undergraduate students to the ACM Code of Ethics, reproducibility in machine learning research, and manuscript preparation in standard two-column ACM format.",
            highlights: [
                "Review of the ACM Code of Ethics and Professional Conduct.",
                "Guidance on academic integrity, citation standards, and conference submissions."
            ],
            gallery: [
                {
                    url: "https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?w=800&q=80",
                    caption: "Invited lecture on Computing Ethics and Technical Writing"
                }
            ]
        }
    ],

    governance: {
        patrons: [
            {
                name: "Dr. P. Rajeshwar Reddy",
                role: "Secretary & Correspondent",
                designation: "Vidya Jyothi Educational Society, VJIT",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/q_auto/f_auto/v1780754066/WhatsApp_Image_2026-06-05_at_00.54.57_2_mi0yoc.jpg",
                initials: "PR"
            },
            {
                name: "Mrs. S. Neelima",
                role: "Joint Secretary",
                designation: "Vidya Jyothi Institute of Technology",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/q_auto/f_auto/v1780753026/WhatsApp_Image_2026-06-05_at_00.54.57_haw4b9.jpg",
                initials: "SN"
            },
            {
                name: "Dr. A. Srujana",
                role: "Principal & Chief Patron",
                designation: "Vidya Jyothi Institute of Technology (Autonomous)",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/q_auto/f_auto/v1780753042/WhatsApp_Image_2026-06-05_at_00.54.58_1_jsno7x.jpg",
                initials: "AS"
            },
            {
                name: "Dr. A. Padmaja",
                role: "Dean — Accreditation & Rankings",
                designation: "NAAC / NBA Quality Assurance, VJIT",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/q_auto/f_auto/v1780754066/WhatsApp_Image_2026-06-05_at_00.54.58_2_az3wgu.jpg",
                initials: "AP"
            },
            {
                name: "Mrs. G. Srilatha",
                role: "Academic Coordinator",
                designation: "Vidya Jyothi Institute of Technology",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/q_auto/f_auto/v1780754066/WhatsApp_Image_2026-06-05_at_00.54.59_3_qfspo1.jpg",
                initials: "GS"
            },
            {
                name: "Mr. R. Venkatachalam",
                role: "SAO & Director (T&P Cell)",
                designation: "Training & Placement Cell, VJIT",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/v1780753179/WhatsApp_Image_2026-06-05_at_00.54.59_1_gg9om6.jpg",
                initials: "RV"
            }
        ],

        facultySponsors: [
            {
                name: "Dr. Sayed Nazeer Ahmed",
                role: "Head of the Department & Convenor",
                department: "Professor & HoD, Dept. of CSE (AI & ML)",
                email: "hodaiml@vjit.ac.in",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/q_auto/f_auto/v1780754127/Screenshot_2026-06-06_192229_o9lzsd.png",
                initials: "SN"
            },
            {
                name: "Mr. K. Srinivasa Rao",
                role: "ACM Faculty Sponsor & Coordinator",
                department: "Associate Professor, Dept. of CSE (AI & ML)",
                email: "acm@vjit.ac.in",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/q_auto/f_auto/v1780647233/srinivas_rao_sir_owrvh4.jpg",
                initials: "KS"
            },
            {
                name: "Dr. I. S. Hephzi Punithavathi",
                role: "ACM Faculty Coordinator",
                department: "Professor, Dept. of CSE (AI & ML)",
                email: "acm@vjit.ac.in",
                photo: "",
                initials: "HP"
            }
        ],

        officeBearers: [
            {
                role: "Chapter Chair",
                name: "K. Ajay Nayak",
                branch: "B.Tech — CSE (AI & ML)",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/v1786545207/20260409_115624_1_jl9zll.jpg",
                initials: "AN",
                email: "chair@acmvjit.com",
                linkedin: "https://www.linkedin.com",
                github: "https://github.com/mohi2006august/ACMVJIT"
            },
            {
                role: "Chapter Vice-Chair",
                name: "V. Nithin",
                branch: "B.Tech — CSE (AI & ML)",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/v1786544711/Nithin_arfnrh.jpg",
                initials: "VN",
                email: "vicechair@acmvjit.com",
                linkedin: "https://www.linkedin.com",
                github: "https://github.com/mohi2006august/ACMVJIT"
            },
            {
                role: "Chapter Secretary",
                name: "Ayush Kumar Jha",
                branch: "B.Tech — CSE (AI & ML)",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/v1786544876/Ayush_puu43d.png",
                initials: "AJ",
                email: "secretary@acmvjit.com",
                linkedin: "https://www.linkedin.com",
                github: "https://github.com/mohi2006august/ACMVJIT"
            },
            {
                role: "Chapter Treasurer",
                name: "P. Jaswanth",
                branch: "B.Tech — CSE (AI & ML)",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/v1786544892/Jaswanth_cpcykm.jpg",
                initials: "PJ",
                email: "treasurer@acmvjit.com",
                linkedin: "https://www.linkedin.com",
                github: "https://github.com/mohi2006august/ACMVJIT"
            },
            {
                role: "Webmaster",
                name: "Mohammed Mohiuddin",
                branch: "B.Tech — CSE (AI & ML)",
                photo: "",
                initials: "MM",
                email: "webmaster@acmvjit.com",
                linkedin: "https://www.linkedin.com",
                github: "https://github.com/mohi2006august"
            },
            {
                role: "Technical Lead",
                name: "N. Hema Sathvika",
                branch: "B.Tech — CSE (AI & ML)",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/v1786544721/N._Hema_Sathvika_urjkxn.jpg",
                initials: "HS",
                email: "tech@acmvjit.com",
                linkedin: "https://www.linkedin.com",
                github: "https://github.com/mohi2006august/ACMVJIT"
            },
            {
                role: "Event Operations Lead",
                name: "Tejaswini",
                branch: "B.Tech — CSE (AI & ML)",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/v1786544735/Tejaswini__pks5tk.jpg",
                initials: "TJ",
                email: "events@acmvjit.com",
                linkedin: "https://www.linkedin.com",
                github: "https://github.com/mohi2006august/ACMVJIT"
            },
            {
                role: "Industry Relations Lead",
                name: "M. Karthik",
                branch: "B.Tech — CSE (AI & ML)",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/v1786544753/karthik_kujvlm.jpg",
                initials: "MK",
                email: "acm@vjit.ac.in",
                linkedin: "https://www.linkedin.com",
                github: "https://github.com/mohi2006august/ACMVJIT"
            },
            {
                role: "Alumni Relations Lead",
                name: "Uthkota Mohitha",
                branch: "B.Tech — CSE (AI & ML)",
                photo: "https://res.cloudinary.com/dlz7901m4/image/upload/v1785072161/mohitha_fjyo4a.jpg",
                initials: "UM",
                email: "acm@vjit.ac.in",
                linkedin: "https://www.linkedin.com",
                github: "https://github.com/mohi2006august/ACMVJIT"
            }
        ],

        coreAndStudentMembers: [
            { name: "Srihitha", role: "Executive Committee", photo: "https://res.cloudinary.com/dlz7901m4/image/upload/v1786544708/Srihitha__lhrfdz.jpg", initials: "SR" },
            { name: "Rushika Reddy", role: "Executive Committee", photo: "https://res.cloudinary.com/dlz7901m4/image/upload/v1786544708/Rushika_Reddy_cuhsqc.jpg", initials: "RR" },
            { name: "Sai Charan", role: "Executive Committee", photo: "", initials: "SC" },
            { name: "Tharun", role: "Executive Committee", photo: "", initials: "TH" },
            { name: "Srikanth", role: "Executive Committee", photo: "", initials: "SK" },
            { name: "Lokesh", role: "Executive Committee", photo: "", initials: "LK" },
            { name: "Vikas", role: "Executive Committee", photo: "", initials: "VK" },
            { name: "Sayed Mujtaba", role: "Chapter Member", photo: "https://res.cloudinary.com/dlz7901m4/image/upload/q_auto/f_auto/v1781683391/WhatsApp_Image_2026-06-17_at_13.22.08_kfhlzu.jpg", initials: "SM" },
            { name: "Akshithi", role: "Chapter Member", photo: "https://res.cloudinary.com/dlz7901m4/image/upload/q_auto/f_auto/v1781684729/WhatsApp_Image_2026-06-17_at_13.52.10_fkhnex.jpg", initials: "AK" },
            { name: "Aitha Sathvika", role: "Chapter Member", photo: "https://res.cloudinary.com/dy8vyfooj/image/upload/v1777478012/Sathvika_Aitha_pc6uiu.jpg", initials: "AS" },
            { name: "Affan Reza", role: "Chapter Member", photo: "https://res.cloudinary.com/dlz7901m4/image/upload/v1785072159/affanreza_yht7cf.jpg", initials: "AR" },
            { name: "Abdul Muqtadir", role: "Chapter Member", photo: "https://res.cloudinary.com/dlz7901m4/image/upload/q_auto/f_auto/v1781683468/Abdul_Muqtadir_xny0zm.jpg", initials: "AM" },
            { name: "Karthik", role: "Chapter Member", photo: "https://res.cloudinary.com/dlz7901m4/image/upload/q_auto/f_auto/v1781683391/WhatsApp_Image_2026-06-17_at_13.12.34_dy8bvz.jpg", initials: "KR" },
            { name: "Lucky", role: "Chapter Member", photo: "https://res.cloudinary.com/dlz7901m4/image/upload/q_auto/f_auto/v1781684729/WhatsApp_Image_2026-06-17_at_13.53.27_ukji74.jpg", initials: "LK" },
            { name: "Varshitha", role: "Chapter Member", photo: "", initials: "VR" },
            { name: "Aishwarya", role: "Chapter Member", photo: "", initials: "AI" },
            { name: "Anisha", role: "Chapter Member", photo: "", initials: "AN" }
        ]
    },

    sigs: [
        {
            id: "sig-aiml",
            name: "SIG-AI & Machine Learning",
            schedule: "Fridays, 3:30 PM – 5:00 PM (AI & ML Lab, Block-C)",
            leads: "Ayush Kumar Jha & N. Hema Sathvika",
            description: "Focuses on statistical machine learning, deep neural architectures, computer vision, and natural language processing. Members conduct weekly paper-reading sessions from ACM SIGKDD proceedings and build reproducible PyTorch implementations.",
            curriculum: [
                "Supervised & Unsupervised Learning (NumPy, Scikit-Learn, PyTorch)",
                "Transformer Architectures & Retrieval-Augmented Generation",
                "Reading & Reproducing Papers from the ACM Digital Library"
            ],
            links: [
                { label: "ACM Digital Library", url: "https://dl.acm.org" },
                { label: "Kaggle Chapter Track", url: "https://www.kaggle.com" }
            ]
        },
        {
            id: "sig-cp",
            name: "SIG-Competitive Programming & Algorithms",
            schedule: "Wednesdays, 3:30 PM – 5:00 PM (CSE Labs 2 & 3)",
            leads: "K. Ajay Nayak & V. Nithin",
            description: "Prepares VJIT students for CodeStorm, ACM-ICPC regional qualifiers, and technical assessments. Sessions emphasize algorithmic complexity, mathematical proofs of correctness, and timed debugging drills.",
            curriculum: [
                "Trees, Graphs, Disjoint Set Union & Segment Trees",
                "Dynamic Programming, Greedy Heuristics & Number Theory",
                "Bi-weekly Contests on HackerRank and LeetCode"
            ],
            links: [
                { label: "HackerRank Track", url: "https://www.hackerrank.com" },
                { label: "LeetCode Problem Sets", url: "https://leetcode.com" }
            ]
        },
        {
            id: "sig-fullstack",
            name: "SIG-Full Stack & Cloud Systems",
            schedule: "1st & 3rd Saturdays, 10:30 AM – 12:30 PM (IIIC-VJIT)",
            leads: "Mohammed Mohiuddin & P. Jaswanth",
            description: "Dedicated to software engineering, web architecture, relational databases, Linux/Git workflows, and containerization. Maintains the chapter's web infrastructure and open-source repositories.",
            curriculum: [
                "Frontend & Backend Web Systems (TypeScript, React, Node.js)",
                "Relational Databases (SQL), Docker & CI/CD Workflows",
                "Open-Source Collaboration with Git & Linux CLI"
            ],
            links: [
                { label: "Chapter GitHub Repo", url: "https://github.com/mohi2006august/ACMVJIT" },
                { label: "LeetCode SQL & Systems", url: "https://leetcode.com" }
            ]
        }
    ],

    resources: [
        {
            title: "Git & Version Control Reference",
            category: "SIG-Full Stack",
            summary: "Branching, rebasing, commit conventions, and pull-request workflows for chapter repositories.",
            commands: "git checkout -b feature/branch  |  git add -p  |  git pull --rebase origin main"
        },
        {
            title: "Linux POSIX CLI Essentials",
            category: "Systems Engineering",
            summary: "File permissions, process management, SSH key configuration, and archive utilities.",
            commands: "chmod 755 script.sh  |  ps aux | grep python  |  ssh-keygen -t ed25519"
        },
        {
            title: "Algorithmic Complexity Bounds",
            category: "SIG-Competitive Programming",
            summary: "Input size constraints mapped to target time complexities for 1-second execution limits.",
            commands: "N <= 20: O(2^N)  |  N <= 5000: O(N^2)  |  N <= 2e5: O(N log N)  |  N <= 1e7: O(N)"
        },
        {
            title: "SQL Relational Query Patterns",
            category: "Database Systems",
            summary: "Window functions, common table expressions (CTEs), indexing, and transaction isolation.",
            commands: "SELECT dept, name, DENSE_RANK() OVER (PARTITION BY dept ORDER BY score DESC) FROM students;"
        },
        {
            title: "PyTorch Training Loop Structure",
            category: "SIG-AI & Machine Learning",
            summary: "Standard forward pass, loss computation, backpropagation, and optimizer step.",
            commands: "optimizer.zero_grad(); loss = criterion(model(x), y); loss.backward(); optimizer.step()"
        },
        {
            title: "Docker Container Workflow",
            category: "SIG-Full Stack",
            summary: "Building images, port binding, and multi-container orchestration with Docker Compose.",
            commands: "docker build -t app .  |  docker run -p 8080:80 app  |  docker compose up --build"
        }
    ],

    gallery: [
        {
            url: "https://res.cloudinary.com/dlz7901m4/image/upload/v1780600879/WhatsApp_Image_2026-06-05_at_00.37.57_qbqzp0.jpg",
            title: "ACM VJIT Chapter Delegation",
            meta: "Faculty Sponsors & Student Office Bearers"
        },
        {
            url: "https://res.cloudinary.com/dlz7901m4/image/upload/v1781545171/WhatsApp_Image_2026-06-15_at_23.07.33_gzctqn.jpg",
            title: "LAUNCHPAD 2026 Inauguration",
            meta: "VJIT Main Auditorium"
        },
        {
            url: "https://res.cloudinary.com/dlz7901m4/image/upload/v1780770579/WhatsApp_Image_2026-06-06_at_23.44.47_oobj1g.jpg",
            title: "Executive & Core Team",
            meta: "Department of CSE (AI & ML)"
        },
        {
            url: "https://res.cloudinary.com/alzutw6c/image/upload/v1787239897/Department_of_CSE_AI_ML__20260816_192744_0000.jpg.jpg",
            title: "AI-Powered Web Dev Workshop",
            meta: "In Association with IIIC-VJIT"
        }
    ]
};
