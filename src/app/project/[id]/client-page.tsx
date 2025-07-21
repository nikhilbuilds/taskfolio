"use client";
import NewProjectModal from "@/app/components/NewProjectModal";
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
      <NewProjectModal
        isOpen={true}
        onClose={() => router.push("/")}
        project={project}
      />
    </>
  );
}
