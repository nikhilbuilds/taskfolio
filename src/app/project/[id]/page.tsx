import { workedOnItems } from "@/app/data/projects";
import { notFound } from "next/navigation";
import ProjectClientPage from "./client-page";

export default function ProjectPage({ params }: { params: { id: string } }) {
  if (!params.id) {
    notFound();
  }
  const project =
    workedOnItems.find((p) => p.id === parseInt(params.id, 10)) || null;

  if (!project) {
    notFound();
  }

  return <ProjectClientPage project={project} />;
}
