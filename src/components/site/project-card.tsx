"use client";

import Image from "next/image";
import { Maximize2, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const hasVideo = Boolean(project.video);

  return (
    <article
      className={cn(
        "group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-200 hover:border-primary/40",
        project.featured && "lg:flex-row"
      )}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${hasVideo ? "Play demo of" : "View"} ${project.name}`}
    >
      {project.featured ? (
        <BorderBeam
          size={160}
          duration={12}
          colorFrom="oklch(0.79 0.21 150)"
          colorTo="transparent"
          className="opacity-70"
        />
      ) : null}

      <div
        className={cn(
          "relative aspect-video w-full overflow-hidden bg-muted",
          project.featured && "lg:aspect-auto lg:w-3/5 lg:self-stretch"
        )}
      >
        <Image
          src={project.image}
          alt={`${project.name} website screenshot`}
          fill
          sizes={project.featured ? "(min-width: 1024px) 720px, 100vw" : "(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"}
          className={cn(
            "object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]",
            project.featured && "lg:object-left-top"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            {hasVideo ? <Play className="ml-0.5 size-6" /> : <Maximize2 className="size-5" />}
          </span>
        </span>
        {hasVideo ? (
          <Badge className="absolute left-3 top-3 h-auto gap-1 rounded-md bg-background/80 px-2 py-1 text-foreground backdrop-blur">
            <Play className="size-3" />
            Video demo
          </Badge>
        ) : null}
      </div>

      <div className={cn("flex flex-1 flex-col gap-3 p-5", project.featured && "lg:p-7")}>
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            {project.category}
          </span>
          <span className="text-xs text-muted-foreground">{project.platform}</span>
        </div>
        <h3 className={cn("text-xl font-semibold", project.featured && "lg:text-2xl")}>
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="outline" className="h-auto rounded-md px-2 py-0.5 text-[11px] font-medium">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
