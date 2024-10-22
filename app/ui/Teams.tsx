import Image from "next/image";
import { teamMembers } from "../utils/team-data";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const TeamSection: React.FC = () => {
  return (
    <section className="py-11">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          Meet our team members
        </h2>
        <p className="text-xl text-center mb-12">Makers behind DokkuAI</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div
      id="team"
      className="flex flex-col p-4 items-center justify-center h-auto w-auto border rounded-lg"
    >
      <Image
        src={member.image}
        alt={`${member.name}'s profile picture`}
        width={172}
        height={172}
        className="rounded-full h-[172px] w-[172px] mb-4"
      />
      <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
      <p className="text-blue-600">{member.role}</p>
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
        <Image
          src="/logos/linkedin.png"
          alt="LinkedIn"
          width={30}
          height={30}
          className="mt-4"
        />
      </a>
    </div>
  );
};

export default TeamSection;