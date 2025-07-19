import { workedOnItems } from "@/app/data/projects";
import { notFound } from "next/navigation";
import ProjectClientPage from "./client-page";
import { use } from "react";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);

  if (!resolvedParams.id) {
    notFound();
  }

  const project =
    workedOnItems.find((p) => p.id === parseInt(resolvedParams.id, 10)) || null;

  if (!project) {
    notFound();
  }

  return <ProjectClientPage project={project} />;
}
