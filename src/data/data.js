export const groups = [
  {
    "name": "GitHub Basics",
    "topics": [
      {
        "name": "Quickstart",
        "slug": "quickstart",
        "subtopics": [
          {
            "title": "Hello World",
            "slug": "hello-world",
            "description": "Complete end-to-end workflow combining local Git with GitHub: create account, initialize local repo, make first commit, connect GitHub remote, push changes online. See your code live on GitHub.com with full commit history preserved. Perfect first project to understand Git + GitHub collaboration flow.",
            "example": "git init → add → commit → remote → push → live repo",
            "code": [
              "git init",
              "git add .",
              "git commit -m \"Initial commit\"",
              "git remote add origin https://github.com/username/repo.git",
              "git push -u origin main"
            ]
          },
          {
            "title": "Create first repo",
            "slug": "create-first-repo",
            "description": "Use GitHub web interface to create professional repository setup instantly: choose public/private visibility, add project description, initialize with README.md, select language-specific .gitignore (React/Node/Python), pick open source license (MIT/Apache). One-click setup skips manual git init for fastest start.",
            "example": "New repo → name → Public → README + .gitignore → Create",
            "code": [
              "gh repo create my-new-repo --public --source=."
            ]
          },
          {
            "title": "Making first commit",
            "slug": "making-first-commit",
            "description": "After creating/editing project files locally, stage everything with git add ., then create permanent snapshot using git commit -m with descriptive message following conventional commits (feat:, fix:, docs:, chore:). Establishes baseline project state in Git history with unique SHA identifier.",
            "example": "edit files → git add . → git commit → snapshot saved",
            "code": [
              "git add .",
              "git commit -m \"Initial project files\""
            ]
          },
          {
            "title": "Pushing changes",
            "slug": "pushing-changes",
            "description": "Sends local commits to GitHub remote repository making code accessible online for collaboration. First push specifies origin main; -u flag sets upstream tracking so future pushes only need git push. Triggers GitHub Actions/CI if configured.",
            "example": "git push origin main → future: git push",
            "code": [
              "git push origin main",
              "git push -u origin main"
            ]
          },
          {
            "title": "Setting up SSH",
            "slug": "setting-up-ssh",
            "description": "Generate Ed25519 SSH key pair for passwordless authentication across all GitHub repositories. Copy public key to GitHub Settings → SSH keys, test connection with ssh -T git@github.com, then use git@github.com: URLs instead of HTTPS. Eliminates repeated password prompts forever.",
            "example": "ssh-keygen → copy pub key → GitHub SSH → test connection",
            "code": [
              "ssh-keygen -t ed25519 -C \"email@example.com\"",
              "cat ~/.ssh/id_ed25519.pub",
              "ssh -T git@github.com"
            ]
          }
        ]
      },
      {
        "name": "Repositories",
        "slug": "repositories",
        "subtopics": [
          {
            "title": "Creating repository",
            "slug": "creating-repository",
            "description": "Instantly create new repositories via GitHub web or gh CLI with full professional setup: visibility controls, descriptions, README initialization, .gitignore templates, license selection, team permissions. Web interface handles git init automatically; CLI works with existing local repos.",
            "example": "New repo → name → desc → public → init files → create",
            "code": [
              "gh repo create my-new-repo --public --source=."
            ]
          },
          {
            "title": "Importing repository",
            "slug": "importing-repository",
            "description": "Migrate existing repositories from GitLab/Bitbucket/other Git platforms to GitHub preserving 100% commit history, branches, tags, and metadata. GitHub handles authentication and large imports automatically. Perfect for platform consolidation or team migration.",
            "example": "Import → source URL → authenticate → import",
            "code": []
          },
          {
            "title": "Forking repository",
            "slug": "forking-repository",
            "description": "Creates instant writable copy of any public repository under your account while maintaining upstream connection for contributions. Preserves full history, issues, PRs. Essential for contributing to open source projects via pull requests to original repo.",
            "example": "Repo page → Fork → your account → instant copy",
            "code": [
              "git clone https://github.com/original-owner/repo.git",
              "cd repo",
              "git remote add upstream https://github.com/original-owner/repo.git"
            ]
          },
          {
            "title": "Cloning repository",
            "slug": "cloning-repository",
            "description": "Downloads complete repository with full Git history, all branches, tags, and remote configuration to your local machine. Automatically creates origin remote pointing to GitHub. Creates new directory with repo name unless specified otherwise.",
            "example": "copy URL → git clone → full history downloaded",
            "code": [
              "git clone https://github.com/owner/repo.git",
              "git clone git@github.com:owner/repo.git"
            ]
          },
          {
            "title": "Visibility settings",
            "slug": "visibility-settings",
            "description": "Toggle between public (free, unlimited, discoverable) and private (collaborators only, plan limits) repository access. Public repos indexed by GitHub search; private repos require explicit invitations. Change anytime from Settings → Danger Zone.",
            "example": "Settings → Danger Zone → change visibility → confirm",
            "code": []
          },
          {
            "title": "Renaming repository",
            "slug": "renaming-repository",
            "description": "Changes repository name updating all clone URLs, web URLs, GitHub Actions automatically while preserving stars, forks, watchers, issues, PRs, topics. Update local remotes after rename. No downtime during rename process.",
            "example": "Settings → repo name → new-name → update remotes",
            "code": [
              "git remote set-url origin https://github.com/username/new-repo-name.git"
            ]
          },
          {
            "title": "Deleting repository",
            "slug": "deleting-repository",
            "description": "Permanently deletes repository and all contents (code, issues, PRs, wikis, projects, Actions) from GitHub. Forks and local clones remain unaffected. Requires typing repository name confirmation. Use with extreme caution.",
            "example": "Settings → Danger Zone → delete → type name → confirm",
            "code": []
          }
        ]
      },
      {
        "name": "Issues",
        "slug": "issues",
        "subtopics": [
          {
            "title": "About issues",
            "slug": "about-issues",
            "description": "Powerful project management system with rich markdown editor, task lists, @mentions, emojis, code blocks, automatic linking between issues/PRs/commits. Track bugs, features, tasks with labels, assignees, milestones. GitHub's native Kanban without external tools.",
            "example": "Issues tab → markdown → @mentions → auto-links",
            "code": []
          },
          {
            "title": "Creating issues",
            "slug": "creating-issues",
            "description": "Open standardized issues using templates for bug reports, feature requests, or tasks. Rich editor with preview, file attachments, task checklists. Auto-links referenced PRs/commits. CLI creation for automation.",
            "example": "New issue → template → title + body → assign/label → submit",
            "code": [
              "gh issue create --title \"Bug: login fails\" --body \"Steps to reproduce...\""
            ]
          },
          {
            "title": "Assigning issues",
            "slug": "assigning-issues",
            "description": "Assign ownership to individuals/teams with @username syntax or dropdown selector. Assignees receive notifications and issues appear in their dashboard. Filter/search by assignee for team progress tracking.",
            "example": "Issue → assignees → @username → notifications sent",
            "code": [
              "gh issue edit 123 --add-assignee @username"
            ]
          },
          {
            "title": "Labels & milestones",
            "slug": "labels-milestones",
            "description": "Color-coded labels categorize work (bug🔴, enhancement🟢, help wanted🟡, good first issue🔵). Milestones group issues by release/sprint (v1.0, Sprint 3). Filter, sort, and progress tracking by label/milestone combinations.",
            "example": "Labels: bug🔴 enhancement🟢 → Milestones: v1.0",
            "code": [
              "gh issue edit 123 --add-label \"bug,help wanted\""
            ]
          },
          {
            "title": "Linking issues/PRs",
            "slug": "linking-issues-prs",
            "description": "Reference related work using #123, closes #456, fixes #789 syntax. Creates bidirectional links and auto-closes referenced issues when PR merges. Essential for connecting bug → PR → fix workflow.",
            "example": "#123 fixes #456 → auto-links + closes on merge",
            "code": []
          }
        ]
      },
      {
        "name": "Pull requests",
        "slug": "pull-requests",
        "subtopics": [
          {
            "title": "About pull requests",
            "slug": "about-pull-requests",
            "description": "Central collaboration hub showing code diffs, discussion threads, automated checks, review status. Merge feature branches safely after review approval. Rich markdown descriptions with screenshots, related issues, blocking concerns.",
            "example": "branch → push → PR → review → merge → delete",
            "code": []
          },
          {
            "title": "Creating PR",
            "slug": "creating-pr",
            "description": "After pushing feature branch to GitHub, create PR comparing against main/develop. Add description, screenshots, related issues (#123), request reviewers. Triggers CI checks automatically. GitHub suggests PR creation after push.",
            "example": "push branch → Compare & PR → reviewers → create",
            "code": [
              "git checkout -b feature-branch",
              "git add .",
              "git commit -m \"Add feature\"",
              "git push origin feature-branch"
            ]
          },
          {
            "title": "Draft PRs",
            "slug": "draft-prs",
            "description": "Mark PRs as drafts (WIP) to get early feedback while preventing premature merge. Share unfinished work with team, run CI checks, iterate based on comments. Convert to ready when complete.",
            "example": "PR → mark draft → feedback → mark ready → merge",
            "code": []
          },
          {
            "title": "Requesting reviews",
            "slug": "requesting-reviews",
            "description": "Request specific reviewers/teams using @mentions or reviewer selector. Track approval status, required reviews count, comment threads. Reviewers get notifications and PR appears in their dashboard.",
            "example": "PR → reviewers → @teammate → track approvals",
            "code": [
              "gh pr request-review 123 --reviewer @username"
            ]
          },
          {
            "title": "Merging PRs",
            "slug": "merging-prs",
            "description": "Three merge strategies: merge commit (preserves history), squash+merge (single commit), rebase+merge (linear history). Auto-delete source branch after merge. Protected branches require status checks passing.",
            "example": "Merge commit vs Squash vs Rebase → delete branch",
            "code": []
          },
          {
            "title": "Resolving conflicts",
            "slug": "resolving-conflicts",
            "description": "GitHub shows conflicted files with inline editor for web resolution or local rebase workflow. After resolving, mark conflicts resolved and continue merge. Common when multiple developers edit same lines.",
            "example": "PR conflicts → resolve → mark resolved → merge",
            "code": [
              "git checkout main",
              "git pull upstream main",
              "git checkout feature-branch",
              "git rebase main",
              "git push --force-with-lease"
            ]
          }
        ]
      },
      {
        "name": "Git workflow",
        "slug": "git-workflow",
        "subtopics": [
          {
            "title": "Git branching",
            "slug": "git-branching",
            "description": "Create descriptive feature branches from main/develop for isolated development: feature/login, bugfix/navbar, hotfix/prod-bug. Switch cleanly between branches. Merge via PRs after review.",
            "example": "main → feature/ → bugfix/ → hotfix/",
            "code": [
              "git checkout -b feature/login",
              "git switch -c bugfix/navbar",
              "git checkout main"
            ]
          },
          {
            "title": "Feature branches",
            "slug": "feature-branches",
            "description": "Standard workflow: branch from main → develop feature → push → PR → review → merge → delete branch. Keeps main stable. Rebase before merging for clean history.",
            "example": "feature/user-auth → PR → merge → delete",
            "code": [
              "git checkout -b feature/user-auth",
              "git checkout main",
              "git pull",
              "git checkout feature/user-auth",
              "git rebase main"
            ]
          },
          {
            "title": "Rebasing vs merging",
            "slug": "rebasing-vs-merging",
            "description": "Rebase (git rebase main) replays commits linearly on latest main for clean history but rewrites history. Merge (git merge main) preserves exact branch timeline with merge commit. Use rebase locally, merge via PR.",
            "example": "Rebase: linear → Merge: preserves history",
            "code": [
              "git rebase main",
              "git merge main"
            ]
          },
          {
            "title": "Squash commits",
            "slug": "squash-commits",
            "description": "Combine multiple small/debug commits into single logical commit using interactive rebase or GitHub squash merge. git rebase -i HEAD~n lets you reorder/edit/squash commits before pushing.",
            "example": "5 commits → \"Add login + tests\"",
            "code": [
              "git rebase -i HEAD~5"
            ]
          },
          {
            "title": "GitHub Flow",
            "slug": "github-flow",
            "description": "Simple lightweight workflow for GitHub: main → create branch → edit → push → PR → review/merge → delete branch → repeat. Perfect for small teams, frequent releases, continuous deployment.",
            "example": "main → branch → PR → merge → repeat",
            "code": []
          }
        ]
      }
    ]
  }
  ,
  {
    "name": "CheatSheet",
    "topics": [
      {
        "name": "Basic Commands",
        "slug": "basic-commands",
        "subtopics": [
          {
            "title": "Initialize Repo",
            "slug": "init",
            "description": "Creates a new Git repository in your current directory by generating a hidden .git folder that stores all version history, commits, branches, and configuration. This is the essential first step for any new project before tracking files or making commits. Run this once per project folder.",
            "example": "git init → my-react-app",
            "code": ["git init"]
          },
          {
            "title": "Check Status",
            "slug": "status",
            "description": "Shows comprehensive working directory status including modified/untracked files, staged changes, unstaged changes, current branch, and ahead/behind remote status. Essential command to run frequently before committing to understand exactly what Git will include. Color-coded output helps quickly identify file states.",
            "example": "git status → see modified: src/App.js",
            "code": ["git status"]
          },
          {
            "title": "Add Files",
            "slug": "add",
            "description": "Moves files from working directory to staging area (index) preparing them for the next commit snapshot. Use specific filenames for selective staging, directories for groups, or . for everything. Staged files show as green in git status; unstaged show as red.",
            "example": "git add src/ → stage React components",
            "code": [
              "git add src/App.js",
              "git add ."
            ]
          },
          {
            "title": "Commit Changes",
            "slug": "commit",
            "description": "Records staged changes as a permanent snapshot in Git history with a descriptive message, creating a new commit with unique SHA hash. Each commit represents a complete project state at that moment. Use conventional commit messages (feat:, fix:, docs:) for automated changelogs.",
            "example": "git commit → \"feat: add login page\"",
            "code": ["git commit -m \"Add responsive navbar\""]
          }
        ]
      },
      {
        "name": "Branching",
        "slug": "branching",
        "subtopics": [
          {
            "title": "List Branches",
            "slug": "branch",
            "description": "Displays all local branches with * marking current branch. Shows last commit message for each branch. Use -v flag for verbose output including commit hashes and tracking info. Essential for understanding current branch context before switching.",
            "example": "git branch → * main, feature/ui",
            "code": ["git branch"]
          },
          {
            "title": "Create Branch",
            "slug": "checkout-new",
            "description": "Creates new branch from current HEAD and immediately switches to it in single command. Perfect for starting isolated feature work without affecting main branch. Branch pointer moves with each new commit as you develop.",
            "example": "git checkout -b → bugfix/navbar-crash",
            "code": ["git checkout -b feature/login"]
          },
          {
            "title": "Switch Branch",
            "slug": "checkout",
            "description": "Switches to existing branch, automatically stashing any uncommitted changes. Git automatically merges incoming branch changes with your working directory when possible. Use git switch (Git 2.23+) as modern alternative.",
            "example": "git checkout → main (from feature)",
            "code": ["git checkout main"]
          },
          {
            "title": "Delete Branch",
            "slug": "branch-delete",
            "description": "Deletes fully merged local branch after PR approval. Use -d for safe delete (fails if unmerged), -D for force delete unmerged branches, -r to delete remote tracking branch too. Cleans up repository after successful merges.",
            "example": "git branch -d → cleanup done branches",
            "code": ["git branch -d feature/login"]
          }
        ]
      },
      {
        "name": "Remote Workflow",
        "slug": "remote-workflow",
        "subtopics": [
          {
            "title": "Add Remote",
            "slug": "remote-add",
            "description": "Links local repository to GitHub/GitLab remote server using repository URL. Multiple remotes possible (origin, upstream). Use git remote -v to verify. Essential for push/pull collaboration with remote teams.",
            "example": "git remote add → origin gitverse/main",
            "code": ["git remote add origin https://github.com/username/repo.git"]
          },
          {
            "title": "Remove remote",
            "slug": "remote-remove",
            "description": "Deletes an existing remote repository reference from your local Git project. Useful when a remote URL is no longer valid, a repository has been moved, or you no longer want to sync with that remote. This only removes the link, not the actual repository.",
            "example": "Project folder → remove old remote → add new remote if needed",
            "code": [
              "git remote remove origin",
            ]
          },

          {
            "title": "Push Changes",
            "slug": "push",
            "description": "Uploads local commits to remote repository. First push requires origin branch specification; -u sets upstream tracking for future git push simplicity. Use --force-with-lease for safe force pushes after rebase.",
            "example": "git push → origin feature/login",
            "code": [
              "git push -u origin feature/login",
              "git push"
            ]
          },
          {
            "title": "Pull Latest",
            "slug": "pull",
            "description": "Fetches latest remote changes and merges into current branch (git fetch + git merge). Resolves most common sync scenarios. Use git pull --rebase for linear history. Always pull before starting new features.",
            "example": "git pull → sync team changes",
            "code": ["git pull origin main"]
          },
          {
            "title": "Clone Repo",
            "slug": "clone",
            "description": "Downloads complete repository including full commit history, all branches, tags, and remotes to new directory. Creates origin remote automatically. Perfect for starting fresh on new projects or team contributions.",
            "example": "git clone → gitverse-project",
            "code": ["git clone https://github.com/username/repo.git"]
          }
        ]
      },
      {
        "name": "Merging & Conflicts",
        "slug": "merging",
        "subtopics": [
          {
            "title": "Merge Branch",
            "slug": "merge",
            "description": "Integrates specified branch into current branch, creating merge commit if fast-forward not possible. Preserves complete branch history. Use --no-ff to always create merge commit for better history visualization.",
            "example": "git merge → feature/ui into main",
            "code": [
              "git checkout main",
              "git merge feature/login"
            ]
          },
          {
            "title": "Abort Merge",
            "slug": "merge-abort",
            "description": "Cancels conflicted merge operation, discarding merge commit and returning to pre-merge state. Use when conflicts too complex or need team input. All changes preserved exactly as before merge attempt.",
            "example": "git merge --abort → fix conflicts later",
            "code": ["git merge --abort"]
          },
          {
            "title": "View Conflicts",
            "slug": "diff-conflict",
            "description": "Identifies conflicted files with <<<<<<< HEAD ======= >>>>>>> markers showing competing changes. git status highlights conflicted files. Edit files manually to resolve, then git add to mark resolved.",
            "example": "git diff → see <<<<<<< HEAD markers",
            "code": [
              "git status",
              "git diff"
            ]
          },
          {
            "title": "Resolve & Commit",
            "slug": "add-after-merge",
            "description": "After manually editing conflicted files to resolve differences, stage resolved files and create merge commit to complete integration. Git recognizes merge completion automatically. Always test thoroughly post-merge.",
            "example": "git add → commit \"fix: merge conflicts\"",
            "code": [
              "git add .",
              "git commit -m \"Resolve merge conflicts\""
            ]
          }
        ]
      },
      {
        "name": "Undo & Reset",
        "slug": "undo-commands",
        "subtopics": [
          {
            "title": "Amend Commit",
            "slug": "commit-amend",
            "description": "Modifies most recent commit by changing message, adding forgotten files, or both without creating new commit. Perfect for fixing typos or adding missed files before pushing. Never amend pushed commits.",
            "example": "git commit --amend → fix \"feat\" typo",
            "code": [
              "git commit --amend -m \"Better message\"",
              "git commit --amend"
            ]
          },
          {
            "title": "Revert Commit",
            "slug": "revert",
            "description": "Creates new commit undoing specific commit changes while preserving history. Safe for shared repositories since it doesn't rewrite history. Shows exact reversion in commit log.",
            "example": "git revert → abc123 (breaking change)",
            "code": ["git revert abc1234"]
          },
          {
            "title": "Reset Soft",
            "slug": "reset-soft",
            "description": "Removes commits from history but keeps all changes staged, perfect for combining multiple small commits into logical units before pushing. Changes remain ready to recommit.",
            "example": "git reset --soft → squash last 2 commits",
            "code": ["git reset --soft HEAD~1"]
          },
          {
            "title": "Discard Changes",
            "slug": "checkout-discard",
            "description": "Permanently discards uncommitted changes in working directory or specific files, reverting to last commit state. Use with caution—irrecoverable without backups. Perfect for cleaning accidental changes.",
            "example": "git checkout -- → remove bad changes",
            "code": ["git checkout -- ."]
          }
        ]
      },
      {
        "name": "Stashing",
        "slug": "stashing",
        "subtopics": [
          {
            "title": "Stash Changes",
            "slug": "stash",
            "description": "Temporarily saves uncommitted working directory and index state to special stash stack, giving clean working directory for urgent bug fixes or branch switches. Automatically includes untracked files with -u flag.",
            "example": "git stash → switch to urgent bugfix",
            "code": ["git stash"]
          },
          {
            "title": "List Stashes",
            "slug": "stash-list",
            "description": "Shows all stashes on stack with descriptive names including branch and commit message. Use stash@{n} syntax to reference specific stashes. Essential for managing multiple WIP sessions.",
            "example": "git stash list → stash@{0}: WIP on main",
            "code": ["git stash list"]
          },
          {
            "title": "Apply Stash",
            "slug": "stash-apply",
            "description": "Restores specific stash to working directory without removing from stash stack, enabling continued work on WIP. May create conflicts requiring manual resolution. Use apply vs pop based on reuse needs.",
            "example": "git stash apply → continue login feature",
            "code": ["git stash apply"]
          },
          {
            "title": "Drop Stash",
            "slug": "stash-drop",
            "description": "Permanently deletes specific stash from stack when WIP completed or no longer needed. Use stash@{0} for most recent. Clears clutter from git stash list for better organization.",
            "example": "git stash drop → cleanup old wip",
            "code": ["git stash drop"]
          }
        ]
      }
    ]
  }
  ,
  {
    "name": "Actions & CI/CD",
    "topics": [
      {
        "name": "Workflows",
        "slug": "workflows",
        "subtopics": [
          {
            "title": "Workflow syntax",
            "slug": "workflow-syntax",
            "description": "YAML configuration files located in .github/workflows/ directory define complete automation pipelines using standardized structure: name (display title), on (git events/schedules triggering execution), jobs (parallel virtual machines), steps (individual commands/actions within each job), and env/secrets variables. Files automatically discovered and listed in Actions tab. Version pinning (@v4) ensures reproducible builds.",
            "example": "name: CI → on: [push, pull_request] → jobs.test.steps",
            "code": []
          },
          {
            "title": "Trigger events",
            "slug": "trigger-events",
            "description": "Workflows execute automatically based on git repository events like push to specific branches, pull_request opened/reviewed/merged, releases published, or scheduled cron jobs. Advanced triggers include path filters (only changed files), repository_dispatch (external API triggers), workflow_dispatch (manual GitHub UI button), and workflow_run (chain workflows). Combine multiple triggers with logical OR behavior.",
            "example": "on: push → on: pull_request → on: schedule cron",
            "code": []
          },
          {
            "title": "Jobs & steps",
            "slug": "jobs-steps",
            "description": "Jobs represent independent virtual machines running in parallel across GitHub-hosted or self-hosted runners. Steps within each job execute sequentially using actions (uses:) for reusable components or run: for shell commands. Jobs can depend on each other (needs:), share artifacts between steps/jobs, and set outputs for conditional logic. Maximum 20 concurrent jobs on free plan.",
            "example": "jobs: build, test, deploy → steps: checkout, setup-node, npm test",
            "code": []
          },
          {
            "title": "Matrix builds",
            "slug": "matrix-builds",
            "description": "strategy.matrix automatically expands single job across multiple OS, language versions, architectures without code duplication. Include/exclude specific combinations. Fail-fast stops all matrix runs on first failure. Essential for comprehensive cross-platform testing coverage in single workflow definition.",
            "example": "Node 18/20 + Ubuntu/macOS/Windows",
            "code": []
          },
          {
            "title": "Caching",
            "slug": "caching",
            "description": "actions/cache dramatically speeds builds by storing expensive dependencies (node_modules, ~/.cargo/registry, pip cache) between workflow runs. Keys based on file hashes (package-lock.json) ensure cache invalidation on dependency changes. Restore keys fallback chain maximizes hit rates. Saves 80-95% install time typically.",
            "example": "npm ci (2min) → cache hit (10s)",
            "code": []
          }
        ]
      },
      {
        "name": "Runners",
        "slug": "runners",
        "subtopics": [
          {
            "title": "GitHub-hosted runners",
            "slug": "github-hosted-runners",
            "description": "Fully managed ephemeral VMs with latest OS/tools preinstalled (Node, Python, Docker, browsers). Auto-scaling with 20 concurrent jobs free (2,000 minutes/month public repos). ubuntu-latest always current LTS, resets completely after each job for security/isolation. No custom software installation needed.",
            "example": "runs-on: ubuntu-latest → instant VM provisioning",
            "code": [
              "runs-on: ubuntu-latest",
              "runs-on: macos-14",
              "runs-on: windows-2022"
            ]
          },
          {
            "title": "Self-hosted runners",
            "slug": "self-hosted-runners",
            "description": "Run workflows on your own infrastructure (EC2, on-prem servers, Kubernetes) for custom hardware (GPUs), licensed software, or compliance requirements. Download/register runner application via repo/org/enterprise settings. Full control over environment, costs, and scaling. Persistent between jobs.",
            "example": "EC2 GPU instance → install runner → register → GPU workflows",
            "code": [
              "./config.sh --url https://github.com/owner/repo --token TOKEN",
              "./run.sh"
            ]
          },
          {
            "title": "Runner groups",
            "slug": "runner-groups",
            "description": "Organize self-hosted runners into named groups (gpu-team, windows-farm) accessible across multiple repositories. Organization-level visibility controls determine which repos can use specific groups. Central management for enterprise runner fleets.",
            "example": "Group: gpu-runners → Multiple repos use same GPUs",
            "code": []
          },
          {
            "title": "Scaling runners",
            "slug": "scaling-runners",
            "description": "Autoscaling solutions using cloud provider auto-scaling groups (AWS ASG), Kubernetes Horizontal Pod Autoscaler, or GitHub's runner scale sets. Provision runners dynamically based on workflow queue demand. Scale to zero during idle periods to minimize costs.",
            "example": "0→10 runners on workflow demand → scale to zero",
            "code": []
          }
        ]
      },
      {
        "name": "Secrets",
        "slug": "secrets",
        "subtopics": [
          {
            "title": "Repository secrets",
            "slug": "repository-secrets",
            "description": "Store sensitive credentials (API keys, deploy tokens, npm auth, database passwords) encrypted at rest with per-repository access. Reference via ${{ secrets.MY_SECRET }} in workflows. Automatically masked in logs, never exposed in UI. Rotation via Settings → Secrets and variables → Actions.",
            "example": "Settings → Secrets → Actions → New → NPM_TOKEN",
            "code": []
          },
          {
            "title": "Environment secrets",
            "slug": "environment-secrets",
            "description": "Environment-specific secrets scoped to staging/production deployments with required reviewer approval workflows. Jobs specify environment: production triggering approval gates. Separate secrets per environment prevent prod credentials leaking to staging workflows.",
            "example": "Environments → staging → secrets → PROD_DB_URL",
            "code": []
          },
          {
            "title": "Organization secrets",
            "slug": "organization-secrets",
            "description": "Centralized secret management across all organization repositories with granular access policies (all repos, private repos, specific repos, or teams). Reduces duplication while maintaining security boundaries. Enterprise-wide credential rotation.",
            "example": "Organization settings → Secrets → All repos + selected",
            "code": []
          },
          {
            "title": "Secret scanning",
            "slug": "secret-scanning",
            "description": "Push protection blocks commits containing detected secrets before they reach repository. Background scanning analyzes existing code/history for leaked credentials with automatic alerts and rotation guidance. Supports 50+ secret types from AWS, GitHub, npm, Docker.",
            "example": "API key in commit → Block push → \"Remove before commit\"",
            "code": []
          }
        ]
      },
      {
        "name": "Marketplace",
        "slug": "marketplace",
        "subtopics": [
          {
            "title": "Finding actions",
            "slug": "finding-actions",
            "description": "GitHub Marketplace hosts 20,000+ reusable actions searchable by language, purpose, popularity. Filter by verified creators (GitHub staff/companies), stars, downloads, last updated. Community actions available but prioritize verified for production reliability.",
            "example": "actions/setup-node → 10M downloads → verified creator",
            "code": []
          },
          {
            "title": "Using actions",
            "slug": "using-actions",
            "description": "Reference actions using owner/repo@version syntax (prefer @v4 semantic tags over @main). Pass configuration via with: inputs block. Capture outputs with ::set-output for conditional workflow logic. Pin versions prevent breaking changes.",
            "example": "uses: actions/checkout@v4 → uses: dorny/paths-filter@v3",
            "code": []
          },
          {
            "title": "Custom actions",
            "slug": "custom-actions",
            "description": "Build reusable actions using Docker containers (complete environment control), JavaScript/TypeScript (node actions), or composite (multiple steps). Publish to Marketplace with action.yml metadata. Version with semantic tags for consumers. Local testing with act CLI.",
            "example": "action.yml → docker/Dockerfile → .github/action.yml",
            "code": []
          },
          {
            "title": "Action badges",
            "slug": "action-badges",
            "description": "Display dynamic badges in README showing action version, downloads, stars, verified status, last updated. Increases discoverability and shows maintenance status. Generated by shields.io integration.",
            "example": "![setup-node](https://img.shields.io/badge/setup--node-v4-green)",
            "code": []
          }
        ]
      }
    ]
  }
  ,
  {
    "name": "Developer Tools",
    "topics": [
      {
        "name": "Codespaces",
        "slug": "codespaces",
        "subtopics": [
          {
            "title": "Creating codespace",
            "slug": "creating-codespace",
            "description": "Instantly spin up full VS Code development environment in cloud from any repository branch, PR, or commit. Choose machine size (2-32 cores), automatically provisions devcontainer with extensions/tools. Open directly in browser, VS Code desktop, or VS Code web. Perfect for pair programming, onboarding, or local machine issues.",
            "example": "Code → Codespaces → + → main branch → 4-core → Open",
            "code": [
              "gh codespace create -r owner/repo -b main -m 4cores"
            ]
          },
          {
            "title": "Dev containers",
            "slug": "dev-containers",
            "description": "Standardize team development environments using .devcontainer/devcontainer.json configuration specifying Docker image, VS Code extensions, forwarded ports, post-create commands, and customizations. Ensures every developer gets identical environment instantly. Shareable via repo for perfect onboarding.",
            "example": ".devcontainer/devcontainer.json → Node 20 + ESLint + Prettier",
            "code": []
          },
          {
            "title": "Forwarding ports",
            "slug": "forwarding-ports",
            "description": "Automatically detect and expose development server ports (3000, 5000, 5432) from codespace to accessible public URLs with automatic HTTPS. Granular access control (public, org, specific users). Share live previews instantly during development.",
            "example": "localhost:3000 → https://username-abc123 codespaces.githubhosted.com",
            "code": []
          },
          {
            "title": "Codespace settings",
            "slug": "codespace-settings",
            "description": "Configure machine type (CPU/RAM), idle timeout (30min-12hr), devcontainer location, forwarded ports, installed extensions, and access permissions per codespace. Persistent settings across sessions. Stop/start without losing work.",
            "example": "Codespaces → ⋮ → Settings → Machine: 8-core → Idle: 30min",
            "code": []
          }
        ]
      },
      {
        "name": "CLI",
        "slug": "cli",
        "subtopics": [
          {
            "title": "Installing gh CLI",
            "slug": "installing-gh-cli",
            "description": "GitHub CLI (gh) brings complete GitHub workflow to terminal: repo management, issues, PRs, releases, codespaces, actions. Cross-platform installation via Homebrew, winget, apt, chocolatey. Extensible with extensions. Replaces dozens of browser tabs.",
            "example": "brew install gh → winget install GitHub.cli → apt install gh",
            "code": [
              "brew install gh",
              "winget install GitHub.cli"
            ]
          },
          {
            "title": "Authentication",
            "slug": "authentication",
            "description": "Secure browser-based OAuth login stores credentials in system keychain. Supports PAT tokens and SSH keys. gh auth status shows current authentication, refresh, or logout. Non-interactive login available for CI/CD automation.",
            "example": "gh auth login → GitHub.com → Browser → gh auth status",
            "code": [
              "gh auth login",
              "gh auth status",
              "gh auth logout"
            ]
          },
          {
            "title": "Repository commands",
            "slug": "repository-commands",
            "description": "Clone (with PR branches), create new repos, fork repositories, view details, list all repos from terminal. Integrates perfectly with existing git workflow. Search, filter by language/stars/forks.",
            "example": "gh repo clone owner/repo → gh repo view → gh repo create",
            "code": [
              "gh repo clone owner/repo",
              "gh repo create my-repo --public",
              "gh repo fork owner/repo"
            ]
          },
          {
            "title": "Issue commands",
            "slug": "issue-commands",
            "description": "Create issues with templates/labels, list by assignee/milestone/label, view details, edit, close/reopen from terminal. Rich interactive views with vim/emacs support. Perfect for server/headless workflows.",
            "example": "gh issue create --title \"Bug\" → gh issue list → gh issue view 123",
            "code": [
              "gh issue create --title \"Fix login\" --label bug",
              "gh issue list --assignee @me",
              "gh issue close 123"
            ]
          },
          {
            "title": "PR commands",
            "slug": "pr-commands",
            "description": "Create PRs interactively or non-interactively, list/filter PRs, checkout PR branches locally, view diffs/status/reviews, merge/squash/rebase with approval checks. Complete PR workflow without browser.",
            "example": "gh pr create → gh pr checkout 123 → gh pr merge",
            "code": [
              "gh pr create --title \"Add login\" --body \"...\"",
              "gh pr list",
              "gh pr checkout 123",
              "gh pr merge"
            ]
          }
        ]
      },
      {
        "name": "Pages",
        "slug": "pages",
        "subtopics": [
          {
            "title": "About GitHub Pages",
            "slug": "about-github-pages",
            "description": "Free static website hosting directly from GitHub repository at username.github.io/repo or custom domains. Automatic HTTPS, continuous deployment from any branch or /docs folder. Native Jekyll static site generator support. Unlimited sites, 1GB storage.",
            "example": "username.github.io → username.github.io/my-site",
            "code": []
          },
          {
            "title": "Creating site",
            "slug": "creating-site",
            "description": "Deploy static sites instantly via Settings → Pages selecting source branch (main/gh-pages) or /docs folder. Live in under 2 minutes with automatic HTTPS certificate. Custom 404 pages, Jekyll themes, visitor analytics.",
            "example": "Settings → Pages → Source: main:/docs → 2min → live site",
            "code": []
          },
          {
            "title": "Custom domains",
            "slug": "custom-domains",
            "description": "Connect apex domains (mysite.com) and subdomains (www.mysite.com) using DNS A/CNAME records. GitHub automatically provisions/manages HTTPS certificates with Let's Encrypt. DNS verification, enforcement settings, wildcard support.",
            "example": "www.mysite.com → Settings → Pages → Custom domain → Verify",
            "code": []
          },
          {
            "title": "Jekyll support",
            "slug": "jekyll-support",
            "description": "Native Jekyll static site generator with theme support, plugins, collections, data files, pagination. GitHub builds automatically on push. Custom plugins via _plugins folder. Liquid templating, Markdown to HTML conversion.",
            "example": "_config.yml → _posts/ → automatic build/deploy",
            "code": []
          },
          {
            "title": "Actions deployment",
            "slug": "actions-deployment",
            "description": "Deploy any static site generator (Next.js, Gatsby, Hugo, VitePress) using GitHub Actions workflows. Build locally, upload artifacts to Pages via GitHub token. Full control over build process and preview deployments.",
            "example": "next build → npx @netlify/actions/cli@latest pages:deploy",
            "code": []
          }
        ]
      },
      {
        "name": "Packages",
        "slug": "packages",
        "subtopics": [
          {
            "title": "Publishing packages",
            "slug": "publishing-packages",
            "description": "Host npm, Docker, Maven, NuGet, RubyGems, Composer packages tied to GitHub repository with public/private access control matching repo visibility. Unlimited storage/pulls for public repos. Integrated billing and vulnerability scanning.",
            "example": "npm publish → Packages tab → your/package@1.0.0",
            "code": []
          },
          {
            "title": "NPM packages",
            "slug": "npm-packages",
            "description": "Publish scoped npm packages (@owner/package-name) to GitHub Packages registry using GITHUB_TOKEN authentication. Consume in package.json like any npm registry. Automatic vulnerability alerts and dependency graph.",
            "example": "npm publish → npm install @owner/package",
            "code": [
              "npm login --registry=https://npm.pkg.github.com"
            ]
          },
          {
            "title": "Docker containers",
            "slug": "docker-containers",
            "description": "GitHub Container Registry (ghcr.io) hosts Docker OCI images with automatic multi-arch support, vulnerability scanning, and GitHub Actions integration. Images inherit repo permissions. Pull via Docker CLI, Docker Compose, Kubernetes.",
            "example": "ghcr.io/owner/repo/image:tag → docker pull",
            "code": [
              "docker login ghcr.io -u USERNAME",
              "docker push ghcr.io/owner/repo/image:tag"
            ]
          },
          {
            "title": "Package permissions",
            "slug": "package-permissions",
            "description": "Granular read/write/delete permissions for packages scoped to repositories, organizations, or teams. Fine-grained Personal Access Tokens (PATs) with package-specific scopes. Separate from repository permissions.",
            "example": "Settings → Packages → Package permissions",
            "code": []
          }
        ]
      }
    ]
  }
  ,
  {
    "name": "API & Integrations",
    "topics": [
      {
        "name": "REST API",
        "slug": "rest-api",
        "subtopics": [
          {
            "title": "Authentication",
            "slug": "authentication",
            "description": "Authenticate REST API calls using Personal Access Tokens (classic or fine-grained with repo:read/write scopes), GitHub Apps (JWT), OAuth Apps, or GitHub CLI. Tokens stored securely with expiration/scope limits. Fine-grained tokens offer repository-specific permissions vs classic tokens' account-wide access.",
            "example": "Settings → Developer settings → Fine-grained token → repo:read",
            "code": [
              "curl -H \"Authorization: token ghp_...\" https://api.github.com/user",
              "gh api user"
            ]
          },
          {
            "title": "Rate limiting",
            "slug": "rate-limiting",
            "description": "Authenticated users get 5000 requests/hour (100 unauthenticated); Search API limited to 30/min. Response headers show X-RateLimit-Remaining/Limit/Reset. Handle 403/429 responses with exponential backoff. Secondary rate limits apply to resource abuse.",
            "example": "X-RateLimit-Remaining: 4990 → Retry-After header",
            "code": []
          },
          {
            "title": "Repositories API",
            "slug": "repositories-api",
            "description": "Complete repository management: create/list/fork/delete repos, manage collaborators/teams/branches/tags/releases/contents. Pagination with Link headers. Full CRUD operations for repository ecosystem from single API surface.",
            "example": "GET /repos/owner/repo → POST /repos/owner/repo/issues",
            "code": []
          },
          {
            "title": "Issues API",
            "slug": "issues-api",
            "description": "Create/list/comment/close/reopen issues across all repositories. Manage labels, milestones, assignees, projects. Advanced search/filtering by state, assignee, labels, updated date ranges. Bulk operations supported.",
            "example": "POST /repos/owner/repo/issues → GET /issues?assignee=username",
            "code": []
          },
          {
            "title": "Users API",
            "slug": "users-api",
            "description": "Retrieve user profiles, organizations, repositories, followers, gists, activity events, starring status. Search users by username/email/location. Organization membership and team management endpoints.",
            "example": "GET /users/octocat → GET /user/orgs",
            "code": []
          }
        ]
      },
      {
        "name": "GraphQL API",
        "slug": "graphql-api",
        "subtopics": [
          {
            "title": "Explorer",
            "slug": "explorer",
            "description": "Interactive GraphQL playground at developer.github.com/graphql/explorer for testing queries/mutations, exploring schema, autocomplete, syntax validation. Perfect for prototyping complex queries before production integration.",
            "example": "developer.github.com/graphql/explorer → Run query → See data",
            "code": []
          },
          {
            "title": "Schema",
            "slug": "schema",
            "description": "Strongly typed GraphQL schema prevents over-fetching - request only needed fields via single endpoint. Schema introspection enables client code generation. More efficient than REST for complex nested data queries.",
            "example": "query { repository(owner:\"octocat\", name:\"Hello-World\") { name } }",
            "code": []
          },
          {
            "title": "Mutations",
            "slug": "mutations",
            "description": "GraphQL mutations handle create/update/delete operations with input objects and clientMutationId for idempotency tracking. Return updated objects immediately. Consistent with query syntax patterns.",
            "example": "addStar(input:{starrableId:\"MDEwOlJlcG9zaXRvcnkyNTUwMDY3ODc=\"})",
            "code": []
          },
          {
            "title": "Subscriptions",
            "slug": "subscriptions",
            "description": "Real-time event subscriptions via Server-Sent Events for repository, pull request, issue, discussion events. Push-based updates eliminate polling. Enterprise-only feature currently.",
            "example": "subscription { repository(id: \"MDEwOlJlcG9zaXRvcnkyNTUwMDY3ODc=\") { ... } }",
            "code": []
          }
        ]
      },
      {
        "name": "Apps",
        "slug": "apps",
        "subtopics": [
          {
            "title": "GitHub Apps",
            "slug": "github-apps",
            "description": "Installable applications with granular repository/organization permissions, JWT authentication, webhooks, and short-lived installation tokens. Preferred for integrations/bots over OAuth. Automatic permission requests during installation.",
            "example": "Developer settings → GitHub Apps → New → Permissions → Install",
            "code": []
          },
          {
            "title": "OAuth Apps",
            "slug": "oauth-apps",
            "description": "Traditional OAuth 2.0 applications for user context authentication with predefined scopes (repo, user, gist). Simpler setup than GitHub Apps for web applications needing temporary user access tokens.",
            "example": "Settings → Developer settings → OAuth Apps → Register new app",
            "code": []
          },
          {
            "title": "Installing apps",
            "slug": "installing-apps",
            "description": "Install apps to specific repositories, all organization repositories, or user account. Manage installation permissions, webhook endpoints, subscribed events during installation flow. Users grant explicit permissions.",
            "example": "Repo → Settings → Integrations → Search app → Configure → Install",
            "code": []
          },
          {
            "title": "Webhooks",
            "slug": "webhooks",
            "description": "Event-driven HTTP callbacks delivering JSON payloads for repository/organization events (push, PR, issues, releases). HMAC signature verification ensures authenticity. Retry delivery on failures with exponential backoff.",
            "example": "Settings → Webhooks → Add webhook → Payload URL → Content type",
            "code": []
          }
        ]
      }
    ]
  }
  ,
  {
    "name": "Admin & Security",
    "topics": [
      {
        "name": "Organizations",
        "slug": "organizations",
        "subtopics": [
          {
            "title": "Creating organization",
            "slug": "creating-organization",
            "description": "Create team workspaces for companies, open source projects, or departments to collaborate on private repositories with advanced admin controls. Set billing, choose plan (Free, Team, Enterprise), configure SAML SSO, IP restrictions, and security policies at organization level. Perfect for moving beyond personal account limitations.",
            "example": "+ New organization → Plan → Billing → Create",
            "code": []
          },
          {
            "title": "Members & teams",
            "slug": "members-teams",
            "description": "Invite unlimited members as employees/collaborators with role-based permissions (Owner, Member, Outside Collaborator). Create nested teams (Engineering → Frontend, Backend) with repository access (Admin/Write/Read). 2FA enforcement, session timeouts, require approval for new members.",
            "example": "People → Invite → Teams → Add repositories → Permissions",
            "code": []
          },
          {
            "title": "Billing",
            "slug": "billing",
            "description": "Centralized billing dashboard manages all organization subscriptions, seat usage, private minutes, storage, GitHub Packages, Codespaces usage. Upgrade/downgrade plans, add payment methods, view invoices, set spending limits. Consolidated billing across all repositories.",
            "example": "Organization → Settings → Billing → Usage → Invoices",
            "code": []
          },
          {
            "title": "SAML SSO",
            "slug": "saml-sso",
            "description": "Enterprise Single Sign-On integration with Okta, Azure AD, Auth0, OneLogin. Just-in-time user provisioning creates GitHub accounts automatically from identity provider. Enforce organization-wide SSO policy - no GitHub password access without SSO. SCIM user/group sync.",
            "example": "Settings → Security → SAML SSO → Identity provider → Configure",
            "code": []
          }
        ]
      },
      {
        "name": "Enterprise",
        "slug": "enterprise",
        "subtopics": [
          {
            "title": "GitHub Enterprise Cloud",
            "slug": "github-enterprise-cloud",
            "description": "Fully managed enterprise platform with enterprise-grade features: SCIM user provisioning, SAML SSO, IP allow lists, audit logs (90+ days), data residency (US/EU), 24/7 enterprise support. No infrastructure management. Automatic upgrades, 99.9% uptime SLA.",
            "example": "Enterprise settings → SCIM → IP restrictions → Audit log",
            "code": []
          },
          {
            "title": "GitHub Enterprise Server",
            "slug": "github-enterprise-server",
            "description": "Self-hosted enterprise solution for air-gapped networks, compliance requirements, custom integrations. Complete control over infrastructure, data sovereignty, custom authentication. On-premises VM/container deployment with backup/restore, high availability.",
            "example": "Download Enterprise Server → Deploy VM → Configure network",
            "code": []
          },
          {
            "title": "Licensing",
            "slug": "licensing",
            "description": "Enterprise seat management tracks licensed vs active users, license usage reports, seat reassignment. User types: Licensed (full features), Unlicensed (limited), Disabled. Annual/monthly billing cycles with prorated adjustments.",
            "example": "Enterprise → Licensing → Seat usage → Add seats",
            "code": []
          },
          {
            "title": "Migration",
            "slug": "migration",
            "description": "Large-scale migration from GitHub Enterprise Server, Bitbucket, GitLab, SVN to GitHub Cloud/Server. Migrate repositories, metadata, issues, PRs, wikis, milestones. Large monorepo support (10M+ files), zero-downtime cutover, rollback capabilities.",
            "example": "Enterprise → Migration → Source platform → Select repos → Migrate",
            "code": []
          }
        ]
      }
    ]
  }

]



export const rightSidebarData = {
  "sections": [
    {
      "title": "Git Essentials",
      "commands": [
        {
          "code": "git init",
          "description": "Initialize a repository"
        },
        {
          "code": "git add .",
          "description": "Stage all changes"
        },
        {
          "code": "git commit -m \"message\"",
          "description": "Commit changes"
        },
        {
          "code": "git push",
          "description": "Push to remote"
        },
        {
          "code": "git pull",
          "description": "Pull from remote"
        }
      ]
    },
    {
      "title": "Git Tips",
      "commands": [
        {
          "code": "git status",
          "description": "to check repository state"
        },
        {
          "code": "git log --oneline",
          "description": "for concise commit history"
        },
        {
          "code": "git branch -a",
          "description": "to list all branches"
        },
        {
          "code": "git stash",
          "description": "to temporarily save changes"
        },
        {
          "code": "git reset --hard HEAD~1",
          "description": "to undo last commit"
        }
      ]
    }
  ]
};



// <button
//   onClick={() => navigate('/docs')}
//   className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
// >
//   <span className="relative z-10">Start Learning</span>
//   <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
// </button>


