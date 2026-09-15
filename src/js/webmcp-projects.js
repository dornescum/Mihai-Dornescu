/**
 * @fileoverview WebMCP — Portfolio project tools
 *
 * @description
 * Registers against the WebMCP browser API (`document.modelContext` / `navigator.modelContext`),
 * polyfilled via `@mcp-b/global`. Reads project data directly from Projects.js rather than
 * scraping the rendered grid, since that grid is paginated/tag-filtered and only ever shows
 * a subset of the full project list.
 */
import { projects } from './utils/Projects.js';

const modelContext = (typeof document !== 'undefined' && document.modelContext)
    || (typeof navigator !== 'undefined' && navigator.modelContext)
    || null;

if (!modelContext) {
    console.warn('[WebMCP] No modelContext found on document or navigator — skipping tool registration.');
} else {
    const registerTool = (tool) => {
        try {
            const result = modelContext.registerTool(tool);
            if (result && typeof result.catch === 'function') {
                result.catch(err => console.error(`[WebMCP] Failed to register ${tool.name}:`, err));
            }
        } catch (err) {
            console.error(`[WebMCP] Synchronous error registering ${tool.name}:`, err);
        }
    };

    const READ_ONLY = { readOnlyHint: true, untrustedContentHint: false };

    const toolResult = (data, isError = false) => ({
        content: [{ type: 'text', text: JSON.stringify(data, null, 2) }],
        isError
    });

    const stripHtml = (html) => {
        if (!html) return null;
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent.replace(/\s+/g, ' ').trim();
    };

    const getTags = (item) => {
        const tags = [];
        if (item.tagJs) tags.push(item.tagJs);
        if (item.tagCss && item.tagCss.trim()) tags.push(item.tagCss.trim());
        if (item.tagTs && item.tagTs.trim()) tags.push(item.tagTs.trim());
        if (item.tagDB) tags.push(item.tagDB);
        if (item.tagNode) tags.push('Node.js');
        if (item.tagPy) tags.push('Python');
        return [...new Set(tags)];
    };

    const toSummary = (item) => ({
        id: item.id,
        title: item.title.trim(),
        description: stripHtml(item.description),
        tools: stripHtml(item.tools),
        tags: getTags(item),
        featured: item.relevant !== 0,
        repoUrl: item.linkRepo || null,
        liveUrl: item.linkPage || null
    });

    // Tool 1: Project list
    const getPortfolioProjects = {
        name: 'get_portfolio_projects',
        description: 'Returns Mihai Dornescu\'s portfolio projects (id, title, description, tools, tech tags, repo/live links). Optionally filter by a technology tag (e.g. "Express", "Angular", "Go", "Mysql", "Node.js").',
        inputSchema: {
            type: 'object',
            properties: {
                tag: { type: 'string', description: 'Technology tag to filter by, matched exactly against a project\'s tags.' }
            },
            additionalProperties: false
        },
        annotations: READ_ONLY,
        async execute(params) {
            const tag = params && params.tag ? params.tag.trim() : null;
            const filtered = tag ? projects.filter(p => getTags(p).includes(tag)) : projects;
            return toolResult({ total: filtered.length, projects: filtered.map(toSummary) });
        }
    };

    // Tool 2: Project details
    const getProjectDetails = {
        name: 'get_project_details',
        description: 'Returns the full write-up (extended description, tools, repo/live links) for one portfolio project, given its id from get_portfolio_projects.',
        inputSchema: {
            type: 'object',
            properties: {
                id: { type: 'string', description: 'Project id, e.g. "newsgo-2025".' }
            },
            required: ['id'],
            additionalProperties: false
        },
        annotations: READ_ONLY,
        async execute(params) {
            const id = params && params.id;
            const project = projects.find(p => p.id === id);
            if (!project) return toolResult({ error: `No project found with id "${id}".` }, true);

            return toolResult({
                ...toSummary(project),
                details: stripHtml(project.extra) || null
            });
        }
    };

    registerTool(getPortfolioProjects);
    registerTool(getProjectDetails);

    // Manual console testing (`window.__webmcpTools.get_portfolio_projects.execute({})`), independent
    // of whether document.modelContext ends up native or polyfilled — neither exposes a stable,
    // hand-callable "run this tool by name" API.
    if (typeof window !== 'undefined') {
        window.__webmcpTools = { get_portfolio_projects: getPortfolioProjects, get_project_details: getProjectDetails };
    }
}
