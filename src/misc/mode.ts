export const ViewMode = {
  Main: "Main",
  List: "List",
} as const;
export type ViewMode = (typeof ViewMode)[keyof typeof ViewMode];
