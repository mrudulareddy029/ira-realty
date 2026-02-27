import { ProjectCard } from "./ProjectCardForAll";

interface Props {
  projects: any[];
  locationId: string;
  category: string;   // 👈 add this
}

const ProjectGridForAll = ({ projects, locationId, category }: Props) => {
  const filtered = projects.filter(
    (p) => p.location_id === locationId
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
      {filtered.map((proj: any) => (
        <ProjectCard
          key={proj.project_id}
          proj={{
            name: proj.title,
            location: proj.location,
            dimensions: proj.feature,
            unitSize: proj.unit_size,
            luxuryLevel: proj.level,
            image: proj.feature_img,

            // ✅ FIXED HERE
           projectUrl: proj.url
  ? proj.url
  : `/category/${proj.slug}`,

            brochureUrl: proj.brochure_link,
          }}
        />
      ))}

      {filtered.length === 0 && (
        <div className="col-span-full py-20 text-center text-gray-400 font-medium">
          
        </div>
      )}
    </div>
  );
};

export default ProjectGridForAll;