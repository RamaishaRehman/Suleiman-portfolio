"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

type ProjectDialogProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  return (
    <Dialog open={project !== null} onOpenChange={(open) => (!open ? onClose() : undefined)}>
      <DialogContent className="max-h-[92svh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto p-0 sm:max-w-5xl">
        {project ? (
          <>
            <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-black">
              {project.video ? (
                <video
                  key={project.video}
                  src={project.video}
                  poster={project.image}
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="size-full object-contain"
                />
              ) : (
                <Image
                  src={project.image}
                  alt={`${project.name} website screenshot`}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-contain"
                  priority
                />
              )}
            </div>
            <DialogHeader className="gap-3 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {project.category}
                </span>
                <span className="text-xs text-muted-foreground">{project.platform}</span>
              </div>
              <DialogTitle className="text-2xl font-bold">{project.name}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed">
                {project.description}
              </DialogDescription>
              <ul className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Badge variant="secondary" className="h-auto rounded-md px-2 py-0.5 text-[11px]">
                      {tag}
                    </Badge>
                  </li>
                ))}
              </ul>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ size: "sm" }), "mt-2 w-fit rounded-full px-4")}
                >
                  Visit live site
                  <ExternalLink className="size-3.5" />
                </a>
              ) : null}
            </DialogHeader>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
