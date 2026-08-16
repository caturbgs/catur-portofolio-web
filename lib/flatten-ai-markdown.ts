function quotedAttr(source: string, name: string): string {
  const match = source.match(new RegExp(`\\b${name}="([^"]*)"`));
  return match?.[1]?.trim() ?? "";
}

function technologiesFromAttrs(source: string): string[] {
  const match = source.match(/:technologies="(\[[\s\S]*?\])"/);
  if (!match?.[1]) {
    return [];
  }
  try {
    const parsed: unknown = JSON.parse(match[1]);
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

function formatExperience(fields: {
  title: string;
  company: string;
  period: string;
  description: string;
}): string {
  const heading = fields.title || "Role";
  const meta = [fields.company, fields.period].filter(Boolean).join(" — ");
  const lines = [`### ${heading}`];
  if (meta) {
    lines.push(`**${meta}**`);
  }
  if (fields.description) {
    lines.push("", fields.description);
  }
  return `\n${lines.join("\n")}\n`;
}

function formatProject(fields: {
  title: string;
  description: string;
  url: string;
  technologies: string[];
}): string {
  const heading = fields.title || "Project";
  const titleLine = fields.url ? `### [${heading}](${fields.url})` : `### ${heading}`;
  const lines = [titleLine];
  if (fields.description) {
    lines.push("", fields.description);
  }
  if (fields.technologies.length > 0) {
    lines.push("", `Technologies: ${fields.technologies.join(", ")}`);
  }
  return `\n${lines.join("\n")}\n`;
}

function parseSimpleYaml(body: string): Record<string, string | string[]> {
  const result: Record<string, string | string[]> = {};
  let listKey: string | null = null;
  for (const rawLine of body.split("\n")) {
    const listItem = rawLine.match(/^\s*-\s+(.*)$/);
    if (listItem && listKey) {
      const existing = result[listKey];
      if (Array.isArray(existing)) {
        existing.push(listItem[1].trim());
      }
      continue;
    }
    const pair = rawLine.match(/^\s*([A-Za-z][\w]*)\s*:\s*(.*)$/);
    if (!pair) {
      continue;
    }
    const key = pair[1];
    const value = pair[2].trim();
    if (value === "") {
      listKey = key;
      result[key] = [];
    } else {
      listKey = null;
      result[key] = value;
    }
  }
  return result;
}

function yamlString(fields: Record<string, string | string[]>, key: string): string {
  const value = fields[key];
  return typeof value === "string" ? value : "";
}

function yamlList(fields: Record<string, string | string[]>, key: string): string[] {
  const value = fields[key];
  return Array.isArray(value) ? value : [];
}

/**
 * Turn MDC experience/project cards into short markdown lists for LLM crawlers.
 */
export function flattenAiMarkdown(markdown: string): string {
  let result = markdown.replace(
    /<experience-card\b([^>]*)>[\s\S]*?<\/experience-card>/gi,
    (_match, attrs: string) =>
      formatExperience({
        title: quotedAttr(attrs, "title"),
        company: quotedAttr(attrs, "company"),
        period: quotedAttr(attrs, "period"),
        description: quotedAttr(attrs, "description"),
      }),
  );

  result = result.replace(
    /<project-card\b([^>]*)>[\s\S]*?<\/project-card>/gi,
    (_match, attrs: string) =>
      formatProject({
        title: quotedAttr(attrs, "title"),
        description: quotedAttr(attrs, "description"),
        url: quotedAttr(attrs, "url"),
        technologies: technologiesFromAttrs(attrs),
      }),
  );

  result = result.replace(
    /::experience-card\s*\n---\n([\s\S]*?)\n---\s*\n::/g,
    (_match, body: string) => {
      const fields = parseSimpleYaml(body);
      return formatExperience({
        title: yamlString(fields, "title"),
        company: yamlString(fields, "company"),
        period: yamlString(fields, "period"),
        description: yamlString(fields, "description"),
      });
    },
  );

  result = result.replace(
    /::project-card\s*\n---\n([\s\S]*?)\n---\s*\n::/g,
    (_match, body: string) => {
      const fields = parseSimpleYaml(body);
      return formatProject({
        title: yamlString(fields, "title"),
        description: yamlString(fields, "description"),
        url: yamlString(fields, "url"),
        technologies: yamlList(fields, "technologies"),
      });
    },
  );

  return result.replace(/\n{3,}/g, "\n\n");
}
