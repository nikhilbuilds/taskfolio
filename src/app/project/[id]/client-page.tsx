"use client";
import ProjectModal from "@/app/components/ProjectModal";
import { useRouter } from "next/navigation";
import { WorkedOnItem } from "@/app/data/projects";
import LandingPage from "../../LandingPage";

export default function ProjectClientPage({
  project,
}: {
  project: WorkedOnItem;
}) {
  const router = useRouter();

  return (
    <>
      <LandingPage />
      <ProjectModal
        isOpen={true}
        onClose={() => router.push("/")}
        project={project}
      />
    </>
  );
}
