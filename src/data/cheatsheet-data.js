export const data = [
  {
    "title": "Basic Commands",
    "slug": "basic-commands",
    "commands": [
      {
        "code": "git init",
        "description": "Creates new Git repository in current directory.",
        "slug": "init"
      },
      {
        "code": "git init -b main",
        "description": "Creates new repository with main as default branch.",
        "slug": "init-main"
      },
      {
        "code": "git status",
        "description": "Shows working directory status, staged/unstaged changes.",
        "slug": "status"
      },
      {
        "code": "git status -s",
        "description": "Shows status in short one-line format.",
        "slug": "status-short"
      },
      {
        "code": "git add src/App.js",
        "description": "Stages specific files for commit.",
        "slug": "add"
      },
      {
        "code": "git add .",
        "description": "Stages all changes.",
        "slug": "add-all"
      },
      {
        "code": "git add -A",
        "description": "Stages all changes including deletions across entire repo.",
        "slug": "add-all-deletes"
      },
      {
        "code": "git add -p",
        "description": "Interactive staging - patch mode for hunks.",
        "slug": "add-patch"
      },
      {
        "code": "git commit -m \"Add responsive navbar\"",
        "description": "Commits staged changes with message.",
        "slug": "commit"
      },
      {
        "code": "git commit -m \"feat: add login page\" -m \"Closes #123\"",
        "description": "Commit with conventional title + body.",
        "slug": "commit-body"
      },
      {
        "code": "git log --oneline",
        "description": "Shows compact commit history.",
        "slug": "log-oneline"
      },
      {
        "code": "git log --oneline -5",
        "description": "Shows last 5 commits.",
        "slug": "log-limit"
      },
      {
        "code": "git diff",
        "description": "Shows unstaged changes vs last commit.",
        "slug": "diff"
      },
      {
        "code": "git diff --staged",
        "description": "Shows staged changes vs last commit.",
        "slug": "diff-staged"
      },
      {
        "code": "git diff HEAD~1",
        "description": "Shows changes in last commit.",
        "slug": "diff-commit"
      }
    ]
  }
  , {
    "title": "Branching",
    "slug": "branching",
    "commands": [
      {
        "code": "git branch",
        "description": "Lists all local branches with * marking current.",
        "slug": "branch"
      },
      {
        "code": "git branch -v",
        "description": "Verbose listing with commit hashes and messages.",
        "slug": "branch-verbose"
      },
      {
        "code": "git branch --show-current",
        "description": "Shows only current branch name.",
        "slug": "current-branch"
      },
      {
        "code": "git checkout -b feature/login",
        "description": "Creates and switches to new branch.",
        "slug": "checkout-new"
      },
      {
        "code": "git switch -c feature/login",
        "description": "Modern create+switch (Git 2.23+).",
        "slug": "switch-new"
      },
      {
        "code": "git checkout main",
        "description": "Switches to existing branch.",
        "slug": "checkout"
      },
      {
        "code": "git switch main",
        "description": "Modern switch command (Git 2.23+).",
        "slug": "switch"
      },
      {
        "code": "git branch -d feature/login",
        "description": "Safely deletes merged local branch.",
        "slug": "branch-delete"
      },
      {
        "code": "git branch -D feature/login",
        "description": "Force deletes unmerged branch.",
        "slug": "branch-force-delete"
      },
      {
        "code": "git branch -m fix-typo fix-navbar",
        "description": "Renames current branch.",
        "slug": "branch-rename"
      }
    ]
  }
  ,
  {
    "title": "Merging Conflicts",
    "slug": "merging",
    "commands": [
      {
        "code": "git checkout main; git merge feature/login",
        "description": "Merges branch into current branch.",
        "slug": "merge"
      },
      {
        "code": "git merge --no-ff feature/login",
        "description": "Always creates merge commit (no fast-forward).",
        "slug": "merge-no-ff"
      },
      {
        "code": "git merge --ff-only feature/login",
        "description": "Fast-forward only, fails if merge commit needed.",
        "slug": "merge-ff-only"
      },
      {
        "code": "git merge --abort",
        "description": "Cancels conflicted merge.",
        "slug": "merge-abort"
      },
      {
        "code": "git status",
        "description": "Identifies conflicted files (both modified).",
        "slug": "status-conflict"
      },
      {
        "code": "git diff --name-only --diff-filter=U",
        "description": "Lists only conflicted files.",
        "slug": "diff-conflict-files"
      },
      {
        "code": "git mergetool",
        "description": "Launches visual merge tool (VS Code, vimdiff).",
        "slug": "mergetool"
      },
      {
        "code": "git checkout --ours src/App.js",
        "description": "Accepts current branch version.",
        "slug": "checkout-ours"
      },
      {
        "code": "git checkout --theirs src/App.js",
        "description": "Accepts incoming branch version.",
        "slug": "checkout-theirs"
      },
      {
        "code": "git add src/App.js",
        "description": "Stages resolved file.",
        "slug": "add-resolved"
      },
      {
        "code": "git add .; git commit",
        "description": "Stages all resolved files, auto-commits merge.",
        "slug": "add-after-merge"
      },
      {
        "code": "git commit -m \"Merge branch feature/login\"",
        "description": "Manual merge commit message.",
        "slug": "commit-merge"
      }
    ]
  }
  ,
  {
    "title": "Undo Reset",
    "slug": "undo-commands",
    "commands": [
      {
        "code": "git commit --amend -m \"Better message\"",
        "description": "Modifies last commit message/files.",
        "slug": "commit-amend"
      },
      {
        "code": "git commit --amend --no-edit",
        "description": "Adds staged changes to last commit (no message edit).",
        "slug": "commit-amend-no-edit"
      },
      {
        "code": "git revert abc1234",
        "description": "Creates commit undoing specific commit.",
        "slug": "revert"
      },
      {
        "code": "git revert HEAD~1",
        "description": "Reverts most recent commit.",
        "slug": "revert-head"
      },
      {
        "code": "git reset --soft HEAD~1",
        "description": "Removes last commit, keeps changes staged.",
        "slug": "reset-soft"
      },
      {
        "code": "git reset --soft HEAD~2",
        "description": "Combines last 2 commits (changes staged).",
        "slug": "reset-soft-multi"
      },
      {
        "code": "git reset HEAD~1",
        "description": "Unstages last commit, keeps changes in working dir.",
        "slug": "reset-mixed"
      },
      {
        "code": "git reset --hard HEAD~1",
        "description": "DANGEROUS: Completely removes last commit + changes.",
        "slug": "reset-hard"
      },
      {
        "code": "git reset --hard origin/main",
        "description": "Resets to match remote main branch.",
        "slug": "reset-remote"
      },
      {
        "code": "git checkout -- .",
        "description": "Discards all uncommitted changes.",
        "slug": "checkout-discard"
      },
      {
        "code": "git restore .",
        "description": "Modern discard uncommitted changes (Git 2.23+).",
        "slug": "restore-discard"
      },
      {
        "code": "git restore --staged src/App.js",
        "description": "Unstages specific file, keeps working changes.",
        "slug": "restore-staged"
      },
      {
        "code": "git reflog",
        "description": "Shows all HEAD movements for recovery.",
        "slug": "reflog"
      },
      {
        "code": "git reset --hard HEAD@{2}",
        "description": "Recovers from reflog position 2 steps ago.",
        "slug": "reflog-recover"
      }
    ]
  }
  ,
  {
    "title": "Remote Workflow",
    "slug": "remote-workflow",
    "commands": [
      {
        "code": "git remote -v",
        "description": "Lists all remotes with URLs.",
        "slug": "list-remotes"
      },
      {
        "code": "git remote add origin https://github.com/username/repo.git",
        "description": "Adds remote repository origin.",
        "slug": "remote-add"
      },
      {
        "code": "git remote set-url origin git@github.com:username/repo.git",
        "description": "Changes remote URL (HTTPS → SSH).",
        "slug": "remote-url"
      },
      {
        "code": "git remote remove origin",
        "description": "Removes remote repository origin.",
        "slug": "remote-remove"
      },
      {
        "code": "git fetch origin",
        "description": "Downloads remote changes without merging.",
        "slug": "fetch"
      },
      {
        "code": "git fetch --all --prune",
        "description": "Fetches all remotes, removes deleted branches.",
        "slug": "fetch-all-prune"
      },
      {
        "code": "git push -u origin feature/login",
        "description": "Pushes branch and sets upstream.",
        "slug": "push"
      },
      {
        "code": "git push",
        "description": "Pushes to upstream branch.",
        "slug": "push-upstream"
      },
      {
        "code": "git push --force-with-lease",
        "description": "Safe force push after rebase.",
        "slug": "push-force-lease"
      },
      {
        "code": "git pull origin main",
        "description": "Fetches and merges remote changes.",
        "slug": "pull"
      },
      {
        "code": "git pull --rebase origin main",
        "description": "Fetches and rebases for linear history.",
        "slug": "pull-rebase"
      },
      {
        "code": "git push origin --delete feature/login",
        "description": "Deletes remote branch after merge.",
        "slug": "delete-remote"
      },
      {
        "code": "git clone https://github.com/username/repo.git",
        "description": "Clones repository with full history.",
        "slug": "clone"
      },
      {
        "code": "git clone --depth 1 https://github.com/username/repo.git",
        "description": "Shallow clone (latest commit only).",
        "slug": "clone-shallow"
      }
    ]
  }
  ,
  {
    "title": "Git Workflow",
    "slug": "git-workflow",
    "commands": [
      {
        "code": "git checkout main; git pull",
        "description": "Start from latest main - ALWAYS.",
        "slug": "start-main"
      },
      {
        "code": "git checkout -b feature/login",
        "description": "Creates feature branch from main.",
        "slug": "git-branching"
      },
      {
        "code": "git checkout -b feature/user-auth",
        "description": "Standard feature branch workflow.",
        "slug": "feature-branches"
      },
      {
        "code": "git checkout -b bugfix/navbar-crash",
        "description": "Bugfix branch naming convention.",
        "slug": "bugfix-branches"
      },
      {
        "code": "git checkout -b hotfix/prod-issue",
        "description": "Urgent production fixes.",
        "slug": "hotfix-branches"
      },
      {
        "code": "git rebase main",
        "description": "Rebases current branch onto main.",
        "slug": "rebasing-vs-merging"
      },
      {
        "code": "git rebase -i HEAD~5",
        "description": "Interactively squash/reorder commits.",
        "slug": "squash-commits"
      },
      {
        "code": "git rebase -i main",
        "description": "Interactive rebase from main branch.",
        "slug": "rebase-interactive-main"
      },
      {
        "code": "git push -u origin feature/login",
        "description": "Push feature branch for PR.",
        "slug": "push-feature"
      },
      {
        "code": "git push --force-with-lease",
        "description": "Safe force push after rebase.",
        "slug": "force-push"
      },
      {
        "code": "git checkout main; git pull; git merge --no-ff feature/login",
        "description": "Merge feature into main with merge commit.",
        "slug": "merge-feature"
      },
      {
        "code": "git branch -d feature/login",
        "description": "Delete local feature branch after merge.",
        "slug": "delete-feature"
      },
      {
        "code": "git push origin --delete feature/login",
        "description": "Delete remote feature branch.",
        "slug": "delete-remote-feature"
      }
    ]
  }
  ,
  {
    "title": "Repositories",
    "slug": "repositories",
    "commands": [
      {
        "code": "gh repo create my-repo --public",
        "description": "Creates new repository.",
        "slug": "create-first-repo"
      },
      {
        "code": "gh repo create my-repo --private --source=. --remote=origin",
        "description": "Creates repo from existing local project.",
        "slug": "create-from-local"
      },
      {
        "code": "gh repo clone owner/repo",
        "description": "Clones repository with PR branches.",
        "slug": "repo-clone"
      },
      {
        "code": "gh repo clone owner/repo -- -b feature-branch",
        "description": "Clones specific branch.",
        "slug": "clone-branch"
      },
      {
        "code": "gh repo fork owner/repo",
        "description": "Forks repository.",
        "slug": "repo-fork"
      },
      {
        "code": "gh repo fork owner/repo --remote",
        "description": "Forks and adds remote automatically.",
        "slug": "fork-remote"
      },
      {
        "code": "gh repo view",
        "description": "Shows current repository details.",
        "slug": "repo-view"
      },
      {
        "code": "gh repo list",
        "description": "Lists all repositories for authenticated user.",
        "slug": "repo-list"
      },
      {
        "code": "gh repo list --limit 20 --json name,updatedAt",
        "description": "Lists repos with JSON output.",
        "slug": "repo-list-json"
      },
      {
        "code": "gh repo delete",
        "description": "Deletes current repository (interactive confirmation).",
        "slug": "repo-delete"
      },
      {
        "code": "gh repo rename new-name",
        "description": "Renames current repository.",
        "slug": "repo-rename"
      },
      {
        "code": "gh repo set-default",
        "description": "Sets current repo as default for gh commands.",
        "slug": "repo-default"
      }
    ]
  }
  ,
  {
    "title": "Stashing",
    "slug": "stashing",
    "commands": [
      {
        "code": "git stash",
        "description": "Saves uncommitted changes temporarily.",
        "slug": "stash"
      },
      {
        "code": "git stash -u",
        "description": "Stashes untracked files too.",
        "slug": "stash-untracked"
      },
      {
        "code": "git stash push -m \"WIP: login page\"",
        "description": "Stash with custom descriptive message.",
        "slug": "stash-message"
      },
      {
        "code": "git stash list",
        "description": "Lists all stashes.",
        "slug": "stash-list"
      },
      {
        "code": "git stash list --stat",
        "description": "Lists stashes with change stats.",
        "slug": "stash-list-stat"
      },
      {
        "code": "git stash apply",
        "description": "Restores stash without deleting it.",
        "slug": "stash-apply"
      },
      {
        "code": "git stash apply stash@{1}",
        "description": "Applies specific stash (not newest).",
        "slug": "stash-apply-specific"
      },
      {
        "code": "git stash pop",
        "description": "Applies and deletes most recent stash.",
        "slug": "stash-pop"
      },
      {
        "code": "git stash show",
        "description": "Shows changes in most recent stash.",
        "slug": "stash-show"
      },
      {
        "code": "git stash show -p stash@{1}",
        "description": "Shows full diff of specific stash.",
        "slug": "stash-show-patch"
      },
      {
        "code": "git stash drop",
        "description": "Deletes most recent stash.",
        "slug": "stash-drop"
      },
      {
        "code": "git stash drop stash@{2}",
        "description": "Deletes specific stash.",
        "slug": "stash-drop-specific"
      },
      {
        "code": "git stash clear",
        "description": "Deletes ALL stashes.",
        "slug": "stash-clear"
      },
      {
        "code": "git stash branch feature/recover-login stash@{0}",
        "description": "Creates new branch from stash + applies it.",
        "slug": "stash-branch"
      }
    ]
  }
  ,
  {
    "title": "PRs",
    "slug": "pull-requests",
    "commands": [
      {
        "code": "gh pr create --title \"Add login\" --body \"...\"",
        "description": "Creates pull request.",
        "slug": "pr-create"
      },
      {
        "code": "gh pr create",
        "description": "Interactive PR creation (auto-detects branch).",
        "slug": "pr-create-interactive"
      },
      {
        "code": "gh pr create --draft",
        "description": "Creates draft PR for work-in-progress.",
        "slug": "pr-create-draft"
      },
      {
        "code": "gh pr checkout 123",
        "description": "Checks out PR branch locally.",
        "slug": "pr-checkout"
      },
      {
        "code": "gh pr checkout main",
        "description": "Checks out PR targeting main branch.",
        "slug": "pr-checkout-base"
      },
      {
        "code": "gh pr list",
        "description": "Lists all pull requests.",
        "slug": "pr-list"
      },
      {
        "code": "gh pr list --state open --label ready",
        "description": "Filters PRs by state and labels.",
        "slug": "pr-list-filter"
      },
      {
        "code": "gh pr view 123",
        "description": "Shows detailed PR information.",
        "slug": "pr-view"
      },
      {
        "code": "gh pr view 123 --comments",
        "description": "Shows PR with review comments.",
        "slug": "pr-view-comments"
      },
      {
        "code": "gh pr merge",
        "description": "Merges current PR (interactive).",
        "slug": "pr-merge"
      },
      {
        "code": "gh pr merge --merge --delete-branch",
        "description": "Merge commit + delete source branch.",
        "slug": "pr-merge-delete"
      },
      {
        "code": "gh pr merge --squash --delete-branch",
        "description": "Squash commits + delete source branch.",
        "slug": "pr-squash-merge"
      },
      {
        "code": "gh pr merge --rebase --delete-branch",
        "description": "Rebase + delete source branch.",
        "slug": "pr-rebase-merge"
      },
      {
        "code": "gh pr ready 123",
        "description": "Marks draft PR as ready for review.",
        "slug": "pr-ready"
      },
      {
        "code": "gh pr status",
        "description": "Shows current branch PR status.",
        "slug": "pr-status"
      }
    ]
  },
  {
    "title": "Issues",
    "slug": "issues",
    "commands": [
      {
        "code": "gh issue create --title \"Fix login\" --label bug",
        "description": "Creates new issue with labels.",
        "slug": "issue-create"
      },
      {
        "code": "gh issue create --title \"feat: add login\" --body \"- Add form\n- JWT auth\"",
        "description": "Creates issue with multi-line body.",
        "slug": "issue-create-body"
      },
      {
        "code": "gh issue list --assignee @me",
        "description": "Lists assigned issues.",
        "slug": "issue-list"
      },
      {
        "code": "gh issue list --label bug --state open",
        "description": "Lists open bugs only.",
        "slug": "issue-list-filter"
      },
      {
        "code": "gh issue list --limit 20 --json number,title,updatedAt",
        "description": "JSON output for scripting.",
        "slug": "issue-list-json"
      },
      {
        "code": "gh issue view 123",
        "description": "Shows detailed issue view.",
        "slug": "issue-view"
      },
      {
        "code": "gh issue view --comments 123",
        "description": "Shows issue with all comments.",
        "slug": "issue-view-comments"
      },
      {
        "code": "gh issue close 123",
        "description": "Closes specific issue.",
        "slug": "issue-close"
      },
      {
        "code": "gh issue reopen 123",
        "description": "Reopens closed issue.",
        "slug": "issue-reopen"
      },
      {
        "code": "gh issue edit 123 --add-label enhancement",
        "description": "Adds label to existing issue.",
        "slug": "issue-edit-label"
      },
      {
        "code": "gh issue comment 123 --body \"Fixed in PR #456\"",
        "description": "Adds comment to issue.",
        "slug": "issue-comment"
      },
      {
        "code": "gh issue develop 123",
        "description": "Creates feature branch from issue.",
        "slug": "issue-develop"
      },
      {
        "code": "gh issue status",
        "description": "Interactive issue board view.",
        "slug": "issue-status"
      }
    ]
  }
  ,
  {
    "title": "Ignoring Files",
    "slug": "gitignore",
    "commands": [
      {
        "code": "echo \"node_modules/\" >> .gitignore",
        "description": "Adds pattern to .gitignore file.",
        "slug": "gitignore-add"
      },
      {
        "code": "echo \".env\" >> .gitignore",
        "description": "Ignores environment files.",
        "slug": "gitignore-env"
      },
      {
        "code": "echo \"*.log\" >> .gitignore",
        "description": "Ignores all log files.",
        "slug": "gitignore-logs"
      },
      {
        "code": "git check-ignore -v node_modules/",
        "description": "Verifies if file is ignored and shows rule.",
        "slug": "check-ignore"
      },
      {
        "code": "git check-ignore .env",
        "description": "Tests specific file ignore status.",
        "slug": "check-ignore-file"
      },
      {
        "code": "git rm -r --cached node_modules/",
        "description": "Removes tracked files from Git but keeps locally.",
        "slug": "untrack-folder"
      },
      {
        "code": "git rm --cached .env",
        "description": "Untracks single sensitive file.",
        "slug": "untrack-file"
      },
      {
        "code": "git config --global core.excludesfile ~/.gitignore-global",
        "description": "Sets global ignore file for all repos.",
        "slug": "global-gitignore"
      },
      {
        "code": "curl -o .gitignore https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore",
        "description": "Downloads official Node.js gitignore template.",
        "slug": "gitignore-template"
      }
    ]
  }
  ,
  {
    "title": "Tags & Releases",
    "slug": "tags-releases",
    "commands": [
      {
        "code": "git tag v1.0.0",
        "description": "Creates lightweight tag at current commit.",
        "slug": "tag-lightweight"
      },
      {
        "code": "git tag v1.0.0 abc1234",
        "description": "Tags specific commit hash.",
        "slug": "tag-commit"
      },
      {
        "code": "git tag -a v1.0.0 -m \"Release v1\"",
        "description": "Creates annotated tag with message.",
        "slug": "tag-annotated"
      },
      {
        "code": "git tag -s v1.0.0 -m \"Signed release\"",
        "description": "Creates GPG signed annotated tag.",
        "slug": "tag-signed"
      },
      {
        "code": "git tag",
        "description": "Lists all tags.",
        "slug": "tag-list"
      },
      {
        "code": "git tag -l v1.*",
        "description": "Lists tags matching pattern.",
        "slug": "tag-list-pattern"
      },
      {
        "code": "git show v1.0.0",
        "description": "Shows tag details and commit.",
        "slug": "tag-show"
      },
      {
        "code": "git checkout v1.0.0",
        "description": "Checks out specific tag (detached HEAD).",
        "slug": "checkout-tag"
      },
      {
        "code": "git checkout -b hotfix/v1.1 v1.0.0",
        "description": "Creates branch from tag for hotfix.",
        "slug": "branch-from-tag"
      },
      {
        "code": "git push origin --tags",
        "description": "Pushes all tags to remote.",
        "slug": "push-tags"
      },
      {
        "code": "git push origin v1.0.0",
        "description": "Pushes specific tag only.",
        "slug": "push-tag-specific"
      },
      {
        "code": "git tag -d v1.0.0",
        "description": "Deletes local tag.",
        "slug": "tag-delete"
      },
      {
        "code": "git push origin :refs/tags/v1.0.0",
        "description": "Deletes remote tag.",
        "slug": "delete-remote-tag"
      }
    ]
  }
  ,
  {
    "title": "History & Logs",
    "slug": "history-logs",
    "commands": [
      {
        "code": "git log",
        "description": "Shows commit history for current branch.",
        "slug": "log"
      },
      {
        "code": "git log --stat",
        "description": "Shows commit stats (files changed, insertions/deletions).",
        "slug": "log-stat"
      },
      {
        "code": "git log --oneline",
        "description": "Compact log with one line per commit.",
        "slug": "log-oneline"
      },
      {
        "code": "git log --oneline -10",
        "description": "Shows last 10 commits in compact format.",
        "slug": "log-limit"
      },
      {
        "code": "git log --oneline --graph",
        "description": "Visual branch graph with compact commits.",
        "slug": "log-graph"
      },
      {
        "code": "git log --oneline --graph --all",
        "description": "Shows graph for ALL branches.",
        "slug": "log-graph-all"
      },
      {
        "code": "git log --since=\"2026-01-01\"",
        "description": "Commits since specific date.",
        "slug": "log-since"
      },
      {
        "code": "git log --since=\"last week\"",
        "description": "Commits since last week (natural language).",
        "slug": "log-since-week"
      },
      {
        "code": "git log -p -2",
        "description": "Shows last 2 commits with full diffs.",
        "slug": "log-diff"
      },
      {
        "code": "git log -p -- src/App.js",
        "description": "Shows all changes to specific file.",
        "slug": "log-file"
      },
      {
        "code": "git log --author=\"John\"",
        "description": "Filter commits by author name.",
        "slug": "log-author"
      },
      {
        "code": "git log --grep=\"fix\"",
        "description": "Commits with 'fix' in commit message.",
        "slug": "log-grep"
      },
      {
        "code": "git shortlog -sn",
        "description": "Summary by author with commit counts.",
        "slug": "shortlog"
      },
      {
        "code": "git shortlog -sn -10",
        "description": "Top 10 authors by commit count.",
        "slug": "shortlog-top"
      }
    ]
  }
  ,
  {
    "title": "Advanced Operations",
    "slug": "advanced-operations",
    "commands": [
      {
        "code": "git cherry-pick abc1234",
        "description": "Applies specific commit to current branch.",
        "slug": "cherry-pick"
      },
      {
        "code": "git cherry-pick abc1234..def5678",
        "description": "Applies range of commits.",
        "slug": "cherry-pick-range"
      },
      {
        "code": "git bisect start",
        "description": "Starts interactive bisect session.",
        "slug": "bisect-start"
      },
      {
        "code": "git bisect start bad-commit good-commit",
        "description": "Starts bisect between two commits.",
        "slug": "bisect-range"
      },
      {
        "code": "git bisect good/bad",
        "description": "Marks current commit as good or bad.",
        "slug": "bisect-mark"
      },
      {
        "code": "git bisect run npm test",
        "description": "Automated bisect with test script.",
        "slug": "bisect-auto"
      },
      {
        "code": "git bisect reset",
        "description": "Ends bisect session and returns to original branch.",
        "slug": "bisect-reset"
      },
      {
        "code": "git reflog",
        "description": "Shows history of HEAD positions for recovery.",
        "slug": "reflog"
      },
      {
        "code": "git reflog --relative-date",
        "description": "Reflog with human-readable timestamps.",
        "slug": "reflog-date"
      },
      {
        "code": "git reset --hard HEAD@{2}",
        "description": "Resets to state 2 entries ago in reflog.",
        "slug": "reflog-reset"
      },
      {
        "code": "git checkout HEAD@{3}",
        "description": "Checkouts previous state from reflog.",
        "slug": "reflog-checkout"
      },
      {
        "code": "git submodule add https://github.com/lib/ui libs/ui",
        "description": "Adds Git submodule.",
        "slug": "submodule-add"
      },
      {
        "code": "git submodule update --init --recursive",
        "description": "Initializes and updates all submodules.",
        "slug": "submodule-update"
      }
    ]
  }
  ,
  {
    "title": "Fetch Operations",
    "slug": "fetch",
    "commands": [
      {
        "code": "git fetch --all",
        "description": "Fetches from all remotes without merging.",
        "slug": "fetch-all"
      },
      {
        "code": "git fetch --all --prune",
        "description": "Fetches all + removes deleted remote branches.",
        "slug": "fetch-all-prune"
      },
      {
        "code": "git fetch origin main",
        "description": "Fetches specific remote/branch.",
        "slug": "fetch-specific"
      },
      {
        "code": "git fetch origin feature/login",
        "description": "Fetches specific feature branch.",
        "slug": "fetch-feature"
      },
      {
        "code": "git fetch origin --tags",
        "description": "Fetches all remote tags.",
        "slug": "fetch-tags"
      },
      {
        "code": "git remote prune origin",
        "description": "Removes references to deleted remote branches.",
        "slug": "remote-prune"
      },
      {
        "code": "git log HEAD..origin/main --oneline",
        "description": "Shows commits remote has that you don't.",
        "slug": "remote-ahead"
      },
      {
        "code": "git log origin/main..HEAD --oneline",
        "description": "Shows commits you have that remote doesn't.",
        "slug": "local-ahead"
      },
      {
        "code": "git status -sb",
        "description": "Shows ahead/behind status for current branch.",
        "slug": "status-short"
      }
    ]
  }
  , {
    "title": "Configuration",
    "slug": "configuration",
    "commands": [
      {
        "code": "git config --global user.name \"John Doe\"",
        "description": "Sets global Git username.",
        "slug": "config-user"
      },
      {
        "code": "git config --local user.name \"Team Lead\"",
        "description": "Sets repo-specific username.",
        "slug": "config-user-local"
      },
      {
        "code": "git config --global user.email \"john@example.com\"",
        "description": "Sets global Git email.",
        "slug": "config-email"
      },
      {
        "code": "git config --global user.email \"work@company.com\"",
        "description": "Overrides for work repositories.",
        "slug": "config-email-work"
      },
      {
        "code": "git config --list",
        "description": "Lists all Git configuration.",
        "slug": "config-list"
      },
      {
        "code": "git config --list --show-origin",
        "description": "Shows config with file locations.",
        "slug": "config-list-origin"
      },
      {
        "code": "git config --global core.editor \"code --wait\"",
        "description": "Sets VS Code as Git editor.",
        "slug": "config-editor-vscode"
      },
      {
        "code": "git config --global core.editor \"nano -w\"",
        "description": "Sets nano as Git editor.",
        "slug": "config-editor-nano"
      },
      {
        "code": "git config --global alias.st status",
        "description": "Creates git st shortcut.",
        "slug": "config-alias"
      },
      {
        "code": "git config --global alias.co checkout",
        "description": "Creates git co shortcut.",
        "slug": "config-alias-co"
      },
      {
        "code": "git config --global init.defaultBranch main",
        "description": "Sets main as default branch name.",
        "slug": "config-default-branch"
      },
      {
        "code": "git config --global pull.rebase true",
        "description": "Default pull uses rebase (linear history).",
        "slug": "config-pull-rebase"
      },
      {
        "code": "git config --global core.excludesfile ~/.gitignore-global",
        "description": "Sets global gitignore file.",
        "slug": "config-global-gitignore"
      }
    ]
  }
  ,
  {
    "title": "Codespaces",
    "slug": "codespaces",
    "commands": [
      {
        "code": "gh codespace create -r owner/repo -b main",
        "description": "Creates new codespace from repository branch.",
        "slug": "creating-codespace"
      },
      {
        "code": "gh codespace create -r owner/repo -b main -m 4corestd4gb",
        "description": "Creates codespace with specific machine type.",
        "slug": "codespace-machine"
      },
      {
        "code": "gh codespace list",
        "description": "Lists all your codespaces.",
        "slug": "codespace-list"
      },
      {
        "code": "gh codespace ssh -c codespace-name",
        "description": "SSH into existing codespace.",
        "slug": "codespace-ssh"
      },
      {
        "code": "gh codespace code -c codespace-name",
        "description": "Opens codespace in VS Code desktop.",
        "slug": "codespace-vscode"
      },
      {
        "code": "gh codespace stop -c codespace-name",
        "description": "Stops running codespace (saves costs).",
        "slug": "codespace-stop"
      },
      {
        "code": "gh codespace delete -c codespace-name",
        "description": "Deletes codespace permanently.",
        "slug": "codespace-delete"
      },
      {
        "code": "gh codespace ports visibility 3000 -c codespace-name --public",
        "description": "Makes port 3000 publicly accessible.",
        "slug": "codespace-port-public"
      },
      {
        "code": "gh codespace edit -c codespace-name --idle-timeout 60m",
        "description": "Sets 60min idle timeout.",
        "slug": "codespace-timeout"
      },
      {
        "code": "gh codespace logs -c codespace-name",
        "description": "Shows codespace build logs.",
        "slug": "codespace-logs"
      }
    ]
  }
  ,
]
