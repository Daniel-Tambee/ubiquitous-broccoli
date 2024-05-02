import { Intervention } from "@prisma/client";

type excluded = "id" | "createdAt" | "updatedAt"

export type CreateInterventionDto = Omit<Intervention, excluded>
