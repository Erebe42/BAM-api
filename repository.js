const {resolver} = require('graphql-sequelize');
const {Repository} = require('./models');

const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLNonNull, GraphQLList } = require('graphql');

const RepositoryType = new GraphQLObjectType({
  name: 'Repository',
  fields: {
    id: {
      type: GraphQLInt,
    },
    node_id:  {
      type: GraphQLString,
    },
    name:  {
      type: GraphQLString,
    },
    full_name:  {
      type: GraphQLString,
    },
    private:  {
      type: GraphQLBoolean,
    },
    html_url: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    fork: {
      type: GraphQLBoolean,
    },
    url: {
      type: GraphQLString,
    },
    forks_url: {
      type: GraphQLString,
    },
    keys_url: {
      type: GraphQLString,
    },
    collaborators_url: {
      type: GraphQLString,
    },
    teams_url: {
      type: GraphQLString,
    },
    hooks_url: {
      type: GraphQLString,
    },
    issue_events_url: {
      type: GraphQLString,
    },
    events_url: {
      type: GraphQLString,
    },
    assignees_url: {
      type: GraphQLString,
    },
    branches_url: {
      type: GraphQLString,
    },
    tags_url: {
      type: GraphQLString,
    },
    blobs_url: {
      type: GraphQLString,
    },
    git_tags_url: {
      type: GraphQLString,
    },
    git_refs_url: {
      type: GraphQLString,
    },
    trees_url: {
      type: GraphQLString,
    },
    statuses_url: {
      type: GraphQLString,
    },
    languages_url: {
      type: GraphQLString,
    },
    stargazers_url: {
      type: GraphQLString,
    },
    contributors_url: {
      type: GraphQLString,
    },
    subscribers_url: {
      type: GraphQLString,
    },
    subscription_url: {
      type: GraphQLString,
    },
    commits_url: {
      type: GraphQLString,
    },
    git_commits_url: {
      type: GraphQLString,
    },
    comments_url: {
      type: GraphQLString,
    },
    issue_comment_url: {
      type: GraphQLString,
    },
    contents_url: {
      type: GraphQLString,
    },
    compare_url: {
      type: GraphQLString,
    },
    merges_url: {
      type: GraphQLString,
    },
    archive_url: {
      type: GraphQLString,
    },
    downloads_url: {
      type: GraphQLString,
    },
    issues_url: {
      type: GraphQLString,
    },
    pulls_url: {
      type: GraphQLString,
    },
    milestones_url: {
      type: GraphQLString,
    },
    notifications_url: {
      type: GraphQLString,
    },
    labels_url: {
      type: GraphQLString,
    },
    releases_url: {
      type: GraphQLString,
    },
    deployments_url: {
      type: GraphQLString,
    },
    created_at: {
      type: GraphQLString,
    },
    updated_at: {
      type: GraphQLString,
    },
    pushed_at: {
      type: GraphQLString,
    },
    git_url: {
      type: GraphQLString,
    },
    ssh_url: {
      type: GraphQLString,
    },
    clone_url: {
      type: GraphQLString,
    },
    svn_url: {
      type: GraphQLString,
    },
    homepage: {
      type: GraphQLString,
    },
    size: {
      type: GraphQLInt,
    },
    stargazers_count: {
      type: GraphQLInt,
    },
    watchers_count: {
      type: GraphQLInt,
    },
    language: {
      type: GraphQLString,
    },
    has_issues: {
      type: GraphQLBoolean,
    },
    has_projects: {
      type: GraphQLBoolean,
    },
    has_downloads: {
      type: GraphQLBoolean,
    },
    has_wiki: {
      type: GraphQLBoolean,
    },
    has_pages: {
      type: GraphQLBoolean,
    },
    forks_count: {
      type: GraphQLInt,
    },
    mirror_url: {
      type: GraphQLString,
    },
    archived: {
      type: GraphQLBoolean,
    },
    disabled: {
      type: GraphQLBoolean,
    },
    open_issues_count: {
      type: GraphQLInt,
    },
    forks: {
      type: GraphQLInt,
    },
    open_issues: {
      type: GraphQLInt,
    },
    watchers: {
      type: GraphQLInt,
    },
    default_branch: {
      type: GraphQLString,
    },
  }
});

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      // Field for retrieving a user by ID
      repository: {
        type: RepositoryType,
        // args will automatically be mapped to `where`
        args: {
          id: {
            description: 'id of the repository',
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve: resolver(Repository)
      },
      repositories: {
        // The resolver will use `findOne` or `findAll` depending on whether the field it's used in is a `GraphQLList` or not.
        type: new GraphQLList(RepositoryType),
        args: {
          // An arg with the key limit will automatically be converted to a limit on the target
          limit: {
            type: GraphQLInt
          },
        },
        resolve: resolver(Repository)
      }
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'createRepository',
    fields: {
      createRepository: {
        type: RepositoryType,
        args: {
          node_id:  {
            type: GraphQLString,
          },
          name:  {
            type: GraphQLString,
          },
          full_name:  {
            type: GraphQLString,
          },
          private:  {
            type: GraphQLBoolean,
          },
          html_url: {
            type: GraphQLString,
          },
          description: {
            type: GraphQLString,
          },
          fork: {
            type: GraphQLBoolean,
          },
          url: {
            type: GraphQLString,
          },
          forks_url: {
            type: GraphQLString,
          },
          keys_url: {
            type: GraphQLString,
          },
          collaborators_url: {
            type: GraphQLString,
          },
          teams_url: {
            type: GraphQLString,
          },
          hooks_url: {
            type: GraphQLString,
          },
          issue_events_url: {
            type: GraphQLString,
          },
          events_url: {
            type: GraphQLString,
          },
          assignees_url: {
            type: GraphQLString,
          },
          branches_url: {
            type: GraphQLString,
          },
          tags_url: {
            type: GraphQLString,
          },
          blobs_url: {
            type: GraphQLString,
          },
          git_tags_url: {
            type: GraphQLString,
          },
          git_refs_url: {
            type: GraphQLString,
          },
          trees_url: {
            type: GraphQLString,
          },
          statuses_url: {
            type: GraphQLString,
          },
          languages_url: {
            type: GraphQLString,
          },
          stargazers_url: {
            type: GraphQLString,
          },
          contributors_url: {
            type: GraphQLString,
          },
          subscribers_url: {
            type: GraphQLString,
          },
          subscription_url: {
            type: GraphQLString,
          },
          commits_url: {
            type: GraphQLString,
          },
          git_commits_url: {
            type: GraphQLString,
          },
          comments_url: {
            type: GraphQLString,
          },
          issue_comment_url: {
            type: GraphQLString,
          },
          contents_url: {
            type: GraphQLString,
          },
          compare_url: {
            type: GraphQLString,
          },
          merges_url: {
            type: GraphQLString,
          },
          archive_url: {
            type: GraphQLString,
          },
          downloads_url: {
            type: GraphQLString,
          },
          issues_url: {
            type: GraphQLString,
          },
          pulls_url: {
            type: GraphQLString,
          },
          milestones_url: {
            type: GraphQLString,
          },
          notifications_url: {
            type: GraphQLString,
          },
          labels_url: {
            type: GraphQLString,
          },
          releases_url: {
            type: GraphQLString,
          },
          deployments_url: {
            type: GraphQLString,
          },
          created_at: {
            type: GraphQLString,
          },
          updated_at: {
            type: GraphQLString,
          },
          pushed_at: {
            type: GraphQLString,
          },
          git_url: {
            type: GraphQLString,
          },
          ssh_url: {
            type: GraphQLString,
          },
          clone_url: {
            type: GraphQLString,
          },
          svn_url: {
            type: GraphQLString,
          },
          homepage: {
            type: GraphQLString,
          },
          size: {
            type: GraphQLInt,
          },
          stargazers_count: {
            type: GraphQLInt,
          },
          watchers_count: {
            type: GraphQLInt,
          },
          language: {
            type: GraphQLString,
          },
          has_issues: {
            type: GraphQLBoolean,
          },
          has_projects: {
            type: GraphQLBoolean,
          },
          has_downloads: {
            type: GraphQLBoolean,
          },
          has_wiki: {
            type: GraphQLBoolean,
          },
          has_pages: {
            type: GraphQLBoolean,
          },
          forks_count: {
            type: GraphQLInt,
          },
          mirror_url: {
            type: GraphQLString,
          },
          archived: {
            type: GraphQLBoolean,
          },
          disabled: {
            type: GraphQLBoolean,
          },
          open_issues_count: {
            type: GraphQLInt,
          },
          forks: {
            type: GraphQLInt,
          },
          open_issues: {
            type: GraphQLInt,
          },
          watchers: {
            type: GraphQLInt,
          },
          default_branch: {
            type: GraphQLString,
          },
        },
        resolve: (_, repository) => {
          return Repository.create(repository)
            .catch(err => {
              return Promise.reject(err)
            });
        },
      },
    },
  }),
});

module.exports.schema = schema;
