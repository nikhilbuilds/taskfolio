"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";
import NewProjectModal from "@/app/components/NewProjectModal";
import { workedOnItems, WorkedOnItem } from "@/app/data/projects";

export default function ProjectModalInterceptor({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [project, setProject] = useState<WorkedOnItem | null>(null);
  const resolvedParams = use(params);

  useEffect(() => {
    const projectId = parseInt(resolvedParams.id, 10);
    const projectData = workedOnItems.find((p) => p.id === projectId) || null;
    setProject(projectData);
  }, [resolvedParams.id]);

  const handleClose = () => {
    router.back();
  };

  if (!project) {
    // You can render a loading state or a not-found message here
    return null;
  }

  return (
    <NewProjectModal isOpen={true} onClose={handleClose} project={project} />
  );
}
