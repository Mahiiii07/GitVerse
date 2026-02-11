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
              "gh repo create my-new-repo --public --source=.",
              "gh repo create my-new-repo --private --license MIT"
            ]
          },
          {
            "title": "List Repositories",
            "slug": "list-repos",
            "description": "View all your repositories or organization repos filtered by visibility, language, stars, forks. Essential for managing multiple projects and finding specific repos quickly.",
            "example": "gh repo list → see all your repos",
            "code": [
              "gh repo list",
              "gh repo list --limit 20 --json name,visibility"
            ]
          },
          {
            "title": "View Repository",
            "slug": "view-repo",
            "description": "Shows complete repository details including description, stars, forks, language, license, default branch, and recent commits. Opens in browser with --web flag.",
            "example": "gh repo view → full repo info",
            "code": [
              "gh repo view owner/repo",
              "gh repo view ."
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
              "gh repo fork original-owner/repo",
              "git remote add upstream https://github.com/original-owner/repo.git"
            ]
          },
          {
            "title": "Cloning repository",
            "slug": "cloning-repository",
            "description": "Downloads complete repository with full Git history, all branches, tags, and remote configuration to your local machine. Automatically creates origin remote pointing to GitHub. Creates new directory with repo name unless specified otherwise.",
            "example": "copy URL → git clone → full history downloaded",
            "code": [
              "gh repo clone owner/repo",
              "git clone https://github.com/owner/repo.git"
            ]
          },
          {
            "title": "Visibility settings",
            "slug": "visibility-settings",
            "description": "Toggle between public (free, unlimited, discoverable) and private (collaborators only, plan limits) repository access. Public repos indexed by GitHub search; private repos require explicit invitations. Change anytime from Settings → Danger Zone.",
            "example": "Settings → Danger Zone → change visibility → confirm",
            "code": [
              "gh repo edit owner/repo --visibility private"
            ]
          },
          {
            "title": "Renaming repository",
            "slug": "renaming-repository",
            "description": "Changes repository name updating all clone URLs, web URLs, GitHub Actions automatically while preserving stars, forks, watchers, issues, PRs, topics. Update local remotes after rename. No downtime during rename process.",
            "example": "Settings → repo name → new-name → update remotes",
            "code": [
              "gh repo rename owner/repo new-repo-name",
              "git remote set-url origin https://github.com/username/new-repo-name.git"
            ]
          },
          {
            "title": "Archiving repository",
            "slug": "archive-repo",
            "description": "Marks repository as read-only archive preventing further pushes while preserving all history, issues, PRs. Perfect for completed projects or deprecated libraries. Unarchive anytime.",
            "example": "gh repo archive → freeze project",
            "code": [
              "gh repo edit owner/repo --archived"
            ]
          },
          {
            "title": "Deleting repository",
            "slug": "deleting-repository",
            "description": "Permanently deletes repository and all contents (code, issues, PRs, wikis, projects, Actions) from GitHub. Forks and local clones remain unaffected. Requires typing repository name confirmation. Use with extreme caution.",
            "example": "Settings → Danger Zone → delete → type name → confirm",
            "code": [
              "gh repo delete owner/repo",
              "gh repo delete owner/repo --confirm"
            ]
          }
        ]
      }
      ,
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
            "title": "List Issues",
            "slug": "list-issues",
            "description": "View all open/closed issues filtered by assignee, label, milestone, or state. Essential for daily triage, progress tracking, and team coordination. JSON output for automation.",
            "example": "gh issue list → see assigned work",
            "code": [
              "gh issue list --assignee @me",
              "gh issue list --label bug",
              "gh issue list --state closed --limit 20"
            ]
          },
          {
            "title": "View Issue",
            "slug": "view-issue",
            "description": "Opens specific issue in browser or shows details in terminal with comments, labels, assignees, timeline, and linked PRs. Perfect for deep dive without leaving terminal.",
            "example": "gh issue view → full details",
            "code": [
              "gh issue view 123",
              "gh issue view 123 --web"
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
              "gh issue edit 123 --add-label bug",
              "gh issue edit 123 --add-label \"help wanted\""
            ]
          },
          {
            "title": "Editing Issues",
            "slug": "edit-issues",
            "description": "Update issue title, body, assignees, labels interactively or via CLI. Bulk edit multiple issues with JSON input. Perfect for correcting typos or updating status during triage.",
            "example": "gh issue edit → interactive mode",
            "code": [
              "gh issue edit 123 --title \"Updated: login crash\"",
              "gh issue edit 123 --body \"New steps...\""
            ]
          },
          {
            "title": "Linking issues/PRs",
            "slug": "linking-issues-prs",
            "description": "Reference related work using #123, closes #456, fixes #789, duplicates #123 syntax. Creates bidirectional links and auto-closes referenced issues when PR merges. Essential for connecting bug → PR → fix workflow.",
            "example": "#123 fixes #456 → auto-links + closes on merge",
            "code": [
              "closes #123",
              "fixes #456",
              "duplicates #789"
            ]
          },
          {
            "title": "Close Issue",
            "slug": "close-issue",
            "description": "Closes specific issue marking as completed. Use --comment for final note or --body for custom close message. Reopens with gh issue reopen.",
            "example": "gh issue close → done",
            "code": [
              "gh issue close 123",
              "gh issue close 123 --comment \"Fixed in #456\""
            ]
          },
          {
            "title": "Draft Issues",
            "slug": "draft-issues",
            "description": "Mark issues as drafts (WIP) for early feedback without cluttering main board or triggering notifications. Convert to regular issue when ready for triage.",
            "example": "Draft → feedback → promote to issue",
            "code": [
              "gh issue edit 123 --draft"
            ]
          }
        ]
      }
      ,
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
              "git checkout main",
              "git branch -d feature/done"
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
              "git rebase main",
              "git push --force-with-lease"
            ]
          },
          {
            "title": "Current Branch",
            "slug": "current-branch",
            "description": "Check which branch you're currently on and see recent commits. Essential before starting new work or switching contexts.",
            "example": "git branch → * main (current)",
            "code": [
              "git branch",
              "git status"
            ]
          },
          {
            "title": "Rebasing vs merging",
            "slug": "rebasing-vs-merging",
            "description": "Rebase (git rebase main) replays commits linearly on latest main for clean history but rewrites history. Merge (git merge main) preserves exact branch timeline with merge commit. Use rebase locally, merge via PR.",
            "example": "Rebase: linear → Merge: preserves history",
            "code": [
              "git rebase main",
              "git merge main",
              "git merge main --no-ff"
            ]
          },
          {
            "title": "Interactive Rebase",
            "slug": "interactive-rebase",
            "description": "Edit, reorder, squash, or drop commits before pushing. Opens editor showing recent commits with pick, reword, edit, squash, drop options. Essential for cleaning history.",
            "example": "rebase -i → squash 5 → \"feat: login\"",
            "code": [
              "git rebase -i HEAD~5",
              "git rebase -i main"
            ]
          },
          {
            "title": "Squash commits",
            "slug": "squash-commits",
            "description": "Combine multiple small/debug commits into single logical commit using interactive rebase or GitHub squash merge. git rebase -i HEAD~n lets you reorder/edit/squash commits before pushing.",
            "example": "5 commits → \"Add login + tests\"",
            "code": [
              "git rebase -i HEAD~5",
              "git commit --amend --no-edit"
            ]
          },
          {
            "title": "Sync with Main",
            "slug": "sync-main",
            "description": "Update feature branch with latest main changes before PR. Rebase for linear history or merge for full context preservation. Always sync before final review.",
            "example": "feature → sync main → PR ready",
            "code": [
              "git fetch origin",
              "git rebase origin/main",
              "git push --force-with-lease"
            ]
          },
          {
            "title": "GitHub Flow",
            "slug": "github-flow",
            "description": "Simple lightweight workflow for GitHub: main → create branch → edit → push → PR → review/merge → delete branch → repeat. Perfect for small teams, frequent releases, continuous deployment.",
            "example": "main → branch → PR → merge → repeat",
            "code": [
              "git checkout -b fix/navbar",
              "git add . && git commit -m 'fix: navbar'",
              "git push origin fix/navbar",
              "gh pr create"
            ]
          },
          {
            "title": "Git Flow",
            "slug": "git-flow",
            "description": "Structured branching model with develop, feature, release, hotfix, support branches. develop holds integration, main holds production. Automated with git-flow tools.",
            "example": "develop → feature/ → release/v1.0 → main",
            "code": [
              "git flow init",
              "git flow feature start login",
              "git flow feature finish login"
            ]
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
              "git add .",
              "git add -A"
            ]
          },
          {
            "title": "Unstage Files",
            "slug": "unstage",
            "description": "Removes files from staging area but keeps changes in working directory. Perfect for correcting staging mistakes before commit. Use specific files or --name-only to review staged changes.",
            "example": "git reset → unstage App.js",
            "code": [
              "git reset src/App.js",
              "git restore --staged src/App.js"
            ]
          },
          {
            "title": "Commit Changes",
            "slug": "commit",
            "description": "Records staged changes as a permanent snapshot in Git history with a descriptive message, creating a new commit with unique SHA hash. Each commit represents a complete project state at that moment. Use conventional commit messages (feat:, fix:, docs:) for automated changelogs.",
            "example": "git commit → \"feat: add login page\"",
            "code": [
              "git commit -m \"Add responsive navbar\"",
              "git commit -m \"feat: add login page\""
            ]
          },
          {
            "title": "Commit Amend",
            "slug": "commit-amend",
            "description": "Modifies most recent commit message or adds forgotten files without creating new commit. Perfect for fixing typos or staging missed files before pushing. Never amend shared commits.",
            "example": "git commit --amend → fix message",
            "code": [
              "git commit --amend -m \"Better message\"",
              "git add forgotten-file.js && git commit --amend --no-edit"
            ]
          },
          {
            "title": "View Last Commit",
            "slug": "show-commit",
            "description": "Shows details of most recent commit including diff, message, author, date. Essential for verifying what was committed before pushing.",
            "example": "git show → verify last commit",
            "code": [
              "git show",
              "git log -1 --oneline"
            ]
          },
          {
            "title": "View History",
            "slug": "view-history",
            "description": "Shows commit history starting from most recent. Use --oneline for compact view, -n 3 for last 3 commits. Essential for understanding project evolution.",
            "example": "git log → see commit history",
            "code": [
              "git log --oneline",
              "git log -3 --oneline"
            ]
          }
        ]
      }
      ,
      {
        "name": "Branching",
        "slug": "branching",
        "subtopics": [
          {
            "title": "List Branches",
            "slug": "branch",
            "description": "Displays all local branches with * marking current branch. Shows last commit message for each branch. Use -v flag for verbose output including commit hashes and tracking info. Essential for understanding current branch context before switching.",
            "example": "git branch → * main, feature/ui",
            "code": [
              "git branch",
              "git branch -v"
            ]
          },
          {
            "title": "Current Branch",
            "slug": "current-branch",
            "description": "Quickly identify which branch you're on without listing all branches. Perfect for scripts and daily context awareness before starting new work.",
            "example": "git branch-name → main",
            "code": [
              "git branch --show-current",
              "git rev-parse --abbrev-ref HEAD"
            ]
          },
          {
            "title": "Create Branch",
            "slug": "checkout-new",
            "description": "Creates new branch from current HEAD and immediately switches to it in single command. Perfect for starting isolated feature work without affecting main branch. Branch pointer moves with each new commit as you develop.",
            "example": "git checkout -b → bugfix/navbar-crash",
            "code": [
              "git checkout -b feature/login",
              "git switch -c feature/login"
            ]
          },
          {
            "title": "Switch Branch",
            "slug": "checkout",
            "description": "Switches to existing branch, automatically stashing any uncommitted changes. Git automatically merges incoming branch changes with your working directory when possible. Use git switch (Git 2.23+) as modern alternative.",
            "example": "git checkout → main (from feature)",
            "code": [
              "git checkout main",
              "git switch main"
            ]
          },
          {
            "title": "Rename Branch",
            "slug": "rename-branch",
            "description": "Renames current or specified branch locally. Use -m to move remote tracking branch too. Perfect for correcting typos or following naming conventions before pushing.",
            "example": "git branch → fix-typo → fix/navbar",
            "code": [
              "git branch -m fix-typo fix/navbar",
              "git branch -m old-name new-name"
            ]
          },
          {
            "title": "Remote Branches",
            "slug": "remote-branches",
            "description": "Lists remote tracking branches from origin. Essential for seeing team branches before checkout or merge. Update with git fetch first.",
            "example": "git branch -r → origin/feature/team",
            "code": [
              "git branch -r",
              "git fetch --all"
            ]
          },
          {
            "title": "All Branches",
            "slug": "all-branches",
            "description": "Shows local and remote branches together. Perfect for understanding complete repository state across team.",
            "example": "git branch -a → local + remote",
            "code": [
              "git branch -a"
            ]
          },
          {
            "title": "Delete Branch",
            "slug": "branch-delete",
            "description": "Deletes fully merged local branch after PR approval. Use -d for safe delete (fails if unmerged), -D for force delete unmerged branches, -r to delete remote tracking branch too. Cleans up repository after successful merges.",
            "example": "git branch -d → cleanup done branches",
            "code": [
              "git branch -d feature/login",
              "git branch -D feature/broken",
              "git push origin --delete feature/login"
            ]
          },
          {
            "title": "Track Remote",
            "slug": "track-remote",
            "description": "Sets up local branch to track remote branch for simplified push/pull. Essential after cloning forks or creating matching remote branches.",
            "example": "git branch → track origin/main",
            "code": [
              "git branch --set-upstream-to=origin/main",
              "git push -u origin feature/new"
            ]
          }
        ]
      }
      ,
      {
        "name": "Remote Workflow",
        "slug": "remote-workflow",
        "subtopics": [
          {
            "title": "List Remotes",
            "slug": "list-remotes",
            "description": "Shows all configured remote repositories with their URLs. Essential for verifying connections and understanding repository setup. Use -v for verbose output showing fetch/push URLs.",
            "example": "git remote → origin, upstream",
            "code": [
              "git remote -v",
              "git remote"
            ]
          },
          {
            "title": "Add Remote",
            "slug": "remote-add",
            "description": "Links local repository to GitHub/GitLab remote server using repository URL. Multiple remotes possible (origin, upstream). Use git remote -v to verify. Essential for push/pull collaboration with remote teams.",
            "example": "git remote add → origin gitverse/main",
            "code": [
              "git remote add origin https://github.com/username/repo.git",
              "git remote add upstream https://github.com/original-owner/repo.git"
            ]
          },
          {
            "title": "Change Remote URL",
            "slug": "remote-url",
            "description": "Updates existing remote URL when repository moves or SSH keys change. Supports rename with set-url. Perfect for switching between HTTPS and SSH remotes.",
            "example": "git remote → change HTTPS to SSH",
            "code": [
              "git remote set-url origin git@github.com:username/repo.git",
              "git remote rename origin upstream"
            ]
          },
          {
            "title": "Remove remote",
            "slug": "remote-remove",
            "description": "Deletes an existing remote repository reference from your local Git project. Useful when a remote URL is no longer valid, a repository has been moved, or you no longer want to sync with that remote. This only removes the link, not the actual repository.",
            "example": "Project folder → remove old remote → add new remote if needed",
            "code": [
              "git remote remove origin",
              "git remote remove upstream"
            ]
          },
          {
            "title": "Fetch Changes",
            "slug": "fetch",
            "description": "Downloads latest commits, branches, tags from remote without merging. Updates remote-tracking branches (origin/main). Safe way to see team changes before pull/rebase.",
            "example": "git fetch → see latest changes",
            "code": [
              "git fetch origin",
              "git fetch --all"
            ]
          },
          {
            "title": "Push Changes",
            "slug": "push",
            "description": "Uploads local commits to remote repository. First push requires origin branch specification; -u sets upstream tracking for future git push simplicity. Use --force-with-lease for safe force pushes after rebase.",
            "example": "git push → origin feature/login",
            "code": [
              "git push -u origin feature/login",
              "git push",
              "git push --force-with-lease"
            ]
          },
          {
            "title": "Pull Latest",
            "slug": "pull",
            "description": "Fetches latest remote changes and merges into current branch (git fetch + git merge). Resolves most common sync scenarios. Use git pull --rebase for linear history. Always pull before starting new features.",
            "example": "git pull → sync team changes",
            "code": [
              "git pull origin main",
              "git pull --rebase origin main"
            ]
          },
          {
            "title": "Delete Remote Branch",
            "slug": "delete-remote",
            "description": "Deletes remote branch after merge. Use :refs/heads/branch syntax or --delete flag. Essential cleanup after PR approval.",
            "example": "git push → delete merged branch",
            "code": [
              "git push origin --delete feature/login",
              "git push origin :feature/login"
            ]
          },
          {
            "title": "Clone Repo",
            "slug": "clone",
            "description": "Downloads complete repository including full commit history, all branches, tags, and remotes to new directory. Creates origin remote automatically. Perfect for starting fresh on new projects or team contributions.",
            "example": "git clone → gitverse-project",
            "code": [
              "git clone https://github.com/username/repo.git",
              "gh repo clone owner/repo",
              "git clone --depth 1 https://github.com/username/repo.git"
            ]
          }
        ]
      }
      ,
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
              "git merge feature/login",
              "git merge --no-ff feature/login"
            ]
          },
          {
            "title": "Fast Forward Merge",
            "slug": "fast-forward",
            "description": "Automatic linear merge when destination branch has no diverging commits. No merge commit created, history stays perfectly linear. Fastest and cleanest merge type.",
            "example": "git merge → linear history",
            "code": [
              "git merge --ff-only feature/login"
            ]
          },
          {
            "title": "Abort Merge",
            "slug": "merge-abort",
            "description": "Cancels conflicted merge operation, discarding merge commit and returning to pre-merge state. Use when conflicts too complex or need team input. All changes preserved exactly as before merge attempt.",
            "example": "git merge --abort → fix conflicts later",
            "code": [
              "git merge --abort"
            ]
          },
          {
            "title": "View Conflicts",
            "slug": "diff-conflict",
            "description": "Identifies conflicted files with <<<<<<< HEAD ======= >>>>>>> markers showing competing changes. git status highlights conflicted files. Edit files manually to resolve, then git add to mark resolved.",
            "example": "git diff → see <<<<<<< HEAD markers",
            "code": [
              "git status",
              "git diff",
              "git diff --name-only --diff-filter=U"
            ]
          },
          {
            "title": "Merge Tool",
            "slug": "merge-tool",
            "description": "Launches visual merge conflict resolution tool (VS Code, vimdiff, meld). Automatically detects conflicted files and opens 3-way merge view showing base, ours, theirs.",
            "example": "git mergetool → visual resolution",
            "code": [
              "git mergetool",
              "git mergetool -t vscode"
            ]
          },
          {
            "title": "Accept Changes",
            "slug": "accept-changes",
            "description": "Automatically resolve conflicts by accepting current branch (ours), target branch (theirs), or both. Perfect for simple conflicts or when you know which version to keep.",
            "example": "git checkout → accept ours/theirs",
            "code": [
              "git checkout --ours src/App.js",
              "git checkout --theirs src/App.js"
            ]
          },
          {
            "title": "Resolve & Commit",
            "slug": "add-after-merge",
            "description": "After manually editing conflicted files to resolve differences, stage resolved files and create merge commit to complete integration. Git recognizes merge completion automatically. Always test thoroughly post-merge.",
            "example": "git add → commit \"fix: merge conflicts\"",
            "code": [
              "git add .",
              "git add src/App.js",
              "git commit -m \"Resolve merge conflicts\""
            ]
          },
          {
            "title": "Continue Merge",
            "slug": "continue-merge",
            "description": "Resumes merge after resolving conflicts and staging files. Git automatically creates final merge commit with default message. Use when you staged all resolved files.",
            "example": "git commit → complete merge",
            "code": [
              "git commit"
            ]
          }
        ]
      }
      ,
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
              "git commit --amend",
              "git commit --amend --no-edit"
            ]
          },
          {
            "title": "Revert Commit",
            "slug": "revert",
            "description": "Creates new commit undoing specific commit changes while preserving history. Safe for shared repositories since it doesn't rewrite history. Shows exact reversion in commit log.",
            "example": "git revert → abc123 (breaking change)",
            "code": [
              "git revert abc1234",
              "git revert HEAD~1"
            ]
          },
          {
            "title": "Reset Soft",
            "slug": "reset-soft",
            "description": "Removes commits from history but keeps all changes staged, perfect for combining multiple small commits into logical units before pushing. Changes remain ready to recommit.",
            "example": "git reset --soft → squash last 2 commits",
            "code": [
              "git reset --soft HEAD~1",
              "git reset --soft HEAD~2"
            ]
          },
          {
            "title": "Reset Mixed",
            "slug": "reset-mixed",
            "description": "Removes commits from history and unstages changes but keeps them in working directory. Perfect for rewording multiple commits or changing staging before new commits.",
            "example": "git reset → unstage but keep changes",
            "code": [
              "git reset HEAD~1",
              "git reset --mixed HEAD~2"
            ]
          },
          {
            "title": "Reset Hard",
            "slug": "reset-hard",
            "description": "Completely removes commits and discards all changes in working directory and staging area. DANGEROUS - permanently destroys uncommitted work. Only use on unpushed commits.",
            "example": "git reset --hard → total cleanup",
            "code": [
              "git reset --hard HEAD~1",
              "git reset --hard origin/main"
            ]
          },
          {
            "title": "Discard Changes",
            "slug": "checkout-discard",
            "description": "Permanently discards uncommitted changes in working directory or specific files, reverting to last commit state. Use with caution—irrecoverable without backups. Perfect for cleaning accidental changes.",
            "example": "git checkout -- → remove bad changes",
            "code": [
              "git checkout -- .",
              "git checkout -- src/App.js",
              "git restore ."
            ]
          },
          {
            "title": "Unstage Files",
            "slug": "restore-staged",
            "description": "Removes files from staging area but preserves working directory changes. Modern Git command replacing git reset HEAD. Perfect for staging corrections.",
            "example": "git restore → unstage mistakes",
            "code": [
              "git restore --staged src/App.js",
              "git restore --staged ."
            ]
          },
          {
            "title": "Reflog Recovery",
            "slug": "reflog",
            "description": "Ultimate safety net showing all HEAD movements (checkouts, resets, rebases). Recover lost commits even after reset --hard using reflog references.",
            "example": "git reflog → recover lost work",
            "code": [
              "git reflog",
              "git reset --hard HEAD@{2}"
            ]
          }
        ]
      }
      ,
      {
        "name": "Stashing",
        "slug": "stashing",
        "subtopics": [
          {
            "title": "Stash Changes",
            "slug": "stash",
            "description": "Temporarily saves uncommitted working directory and index state to special stash stack, giving clean working directory for urgent bug fixes or branch switches. Automatically includes untracked files with -u flag.",
            "example": "git stash → switch to urgent bugfix",
            "code": [
              "git stash",
              "git stash -u",
              "git stash push -m \"WIP: login page\""
            ]
          },
          {
            "title": "List Stashes",
            "slug": "stash-list",
            "description": "Shows all stashes on stack with descriptive names including branch and commit message. Use stash@{n} syntax to reference specific stashes. Essential for managing multiple WIP sessions.",
            "example": "git stash list → stash@{0}: WIP on main",
            "code": [
              "git stash list",
              "git stash list --stat"
            ]
          },
          {
            "title": "Apply Stash",
            "slug": "stash-apply",
            "description": "Restores specific stash to working directory without removing from stash stack, enabling continued work on WIP. May create conflicts requiring manual resolution. Use apply vs pop based on reuse needs.",
            "example": "git stash apply → continue login feature",
            "code": [
              "git stash apply",
              "git stash apply stash@{1}"
            ]
          },
          {
            "title": "Pop Stash",
            "slug": "stash-pop",
            "description": "Applies most recent stash to working directory AND removes it from stack. Perfect for one-time use stashes. Fails if conflicts occur, preserving stash until manually resolved.",
            "example": "git stash pop → apply + delete",
            "code": [
              "git stash pop",
              "git stash pop stash@{1}"
            ]
          },
          {
            "title": "Stash Preview",
            "slug": "stash-show",
            "description": "Shows changes in specific stash without applying. Use --stat for summary or -p for full patch. Perfect for deciding which stash to restore.",
            "example": "git stash show → preview changes",
            "code": [
              "git stash show",
              "git stash show -p stash@{1}"
            ]
          },
          {
            "title": "Drop Stash",
            "slug": "stash-drop",
            "description": "Permanently deletes specific stash from stack when WIP completed or no longer needed. Use stash@{0} for most recent. Clears clutter from git stash list for better organization.",
            "example": "git stash drop → cleanup old wip",
            "code": [
              "git stash drop",
              "git stash drop stash@{2}",
              "git stash clear"
            ]
          },
          {
            "title": "Branch from Stash",
            "slug": "stash-branch",
            "description": "Creates new branch from stashed changes and applies them. Perfect for recovering interrupted work and continuing on dedicated branch. Applies and drops stash automatically.",
            "example": "git stash branch → recover WIP",
            "code": [
              "git stash branch feature/recover-login stash@{0}"
            ]
          }
        ]
      }
      ,
      {
        "name": "History & Logs",
        "slug": "history-logs",
        "subtopics": [
          {
            "title": "Basic Log",
            "slug": "log",
            "description": "Shows complete commit history for current branch with full commit messages, authors, dates, and SHAs. Default view includes subject, body, metadata. Use q to quit pager, space to scroll, / to search.",
            "example": "git log → see all commits from current position",
            "code": [
              "git log",
              "git log --stat"
            ]
          },
          {
            "title": "Compact History",
            "slug": "log-oneline",
            "description": "One-line-per-commit format perfect for quick scanning. Shows abbreviated SHA, author, relative time, and subject only. Essential daily command for recent activity overview.",
            "example": "git log --oneline → abc1234 John 2hrs ago Fix login",
            "code": [
              "git log --oneline",
              "git log --oneline -10"
            ]
          },
          {
            "title": "Visual Graph",
            "slug": "log-graph",
            "description": "ASCII art branch visualization showing merges, diverges, and parallel development. Compact format reveals repository topology instantly. Combine with --oneline for maximum clarity.",
            "example": "git log --graph → * main, | feature/, *\\ merge",
            "code": [
              "git log --oneline --graph",
              "git log --oneline --graph --all"
            ]
          },
          {
            "title": "Limit Commits",
            "slug": "log-limit",
            "description": "Shows only most recent commits for quick overview. Use -n or -# syntax. Perfect for daily status checks without full history.",
            "example": "git log -5 → recent 5 commits",
            "code": [
              "git log -5",
              "git log -n 3 --oneline"
            ]
          },
          {
            "title": "Date Filter",
            "slug": "log-since",
            "description": "Filter commits by date range using natural language or ISO format. Perfect for sprint reviews, release audits, or weekly summaries. Pairs with --author for individual contributions.",
            "example": "git log --since=\"last week\" → recent activity",
            "code": [
              "git log --since=\"2026-01-01\"",
              "git log --until=\"2026-01-13\""
            ]
          },
          {
            "title": "Diff History",
            "slug": "log-diff",
            "description": "Shows commit history with full file diffs for code changes. Limit with -2 for recent commits only. Essential for code review and understanding exact changes in recent history.",
            "example": "git log -p → see code changes + commits",
            "code": [
              "git log -p -2",
              "git log -p -- src/App.js"
            ]
          },
          {
            "title": "Author Filter",
            "slug": "log-author",
            "description": "Shows commits by specific author across all branches. Perfect for code reviews, contribution analysis, or finding who changed specific functionality.",
            "example": "git log --author → find John's commits",
            "code": [
              "git log --author=\"John\"",
              "git shortlog -sn"
            ]
          },
          {
            "title": "File History",
            "slug": "log-file",
            "description": "Shows commit history for specific file across all branches. Perfect for debugging when/why file changed. Follows renames by default.",
            "example": "git log → src/App.js changes",
            "code": [
              "git log -- src/App.js",
              "git log --follow src/App.js"
            ]
          },
          {
            "title": "Author Summary",
            "slug": "shortlog",
            "description": "Groups commits by author with commit counts. Perfect for sprint reports, contributor recognition, or understanding team contributions by volume.",
            "example": "git shortlog → John (15), Jane (8)",
            "code": [
              "git shortlog -sn",
              "git shortlog -sn -10"
            ]
          }
        ]
      }
      ,
      {
        "name": "Tags & Releases",
        "slug": "tags-releases",
        "subtopics": [
          {
            "title": "Lightweight Tag",
            "slug": "tag-lightweight",
            "description": "Creates simple pointer to specific commit without message or signature. Fast for internal markers. Shows in git tag list and git log --tags. Use semantic versioning (v1.0.0).",
            "example": "git tag v1.0.0 → mark current commit",
            "code": [
              "git tag v1.0.0",
              "git tag v1.0.0 abc1234"
            ]
          },
          {
            "title": "Annotated Tag",
            "slug": "tag-annotated",
            "description": "Full tag object with message, tagger name/email, date, and GPG signature option. Required for signed tags and GitHub Releases. Preserves complete metadata like commits.",
            "example": "git tag -a → create release tag",
            "code": [
              "git tag -a v1.0.0 -m \"Release v1\"",
              "git tag -s v1.0.0 -m \"Signed release\""
            ]
          },
          {
            "title": "List Tags",
            "slug": "tag-list",
            "description": "Displays all tags sorted chronologically with latest first. Use -l pattern for filtering. Essential for release management and deployment tagging.",
            "example": "git tag → v1.2.0, v1.1.0, v1.0.0",
            "code": [
              "git tag",
              "git tag -l v1.*"
            ]
          },
          {
            "title": "Tag Info",
            "slug": "tag-info",
            "description": "Shows complete details of specific tag including message, tagger, date, and pointed commit. Perfect for verifying release information.",
            "example": "git show → v1.0.0 details",
            "code": [
              "git show v1.0.0",
              "git tag -n1"
            ]
          },
          {
            "title": "Checkout Tag",
            "slug": "checkout-tag",
            "description": "Switches to exact commit state of specific tag creating detached HEAD. Perfect for hotfixes from release tags or inspecting old releases. Use git checkout -b for new branch.",
            "example": "git checkout v1.0 → release state",
            "code": [
              "git checkout v1.0.0",
              "git checkout -b hotfix/v1.1 v1.0.0"
            ]
          },
          {
            "title": "Push Tags",
            "slug": "push-tags",
            "description": "Sends all local tags to remote repository enabling GitHub Releases and tag-based deployments. Use specific tag or --tags for all. Essential after creating release tags.",
            "example": "git push --tags → sync all tags",
            "code": [
              "git push origin --tags",
              "git push origin v1.0.0"
            ]
          },
          {
            "title": "Delete Tag",
            "slug": "tag-delete",
            "description": "Removes local tag reference. Use git push origin :refs/tags/tagname to delete remote tag too. Perfect for fixing typos or retracted releases.",
            "example": "git tag -d → cleanup wrong tag",
            "code": [
              "git tag -d v1.0.0",
              "git push origin :refs/tags/v1.0.0"
            ]
          }
        ]
      }
      ,
      {
        "name": "Advanced Operations",
        "slug": "advanced-operations",
        "subtopics": [
          {
            "title": "Cherry Pick",
            "slug": "cherry-pick",
            "description": "Applies specific commit(s) from another branch to current branch without full merge. Perfect for hotfixes or backporting bug fixes across release branches. Creates new commit with same changes.",
            "example": "git cherry-pick → bugfix to main",
            "code": [
              "git cherry-pick abc1234",
              "git cherry-pick abc1234..def5678"
            ]
          },
          {
            "title": "Cherry Pick Range",
            "slug": "cherry-pick-range",
            "description": "Applies multiple sequential commits from one branch to current branch. Perfect for porting feature sets or bugfix clusters across branches.",
            "example": "git cherry-pick → multiple commits",
            "code": [
              "git cherry-pick commit1..commit5",
              "git cherry-pick --no-commit feature-branch"
            ]
          },
          {
            "title": "Bisect Start",
            "slug": "bisect-start",
            "description": "Binary search through commit history to find first bad commit causing regression. Git checks out midway commits automatically. Mark good/bad to narrow search exponentially.",
            "example": "git bisect → find breaking change",
            "code": [
              "git bisect start",
              "git bisect bad",
              "git bisect good v1.0.0"
            ]
          },
          {
            "title": "Bisect Auto",
            "slug": "bisect-auto",
            "description": "Automates bisect with test script. Git runs provided script on each checkout and marks pass/fail automatically. Perfect for regression testing without manual intervention.",
            "example": "git bisect → npm test automation",
            "code": [
              "git bisect start bad-commit good-commit",
              "git bisect run npm test"
            ]
          },
          {
            "title": "Bisect Reset",
            "slug": "bisect-reset",
            "description": "Ends bisect session returning to original branch position. Cleans up bisect references. Use after finding bad commit to resume normal development.",
            "example": "git bisect reset → back to main",
            "code": [
              "git bisect reset"
            ]
          },
          {
            "title": "Reflog Recovery",
            "slug": "reflog",
            "description": "Complete safety net showing all HEAD movements including checkouts, resets, rebases. Recover lost commits with git checkout or git reset. Entries expire after 90 days by default.",
            "example": "git reflog → recover lost branch",
            "code": [
              "git reflog",
              "git reflog --relative-date"
            ]
          },
          {
            "title": "Reflog Reset",
            "slug": "reflog-reset",
            "description": "Jumps back to previous HEAD position using reflog index. Perfect for undoing accidental resets, rebases, or checkouts. Safer than reset --hard for recent operations.",
            "example": "git reset → undo last reset",
            "code": [
              "git reset --hard HEAD@{2}",
              "git checkout HEAD@{3}"
            ]
          },
          {
            "title": "Submodule Add",
            "slug": "submodule-add",
            "description": "Adds external repository as submodule at specific path. Perfect for including libraries or shared components. Records exact commit hash for reproducibility.",
            "example": "git submodule → add UI library",
            "code": [
              "git submodule add https://github.com/lib/repo libs/ui",
              "git submodule update --init"
            ]
          },
          {
            "title": "Submodule Update",
            "slug": "submodule-update",
            "description": "Updates submodules to recorded commit hashes. Use --remote to update to latest commit on tracking branch. Essential after git pull on repos with submodules.",
            "example": "git submodule → sync dependencies",
            "code": [
              "git submodule update --init --recursive",
              "git submodule update --remote"
            ]
          }
        ]
      }
      ,
      {
        "name": "Configuration",
        "slug": "configuration",
        "subtopics": [
          {
            "title": "Set Username",
            "slug": "config-user",
            "description": "Sets global Git username appearing in all commits across all repositories. Use --local for repo-specific setting. Essential first-time Git setup step.",
            "example": "git config → set display name",
            "code": [
              "git config --global user.name \"John Doe\"",
              "git config user.name \"Team Lead\""
            ]
          },
          {
            "title": "Set Email",
            "slug": "config-email",
            "description": "Sets global Git email for commit authorship. Use email associated with GitHub account. --local overrides for specific repos. Verify with git log --format='%ae'.",
            "example": "git config → link to GitHub",
            "code": [
              "git config --global user.email \"john@example.com\"",
              "git config --local user.email \"work@company.com\""
            ]
          },
          {
            "title": "List Config",
            "slug": "config-list",
            "description": "Shows all Git configuration from system, global, and local levels. Use --show-origin to see config file locations. Essential for troubleshooting configuration issues.",
            "example": "git config → see all settings",
            "code": [
              "git config --list",
              "git config --list --show-origin"
            ]
          },
          {
            "title": "Set Editor",
            "slug": "config-editor",
            "description": "Configures default editor for commit messages, rebase -i, merge conflict resolution. VS Code, Vim, Nano, Emacs supported. Improves commit message quality.",
            "example": "git config → VS Code commits",
            "code": [
              "git config --global core.editor \"code --wait\"",
              "git config --global core.editor \"nano -w\""
            ]
          },
          {
            "title": "Aliases",
            "slug": "config-aliases",
            "description": "Creates custom Git command shortcuts. Saves typing for frequent workflows. Use double quotes for commands with flags. Essential productivity boost.",
            "example": "git st → git status",
            "code": [
              "git config --global alias.st status",
              "git config --global alias.co checkout"
            ]
          },
          {
            "title": "Default Branch",
            "slug": "init-default",
            "description": "Sets default branch name for new repositories (main vs master). Modern standard is main. Affects git init behavior.",
            "example": "git init → main branch",
            "code": [
              "git config --global init.defaultBranch main"
            ]
          },
          {
            "title": "Safe Directory",
            "slug": "safe-directory",
            "description": "Marks repository as trusted to bypass ownership checks. Essential when running Git in Docker, CI, or shared filesystems.",
            "example": "git safe → trust repo",
            "code": [
              "git config --global --add safe.directory /path/to/repo",
              "git config --global safe.directory '*'"
            ]
          },
          {
            "title": "Pull Strategy",
            "slug": "pull-rebase",
            "description": "Sets default pull behavior to rebase instead of merge for linear history. Eliminates unnecessary merge commits during regular syncs.",
            "example": "git pull → rebase workflow",
            "code": [
              "git config --global pull.rebase true",
              "git config pull.rebase false"
            ]
          }
        ]
      }
      ,
      {
        "name": "Ignoring Files",
        "slug": "gitignore",
        "subtopics": [
          {
            "title": "Add to Gitignore",
            "slug": "gitignore-add",
            "description": "Appends ignore pattern to .gitignore file. Use **/, !exceptions for complex patterns. Common entries: node_modules/, dist/, .env, *.log. Creates file if missing.",
            "example": "echo → ignore node_modules",
            "code": [
              "echo \"node_modules/\" >> .gitignore",
              "echo \".env\" >> .gitignore",
              "echo \"*.log\" >> .gitignore"
            ]
          },
          {
            "title": "Global Gitignore",
            "slug": "global-gitignore",
            "description": "Creates global ignore file for patterns across all repositories (node, IDE, OS files). Perfect for personal development environment cleanup.",
            "example": ".gitignore-global → all repos",
            "code": [
              "git config --global core.excludesfile ~/.gitignore-global",
              "echo \".DS_Store\" >> ~/.gitignore-global"
            ]
          },
          {
            "title": "Check Ignore",
            "slug": "check-ignore",
            "description": "Tests if file/directory matches any ignore pattern showing exact rule responsible. Perfect for debugging complex .gitignore patterns. Verbose output shows matching line.",
            "example": "git check-ignore → why ignored",
            "code": [
              "git check-ignore -v node_modules/",
              "git check-ignore .env"
            ]
          },
          {
            "title": "Untrack Folder",
            "slug": "untrack-folder",
            "description": "Removes files from Git index while keeping local copies. Essential after adding .gitignore for previously-tracked files. Files stay on disk but ignored going forward.",
            "example": "git rm → stop tracking node_modules",
            "code": [
              "git rm -r --cached node_modules/",
              "git rm --cached .env"
            ]
          },
          {
            "title": "Generate Gitignore",
            "slug": "gitignore-templates",
            "description": "Official curated .gitignore templates for 500+ frameworks/languages. Instantly get production-ready ignore patterns for React, Node, Python, etc.",
            "example": "curl → React template",
            "code": [
              "curl -o .gitignore https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore",
              "curl -o .gitignore https://raw.githubusercontent.com/github/gitignore/main/React.gitignore"
            ]
          },
          {
            "title": "Ignore Patterns",
            "slug": "ignore-syntax",
            "description": "Master .gitignore pattern syntax: /exact/file, *.ext, dir/, **/deep/, !exceptions. Use leading / for directory root, trailing / for directories.",
            "example": "patterns → ignore + exceptions",
            "code": [
              "node_modules/",
              "*.log",
              "!important.log",
              "**/dist/**",
              "!**/dist/README.md"
            ]
          }
        ]
      }
      ,
      {
        "name": "Fetch Operations",
        "slug": "fetch",
        "subtopics": [
          {
            "title": "Fetch All",
            "slug": "fetch-all",
            "description": "Downloads latest changes from all configured remotes without merging. Updates local tracking branches. Safe way to sync before pull or rebase. See what's available.",
            "example": "git fetch → sync all remotes",
            "code": [
              "git fetch --all",
              "git fetch --all --prune"
            ]
          },
          {
            "title": "Fetch Specific",
            "slug": "fetch-specific",
            "description": "Downloads changes from specific remote/branch combination. Use before merging specific feature branches or checking remote progress without affecting working directory.",
            "example": "git fetch origin → sync main team",
            "code": [
              "git fetch origin main",
              "git fetch origin feature/login"
            ]
          },
          {
            "title": "Fetch Tags",
            "slug": "fetch-tags",
            "description": "Downloads latest tags from remote repository. Essential after teammates create release tags. Use --tags for all tags or specific tag patterns.",
            "example": "git fetch → get v1.0.0 tag",
            "code": [
              "git fetch origin --tags",
              "git fetch origin tag v1.0.0"
            ]
          },
          {
            "title": "Prune Remotes",
            "slug": "fetch-prune",
            "description": "Removes references to deleted remote branches. Keeps local repository clean after teammates delete merged branches. Use with --all for complete cleanup.",
            "example": "git fetch → cleanup deleted branches",
            "code": [
              "git fetch --prune",
              "git remote prune origin"
            ]
          },
          {
            "title": "Remote Ahead",
            "slug": "remote-ahead",
            "description": "Shows commits present on remote but missing locally. Perfect safety check before pull or merge. Combine with --oneline for clean output.",
            "example": "git log → see what you need",
            "code": [
              "git log HEAD..origin/main --oneline",
              "git log --oneline origin/main..HEAD"
            ]
          },
          {
            "title": "Remote Status",
            "slug": "remote-status",
            "description": "Shows ahead/behind status for all tracking branches. Perfect for daily sync status check before starting work.",
            "example": "git status → see sync status",
            "code": [
              "git status -sb",
              "git for-each-ref --format='%(push:track)' refs/heads"
            ]
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
            "code": [
              "name: CI",
              "on: [push, pull_request]",
              "jobs:",
              "  test:",
              "    runs-on: ubuntu-latest",
              "    steps:",
              "    - uses: actions/checkout@v4"
            ]
          },
          {
            "title": "Trigger events",
            "slug": "trigger-events",
            "description": "Workflows execute automatically based on git repository events like push to specific branches, pull_request opened/reviewed/merged, releases published, or scheduled cron jobs. Advanced triggers include path filters (only changed files), repository_dispatch (external API triggers), workflow_dispatch (manual GitHub UI button), and workflow_run (chain workflows). Combine multiple triggers with logical OR behavior.",
            "example": "on: push → on: pull_request → on: schedule cron",
            "code": [
              "on:",
              "  push:",
              "    branches: [main, develop]",
              "  pull_request:",
              "    branches: [main]",
              "  schedule:",
              "    - cron: '0 2 * * *'"
            ]
          },
          {
            "title": "Jobs & steps",
            "slug": "jobs-steps",
            "description": "Jobs represent independent virtual machines running in parallel across GitHub-hosted or self-hosted runners. Steps within each job execute sequentially using actions (uses:) for reusable components or run: for shell commands. Jobs can depend on each other (needs:), share artifacts between steps/jobs, and set outputs for conditional logic. Maximum 20 concurrent jobs on free plan.",
            "example": "jobs: build, test, deploy → steps: checkout, setup-node, npm test",
            "code": [
              "jobs:",
              "  test:",
              "    runs-on: ubuntu-latest",
              "    steps:",
              "    - uses: actions/checkout@v4",
              "    - uses: actions/setup-node@v4",
              "      with:",
              "        node-version: '20'",
              "    - run: npm ci",
              "    - run: npm test"
            ]
          },
          {
            "title": "Matrix builds",
            "slug": "matrix-builds",
            "description": "strategy.matrix automatically expands single job across multiple OS, language versions, architectures without code duplication. Include/exclude specific combinations. Fail-fast stops all matrix runs on first failure. Essential for comprehensive cross-platform testing coverage in single workflow definition.",
            "example": "Node 18/20 + Ubuntu/macOS/Windows",
            "code": [
              "strategy:",
              "  matrix:",
              "    os: [ubuntu-latest, windows-latest]",
              "    node: [18, 20]",
              "  fail-fast: false"
            ]
          },
          {
            "title": "Caching",
            "slug": "caching",
            "description": "actions/cache dramatically speeds builds by storing expensive dependencies (node_modules, ~/.cargo/registry, pip cache) between workflow runs. Keys based on file hashes (package-lock.json) ensure cache invalidation on dependency changes. Restore keys fallback chain maximizes hit rates. Saves 80-95% install time typically.",
            "example": "npm ci (2min) → cache hit (10s)",
            "code": [
              "- uses: actions/cache@v4",
              "  with:",
              "    path: ~/.npm",
              "    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}"
            ]
          },
          {
            "title": "Secrets Usage",
            "slug": "secrets",
            "description": "Securely access repository/organization secrets in workflows. Automatically masked in logs. Reference via ${{ secrets.NAME }} syntax.",
            "example": "NPM_TOKEN → ${{ secrets.NPM_TOKEN }}",
            "code": [
              "- run: npm publish",
              "  env:",
              "    NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}"
            ]
          },
          {
            "title": "Artifacts",
            "slug": "artifacts",
            "description": "Upload/download files between jobs or persist build outputs. Perfect for sharing test results, coverage reports, or build packages across workflow stages.",
            "example": "coverage report → download later",
            "code": [
              "- uses: actions/upload-artifact@v4",
              "  with:",
              "    name: coverage",
              "    path: coverage/"
            ]
          }
        ]
      }
      ,
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
              "runs-on: windows-2022",
              "runs-on: ubuntu-22.04"
            ]
          },
          {
            "title": "Self-hosted runners",
            "slug": "self-hosted-runners",
            "description": "Run workflows on your own infrastructure (EC2, on-prem servers, Kubernetes) for custom hardware (GPUs), licensed software, or compliance requirements. Download/register runner application via repo/org/enterprise settings. Full control over environment, costs, and scaling. Persistent between jobs.",
            "example": "EC2 GPU instance → install runner → register → GPU workflows",
            "code": [
              "./config.sh --url https://github.com/owner/repo --token TOKEN",
              "./run.sh",
              "./config.sh --unattended"
            ]
          },
          {
            "title": "Runner labels",
            "slug": "runner-labels",
            "description": "Self-hosted runners use labels (ubuntu-latest, gpu, windows) to match workflow jobs. Add custom labels during registration. Jobs only run on matching label runners.",
            "example": "runs-on: [self-hosted, gpu] → GPU workflows",
            "code": [
              "runs-on: [self-hosted, gpu]",
              "runs-on: self-hosted",
              "./config.sh --labels gpu,nvidia,ubuntu"
            ]
          },
          {
            "title": "Runner groups",
            "slug": "runner-groups",
            "description": "Organize self-hosted runners into named groups (gpu-team, windows-farm) accessible across multiple repositories. Organization-level visibility controls determine which repos can use specific groups. Central management for enterprise runner fleets.",
            "example": "Group: gpu-runners → Multiple repos use same GPUs",
            "code": [
              "runs-on: [group:gpu-team]",
              "runs-on: [group:windows-farm]"
            ]
          },
          {
            "title": "Scaling runners",
            "slug": "scaling-runners",
            "description": "Autoscaling solutions using cloud provider auto-scaling groups (AWS ASG), Kubernetes Horizontal Pod Autoscaler, or GitHub's runner scale sets. Provision runners dynamically based on workflow queue demand. Scale to zero during idle periods to minimize costs.",
            "example": "0→10 runners on workflow demand → scale to zero",
            "code": [
              "runs-on: [self-hosted,scale-set:gpu-farm]",
              "strategy:",
              "  max-parallel: 5"
            ]
          },
          {
            "title": "Runner status",
            "slug": "runner-status",
            "description": "Monitor runner health, queue status, and idle time. Remove offline runners. Essential for self-hosted runner fleet management.",
            "example": "Settings → Actions → Runners → status",
            "code": [
              "gh runner list",
              "gh runner status OWNER REPO 1"
            ]
          }
        ]
      }
      ,
      {
        "name": "Secrets",
        "slug": "secrets",
        "subtopics": [
          {
            "title": "Repository secrets",
            "slug": "repository-secrets",
            "description": "Store sensitive credentials (API keys, deploy tokens, npm auth, database passwords) encrypted at rest with per-repository access. Reference via ${{ secrets.MY_SECRET }} in workflows. Automatically masked in logs, never exposed in UI. Rotation via Settings → Secrets and variables → Actions.",
            "example": "Settings → Secrets → Actions → New → NPM_TOKEN",
            "code": [
              "env:",
              "  NPM_TOKEN: ${{ secrets.NPM_TOKEN }}",
              "- run: npm publish",
              "  env:",
              "    NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}"
            ]
          },
          {
            "title": "Environment secrets",
            "slug": "environment-secrets",
            "description": "Environment-specific secrets scoped to staging/production deployments with required reviewer approval workflows. Jobs specify environment: production triggering approval gates. Separate secrets per environment prevent prod credentials leaking to staging workflows.",
            "example": "Environments → staging → secrets → PROD_DB_URL",
            "code": [
              "environment: production",
              "env:",
              "  DB_URL: ${{ secrets.PROD_DB_URL }}"
            ]
          },
          {
            "title": "Organization secrets",
            "slug": "organization-secrets",
            "description": "Centralized secret management across all organization repositories with granular access policies (all repos, private repos, specific repos, or teams). Reduces duplication while maintaining security boundaries. Enterprise-wide credential rotation.",
            "example": "Organization settings → Secrets → All repos + selected",
            "code": [
              "env:",
              "  ORG_TOKEN: ${{ secrets.ORG_AWS_KEY }}"
            ]
          },
          {
            "title": "Secret scanning",
            "slug": "secret-scanning",
            "description": "Push protection blocks commits containing detected secrets before they reach repository. Background scanning analyzes existing code/history for leaked credentials with automatic alerts and rotation guidance. Supports 50+ secret types from AWS, GitHub, npm, Docker.",
            "example": "API key in commit → Block push → \"Remove before commit\"",
            "code": [
              "[push protection enabled]",
              "[secret scanning alerts]"
            ]
          },
          {
            "title": "CLI Secrets",
            "slug": "cli-secrets",
            "description": "Manage secrets via GitHub CLI. Create, list, delete from terminal. Perfect for automation and CI/CD pipelines.",
            "example": "gh secret → manage secrets",
            "code": [
              "gh secret set NPM_TOKEN",
              "gh secret list",
              "gh secret delete AWS_KEY"
            ]
          }
        ]
      }
      ,
      {
        "name": "Marketplace",
        "slug": "marketplace",
        "subtopics": [
          {
            "title": "Finding actions",
            "slug": "finding-actions",
            "description": "GitHub Marketplace hosts 20,000+ reusable actions searchable by language, purpose, popularity. Filter by verified creators (GitHub staff/companies), stars, downloads, last updated. Community actions available but prioritize verified for production reliability.",
            "example": "actions/setup-node → 10M downloads → verified creator",
            "code": [
              "uses: actions/checkout@v4",
              "uses: actions/setup-node@v4",
              "uses: actions/cache@v4"
            ]
          },
          {
            "title": "Using actions",
            "slug": "using-actions",
            "description": "Reference actions using owner/repo@version syntax (prefer @v4 semantic tags over @main). Pass configuration via with: inputs block. Capture outputs with ::set-output for conditional workflow logic. Pin versions prevent breaking changes.",
            "example": "uses: actions/checkout@v4 → uses: dorny/paths-filter@v3",
            "code": [
              "- uses: actions/checkout@v4",
              "  with:",
              "    fetch-depth: 2",
              "- uses: dorny/paths-filter@v3",
              "  id: filter",
              "  with:",
              "    filters: changed-files-only"
            ]
          },
          {
            "title": "Custom actions",
            "slug": "custom-actions",
            "description": "Build reusable actions using Docker containers (complete environment control), JavaScript/TypeScript (node actions), or composite (multiple steps). Publish to Marketplace with action.yml metadata. Version with semantic tags for consumers. Local testing with act CLI.",
            "example": "action.yml → docker/Dockerfile → .github/action.yml",
            "code": [
              "name: 'My Custom Action'",
              "inputs:",
              "  message:",
              "    description: 'Message to display'",
              "    required: true",
              "runs:",
              "  using: 'composite'",
              "  steps:",
              "  - run: echo ${{ inputs.message }}",
              "    shell: bash"
            ]
          },
          {
            "title": "Action badges",
            "slug": "action-badges",
            "description": "Display dynamic badges in README showing action version, downloads, stars, verified status, last updated. Increases discoverability and shows maintenance status. Generated by shields.io integration.",
            "example": "![setup-node](https://img.shields.io/badge/setup--node-v4-green)",
            "code": [
              "![Checkout](https://github.com/actions/checkout/workflows/Release/badge.svg)",
              "![Node](https://img.shields.io/badge/setup--node-v4-blue)",
              "[action.yml](https://github.com/user/action/blob/v1/action.yml)"
            ]
          },
          {
            "title": "Popular actions",
            "slug": "popular-actions",
            "description": "Most used GitHub Actions for common workflows. Always pin to specific versions for reliability.",
            "example": "Essential actions for every repo",
            "code": [
              "actions/checkout@v4",
              "actions/setup-node@v4",
              "actions/cache@v4",
              "actions/upload-artifact@v4",
              "tj-actions/changed-files@v41"
            ]
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
              "winget install GitHub.cli",
              "sudo apt install gh"
            ]
          },
          {
            "title": "Authentication",
            "slug": "authentication",
            "description": "Secure browser-based OAuth login stores credentials in system keychain. Supports PAT tokens and SSH keys. gh auth status shows current authentication, refresh, or logout. Non-interactive login available for CI/CD automation.",
            "example": "gh auth login → GitHub.com → Browser → gh auth status",
            "code": [
              "gh auth login",
              "gh auth login --with-token < token.txt",
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
              "gh repo fork owner/repo",
              "gh repo view",
              "gh repo list"
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
              "gh issue list --label bug",
              "gh issue view 123",
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
              "gh pr create --draft",
              "gh pr list",
              "gh pr checkout 123",
              "gh pr merge --squash",
              "gh pr merge --delete-branch"
            ]
          },
          {
            "title": "Release commands",
            "slug": "release-commands",
            "description": "Create, view, edit releases from CLI. Generate notes automatically from commits/PRs. Upload assets and create GitHub Release pages instantly.",
            "example": "gh release create → publish v1.0.0",
            "code": [
              "gh release create v1.0.0",
              "gh release create v1.0.0 ./dist/app.zip",
              "gh release view"
            ]
          }
        ]
      }
      ,
      {
        "name": "Pages",
        "slug": "pages",
        "subtopics": [
          {
            "title": "About GitHub Pages",
            "slug": "about-github-pages",
            "description": "Free static website hosting directly from GitHub repository at username.github.io/repo or custom domains. Automatic HTTPS, continuous deployment from any branch or /docs folder. Native Jekyll static site generator support. Unlimited sites, 1GB storage.",
            "example": "username.github.io → username.github.io/my-site",
            "code": [
              "Settings → Pages → Source: Deploy from branch → main → Save",
              "https://username.github.io/repo-name"
            ]
          },
          {
            "title": "Creating site",
            "slug": "creating-site",
            "description": "Deploy static sites instantly via Settings → Pages selecting source branch (main/gh-pages) or /docs folder. Live in under 2 minutes with automatic HTTPS certificate. Custom 404 pages, Jekyll themes, visitor analytics.",
            "example": "Settings → Pages → Source: main:/docs → 2min → live site",
            "code": [
              "runs-on: ubuntu-latest",
              "steps:",
              "  - uses: actions/checkout@v4",
              "  - name: Deploy to Pages",
              "    uses: peaceiris/actions-gh-pages@v4"
            ]
          },
          {
            "title": "Custom domains",
            "slug": "custom-domains",
            "description": "Connect apex domains (mysite.com) and subdomains (www.mysite.com) using DNS A/CNAME records. GitHub automatically provisions/manages HTTPS certificates with Let's Encrypt. DNS verification, enforcement settings, wildcard support.",
            "example": "www.mysite.com → Settings → Pages → Custom domain → Verify",
            "code": [
              "A @ 185.199.108.153",
              "A @ 185.199.109.153",
              "A @ 185.199.110.153",
              "A @ 185.199.111.153",
              "CNAME www username.github.io"
            ]
          },
          {
            "title": "Jekyll support",
            "slug": "jekyll-support",
            "description": "Native Jekyll static site generator with theme support, plugins, collections, data files, pagination. GitHub builds automatically on push. Custom plugins via _plugins folder. Liquid templating, Markdown to HTML conversion.",
            "example": "_config.yml → _posts/ → automatic build/deploy",
            "code": [
              "_config.yml:\n",
              "theme: minima\n",
              "title: My Site\n",
              "baseurl: /repo-name"
            ]
          },
          {
            "title": "Actions deployment",
            "slug": "actions-deployment",
            "description": "Deploy any static site generator (Next.js, Gatsby, Hugo, VitePress) using GitHub Actions workflows. Build locally, upload artifacts to Pages via GitHub token. Full control over build process and preview deployments.",
            "example": "next build → npx @netlify/actions/cli@latest pages:deploy",
            "code": [
              "- name: Build",
              "  run: npm run build",
              "- name: Deploy",
              "  uses: peaceiris/actions-gh-pages@v4",
              "  with:",
              "    github_token: ${{ secrets.GITHUB_TOKEN }}",
              "    publish_dir: ./dist"
            ]
          }
        ]
      }
      ,
      {
        "name": "Packages",
        "slug": "packages",
        "subtopics": [
          {
            "title": "Publishing packages",
            "slug": "publishing-packages",
            "description": "Host npm, Docker, Maven, NuGet, RubyGems, Composer packages tied to GitHub repository with public/private access control matching repo visibility. Unlimited storage/pulls for public repos. Integrated billing and vulnerability scanning.",
            "example": "npm publish → Packages tab → your/package@1.0.0",
            "code": [
              "// .npmrc",
              "@owner:registry=https://npm.pkg.github.com",
              "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}"
            ]
          },
          {
            "title": "NPM packages",
            "slug": "npm-packages",
            "description": "Publish scoped npm packages (@owner/package-name) to GitHub Packages registry using GITHUB_TOKEN authentication. Consume in package.json like any npm registry. Automatic vulnerability alerts and dependency graph.",
            "example": "npm publish → npm install @owner/package",
            "code": [
              "npm login --registry=https://npm.pkg.github.com",
              "npm publish",
              "npm install @owner/package-name"
            ]
          },
          {
            "title": "Docker containers",
            "slug": "docker-containers",
            "description": "GitHub Container Registry (ghcr.io) hosts Docker OCI images with automatic multi-arch support, vulnerability scanning, and GitHub Actions integration. Images inherit repo permissions. Pull via Docker CLI, Docker Compose, Kubernetes.",
            "example": "ghcr.io/owner/repo/image:tag → docker pull",
            "code": [
              "docker login ghcr.io -u USERNAME",
              "docker tag myimage ghcr.io/owner/repo/image:latest",
              "docker push ghcr.io/owner/repo/image:latest"
            ]
          },
          {
            "title": "Package permissions",
            "slug": "package-permissions",
            "description": "Granular read/write/delete permissions for packages scoped to repositories, organizations, or teams. Fine-grained Personal Access Tokens (PATs) with package-specific scopes. Separate from repository permissions.",
            "example": "Settings → Packages → Package permissions",
            "code": [
              "// Generate PAT with packages:read/write",
              "GITHUB_TOKEN: github_pat_abc123",
              "permissions:",
              "  contents: read",
              "  packages: write"
            ]
          },
          {
            "title": "Actions publishing",
            "slug": "actions-publish",
            "description": "Automated package publishing via GitHub Actions using GITHUB_TOKEN. Trigger on tag push, release creation, or main branch. Perfect for semantic versioning automation.",
            "example": "git tag v1.0.0 → npm publish auto",
            "code": [
              "on:",
              "  push:",
              "    tags: ['v*']",
              "- run: npm publish",
              "  env:",
              "    NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}"
            ]
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
          },
          {
            "title": "Pagination",
            "slug": "pagination",
            "description": "API responses contain Link headers with first, prev, next, last page URLs. Use per_page parameter (1-100). Handle large lists with cursors or page iteration.",
            "example": "Link: <https://api.github.com/user/repos?page=2>; rel=\"next\"",
            "code": [
              "curl https://api.github.com/user/repos?per_page=50",
              "# Follow Link: rel=\"next\" header"
            ]
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
            "code": [
              "# Visit https://developer.github.com/graphql/explorer",
              "query { viewer { login repositories(last: 10) { nodes { name } } } }"
            ]
          },
          {
            "title": "Schema",
            "slug": "schema",
            "description": "Strongly typed GraphQL schema prevents over-fetching - request only needed fields via single endpoint. Schema introspection enables client code generation. More efficient than REST for complex nested data queries.",
            "example": "query { repository(owner:\"octocat\", name:\"Hello-World\") { name } }",
            "code": [
              "query { ",
              "  repository(owner:\"octocat\", name:\"Hello-World\") { ",
              "    name ",
              "    stargazerCount ",
              "    languages(first: 5) { edges { node { name } } } ",
              "  } ",
              "}"
            ]
          },
          {
            "title": "Mutations",
            "slug": "mutations",
            "description": "GraphQL mutations handle create/update/delete operations with input objects and clientMutationId for idempotency tracking. Return updated objects immediately. Consistent with query syntax patterns.",
            "example": "addStar(input:{starrableId:\"MDEwOlJlcG9zaXRvcnkyNTUwMDY3ODc=\"})",
            "code": [
              "mutation { ",
              "  addStar(input: {starrableId: \"MDEwOlJlcG9zaXRvcnkyNTUwMDY3ODc=\"}) { ",
              "    starrable { viewerHasStarred } ",
              "  } ",
              "}"
            ]
          },
          {
            "title": "Authentication",
            "slug": "graphql-auth",
            "description": "Same authentication as REST API (PAT tokens, GitHub Apps, OAuth). Single endpoint https://api.github.com/graphql. Rate limit 5000 points/hour (queries ~1 point, mutations ~10-50 points).",
            "example": "Authorization: Bearer ghp_abc123 → POST /graphql",
            "code": [
              "curl -X POST -H \"Authorization: bearer ghp_abc123\" ",
              "-H \"Content-Type: application/json\" ",
              "-d '{\"query\":\"query { viewer { login } }\"}' ",
              "https://api.github.com/graphql"
            ]
          },
          {
            "title": "Introspection",
            "slug": "introspection",
            "description": "Query __schema to discover available types, fields, arguments, and generate client code. Essential for GraphQL tooling and documentation generation.",
            "example": "__schema { types { name fields { name type { name } } } }",
            "code": [
              "query IntrospectionQuery { ",
              "  __schema { ",
              "    queryType { name } ",
              "    mutationType { name } ",
              "    types { ...FullType } ",
              "  } ",
              "}",
              "fragment FullType on __Type { ",
              "  kind name description fields { name } ",
              "}"
            ]
          }
        ]
      }
      ,
      {
        "name": "Apps",
        "slug": "apps",
        "subtopics": [
          {
            "title": "GitHub Apps",
            "slug": "github-apps",
            "description": "Installable applications with granular repository/organization permissions, JWT authentication, webhooks, and short-lived installation tokens. Preferred for integrations/bots over OAuth. Automatic permission requests during installation.",
            "example": "Developer settings → GitHub Apps → New → Permissions → Install",
            "code": [
              "// Generate JWT from App ID + Private Key",
              "POST https://api.github.com/app/installations/{installation_id}/access_tokens",
              "// Returns short-lived installation token"
            ]
          },
          {
            "title": "OAuth Apps",
            "slug": "oauth-apps",
            "description": "Traditional OAuth 2.0 applications for user context authentication with predefined scopes (repo, user, gist). Simpler setup than GitHub Apps for web applications needing temporary user access tokens.",
            "example": "Settings → Developer settings → OAuth Apps → Register new app",
            "code": [
              "// Authorization URL",
              "https://github.com/login/oauth/authorize?client_id=abc123&scope=repo",
              "// Exchange code for token",
              "POST https://github.com/login/oauth/access_token"
            ]
          },
          {
            "title": "Installing apps",
            "slug": "installing-apps",
            "description": "Install apps to specific repositories, all organization repositories, or user account. Manage installation permissions, webhook endpoints, subscribed events during installation flow. Users grant explicit permissions.",
            "example": "Repo → Settings → Integrations → Search app → Configure → Install",
            "code": [
              "POST https://api.github.com/user/installations/{installation_id}/repositories/{repository_id}",
              "GET https://api.github.com/orgs/{org}/installations"
            ]
          },
          {
            "title": "Webhooks",
            "slug": "webhooks",
            "description": "Event-driven HTTP callbacks delivering JSON payloads for repository/organization events (push, PR, issues, releases). HMAC signature verification ensures authenticity. Retry delivery on failures with exponential backoff.",
            "example": "Settings → Webhooks → Add webhook → Payload URL → Content type",
            "code": [
              "// Verify HMAC signature",
              "X-Hub-Signature-256=sha256=abc123...",
              "// Common events",
              "push, pull_request, issues, release"
            ]
          },
          {
            "title": "App permissions",
            "slug": "app-permissions",
            "description": "Granular permissions: contents(read/write), issues(read/write), metadata(read), pull_requests(read/write), repository_projects(read/write). Repository or organization scope.",
            "example": "Permissions → Repository contents: Read & Write",
            "code": [
              "permissions:",
              "  contents: write",
              "  metadata: read",
              "  pull_requests: write"
            ]
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
            "code": [
              "Organization → New → my-team → Team plan → Add payment",
              "Settings → SAML → IP allow list → Security policies"
            ]
          },
          {
            "title": "Members & teams",
            "slug": "members-teams",
            "description": "Invite unlimited members as employees/collaborators with role-based permissions (Owner, Member, Outside Collaborator). Create nested teams (Engineering → Frontend, Backend) with repository access (Admin/Write/Read). 2FA enforcement, session timeouts, require approval for new members.",
            "example": "People → Invite → Teams → Add repositories → Permissions",
            "code": [
              "People → New member → username@gmail.com → Member role",
              "Teams → New team → Frontend → Add repos → Write access"
            ]
          },
          {
            "title": "Billing",
            "slug": "billing",
            "description": "Centralized billing dashboard manages all organization subscriptions, seat usage, private minutes, storage, GitHub Packages, Codespaces usage. Upgrade/downgrade plans, add payment methods, view invoices, set spending limits. Consolidated billing across all repositories.",
            "example": "Organization → Settings → Billing → Usage → Invoices",
            "code": [
              "Settings → Billing → Upgrade Team → 10 seats → $4/user",
              "Settings → Billing → Spending limits → Actions: 1000min"
            ]
          },
          {
            "title": "SAML SSO",
            "slug": "saml-sso",
            "description": "Enterprise Single Sign-On integration with Okta, Azure AD, Auth0, OneLogin. Just-in-time user provisioning creates GitHub accounts automatically from identity provider. Enforce organization-wide SSO policy - no GitHub password access without SSO. SCIM user/group sync.",
            "example": "Settings → Security → SAML SSO → Identity provider → Configure",
            "code": [
              "Settings → Security → SAML → Enable SSO",
              "Settings → Security → SCIM → Okta → Generate token"
            ]
          }
        ]
      }
      ,
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