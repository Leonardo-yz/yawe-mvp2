
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

/* =========================
   BOARD MEMBERS
========================= */
const boardMembers = [
  {
    name: "CPA(T) MARY MPANGALA",
    role: "Board Chairperson",
    image: "/team/mary.jpg",
    description:
      "CPA (T) Mary Mpangala is a seasoned and associate-certified public accountant with over 7 years of experience in accounting, financial management, and corporate governance. Holding a CPA license demonstrates her commitment to high ethical standards, expertise in financial reporting, identifying financial risks, implementing internal controls, and ensuring transparency in financial operations. Further, she has an extensive background in conducting audits, ensuring regulatory compliance, and liaising with external auditors to maintain financial integrity and compliance with regulatory requirements. She is proficient and experienced in financial statement analysis, audit preparation, and compliance with Generally Accepted Accounting Principles (GAAP) and International Financial Reporting Standards (IFRS). She possesses vast skills in budgeting, and forecasting, organized and purposeful accounting professional working with reputable organizations for assisting in financial assessments, budgeting, and cost reduction strategies by providing financial information and statistics contributing to organisational profitability and financial modeling to support strategic decision-making and organisational growth. CPA (T) Mary Mpangala brings a wealth of financial expertise, ethical leadership, and strategic vision to the board, making her a valuable asset in guiding the organization towards its goals while safeguarding organizational financial health. She provides critical oversight on financial matters, ensuring transparency, accuracy, and compliance with regulatory requirements. As a board member, she serves on the audit committee, leveraging auditing expertise to enhance financial reporting and internal controls while upholding high ethical standards and promoting corporate governance best practices within the board and the organization.",
  },
  {
    name: "VICENT LAURENT",
    role: "Executive Director",
    image: "/team/vicent.jpg",
    description:
      "With more than 10 years of experience leading projects for child protection, positive youth development and women empowerment in rural and urban areas in Tanzania. Vicent Laurent is an impact-driven, growth-focused development specialist with a track record of success in the non-profit sector. His expertise and experience have been instrumental in providing advice and technical support on the development of many non-governmental organizations and government institutions. Beyond his professional pursuits, Vicent Laurent holds a deep passion and skills for project monitoring, evaluation and learning development as well as grant management. He has dedicated himself to supporting other organizations in the development of M&E systems, strategic planning and organizational governance systems in their journey of development. His commitment to continuous growth and leadership refinement is underscored by his graduation from St. Augustine University of Tanzania which further honored his career development.",
  },
  {
    name: "Dr. JUSTICE MINOFU",
    role: "Board Member",
    image: "/team/Justice.jpg",
    description:
      "With more than 10 years of experience leading projects for child protection, positive youth development and women empowerment in rural and urban areas in Tanzania. Vicent Laurent is an impact-driven, growth-focused development specialist with a track record of success in the non-profit sector. His expertise and experience have been instrumental in providing advice and technical support on the development of many non-governmental organizations and government institutions. Beyond his professional pursuits, Vicent Laurent holds a deep passion and skills for project monitoring, evaluation and learning development as well as grant management. He has dedicated himself to supporting other organizations in the development of M&E systems, strategic planning and organizational governance systems in their journey of development. His commitment to continuous growth and leadership refinement is underscored by his graduation from St. Augustine University of Tanzania which further honored his career development.",
  },
  {
    name: "THERESIA NDEGEISWA",
    role: "Board Member",
    image: "/team/theresia.jpg",
    description:
      "Theresia Ndegeiswa is a dedicated teacher with a master's Degree in Education and extensive experience in teaching, curriculum development, and educational leadership. Her passion for education and commitment to children and young people's success are central to her professional journey. For over 20 years, Theresia has been involved in designing and implementing curriculum frameworks aligned with educational standards and learning objectives. Demonstrates leadership in school administration, mentorship of fellow educators, and fostering collaboration among faculty. Advocates for youth-centred education, personalized learning approaches, and inclusive educational practices. On the board of directors of YAWE, she provides valuable insights into educational trends, pedagogical strategies, and curriculum innovations to enhance educational outcomes. Represents the youth perspective in board discussions, advocating for policies and initiatives that prioritize youth welfare and academic success. Supports professional development initiatives for teachers, promoting continuous learning and improvement within the educational community. Facilitates partnerships with parents, community stakeholders, and educational institutions to enrich students' educational experiences. Theresia Ndegeiswa brings a deep understanding of educational dynamics, a commitment to youth-centred learning, and leadership in educational innovation to the board, contributing to strategic decisions that shape the future of education and empower students to thrive.nt.",
  },
   {
    name: "EUNICE ZABRONI",
    role: "Youth Representative",
    image: "/team/eunice.jpg",
    description:
      "Eunie Zabroni is a dedicated community development practitioner holding a Diploma in Social and Community Development. She has extensive experience in advocating for the rights, inclusion, and empowerment of marginalized groups, particularly persons with disabilities, women, and youth. Currently, Eunie serves as the Chairperson of the Association of Persons with Disabilities in Shinyanga, where she provides leadership in promoting disability inclusion, protecting the rights of persons with disabilities, and strengthening their participation in social and economic development processes. Through this role, she works closely with communities, local government authorities, civil society organizations, and development partners to address barriers that limit access to education, healthcare, livelihoods, and other essential services for persons with disabilities. At YAWE, Eunie serves as the Youth Representative on the Board of Directors, contributing to the organization's strategic direction, governance, and decision-making processes. In this capacity, she ensures that the voices, priorities, and aspirations of young people are represented in organizational policies and programmes. She also champions inclusive approaches that promote meaningful participation of youth and persons with disabilities in climate resilience, entrepreneurship, health, and community development initiatives. Eunie is passionate about social justice, equal opportunities, and community empowerment. Her leadership experience and commitment to inclusive development make her a valuable advocate for creating equitable opportunities for vulnerable and marginalized populations in Shinyanga and beyond.",
  },
];

/* =========================
   STAFF MEMBERS
========================= */
const staffMembers = [
  {
    name: "ANNA JOEL",
    role: "Learning and Evaluation Officer",
    image: "/team/anna1.jpg",
    description:
      "Anna Joel is a dedicated Monitoring and Evaluation Officer and seasoned project management professional with over five years of experience supporting program performance, project coordination, and impact assessment within the non-governmental sector. She holds a Bachelor’s Degree in Project Planning and Management and has strong expertise in designing monitoring frameworks, managing project implementation, collecting and analyzing data, and preparing high-quality technical reports. Anna is skilled in tracking project indicators, ensuring compliance with organizational and donor requirements, and supporting evidence-based decision-making to improve program effectiveness. Her background in project management strengthens her ability to coordinate teams, manage timelines and resources, and contribute to successful project delivery. She works collaboratively with stakeholders to promote accountability, learning, and sustainable development outcomes.",
  },
  {
    name: "PETER NAMPALA ",
    role: "Youth Development Officer",
    image: "/team/peter1.jpg",
    description:
      "Peter Nampala is a committed Youth Development Officer with four years of experience in youth empowerment, community engagement, and project implementation within the non-governmental sector. He holds a Bachelor’s Degree in Project Planning and Management and has practical expertise in coordinating youth-focused programs, mobilizing communities, and supporting sustainable development initiatives. Peter is skilled in project planning, stakeholder engagement, activity coordination, and monitoring program progress to ensure effective service delivery and positive impact among young people. He works closely with communities, partners, and project teams to promote youth participation, capacity building, and social development outcomes.",
  },
  {
    name: "CECILIA MSANGWA",
    role: "Gender and Child Protection Officer",
    image: "/team/cecilia1.jpg",
    description:
      "Cecilia Msangwa is an experienced Gender and Child Protection Officer with eight years of professional experience in gender equality, child protection, and community development programs. She holds a Bachelor’s Degree in Sociology and Social Work and has extensive knowledge in safeguarding vulnerable groups, promoting human rights, and supporting social welfare interventions within communities. Cecilia is skilled in case management, community sensitization, psychosocial support, stakeholder engagement, and implementation of gender and child protection initiatives. She works closely with communities, institutions, and development partners to strengthen protection systems, advocate for the rights of women and children, and promote safe and inclusive environments.",
  },
  {
    name: "LYDIA AKYOO",
    role: "Environmental Officer",
    image: "/team/lydia1.jpg",
    description:
      "Lydia Akyoo is a dedicated environmental professional with a Bachelor’s Degree in Environmental Planning and Management and over seven years of experience in implementing and managing climate justice initiatives. She has strong expertise in environmental sustainability, climate change adaptation, community resilience, and project coordination within development programs. Lydia is skilled in designing and implementing climate-related interventions, stakeholder engagement, environmental advocacy, and supporting community-based approaches that promote sustainable development and environmental protection. She works closely with communities, partners, and institutions to advance climate justice, strengthen environmental awareness, and support inclusive and sustainable solutions to environmental challenges.",
  },
  {
    name: "SEBASTIAN MANONI",
    role: "Finance and Administration Manager",
    image: "/team/sebastian1.jpg",
    description:
      "Sebastian Manoni is an experienced Finance and Administration Manager with over 20 years of professional experience managing finance, administration, and operations for donor-funded projects. He has extensive expertise in financial management, budgeting, grant compliance, financial reporting, and administrative coordination within the non-governmental sector. Sebastian is highly skilled in managing project finances in compliance with donor and organizational requirements, strengthening internal controls, overseeing procurement and resource management, and supporting efficient organizational operations. His long-standing experience in donor-funded programs has enabled him to effectively support project implementation, accountability, and financial sustainability. He works closely with management teams, partners, and stakeholders to ensure transparency, operational efficiency, and successful project delivery.",
  },
  {
    name: "MOSHI JILALAGE ",
   role: "Project Manager",
    image: "/team/moshi.jpg",
    description:
      "Moshi Jilalage serves as the Programs Manager at YAWE. He holds a Bachelor's Degree in Geography and Environmental Studies and brings extensive experience in programme management, community development, and capacity building. Before joining YAWE, Moshi worked with several secondary schools as a Geography teacher, where he developed strong skills in education, mentorship, and community engagement. Since joining YAWE, he has accumulated over six years of experience designing and implementing development programmes, with a particular focus on gender equality and Sexual and Reproductive Health and Rights (SRHR). His expertise includes programme coordination, stakeholder engagement, training facilitation, and monitoring programme outcomes. Moshi is passionate about advancing inclusive development initiatives that empower women, young people, and marginalized communities to improve their livelihoods and well-being.",
  },
  {
    name: "YONA KIMARO ",
    role: "Driver",
    image: "/team/yona.jpg",
    description:
      "Yona Kimaro serves as a Driver at YAWE. He is a certified and licensed professional driver with over eight years of driving experience. Throughout his career, he has demonstrated a strong commitment to safety, professionalism, and reliability in the transportation of staff, visitors, and project materials. Yona plays an important role in supporting the smooth implementation of YAWE’s programmes by ensuring safe and timely transportation services. His knowledge of road safety regulations, vehicle maintenance, and route planning enables him to effectively support field operations and organizational activities across different project locations. He is dedicated to maintaining high standards of service and contributing to the organization's mission through dependable logistical support.",
  },
  {
    name: "CHRISTINA JACKSON",
    role: "Office Administrator",
    image: "/team/christina.jpg",
    description:
      "Christina Jackson serves as the Office Administrator at YAWE. She holds a Diploma in Secretarial and Office Management and has over five years of experience in office administration and organizational support. In her role, Christina is responsible for coordinating daily office operations, managing administrative systems, maintaining records, and supporting communication and logistics across the organization. Her strong organizational skills, attention to detail, and commitment to efficiency help ensure the smooth functioning of YAWE’s programmes and operations. Christina is dedicated to providing professional administrative support and creating an effective working environment that enables staff and partners to deliver the organization’s mission and objectives successfully.",
  },
  {
    name: "ZAINAB MALABA",
    role: "Assistant Accountant",
    image: "/team/zainab.jpg",
    description:
      "Zainab Malaba serves as the Assistant Accountant at YAWE. She holds a Diploma in Accountancy and has two years of professional experience in financial management and accounting support. In her role, Zainab assists with financial record-keeping, transaction processing, budget monitoring, and preparing financial reports. She supports the organization's financial operations by ensuring accuracy, compliance, and timely documentation of financial activities. With a strong foundation in accounting principles and attention to detail, Zainab contributes to maintaining effective financial systems that support YAWE’s programmes and organizational objectives. She is committed to upholding transparency, accountability, and sound financial management practices in all aspects of her work.",
  },
  
];

/* =========================
   CARD COMPONENT
========================= */
function LeaderCard({ leader, index, isBoard }: any) {
  const previewDescription = leader.description
  ? leader.description.split(" ").length > 10
    ? leader.description.split(" ").slice(0, 10).join(" ") + "..."
    : leader.description
  : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
    >
      <div className="relative h-[370px] overflow-hidden">
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          className="object-cover grayscale brightness-100 transition-all duration-700 group-hover:scale-103 group-hover:grayscale-0 group-hover:brightness-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">

          <h3 className="mt-4 text-2xl font-bold text-white">
            {leader.name}
          </h3>

          <p className="mt-2 text-sm font-medium text-[#9DE4DE]">
            {leader.role}
          </p>
        </div>
      </div>

      <div className="relative bg-white p-7">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#055D5D] to-[#98027F]" />

        <p className="leading-7 text-gray-600">
          {previewDescription}
        </p>

        <button className="mt-6 flex items-center gap-2 font-semibold text-[#055D5D] transition-all hover:gap-4 hover:text-[#98027F]">
          View Profile
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}

/* =========================
   MAIN PAGE
========================= */
export default function TeamPage() {
  const [selectedLeader, setSelectedLeader] = useState<any | null>(null);

  return (
    <main className="bg-gradient-to-br from-[#BFE8E3] via-slate-100 to-slate-100">

      {/* HERO */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#055D5D15,transparent_30%),radial-gradient(circle_at_bottom_left,#98027F15,transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-black text-gray-900 md:text-7xl">
              Meet Our Leadership Team
            </h1>
          </motion.div>
        </div>
      </section>

      {/* BOARD */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold">Board of Directors</h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {boardMembers.map((leader, index) => (
              <div
                key={index}
                onClick={() => setSelectedLeader(leader)}
                className="cursor-pointer"
              >
                <LeaderCard
                  leader={leader}
                  index={index}
                  isBoard={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAFF */}
      <section className="pb-32 pt-10">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold">Staff Members</h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {staffMembers.map((leader, index) => (
              <div
                key={index}
                onClick={() => setSelectedLeader(leader)}
                className="cursor-pointer"
              >
                <LeaderCard
                  leader={leader}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl overflow-hidden rounded-3xl bg-white"
          >
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute right-4 top-4 rounded-full bg-white p-2 shadow"
            >
              <X />
            </button>

            <div className="grid lg:grid-cols-2">
              <Image
                src={selectedLeader.image}
                alt={selectedLeader.name}
                width={600}
                height={600}
                className="object-cover"
              />

              <div className="p-10">
                <h2 className="text-4xl font-bold">
                  {selectedLeader.name}
                </h2>

                <p className="mt-2 text-[#98027F]">
                  {selectedLeader.role}
                </p>

                <p className="mt-6 text-gray-600">
                  {selectedLeader.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}