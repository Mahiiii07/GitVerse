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
        "code": "git status",
        "description": "Shows working directory status, staged/unstaged changes.",
        "slug": "status"
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
        "code": "git commit -m \"Add responsive navbar\"",
        "description": "Commits staged changes with message.",
        "slug": "commit"
      }
    ]
  },
  {
    "title": "Branching",
    "slug": "branching",
    "commands": [
      {
        "code": "git branch",
        "description": "Lists all local branches.",
        "slug": "branch"
      },
      {
        "code": "git checkout -b feature/login",
        "description": "Creates and switches to new branch.",
        "slug": "checkout-new"
      },
      {
        "code": "git checkout main",
        "description": "Switches to existing branch.",
        "slug": "checkout"
      },
      {
        "code": "git branch -d feature/login",
        "description": "Deletes merged local branch.",
        "slug": "branch-delete"
      }
    ]
  },
  
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
        "code": "git merge --abort",
        "description": "Cancels conflicted merge.",
        "slug": "merge-abort"
      },
      {
        "code": "git status; git diff",
        "description": "Identifies conflicted files.",
        "slug": "diff-conflict"
      },
      {
        "code": "git add .; git commit -m \"Resolve merge conflicts\"",
        "description": "Stages resolved files and completes merge.",
        "slug": "add-after-merge"
      }
    ]
  },
  
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
        "code": "git revert abc1234",
        "description": "Creates commit undoing specific commit.",
        "slug": "revert"
      },
      {
        "code": "git reset --soft HEAD~1",
        "description": "Removes last commit, keeps changes staged.",
        "slug": "reset-soft"
      },
      {
        "code": "git checkout -- .",
        "description": "Discards all uncommitted changes.",
        "slug": "checkout-discard"
      }
    ]
  },
  {
    "title": "Remote Workflow",
    "slug": "remote-workflow",
    "commands": [
      {
        "code": "git remote add origin https://github.com/username/repo.git",
        "description": "Adds remote repository origin.",
        "slug": "remote-add"
      },
      {
        "code": "git remote remove origin",
        "description": "Removes remote repository origin",
        "slug": "remote-remove"
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
        "code": "git pull origin main",
        "description": "Fetches and merges remote changes.",
        "slug": "pull"
      },
      {
        "code": "git clone https://github.com/username/repo.git",
        "description": "Clones repository with full history.",
        "slug": "clone"
      }
    ]
  },
  
  
  {
    "title": "Git Workflow",
    "slug": "git-workflow",
    "commands": [
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
        "code": "git rebase main",
        "description": "Rebases current branch onto main.",
        "slug": "rebasing-vs-merging"
      },
      {
        "code": "git rebase -i HEAD~5",
        "description": "Interactively squash/reorder commits.",
        "slug": "squash-commits"
      }
    ]
  },
  {
    "title": "GH CLI Repo",
    "slug": "repository-commands",
    "commands": [
      {
        "code": "gh repo create my-repo --public",
        "description": "Creates new repository.",
        "slug": "repo-create"
      },
      {
        "code": "gh repo clone owner/repo",
        "description": "Clones repository with PR branches.",
        "slug": "repo-clone"
      },
      {
        "code": "gh repo fork owner/repo",
        "description": "Forks repository.",
        "slug": "repo-fork"
      }
    ]
  },
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
        "code": "git stash list",
        "description": "Lists all stashes.",
        "slug": "stash-list"
      },
      {
        "code": "git stash apply",
        "description": "Restores stash without deleting it.",
        "slug": "stash-apply"
      },
      {
        "code": "git stash drop",
        "description": "Deletes specific stash.",
        "slug": "stash-drop"
      }
    ]
  },




  {
    "title": "GH CLI Issues",
    "slug": "issue-commands",
    "commands": [
      {
        "code": "gh issue create --title \"Fix login\" --label bug",
        "description": "Creates new issue with labels.",
        "slug": "issue-create"
      },
      {
        "code": "gh issue list --assignee @me",
        "description": "Lists assigned issues.",
        "slug": "issue-list"
      },
      {
        "code": "gh issue close 123",
        "description": "Closes specific issue.",
        "slug": "issue-close"
      }
    ]
  },
  {
    "title": "GH CLI PRs",
    "slug": "pr-commands",
    "commands": [
      {
        "code": "gh pr create --title \"Add login\" --body \"...\"",
        "description": "Creates pull request.",
        "slug": "pr-create"
      },
      {
        "code": "gh pr checkout 123",
        "description": "Checks out PR branch locally.",
        "slug": "pr-checkout"
      },
      {
        "code": "gh pr merge",
        "description": "Merges current PR.",
        "slug": "pr-merge"
      }
    ]
  },
  {
      "title": "Codespaces",
      "slug": "codespaces",
      "commands": [
        {
          "code": "gh codespace create -r owner/repo -b main",
          "description": "Creates new codespace.",
          "slug": "creating-codespace"
        }
      ]
    },
]
