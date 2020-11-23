"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitClient = void 0;
class GitClient {
    constructor(request) {
        this.request = request;
    }
    async searchOrg(strOrg, strType) {
        const response = await this.request.get(`https://api.github.com/users/${strOrg}`);
        return this.normalizeResponse(response.data);
    }
    normalizeResponse(point) {
        if (this.isValidPoint(point) === true) {
            const normalized = {
                login: point.login,
                id: point.id,
                node_id: point.node_id,
                url: point.url,
                html_url: point.html_url,
                gists_url: point.gists_url,
                organizations_url: point.organizations_url,
                repos_url: point.repos_url,
                type: point.type,
                site_admin: point.site_admin,
                name: point.name,
                company: point.company,
                public_repos: point.public_repos,
                public_gists: point.public_gists,
                followers: point.followers,
                following: point.following,
                created_at: point.created_at,
                updated_at: point.updated_at
            };
            return normalized;
        }
        return null;
    }
    isValidPoint(point) {
        return !!(point.login &&
            point.id &&
            point.node_id &&
            point.url &&
            point.html_url &&
            point.gists_url &&
            point.organizations_url &&
            point.repos_url &&
            point.type &&
            point.site_admin &&
            point.name &&
            point.company &&
            point.public_repos &&
            point.public_gists &&
            point.followers &&
            point.following &&
            point.created_at &&
            point.updated_at);
    }
}
exports.GitClient = GitClient;
//# sourceMappingURL=gitClient.js.map