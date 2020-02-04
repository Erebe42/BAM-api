'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Repositories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      node_id: {
        type: Sequelize.STRING
      },
      name:  {
        type: Sequelize.STRING,
      },
      full_name:  {
        type: Sequelize.STRING,
      },
      private:  {
        type: Sequelize.BOOLEAN,
      },
      html_url: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      fork: {
        type: Sequelize.BOOLEAN,
      },
      url: {
        type: Sequelize.STRING,
      },
      forks_url: {
        type: Sequelize.STRING,
      },
      keys_url: {
        type: Sequelize.STRING,
      },
      collaborators_url: {
        type: Sequelize.STRING,
      },
      teams_url: {
        type: Sequelize.STRING,
      },
      hooks_url: {
        type: Sequelize.STRING,
      },
      issue_events_url: {
        type: Sequelize.STRING,
      },
      events_url: {
        type: Sequelize.STRING,
      },
      assignees_url: {
        type: Sequelize.STRING,
      },
      branches_url: {
        type: Sequelize.STRING,
      },
      tags_url: {
        type: Sequelize.STRING,
      },
      blobs_url: {
        type: Sequelize.STRING,
      },
      git_tags_url: {
        type: Sequelize.STRING,
      },
      git_refs_url: {
        type: Sequelize.STRING,
      },
      trees_url: {
        type: Sequelize.STRING,
      },
      statuses_url: {
        type: Sequelize.STRING,
      },
      languages_url: {
        type: Sequelize.STRING,
      },
      stargazers_url: {
        type: Sequelize.STRING,
      },
      contributors_url: {
        type: Sequelize.STRING,
      },
      subscribers_url: {
        type: Sequelize.STRING,
      },
      subscription_url: {
        type: Sequelize.STRING,
      },
      commits_url: {
        type: Sequelize.STRING,
      },
      git_commits_url: {
        type: Sequelize.STRING,
      },
      comments_url: {
        type: Sequelize.STRING,
      },
      issue_comment_url: {
        type: Sequelize.STRING,
      },
      contents_url: {
        type: Sequelize.STRING,
      },
      compare_url: {
        type: Sequelize.STRING,
      },
      merges_url: {
        type: Sequelize.STRING,
      },
      archive_url: {
        type: Sequelize.STRING,
      },
      downloads_url: {
        type: Sequelize.STRING,
      },
      issues_url: {
        type: Sequelize.STRING,
      },
      pulls_url: {
        type: Sequelize.STRING,
      },
      milestones_url: {
        type: Sequelize.STRING,
      },
      notifications_url: {
        type: Sequelize.STRING,
      },
      labels_url: {
        type: Sequelize.STRING,
      },
      releases_url: {
        type: Sequelize.STRING,
      },
      deployments_url: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      pushed_at: {
        type: Sequelize.DATE,
      },
      git_url: {
        type: Sequelize.STRING,
      },
      ssh_url: {
        type: Sequelize.STRING,
      },
      clone_url: {
        type: Sequelize.STRING,
      },
      svn_url: {
        type: Sequelize.STRING,
      },
      homepage: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.INTEGER,
      },
      stargazers_count: {
        type: Sequelize.INTEGER,
      },
      watchers_count: {
        type: Sequelize.INTEGER,
      },
      language: {
        type: Sequelize.STRING,
      },
      has_issues: {
        type: Sequelize.BOOLEAN,
      },
      has_projects: {
        type: Sequelize.BOOLEAN,
      },
      has_downloads: {
        type: Sequelize.BOOLEAN,
      },
      has_wiki: {
        type: Sequelize.BOOLEAN,
      },
      has_pages: {
        type: Sequelize.BOOLEAN,
      },
      forks_count: {
        type: Sequelize.INTEGER,
      },
      mirror_url: {
        type: Sequelize.STRING,
      },
      archived: {
        type: Sequelize.BOOLEAN,
      },
      disabled: {
        type: Sequelize.BOOLEAN,
      },
      open_issues_count: {
        type: Sequelize.INTEGER,
      },
      forks: {
        type: Sequelize.INTEGER,
      },
      open_issues: {
        type: Sequelize.INTEGER,
      },
      watchers: {
        type: Sequelize.INTEGER,
      },
      default_branch: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Repositories');
  }
};