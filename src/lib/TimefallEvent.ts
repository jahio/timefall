// timefallEvent.model.ts
// Types and factory for building TimefallEvent objects from raw YAML/JSON data.
// Designed to be permissive: unknown fields are preserved, missing fields
// fall back to undefined (or empty arrays). Nothing throws on partial data.

// ---------------------------------------------------------------------------
// Leaf types
// ---------------------------------------------------------------------------

export interface Contributor {
  name?: string;
  [key: string]: unknown;
}

export interface Citation {
  author?: string;
  source_title?: string;
  source_type?: string;
  source_version?: string | number | null;
  source_number?: string | number | null;
  contributors?: Contributor[];
  publisher?: string;
  publication_date?: string;
  source_location?: string;
  [key: string]: unknown;
}

export interface Link {
  title?: string;
  url?: string;
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// Action (a sub-event with its own date/time, body, links, citations)
// ---------------------------------------------------------------------------

export interface Action {
  title?: string;
  date?: string;
  time?: string;
  body?: string;
  links?: Link[];
  citations?: Citation[];
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// TimefallEvent — the top-level type
// ---------------------------------------------------------------------------

export interface TimefallEvent {
  title?: string;
  description?: string;
  body?: string;
  date?: string;
  links?: Link[];
  citations?: Citation[];
  actions?: Action[];
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// Internal normalizers
// Return null on bad input so callers can filter those entries out entirely,
// rather than leaving empty objects in the array.
// ---------------------------------------------------------------------------

function normalizeContributor(raw: unknown): Contributor | null {
  if (raw == null || typeof raw !== "object") return null;
  return { ...(raw as Record<string, unknown>) };
}

function normalizeCitation(raw: unknown): Citation | null {
  if (raw == null || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  return {
    ...r,
    contributors: Array.isArray(r.contributors)
      ? (r.contributors.map(normalizeContributor).filter(Boolean) as Contributor[])
      : [],
  };
}

function normalizeLink(raw: unknown): Link | null {
  if (raw == null || typeof raw !== "object") return null;
  return { ...(raw as Record<string, unknown>) };
}

function normalizeAction(raw: unknown): Action | null {
  if (raw == null || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  return {
    ...r,
    links: Array.isArray(r.links)
      ? (r.links.map(normalizeLink).filter(Boolean) as Link[])
      : [],
    citations: Array.isArray(r.citations)
      ? (r.citations.map(normalizeCitation).filter(Boolean) as Citation[])
      : [],
  };
}

// ---------------------------------------------------------------------------
// createTimefallEvent — the main factory
//
// Usage:
//   const e = createTimefallEvent({ title: "Battle of Lexington", date: "1775-04-19" });
//   const events: TimefallEvent[] = rawYamlArray.map(createTimefallEvent);
// ---------------------------------------------------------------------------

export function createTimefallEvent(raw: unknown): TimefallEvent {
  if (raw == null || typeof raw !== "object") return {};

  const r = raw as Record<string, unknown>;

  return {
    ...r,
    title:       r.title       as string | undefined,
    description: r.description as string | undefined,
    body:        r.body        as string | undefined,
    date:        r.date        as string | undefined,
    links: Array.isArray(r.links)
      ? (r.links.map(normalizeLink).filter(Boolean) as Link[])
      : [],
    citations: Array.isArray(r.citations)
      ? (r.citations.map(normalizeCitation).filter(Boolean) as Citation[])
      : [],
    actions: Array.isArray(r.actions)
      ? (r.actions.map(normalizeAction).filter(Boolean) as Action[])
      : [],
  };
}

// ---------------------------------------------------------------------------
// createTimefallEvents — convenience wrapper for a whole YAML array
//
// Usage:
//   import jsYaml from "js-yaml";
//   const raw = jsYaml.load(yamlText);             // unknown
//   const events = createTimefallEvents(raw);       // TimefallEvent[]
// ---------------------------------------------------------------------------

export function createTimefallEvents(raw: unknown): TimefallEvent[] {
  if (!Array.isArray(raw)) return [];
  return raw.map(createTimefallEvent);
}

export interface TimefallTimeline {
  title?: string;
  intro?: string;
  events: TimefallEvent[];
  [key: string]: unknown;
}
