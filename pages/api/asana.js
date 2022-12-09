const asana = require("asana");

const client = asana.Client.create().useAccessToken(process.env.ASANA_PAT);

export default async function handler(req, res) {
  if (req.method === "GET") {
    client.users
      .me()
      .then(async function (user) {
        const workspaceId = user.workspaces[0].gid;

        const teams = await client.teams.getTeamsForWorkspace(workspaceId);

        const teamId = teams.data.find((x) => x.name === "Styrgrupp").gid;

        const projects = await client.projects.getProjectsForTeam(teamId);

        const projectId = projects.data.find((x) => x.name === "Dashboard").gid;

        const sections = await client.sections.getSectionsForProject(projectId);

        const new_sections = await Promise.all(
          sections.data.map(async (section) => {
            const tasks = await client.tasks.getTasksForSection(section.gid);

            const new_tasks = tasks.data.map((task) => task.name);

            return {
              name: section.name,
              tasks: new_tasks,
            };
          })
        );

        return new_sections;
      })
      .then((response) => {
        res.json(response);
      })
      .catch((err) => res.json(err));
  } else {
    return res.status(405).json({ message: "Unsupported request method" });
  }
}
